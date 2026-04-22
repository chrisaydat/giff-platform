import { billingCycleRows, collectionCampaigns, feeCatalogue } from '../../lib/executive-demo-data';

export default function ExecutiveFeesPage() {
  return (
    <>
      <div className="page-title-area">
        <div className="executive-eyebrow">Billing</div>
        <h1 className="executive-display executive-display-sm">Dues & Fees Administration</h1>
        <p className="executive-lead executive-lead-compact">
          Configure fees, control invoice rules, manage collections, and track receipt issuance across the institution.
        </p>
      </div>

      <div className="page-body">
        <div className="executive-grid executive-grid-4 executive-section">
          <article className="metric-card">
            <div className="metric-label">Open Invoices</div>
            <div className="metric-value">612</div>
            <div className="metric-delta">Current cycle invoices still awaiting payment.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Overdue Balance</div>
            <div className="metric-value">GHS 184k</div>
            <div className="metric-delta">Escalated collection value beyond grace period.</div>
          </article>
          <article className="metric-card">
            <div className="metric-label">Fee Rules</div>
            <div className="metric-value">7</div>
            <div className="metric-delta">Active charge definitions with issue logic.</div>
          </article>
          <article className="metric-card-dark">
            <div className="metric-label" style={{ color: 'rgba(255,255,255,0.45)' }}>Receipt Automation</div>
            <div className="metric-value" style={{ color: '#fff' }}>94%</div>
            <div className="metric-delta" style={{ color: 'rgba(255,255,255,0.65)' }}>Payment confirmations converted to archived receipts automatically.</div>
          </article>
        </div>

        <div className="executive-grid executive-grid-main-aside executive-section">
          <article className="card">
            <div className="card-header">
              <div>
                <div className="executive-panel-title">Fee Catalogue</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                  Central schedule for annual dues, applications, and event-based fees.
                </div>
              </div>
              <button type="button" className="btn btn-dark">Add Fee Rule</button>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 12 }}>
              {feeCatalogue.map((fee) => (
                <div key={fee.title} className="docket-card">
                  <div className="flex-between" style={{ gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                    <div className="strong">{fee.title}</div>
                    <span className="badge badge-blue">{fee.frequency}</span>
                  </div>
                  <p className="muted" style={{ fontSize: 13, marginBottom: 8 }}>{fee.audience}</p>
                  <div className="executive-value" style={{ fontSize: '1.4rem' }}>{fee.amount}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <div className="executive-panel-title">Collection Controls</div>
            </div>
            <div className="card-body" style={{ display: 'grid', gap: 14 }}>
              {collectionCampaigns.map((campaign) => (
                <div key={campaign.label} className="state-row">
                  <div className="field-label">{campaign.label}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.65 }}>{campaign.audience}</p>
                  <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>{campaign.outcome}</div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="card">
          <div className="card-header">
            <div>
              <div className="executive-panel-title">Current Billing Cycle</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                Issue rules, cohort coverage, and receipt behavior for each configured fee stream.
              </div>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Fee</th>
                  <th>Target Cohort</th>
                  <th>Issue Rule</th>
                  <th>Status</th>
                  <th>Receipt Mode</th>
                </tr>
              </thead>
              <tbody>
                {billingCycleRows.map((row) => (
                  <tr key={row.fee}>
                    <td className="strong">{row.fee}</td>
                    <td>{row.cohort}</td>
                    <td>{row.rule}</td>
                    <td><span className={`badge ${row.statusClass}`}>{row.status}</span></td>
                    <td>{row.receipts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </>
  );
}
