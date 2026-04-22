export const executiveScopeModules = [
  {
    title: 'Assessment',
    href: '/executive/assessment',
    body: 'Map manual workflows, identify pain points, and agree a phased digitization plan before build-out.',
  },
  {
    title: 'Membership',
    href: '/executive/members',
    body: 'Manage applications, renewals, standing reviews, compliance checks, and member approvals.',
  },
  {
    title: 'Dues & Fees',
    href: '/executive/fees',
    body: 'Administer fee catalogues, invoice rules, collections, receipts, and billing controls.',
  },
  {
    title: 'Accounts',
    href: '/accounts',
    body: 'Review institutional balances, reconciliations, revenue performance, and ledger activity.',
  },
  {
    title: 'HR',
    href: '/hr',
    body: 'Track workforce readiness, staffing actions, payroll coordination, and team administration.',
  },
  {
    title: 'Migration',
    href: '/executive/migration',
    body: 'Inventory legacy records, validate imports, manage exceptions, and monitor cutover readiness.',
  },
  {
    title: 'Integrations',
    href: '/executive/integrations',
    body: 'Connect payments, notifications, verification, accounting exports, and governance controls.',
  },
  {
    title: 'Training',
    href: '/executive/training',
    body: 'Prepare GIFF staff with onboarding tracks, help resources, support workflows, and maintenance cover.',
  },
] as const;

export const implementationPhases = [
  {
    label: 'Assessment',
    owner: 'Programme Office',
    detail: 'Current-state review, interviews, workflow mapping, and pain-point register.',
  },
  {
    label: 'Build',
    owner: 'Product & Engineering',
    detail: 'Membership, billing, accounts, HR, and governance modules delivered in staged releases.',
  },
  {
    label: 'Migration',
    owner: 'Data Team',
    detail: 'Legacy records cleansed, validated, and imported with exception handling and audit trails.',
  },
  {
    label: 'Adoption',
    owner: 'Support & Training',
    detail: 'Staff training, hypercare support, and maintenance monitoring after go-live.',
  },
] as const;

export const assessmentStreams = [
  {
    area: 'Membership Management',
    currentState: 'Paper renewal packs and manual standing checks.',
    issueCount: '6 pain points',
    recommendation: 'Digitize renewal review, compliance tracking, and approval actions.',
    priority: 'High',
    priorityClass: 'badge-red',
  },
  {
    area: 'Dues & Fees Administration',
    currentState: 'Spreadsheet invoices, receipts, and ad-hoc follow-up.',
    issueCount: '5 pain points',
    recommendation: 'Centralize fee rules, invoice generation, and collections workflows.',
    priority: 'High',
    priorityClass: 'badge-red',
  },
  {
    area: 'Accounts',
    currentState: 'Periodic reconciliation and fragmented reporting exports.',
    issueCount: '4 pain points',
    recommendation: 'Introduce finance dashboards, reconciliations, and auditable transaction views.',
    priority: 'Medium',
    priorityClass: 'badge-yellow',
  },
  {
    area: 'Human Resources',
    currentState: 'Manual leave, payroll sign-off, and dispersed personnel files.',
    issueCount: '3 pain points',
    recommendation: 'Digitize staff workflows, approvals, and operational readiness tracking.',
    priority: 'Medium',
    priorityClass: 'badge-yellow',
  },
] as const;

export const painPointRegister = [
  {
    area: 'Renewals',
    problem: 'Supporting documents are reviewed by email and cannot be tracked centrally.',
    solution: 'Create renewal queues with member status, document checks, and approval history.',
    value: 'Shorter renewal cycle and better visibility.',
  },
  {
    area: 'Billing',
    problem: 'Annual dues and fees are issued manually with limited follow-up logic.',
    solution: 'Automate invoice schedules, reminder campaigns, and receipt issuance.',
    value: 'Faster collections and cleaner ledger data.',
  },
  {
    area: 'Legacy Records',
    problem: 'Historic member files and receipts exist in mixed paper and spreadsheet formats.',
    solution: 'Run staged migration with validation rules, audit trail, and exception queue.',
    value: 'Safer transition and usable digital archive.',
  },
  {
    area: 'Staff Enablement',
    problem: 'New processes depend on informal training and one-off support.',
    solution: 'Provide role-based training tracks, help resources, and support SLAs.',
    value: 'Higher adoption and lower operating risk.',
  },
] as const;

