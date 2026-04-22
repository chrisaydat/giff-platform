import { complianceArchive, memberRecord } from '../lib/member-demo-data';

export default function ProfilePage() {
  return (
    <>
      <section className="member-hero">
        <div className="member-hero-copy">
          <div className="member-eyebrow">Identity</div>
          <h1 className="member-display">Member Profile</h1>
          <p className="member-lead">Your official credentials and compliance standing within the institutional archive.</p>
        </div>
      </section>

      <section className="member-grid member-grid-profile">
        <div className="member-stack">
          <article className="member-surface member-profile-card">
            <div className="member-profile-avatar" aria-hidden="true">{memberRecord.initials}</div>
            <div className="member-profile-main">
              <div className="member-profile-top">
                <div>
                  <h2>{memberRecord.name}</h2>
                  <p translate="no">Member ID: {memberRecord.memberId}</p>
                </div>
                <span className="member-prestige-badge">Verified</span>
              </div>

              <div className="member-info-grid profile">
                <div>
                  <div className="member-field-label">Role</div>
                  <strong>{memberRecord.role}</strong>
                </div>
                <div>
                  <div className="member-field-label">Organisation</div>
                  <strong>{memberRecord.organization}</strong>
                </div>
                <div>
                  <div className="member-field-label">Operating Base</div>
                  <strong>{memberRecord.operatingBase}</strong>
                </div>
              </div>
            </div>
          </article>

          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Compliance Archive</h2>
                <p>Required documentation associated with your standing.</p>
              </div>
              <a href="/documents" className="member-tertiary-link">View all records</a>
            </div>

            <div className="member-list">
              {complianceArchive.map((item) => (
                <div key={item.title} className={`member-list-item compliance${item.status === 'Action Required' ? ' alert' : ''}`}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.subtitle}</p>
                  </div>
                  {item.status === 'Verified' ? (
                    <span className="member-status-chip success">{item.status}</span>
                  ) : (
                    <button type="button" className="member-action-button small">Upload Document</button>
                  )}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="member-stack">
          <article className="member-dark-panel">
            <div className="member-panel-heading compact dark">
              <div>
                <h2>Standing</h2>
                <p>Institutional rank and current status.</p>
              </div>
            </div>

            <div className="member-standing-details">
              <div>
                <div className="member-field-label gold">Tier</div>
                <strong>{memberRecord.tier}</strong>
              </div>
              <div>
                <div className="member-field-label gold">Inducted</div>
                <strong>{memberRecord.activeSince}</strong>
              </div>
              <div>
                <div className="member-field-label gold">Current Status</div>
                <span className="member-status-chip dark">{memberRecord.status}</span>
              </div>
            </div>
          </article>

          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Digital Credential</h2>
                <p>Scan to verify institutional standing.</p>
              </div>
            </div>

            <div className="member-qr-card" aria-hidden="true">
              <div className="member-qr-pattern" />
            </div>
            <button type="button" className="member-tertiary-link button-reset">Download Virtual Card</button>
          </article>
        </div>
      </section>
    </>
  );
}

