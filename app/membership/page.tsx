import Link from 'next/link';
import { memberRecord, membershipChecklist } from '../lib/member-demo-data';

const steps = ['Information Review', 'Document Upload', 'Fee Payment', 'Final Submission'];

export default function MembershipPage() {
  return (
    <>
      <section className="member-hero">
        <div className="member-hero-copy">
          <div className="member-eyebrow">Membership Renewal 2026</div>
          <h1 className="member-display">Confirm Your Standing</h1>
          <p className="member-lead">Complete the required review steps to maintain uninterrupted access to the archive.</p>
        </div>
      </section>

      <section className="member-stack">
        <article className="member-surface member-renewal-banner">
          <div className="member-renewal-marker" aria-hidden="true">i</div>
          <div>
            <strong>Renewal Window Open</strong>
            <p>Your membership expires on {memberRecord.renewalDueDate}. Complete the steps below to remain in active standing.</p>
          </div>
        </article>

        <div className="member-stepper">
          {steps.map((step, index) => (
            <div key={step} className={`member-step${index === 0 ? ' active' : ''}`}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>

        <div className="member-grid member-grid-renewal">
          <div className="member-stack">
            <article className="member-surface">
              <div className="member-panel-heading compact">
                <div>
                  <h2>Personal Details</h2>
                  <p>Confirm your current member identity before submission.</p>
                </div>
              </div>

              <div className="member-info-grid">
                <div>
                  <div className="member-field-label">Full Legal Name</div>
                  <strong>{memberRecord.name}</strong>
                </div>
                <div>
                  <div className="member-field-label">Primary Email</div>
                  <strong>{memberRecord.email}</strong>
                </div>
                <div>
                  <div className="member-field-label">Contact Number</div>
                  <strong>{memberRecord.phone}</strong>
                </div>
              </div>
            </article>

            <article className="member-surface">
              <div className="member-panel-heading compact">
                <div>
                  <h2>Professional Affiliation</h2>
                  <p>Institutional information currently associated with your standing.</p>
                </div>
              </div>

              <div className="member-info-grid">
                <div>
                  <div className="member-field-label">Organisation / Firm</div>
                  <strong>{memberRecord.organization}</strong>
                </div>
                <div>
                  <div className="member-field-label">Role</div>
                  <strong>{memberRecord.role}</strong>
                </div>
                <div>
                  <div className="member-field-label">Operating Base</div>
                  <strong>{memberRecord.operatingBase}</strong>
                </div>
              </div>
            </article>

            <div className="member-footer-actions">
              <Link href="/dashboard" className="member-secondary-button">Save Draft & Exit</Link>
              <Link href="/documents" className="member-action-button muted">Continue to Documents</Link>
            </div>
          </div>

          <div className="member-stack">
            <article className="member-surface">
              <div className="member-field-label">Current Standing</div>
              <div className="member-profile-rank">{memberRecord.tier}</div>
              <p className="member-side-note">{memberRecord.standing} since {memberRecord.activeSince}.</p>
            </article>

            <article className="member-surface">
              <div className="member-panel-heading compact">
                <div>
                  <h2>Required for 2026</h2>
                  <p>Complete every item before final submission.</p>
                </div>
              </div>

              <div className="member-list">
                {membershipChecklist.map((item) => (
                  <div key={item.label} className={`member-list-item checklist ${item.state}`}>
                    <div className="member-check-dot" aria-hidden="true" />
                    <div>
                      <strong>{item.label}</strong>
                      {'note' in item ? <p>{item.note}</p> : null}
                    </div>
                    {item.label.includes('Tax Clearance') ? <Link href="/documents">Open</Link> : null}
                    {item.label.includes('Dues') ? <Link href="/dues">Open</Link> : null}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
