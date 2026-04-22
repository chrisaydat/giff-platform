'use client';

import Link from 'next/link';

const reconciliation = {
  transactionRef: 'INT-8829-GH',
  receiptNo: 'RCT-2023-8829',
  issued: 'October 24, 2023',
  receivedFrom: 'Apex Logistics & Trading Ltd.',
  memberId: 'GHA-4451-X',
  branch: 'Accra Branch',
  paymentModality: 'Corporate Bank Transfer',
  lineItems: [
    { desc: 'Annual Corporate Membership Dues', period: 'FY 2023', amount: '2,500.00' },
    { desc: 'Late Penalty Assessment', period: 'Q1-Q2', amount: '150.00' },
  ],
  subtotal: '2,650.00',
  processingFee: '0.00',
  total: 'GHS 2,650.00',
  ledger: {
    gateway: 'GTW-8829-44X-912',
    institution: 'Ecobank Ghana Plc',
    timestamp: '2023-10-24 14:32:05',
    reconciledBy: 'System Auto-Matcher',
  },
  stateChanges: [
    { event: 'Member Standing Updated', time: '14:32', desc: 'Status elevated from Arrears to Active.' },
    { event: 'Ledger Reconciled', time: '14:32', desc: 'Payment matched to outstanding invoice #INV-2023-88.' },
    { event: 'Funds Cleared', time: '10:15', desc: 'Bank transfer confirmed by receiving institution.' },
  ],
};

export default function ReconciliationPage() {
  return (
    <div>
      <div className="page-title-area">
        <Link href="/dues" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--on-surface-variant)', textDecoration: 'none', marginBottom: 10 }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Dues & Payments
        </Link>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <h1 className="serif" style={{ fontSize: 30, fontWeight: 700, color: 'var(--on-surface)', lineHeight: 1.1 }}>
              Payment Receipt
            </h1>
            <p style={{ fontSize: 13.5, color: 'var(--on-surface-variant)', marginTop: 4 }}>
              Receipt {reconciliation.receiptNo} · {reconciliation.issued}
            </p>
          </div>
          <span className="badge badge-success" style={{ fontSize: 12, padding: '5px 12px', marginTop: 6 }}>
            Archived Receipt
          </span>
        </div>
      </div>

      <div className="page-body">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>

          {/* Receipt document */}
          <div className="receipt">
            {/* Header */}
            <div className="receipt-header">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 10.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.6, marginBottom: 4 }}>Official Receipt</div>
                  <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>GIFF Portal</div>
                  <div style={{ fontSize: 11, opacity: 0.5, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ghana Institute of Freight Forwarders</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 4 }}>Receipt No.</div>
                  <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'monospace' }}>{reconciliation.receiptNo}</div>
                  <div style={{ fontSize: 11.5, opacity: 0.7, marginTop: 4 }}>{reconciliation.issued}</div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '20px 24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
                <div>
                  <div className="field-label">Received From</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--on-surface)', marginTop: 4 }}>{reconciliation.receivedFrom}</div>
                  <div style={{ fontSize: 12, color: 'var(--on-surface-variant)', marginTop: 2 }}>Member ID: {reconciliation.memberId}</div>
                  <div style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>{reconciliation.branch}</div>
                </div>
                <div>
                  <div className="field-label">Payment Method</div>
                  <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--on-surface)', marginTop: 4 }}>{reconciliation.paymentModality}</div>
                </div>
              </div>

              {/* Line items table */}
              <div style={{ border: '1px solid var(--outline-variant)', borderRadius: 4, overflow: 'hidden', marginBottom: 16 }}>
                <table style={{ margin: 0 }}>
                  <thead>
                    <tr style={{ background: 'var(--surface-low)' }}>
                      <th style={{ background: 'var(--surface-low)', fontSize: 10.5 }}>Description</th>
                      <th style={{ background: 'var(--surface-low)', fontSize: 10.5 }}>Period</th>
                      <th style={{ background: 'var(--surface-low)', fontSize: 10.5, textAlign: 'right' }}>Amount (GHS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reconciliation.lineItems.map((item, i) => (
                      <tr key={i}>
                        <td style={{ fontSize: 13 }}>{item.desc}</td>
                        <td style={{ fontSize: 13, color: 'var(--on-surface-variant)' }}>{item.period}</td>
                        <td style={{ fontSize: 13, textAlign: 'right', fontFamily: 'monospace' }}>{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                {[
                  ['Subtotal', `GHS ${reconciliation.subtotal}`],
                  ['Processing Fee', `GHS ${reconciliation.processingFee}`],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
                    <span style={{ fontSize: 12.5, color: 'var(--on-surface-variant)' }}>{k}</span>
                    <span style={{ fontSize: 12.5, fontFamily: 'monospace', minWidth: 100, textAlign: 'right' }}>{v}</span>
                  </div>
                ))}
                <div style={{
                  display: 'flex', gap: 40, alignItems: 'center',
                  borderTop: '2px solid var(--on-surface)', paddingTop: 8, marginTop: 4,
                }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--on-surface)' }}>Total</span>
                  <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'monospace', minWidth: 100, textAlign: 'right' }}>{reconciliation.total}</span>
                </div>
              </div>

              {/* Footer: placeholders */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--outline-variant)' }}>
                <div>
                  <div className="field-label" style={{ marginBottom: 8 }}>QR Verification</div>
                  <div style={{
                    width: 64, height: 64, background: 'var(--surface-low)',
                    borderRadius: 4, border: '1px solid var(--outline-variant)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: 10, color: 'var(--on-surface-variant)' }}>QR</span>
                  </div>
                </div>
                <div>
                  <div className="field-label" style={{ marginBottom: 8 }}>Authorised Signature</div>
                  <div style={{
                    height: 64, border: '1px dashed var(--outline-variant)',
                    borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontSize: 10, color: 'var(--on-surface-variant)' }}>Signature placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <button className="btn btn-dark" style={{ width: '100%', justifyContent: 'center', height: 38 }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 12h10M8 3v7M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Print Receipt
            </button>
            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', height: 38 }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 12h10M8 3v7M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download PDF
            </button>

            {/* Ledger Metadata */}
            <div className="card-surface" style={{ marginTop: 8 }}>
              <div style={{ padding: '14px 16px 10px' }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--on-surface)', marginBottom: 12 }}>Transaction Details</div>
                {[
                  ['Gateway Ref', reconciliation.ledger.gateway],
                  ['Institution', reconciliation.ledger.institution],
                  ['Timestamp', reconciliation.ledger.timestamp],
                  ['Reconciled By', reconciliation.ledger.reconciledBy],
                ].map(([k, v]) => (
                  <div key={k} style={{ marginBottom: 10 }}>
                    <div className="field-label">{k}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--on-surface)', fontFamily: k === 'Gateway Ref' || k === 'Timestamp' ? 'monospace' : 'inherit' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* State Changes */}
            <div className="card-surface">
              <div style={{ padding: '14px 16px 10px' }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--on-surface)', marginBottom: 12 }}>Processing Trail</div>
                {reconciliation.stateChanges.map((sc, i) => (
                  <div key={i} className="state-row">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                      <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--on-surface)' }}>{sc.event}</span>
                      <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--on-surface-variant)' }}>{sc.time}</span>
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--on-surface-variant)', lineHeight: 1.4 }}>{sc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