export const renewalQueue = [
  {
    member: 'Meridian Logistics & Freight Ltd.',
    reference: 'RNW-2026-014',
    standing: 'Pending Compliance',
    standingClass: 'badge-yellow',
    dueDate: '06 May 2026',
    blocker: 'Tax clearance upload pending',
  },
  {
    member: 'Blue Harbour Shipping Services',
    reference: 'RNW-2026-019',
    standing: 'Ready for Approval',
    standingClass: 'badge-green',
    dueDate: '09 May 2026',
    blocker: 'All checks complete',
  },
  {
    member: 'North Axis Freight Agency',
    reference: 'APP-2026-007',
    standing: 'New Application',
    standingClass: 'badge-blue',
    dueDate: '14 May 2026',
    blocker: 'Boarding review scheduled',
  },
] as const;

export const memberRegistry = [
  {
    member: 'Meridian Logistics & Freight Ltd.',
    tier: 'Class A Forwarder',
    standing: 'Active',
    standingClass: 'badge-green',
    dues: 'Awaiting Payment',
    duesClass: 'badge-yellow',
    compliance: '3/4 verified',
  },
  {
    member: 'Global Portline Ghana',
    tier: 'Fellow Member',
    standing: 'Renewal Review',
    standingClass: 'badge-yellow',
    dues: 'Paid',
    duesClass: 'badge-green',
    compliance: '4/4 verified',
  },
  {
    member: 'North Axis Freight Agency',
    tier: 'Applicant',
    standing: 'Pending Approval',
    standingClass: 'badge-blue',
    dues: 'Not Yet Issued',
    duesClass: 'badge-gray',
    compliance: '2/4 submitted',
  },
  {
    member: 'Harborline Transit Consult',
    tier: 'Class B Forwarder',
    standing: 'Suspended',
    standingClass: 'badge-red',
    dues: 'Overdue',
    duesClass: 'badge-red',
    compliance: 'Expired indemnity',
  },
] as const;

export const feeCatalogue = [
  {
    title: 'Annual Subscription Dues',
    audience: 'Active institutional members',
    amount: 'GHS 2,500.00',
    frequency: 'Annual',
  },
  {
    title: 'Training & CPD Fee',
    audience: 'Enrolled workshop participants',
    amount: 'GHS 450.00',
    frequency: 'Per event',
  },
  {
    title: 'Application Processing Fee',
    audience: 'New member applicants',
    amount: 'GHS 1,200.00',
    frequency: 'One-off',
  },
] as const;

export const billingCycleRows = [
  {
    fee: 'Annual Subscription Dues',
    cohort: '2,450 active members',
    rule: 'Issued 30 days before expiry',
    status: 'Live',
    statusClass: 'badge-green',
    receipts: 'Automated',
  },
  {
    fee: 'Training & CPD Fee',
    cohort: 'Event registrants',
    rule: 'Issued on registration',
    status: 'Live',
    statusClass: 'badge-green',
    receipts: 'Automated',
  },
  {
    fee: 'Application Processing Fee',
    cohort: 'New applicants',
    rule: 'Issued after initial screening',
    status: 'Review',
    statusClass: 'badge-yellow',
    receipts: 'Manual override',
  },
] as const;

export const collectionCampaigns = [
  {
    label: '30-day dues reminder',
    audience: 'Active members with unpaid annual dues',
    outcome: '612 messages scheduled via email and SMS',
  },
  {
    label: 'Overdue escalation',
    audience: 'Members beyond grace period',
    outcome: '74 accounts queued for secretariat follow-up',
  },
  {
    label: 'Receipt re-issue batch',
    audience: 'Historic receipts missing PDF archive',
    outcome: '126 receipts regenerated for migration pack',
  },
] as const;

export const migrationSources = [
  {
    source: 'Paper membership files',
    scope: 'Identity, standing, compliance documents',
    progress: '78%',
    statusClass: 'badge-blue',
    note: 'Indexing in progress at Tema archive room.',
  },
  {
    source: 'Dues ledgers and receipt books',
    scope: 'Invoices, receipts, fee schedules',
    progress: '64%',
    statusClass: 'badge-yellow',
    note: 'Outstanding validation on 2023 and 2024 receipt references.',
  },
  {
    source: 'Staff administration folders',
    scope: 'Personnel records, leave, payroll approvals',
    progress: '91%',
    statusClass: 'badge-green',
    note: 'Ready for final cutover review.',
  },
] as const;

