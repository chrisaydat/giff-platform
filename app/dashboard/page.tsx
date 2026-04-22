import Link from 'next/link';
import { activityLog, announcements, memberRecord, quickActions } from '../lib/member-demo-data';

export default function DashboardPage() {
  return (
    <>
      <section className="member-hero">
        <div className="member-hero-copy">
          <div className="member-eyebrow">Member Dashboard</div>
          <h1 className="member-display">Welcome back, {memberRecord.name}</h1>
          <p className="member-lead">Your institutional standing, financial activity, and archive updates in one working surface.</p>
        </div>
        <div className="member-hero-meta">
          <span className="member-prestige-badge">{memberRecord.standing}</span>
          <span className="member-meta-label" translate="no">Member ID: {memberRecord.memberId}</span>
        </div>
      </section>

      <section className="member-grid member-grid-dashboard">
        <div className="member-stack">
          <article className="member-surface member-status-panel">
            <div className="member-panel-heading">
              <div>
                <h2>Membership Status</h2>
                <p>Overview of your current institutional standing.</p>
              </div>
              <span className="member-status-seal" aria-hidden="true">✦</span>
            </div>

            <div className="member-status-summary">
              <div>
                <div className="member-field-label">Current Status</div>
                <div className="member-big-value">{memberRecord.status}</div>
              </div>
              <div>
                <div className="member-field-label">Valid Until</div>
                <div className="member-big-value">{memberRecord.validUntil}</div>
              </div>
            </div>

            <div className="member-alert-card">
              <div>
                <strong>{memberRecord.renewalWindowText}</strong>
                <p>Please complete your renewal steps before {memberRecord.renewalDueDate}.</p>
              </div>
              <Link href="/membership">View Details</Link>
            </div>
          </article>

          <div className="member-grid member-grid-two">
            <article className="member-surface">
              <div className="member-panel-heading compact">
                <div>
                  <h2>Financial Summary</h2>
                  <p>{memberRecord.outstandingLabel}</p>
                </div>
              </div>
              <div className="member-kpi">{memberRecord.outstandingDues}</div>
              <Link href="/dues/pay" className="member-action-button">Pay Now</Link>
            </article>

            <article className="member-surface">
              <div className="member-panel-heading compact">
                <div>
                  <h2>Recent Payment</h2>
                  <p>Latest ledger-confirmed transaction.</p>
                </div>
              </div>
              <div className="member-payment-row">
                <div className="member-mini-icon" aria-hidden="true">▣</div>
                <div>
                  <strong>{memberRecord.recentPayment.title}</strong>
                  <div className="member-kpi-subtle">{memberRecord.recentPayment.amount}</div>
                </div>
              </div>
              <div className="member-inline-badge">Paid on {memberRecord.recentPayment.paidOn}</div>
              <Link href="/dues" className="member-tertiary-link">View all transactions</Link>
            </article>
          </div>
        </div>

        <div className="member-stack">
          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Quick Actions</h2>
                <p>Most-used member tasks.</p>
              </div>
            </div>

            <div className="member-quick-grid">
              {quickActions.map((action) => (
                <Link key={action.label} href={action.href} className="member-quick-card">
                  <span>{action.label}</span>
                </Link>
              ))}
            </div>
          </article>

          <article className="member-dark-panel">
            <div className="member-panel-heading compact dark">
              <div>
                <h2>Notice Board</h2>
                <p>Institutional announcements requiring attention.</p>
              </div>
            </div>
            <div className="member-dark-card">
              <div className="member-field-label gold">{announcements[0].tag}</div>
              <strong>{announcements[0].title}</strong>
              <p>{announcements[0].body}</p>
              <Link href="/notifications">Read full details</Link>
            </div>
          </article>

          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Activity Log</h2>
                <p>Recent member-side events.</p>
              </div>
            </div>

            <div className="member-list">
              {activityLog.map((entry) => (
                <div key={entry.title} className="member-list-item timeline">
                  <div className="member-timeline-dot" aria-hidden="true" />
                  <div>
                    <strong>{entry.title}</strong>
                    <p>{entry.detail}</p>
                    <span>{entry.when}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
