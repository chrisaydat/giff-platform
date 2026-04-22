'use client';

import Link from 'next/link';
import { useState } from 'react';
import { memberRecord, mockMomoFlow, paymentMethods } from '../lib/member-demo-data';

type Step = 0 | 1 | 2;
type NetworkId = (typeof mockMomoFlow.networks)[number]['id'];

const steps = [
  'Review Invoice',
  'Authorize Prompt',
  'Payment Confirmed',
] as const;

export default function MemberMomoCheckout() {
  const [step, setStep] = useState<Step>(0);
  const [network, setNetwork] = useState<NetworkId>(mockMomoFlow.networks[0].id);
  const [phone, setPhone] = useState<string>(memberRecord.phone);
  const [walletName, setWalletName] = useState<string>(mockMomoFlow.walletName);

  const selectedNetwork =
    mockMomoFlow.networks.find((item) => item.id === network) ?? mockMomoFlow.networks[0];
  const canRequestPrompt = phone.trim().length >= 10 && walletName.trim().length >= 3;

  return (
    <>
      <section className="member-hero">
        <div className="member-hero-copy">
          <div className="member-eyebrow">Member Ledger</div>
          <h1 className="member-display">Mobile Money Checkout</h1>
          <p className="member-lead">
            Review the active dues invoice, send a MoMo authorization prompt, and archive the receipt back into your member record.
          </p>
        </div>
        <div className="member-hero-meta">
          <span className="member-inline-badge">Mock Payment</span>
          <span className="member-meta-label" translate="no">
            Invoice: {mockMomoFlow.invoice.reference}
          </span>
        </div>
      </section>

      <section className="member-grid member-grid-dues">
        <div className="member-stack">
          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Invoice Summary</h2>
                <p>One active invoice is currently ready for self-service settlement.</p>
              </div>
            </div>

            <div className="member-payment-summary">
              <div className="member-payment-stat">
                <div className="member-field-label">Invoice</div>
                <strong translate="no">{mockMomoFlow.invoice.reference}</strong>
                <p>{mockMomoFlow.invoice.description}</p>
              </div>
              <div className="member-payment-stat">
                <div className="member-field-label">Amount Due</div>
                <strong>{mockMomoFlow.total}</strong>
                <p>Processing fee {mockMomoFlow.processingFee}</p>
              </div>
              <div className="member-payment-stat">
                <div className="member-field-label">Due Date</div>
                <strong>{mockMomoFlow.invoice.dueDate}</strong>
                <p>Standing remains active when paid before expiry.</p>
              </div>
              <div className="member-payment-stat">
                <div className="member-field-label">Payer</div>
                <strong>{memberRecord.organization}</strong>
                <p translate="no">{memberRecord.memberId}</p>
              </div>
            </div>
          </article>

          <article className="member-dark-panel">
            <div className="member-panel-heading compact dark">
              <div>
                <h2>Mobile Money Mode</h2>
                <p>This is a demo flow. No live wallet charge will be made.</p>
              </div>
            </div>

            <div className="member-dark-card">
              <div className="member-field-label gold">What this simulates</div>
              <p>
                The portal sends a mobile payment prompt to the registered finance contact, waits for approval on the phone,
                then issues a receipt back into the GIFF archive.
              </p>
            </div>

            <div className="member-list" style={{ marginTop: 16 }}>
              {paymentMethods.map((method) => (
                <div key={method.label} className="member-list-item method" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div>
                    <strong style={{ color: 'rgba(255,255,255,0.96)' }}>{method.label}</strong>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>{method.note}</p>
                  </div>
                  <span className="member-inline-badge">{method.badge}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="member-stack">
          <article className="member-surface">
            <div className="member-stepper" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
              {steps.map((label, index) => (
                <div key={label} className={`member-step${index <= step ? ' active' : ''}`}>
                  <span>{index + 1}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>

            {step === 0 ? (
              <div className="member-payment-flow">
                <div className="member-panel-heading compact" style={{ marginTop: 28 }}>
                  <div>
                    <h2>Confirm Payment Details</h2>
                    <p>Select the wallet network that should receive the prompt.</p>
                  </div>
                </div>

                <div>
                  <div className="member-field-label">Mobile Money Network</div>
                  <div className="member-network-grid" role="list" aria-label="Mobile money networks">
                    {mockMomoFlow.networks.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`member-network-button${item.id === network ? ' active' : ''}`}
                        onClick={() => setNetwork(item.id)}
                        aria-pressed={item.id === network}
                      >
                        <strong>{item.label}</strong>
                        <span>{item.note}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="member-form-grid">
                  <label className="member-form-field" htmlFor="momo-number">
                    <span className="member-field-label">Mobile Money Number</span>
                    <input
                      id="momo-number"
                      name="momo_number"
                      className="member-input"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="+233 24 000 0000"
                      autoComplete="tel"
                    />
                  </label>

                  <label className="member-form-field" htmlFor="wallet-name">
                    <span className="member-field-label">Wallet Name</span>
                    <input
                      id="wallet-name"
                      name="wallet_name"
                      className="member-input"
                      value={walletName}
                      onChange={(event) => setWalletName(event.target.value)}
                      placeholder="Corporate finance wallet"
                      autoComplete="organization"
                    />
                  </label>
                </div>

                <div className="member-payment-note">
                  <strong>{selectedNetwork.label}</strong> will receive a mock authorization prompt at{' '}
                  <span translate="no">{phone}</span>. {mockMomoFlow.promptWindow}
                </div>

                <div className="member-payment-actions">
                  <Link href="/dues" className="member-secondary-button">
                    Back to Dues
                  </Link>
                  <button
                    type="button"
                    className={`member-action-button${canRequestPrompt ? '' : ' muted'}`}
                    onClick={() => {
                      if (!canRequestPrompt) {
                        return;
                      }

                      setStep(1);
                    }}
                  >
                    Request MoMo Prompt
                  </button>
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="member-payment-flow">
                <div className="member-panel-heading compact" style={{ marginTop: 28 }}>
                  <div>
                    <h2>Authorize Prompt on Phone</h2>
                    <p>Approve the simulated MoMo push on the registered device to complete payment.</p>
                  </div>
                </div>

                <div className="member-payment-callout">
                  <div className="member-field-label gold">Prompt Details</div>
                  <h3>{mockMomoFlow.merchant}</h3>
                  <p>
                    {mockMomoFlow.total} requested via {selectedNetwork.label} on <span translate="no">{phone}</span>.
                  </p>
                  <div className="member-payment-callout-meta">
                    <span translate="no">Reference {mockMomoFlow.promptReference}</span>
                    <span>{mockMomoFlow.promptWindow}</span>
                  </div>
                </div>

                <div className="member-payment-timeline">
                  {mockMomoFlow.timeline.map((entry) => (
                    <div key={entry.title} className="member-payment-timeline-item">
                      <div className="member-timeline-dot" aria-hidden="true" />
                      <div>
                        <strong>{entry.title}</strong>
                        <p>{entry.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="member-payment-actions">
                  <button type="button" className="member-secondary-button" onClick={() => setStep(0)}>
                    Edit Payment Details
                  </button>
                  <button type="button" className="member-action-button" onClick={() => setStep(2)}>
                    I Have Approved the Prompt
                  </button>
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="member-payment-flow">
                <div className="member-panel-heading compact" style={{ marginTop: 28 }}>
                  <div>
                    <h2>Payment Confirmed</h2>
                    <p>The mock MoMo payment has been marked successful and the receipt is ready.</p>
                  </div>
                  <span className="member-status-chip success">Paid</span>
                </div>

                <div className="member-payment-confirmation">
                  <div className="member-kpi">{mockMomoFlow.total}</div>
                  <div className="member-payment-note success">
                    Receipt {mockMomoFlow.receiptReference} generated on {mockMomoFlow.settlementTime}.
                  </div>
                </div>

                <div className="member-payment-summary">
                  <div className="member-payment-stat">
                    <div className="member-field-label">Settled Invoice</div>
                    <strong translate="no">{mockMomoFlow.invoice.reference}</strong>
                    <p>{mockMomoFlow.invoice.description}</p>
                  </div>
                  <div className="member-payment-stat">
                    <div className="member-field-label">Paid Via</div>
                    <strong>{selectedNetwork.label}</strong>
                    <p translate="no">{phone}</p>
                  </div>
                  <div className="member-payment-stat">
                    <div className="member-field-label">Member Record</div>
                    <strong>{memberRecord.name}</strong>
                    <p>{memberRecord.organization}</p>
                  </div>
                  <div className="member-payment-stat">
                    <div className="member-field-label">Archive Update</div>
                    <strong>Receipt synced</strong>
                    <p>Available for download under Dues & Payments.</p>
                  </div>
                </div>

                <div className="member-payment-actions">
                  <Link href={`/dues/${mockMomoFlow.receiptReference}`} className="member-action-button">
                    View Receipt
                  </Link>
                  <Link href="/dues?payment=success" className="member-secondary-button">
                    Return to Dues Ledger
                  </Link>
                </div>
              </div>
            ) : null}
          </article>
        </div>
      </section>
    </>
  );
}
