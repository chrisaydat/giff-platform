import Link from 'next/link';
import { notFound } from 'next/navigation';
import { memberReceipts } from '../../lib/member-demo-data';

type ReceiptPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ReceiptPage({ params }: ReceiptPageProps) {
  const { id } = await params;
  const receipt = memberReceipts.find((entry) => entry.id === id);

  if (!receipt) {
    notFound();
  }

  return (
    <div>
      <div className="page-title-area">
        <Link
          href="/dues"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: 'var(--on-surface-variant)',
            textDecoration: 'none',
            marginBottom: 10,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Dues & Payments
        </Link>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <h1 className="serif" style={{ fontSize: 30, fontWeight: 700, color: 'var(--on-surface)', lineHeight: 1.1 }}>
              Payment Receipt
            </h1>
            <p style={{ fontSize: 13.5, color: 'var(--on-surface-variant)', marginTop: 4 }}>
              Receipt {receipt.id} · {receipt.issued}
            </p>
          </div>
          <span className="badge badge-green" style={{ fontSize: 12, padding: '5px 12px', marginTop: 6 }}>
            Archived Receipt
          </span>
        </div>
      </div>

      <div className="page-body">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: 24 }}>
          <div className="receipt">
            <div className="receipt-header">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, gap: 16 }}>
                <div>
                  <div
                    style={{
                      fontSize: 10.5,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      opacity: 0.6,
                      marginBottom: 4,
                    }}
                  >
                    Official Receipt
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>GIFF Portal</div>
                  <div style={{ fontSize: 11, opacity: 0.5, marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Ghana Institute of Freight Forwarders
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 4 }}>Receipt No.</div>
                  <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'monospace' }}>{receipt.id}</div>
                  <div style={{ fontSize: 11.5, opacity: 0.7, marginTop: 4 }}>{receipt.issued}</div>
                </div>
              </div>
            </div>

            <div style={{ padding: '20px 24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 20, marginBottom: 24 }}>
                <div>
                  <div className="field-label">Received From</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--on-surface)', marginTop: 4 }}>{receipt.receivedFrom}</div>
                  <div style={{ fontSize: 12, color: 'var(--on-surface-variant)', marginTop: 2 }}>Member ID: {receipt.memberId}</div>
                  <div style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>{receipt.branch}</div>
                </div>
                <div>
                  <div className="field-label">Payment Method</div>
                  <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--on-surface)', marginTop: 4 }}>
                    {receipt.paymentModality}
                  </div>
                </div>
              </div>

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
                    {receipt.lineItems.map((item) => (
                      <tr key={`${receipt.id}-${item.desc}`}>
                        <td style={{ fontSize: 13 }}>{item.desc}</td>
                        <td style={{ fontSize: 13, color: 'var(--on-surface-variant)' }}>{item.period}</td>
                        <td style={{ fontSize: 13, textAlign: 'right', fontFamily: 'monospace' }}>{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                {[
                  ['Subtotal', `GHS ${receipt.subtotal}`],
                  ['Processing Fee', `GHS ${receipt.processingFee}`],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
                    <span style={{ fontSize: 12.5, color: 'var(--on-surface-variant)' }}>{label}</span>
                    <span style={{ fontSize: 12.5, fontFamily: 'monospace', minWidth: 100, textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
                <div
                  style={{
                    display: 'flex',
                    gap: 40,
                    alignItems: 'center',
                    borderTop: '2px solid var(--on-surface)',
                    paddingTop: 8,
                    marginTop: 4,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--on-surface)' }}>Total</span>
                  <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'monospace', minWidth: 100, textAlign: 'right' }}>
                    {receipt.total}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: 20,
                  marginTop: 32,
                  paddingTop: 20,
                  borderTop: '1px solid var(--outline-variant)',
                }}
              >
                <div>
                  <div className="field-label" style={{ marginBottom: 8 }}>QR Verification</div>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      background: 'var(--surface-low)',
                      borderRadius: 4,
                      border: '1px solid var(--outline-variant)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: 10, color: 'var(--on-surface-variant)' }}>QR</span>
                  </div>
                </div>
                <div>
                  <div className="field-label" style={{ marginBottom: 8 }}>Authorised Signature</div>
                  <div
                    style={{
                      height: 64,
                      border: '1px dashed var(--outline-variant)',
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: 10, color: 'var(--on-surface-variant)' }}>Signature placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <button type="button" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center', height: 38 }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 12h10M8 3v7M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Print Receipt
            </button>
            <button type="button" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', height: 38 }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 12h10M8 3v7M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download PDF
            </button>

            <div className="card-surface" style={{ marginTop: 8 }}>
              <div style={{ padding: '14px 16px 10px' }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--on-surface)', marginBottom: 12 }}>Transaction Details</div>
                {[
                  ['Gateway Ref', receipt.ledger.gateway],
                  ['Institution', receipt.ledger.institution],
                  ['Timestamp', receipt.ledger.timestamp],
                  ['Reconciled By', receipt.ledger.reconciledBy],
                ].map(([label, value]) => (
                  <div key={label} style={{ marginBottom: 10 }}>
                    <div className="field-label">{label}</div>
                    <div
                      style={{
                        fontSize: 12.5,
                        color: 'var(--on-surface)',
                        fontFamily: label === 'Gateway Ref' || label === 'Timestamp' ? 'monospace' : 'inherit',
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface">
              <div style={{ padding: '14px 16px 10px' }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--on-surface)', marginBottom: 12 }}>Processing Trail</div>
                {receipt.stateChanges.map((stateChange) => (
                  <div key={`${receipt.id}-${stateChange.event}`} className="state-row">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3, gap: 12 }}>
                      <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--on-surface)' }}>{stateChange.event}</span>
                      <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--on-surface-variant)' }}>
                        {stateChange.time}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--on-surface-variant)', lineHeight: 1.4 }}>{stateChange.desc}</p>
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
