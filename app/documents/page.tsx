import { certificates, financialRecords, letters } from '../lib/member-demo-data';

export default function DocumentsPage() {
  return (
    <>
      <section className="member-hero">
        <div className="member-hero-copy">
          <div className="member-eyebrow">Archive</div>
          <h1 className="member-display">Digital Vault</h1>
          <p className="member-lead">Your secure repository for official GIFF documentation, financial records, and verifiable certificates.</p>
        </div>
      </section>

      <section className="member-grid member-grid-documents">
        <div className="member-stack">
          <article className="member-surface">
            <div className="member-panel-heading">
              <div>
                <h2>Official Certificates</h2>
                <p>Institutionally issued credentials available for download and verification.</p>
              </div>
            </div>

            <div className="member-card-grid">
              {certificates.map((certificate) => (
                <div key={certificate.title} className="member-document-card">
                  <span className="member-inline-badge">{certificate.status}</span>
                  <strong>{certificate.title}</strong>
                  <p>Issued {certificate.issued} · Valid through {certificate.expires}</p>
                  <div className="member-document-actions">
                    <button type="button" className="member-action-button small">Download PDF</button>
                    <button type="button" className="member-icon-button subtle" aria-label={`Share ${certificate.title}`}>↗</button>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="member-surface">
            <div className="member-panel-heading">
              <div>
                <h2>Institutional Letters</h2>
                <p>Official templates and standing confirmations issued on request.</p>
              </div>
            </div>

            <div className="member-list">
              {letters.map((letter) => (
                <div key={letter.title} className="member-list-item">
                  <div>
                    <strong>{letter.title}</strong>
                    <p>{letter.description}</p>
                  </div>
                  <button type="button" className="member-icon-button subtle" aria-label={`Open ${letter.title}`}>→</button>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="member-stack">
          <article className="member-dark-panel">
            <div className="member-panel-heading compact dark">
              <div>
                <h2>Document Verification</h2>
                <p>Every GIFF-issued document includes a verifiable QR-linked credential trail.</p>
              </div>
            </div>
            <a href="/profile" className="member-tertiary-link light">Learn about our security standards</a>
          </article>

          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Financial Records</h2>
                <p>Previously issued receipts and archived payment references.</p>
              </div>
            </div>

            <div className="member-list">
              {financialRecords.map((record) => (
                <div key={record.reference} className="member-list-item">
                  <div>
                    <strong translate="no">{record.reference}</strong>
                    <p>{record.date} · {record.label}</p>
                  </div>
                  <button type="button" className="member-icon-button subtle" aria-label={`Download ${record.reference}`}>↓</button>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