export const migrationExceptions = [
  {
    domain: 'Membership',
    record: 'GF-2017-0118',
    issue: 'Duplicate member ID across legacy spreadsheet and paper form.',
    action: 'Resolve in exception queue before import.',
  },
  {
    domain: 'Finance',
    record: 'RCT-2024-1101',
    issue: 'Receipt exists without linked invoice reference.',
    action: 'Reconcile against legacy dues ledger.',
  },
  {
    domain: 'HR',
    record: 'STAFF-082',
    issue: 'Missing supervisor approval on archived leave request.',
    action: 'Route to HR verification workflow.',
  },
] as const;

export const cutoverChecklist = [
  { label: 'Member master data mapped', done: true },
  { label: 'Historic receipts validated', done: false },
  { label: 'HR records reconciled', done: true },
  { label: 'Final backup and rollback plan signed off', done: false },
] as const;

export const integrationConnectors = [
  {
    name: 'Payment gateway',
    purpose: 'Collect dues, fees, and receipt confirmations.',
    status: 'Connected',
    statusClass: 'badge-green',
  },
  {
    name: 'Email and SMS notifications',
    purpose: 'Send renewal reminders, billing notices, and announcements.',
    status: 'Configured',
    statusClass: 'badge-blue',
  },
  {
    name: 'Document verification service',
    purpose: 'Verify certificates and member standing via QR-linked records.',
    status: 'Live',
    statusClass: 'badge-green',
  },
  {
    name: 'Accounting export bridge',
    purpose: 'Sync finance summaries and reconciliation outputs.',
    status: 'Pilot',
    statusClass: 'badge-yellow',
  },
] as const;

export const interfaceContracts = [
  {
    integration: 'Payments',
    data: 'Invoices, payment status, receipt references',
    cadence: 'Real time',
    control: 'Tokenized credentials and audit logs',
  },
  {
    integration: 'Notifications',
    data: 'Renewal reminders, billing alerts, policy notices',
    cadence: 'Scheduled + event-driven',
    control: 'Role-based templates and delivery logs',
  },
  {
    integration: 'Verification',
    data: 'Document reference, standing status, validity dates',
    cadence: 'On request',
    control: 'Signed document references and traceability',
  },
  {
    integration: 'Accounting exports',
    data: 'Summaries, receipts, reconciliations',
    cadence: 'Daily batch',
    control: 'Approval gate before outbound sync',
  },
] as const;

export const governanceControls = [
  {
    title: 'Role-based access',
    note: 'Membership, finance, HR, and audit permissions are separated by function.',
  },
  {
    title: 'Audit retention',
    note: 'System events, approvals, and data changes are retained for institutional review.',
  },
  {
    title: 'Document security',
    note: 'Member documents and migrated records are stored with verification metadata.',
  },
] as const;

export const trainingTracks = [
  {
    audience: 'Secretariat & membership officers',
    module: 'Member onboarding, renewal review, standing updates',
    status: 'Session plan ready',
    statusClass: 'badge-green',
  },
  {
    audience: 'Finance & accounts team',
    module: 'Invoice controls, reconciliations, receipt administration',
    status: 'Pilot content in review',
    statusClass: 'badge-yellow',
  },
  {
    audience: 'HR & administrators',
    module: 'Staff workflows, approvals, reporting, permissions',
    status: 'Workshop scheduled',
    statusClass: 'badge-blue',
  },
] as const;

export const supportDeskRows = [
  {
    ticket: 'SUP-2041',
    owner: 'Secretariat',
    issue: 'Receipt archive lookup for 2024 renewal batch',
    sla: '4h response',
    status: 'Open',
    statusClass: 'badge-yellow',
  },
  {
    ticket: 'SUP-2037',
    owner: 'Accounts',
    issue: 'Fee schedule update before annual billing run',
    sla: 'Next business day',
    status: 'In Progress',
    statusClass: 'badge-blue',
  },
  {
    ticket: 'SUP-2028',
    owner: 'HR',
    issue: 'Leave workflow access correction',
    sla: '4h response',
    status: 'Resolved',
    statusClass: 'badge-green',
  },
] as const;

export const readinessRows = [
  {
    team: 'Secretariat',
    readiness: '92%',
    coverage: 'Renewals, announcements, support handling',
  },
  {
    team: 'Accounts',
    readiness: '84%',
    coverage: 'Billing, reconciliations, receipts',
  },
  {
    team: 'HR',
    readiness: '88%',
    coverage: 'Personnel actions, payroll approvals',
  },
  {
    team: 'Executive office',
    readiness: '79%',
    coverage: 'Oversight dashboards, governance review',
  },
] as const;

