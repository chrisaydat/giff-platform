import { expect, test } from '@playwright/test';

const BASE_URL = 'http://127.0.0.1:3000';

function isIgnorableRequestFailure(url: string, errorText: string) {
  if (!errorText.includes('ERR_ABORTED')) {
    return false;
  }

  return url.includes('_rsc=') || url.includes('/_next/');
}

function collectPageIssues(page: import('@playwright/test').Page) {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  const requestFailures: string[] = [];

  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  page.on('requestfailed', (request) => {
    const errorText = request.failure()?.errorText ?? 'unknown';

    if (isIgnorableRequestFailure(request.url(), errorText)) {
      return;
    }

    requestFailures.push(`${request.method()} ${request.url()} :: ${errorText}`);
  });

  return { pageErrors, consoleErrors, requestFailures };
}

async function expectNoRuntimeIssues(issues: ReturnType<typeof collectPageIssues>) {
  expect(issues.pageErrors, `Uncaught page errors:\n${issues.pageErrors.join('\n')}`).toEqual([]);
  expect(issues.consoleErrors, `Browser console errors:\n${issues.consoleErrors.join('\n')}`).toEqual([]);
  expect(issues.requestFailures, `Failed network requests:\n${issues.requestFailures.join('\n')}`).toEqual([]);
}

test.describe('GIFF demo QA', () => {
  test('member desktop flow works end-to-end', async ({ page }) => {
    const issues = collectPageIssues(page);

    await page.goto(BASE_URL);
    await expect(page.getByRole('heading', { name: /Two portals\. One institutional story\./i })).toBeVisible();

    await page.locator('a.portal-choice-card.member').click();
    await expect(page).toHaveURL(`${BASE_URL}/dashboard`);
    await expect(page.getByRole('heading', { name: /Welcome back, Kofi Mensah/i })).toBeVisible();

    const memberChecks = [
      { label: 'Membership', heading: /Confirm Your Standing/i, url: '/membership' },
      { label: 'Dues', heading: /Dues & Payments/i, url: '/dues' },
      { label: 'Documents', heading: /Digital Vault/i, url: '/documents' },
      { label: 'Notifications', heading: /Notifications/i, url: '/notifications' },
      { label: 'Settings', heading: /Settings & Security/i, url: '/settings' },
      { label: 'Member Profile', heading: /Member Profile/i, url: '/profile' },
    ];

    for (const route of memberChecks) {
      await page.getByRole('link', { name: route.label }).first().click();
      await expect(page).toHaveURL(`${BASE_URL}${route.url}`);
      await expect(page.getByRole('heading', { name: route.heading })).toBeVisible();
    }

    await page.goto(`${BASE_URL}/membership`);
    await page.locator('.member-list-item', { hasText: 'Upload Latest Tax Clearance Certificate' }).getByRole('link', { name: 'Open' }).click();
    await expect(page).toHaveURL(`${BASE_URL}/documents`);

    await page.goto(`${BASE_URL}/dues`);
    await page.getByRole('link', { name: /Download Receipt/i }).first().click();
    await expect(page).toHaveURL(/\/dues\/RCT-2026-0412$/);
    await expect(page.getByRole('heading', { name: /Payment Receipt/i })).toBeVisible();

    await page.goto(`${BASE_URL}/membership/demo-member`);
    await expect(page).toHaveURL(`${BASE_URL}/profile`);
    await expect(page.getByRole('heading', { name: /Member Profile/i })).toBeVisible();

    await expectNoRuntimeIssues(issues);
  });

  test('mock mobile money dues flow completes and returns a receipt', async ({ page }) => {
    const issues = collectPageIssues(page);

    await page.goto(`${BASE_URL}/dashboard`);
    await page.getByRole('link', { name: /Pay Now/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/dues/pay`);
    await expect(page.getByRole('heading', { name: /Mobile Money Checkout/i })).toBeVisible();

    await page.getByRole('button', { name: /Request MoMo Prompt/i }).click();
    await expect(page.getByRole('heading', { name: /Authorize Prompt on Phone/i })).toBeVisible();

    await page.getByRole('button', { name: /I Have Approved the Prompt/i }).click();
    await expect(page.getByRole('heading', { name: /Payment Confirmed/i })).toBeVisible();

    await page.getByRole('link', { name: /View Receipt/i }).click();
    await expect(page).toHaveURL(/\/dues\/RCT-2026-0506$/);
    await expect(page.getByRole('heading', { name: /Payment Receipt/i })).toBeVisible();

    await page.goto(`${BASE_URL}/dues?payment=success`);
    await expect(page.getByText(/Mock mobile money payment confirmed/i)).toBeVisible();

    await expectNoRuntimeIssues(issues);
  });

  test('executive desktop flow uses separate routes and returns to member side', async ({ page }) => {
    const issues = collectPageIssues(page);

    await page.goto(BASE_URL);
    await page.locator('a.portal-choice-card.executive').click();
    await expect(page).toHaveURL(`${BASE_URL}/executive`);
    await expect(page.getByRole('heading', { name: /Executive Overview/i })).toBeVisible();

    const overviewColumns = await page.locator('.executive-grid.executive-grid-4').first().evaluate((element) => {
      const template = getComputedStyle(element).gridTemplateColumns;
      return template.split(' ').filter(Boolean).length;
    });
    expect(overviewColumns, 'Executive overview metrics should render in multiple columns on desktop').toBeGreaterThan(1);

    const executiveChecks = [
      { label: 'Assessment', heading: /Assessment & Analysis/i, url: '/executive/assessment' },
      { label: 'Membership', heading: /Membership Management/i, url: '/executive/members' },
      { label: 'Dues & Fees', heading: /Dues & Fees Administration/i, url: '/executive/fees' },
      { label: 'Accounts', heading: /Financial Overview/i, url: '/accounts' },
      { label: 'HR', heading: /Workforce Operations/i, url: '/hr' },
      { label: 'Audit', heading: /Traceability Console/i, url: '/audit' },
      { label: 'Migration', heading: /Migration & Legacy Records/i, url: '/executive/migration' },
      { label: 'Integrations', heading: /Integrations & Governance/i, url: '/executive/integrations' },
      { label: 'Training', heading: /Training & Support/i, url: '/executive/training' },
      { label: 'Settings', heading: /Executive Settings/i, url: '/executive/settings' },
    ];

    for (const route of executiveChecks) {
      await page.getByRole('link', { name: route.label }).first().click();
      await expect(page).toHaveURL(`${BASE_URL}${route.url}`);
      await expect(page.getByRole('heading', { name: route.heading })).toBeVisible();
    }

    await page.getByRole('link', { name: /View Member Side/i }).click();
    await expect(page).toHaveURL(`${BASE_URL}/dashboard`);
    await expect(page.getByRole('heading', { name: /Welcome back, Kofi Mensah/i })).toBeVisible();

    await expectNoRuntimeIssues(issues);
  });

  test('mobile rendering stays usable on key routes', async ({ page }) => {
    const issues = collectPageIssues(page);

    await page.setViewportSize({ width: 390, height: 844 });

    await page.goto(`${BASE_URL}/dashboard`);
    await expect(page.getByRole('button', { name: /Open member navigation/i })).toBeVisible();
    await page.getByRole('button', { name: /Open member navigation/i }).click();
    await expect(page.getByRole('button', { name: /Close member navigation/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Member Profile/i })).toBeVisible();
    await page.getByRole('button', { name: /Close member navigation/i }).click();

    await page.goto(`${BASE_URL}/executive`);
    await expect(page.getByRole('button', { name: /Open executive navigation/i })).toBeVisible();
    await page.getByRole('button', { name: /Open executive navigation/i }).click();
    await expect(page.getByRole('button', { name: /Close executive navigation/i })).toBeVisible();
    await expect(page.locator('.sidebar.mobile-drawer').getByRole('link', { name: /^Assessment$/ })).toBeVisible();
    await page.getByRole('button', { name: /Close executive navigation/i }).click();

    const mobileChecks = [
      { path: '/dashboard', heading: /Welcome back, Kofi Mensah/i },
      { path: '/profile', heading: /Member Profile/i },
      { path: '/dues/pay', heading: /Mobile Money Checkout/i },
      { path: '/executive', heading: /Executive Overview/i },
      { path: '/executive/fees', heading: /Dues & Fees Administration/i },
      { path: '/executive/training', heading: /Training & Support/i },
    ];

    for (const check of mobileChecks) {
      await page.goto(`${BASE_URL}${check.path}`);
      await expect(page.getByRole('heading', { name: check.heading })).toBeVisible();

      const overflow = await page.evaluate(() => ({
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        hasOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      }));

      expect(
        overflow.hasOverflow,
        `Horizontal overflow detected on ${check.path}: viewport ${overflow.innerWidth}, document ${overflow.scrollWidth}`,
      ).toBeFalsy();
    }

    await expectNoRuntimeIssues(issues);
  });
});
