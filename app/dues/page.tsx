import Link from 'next/link';
import { currentInvoices, paymentHistory, paymentMethods } from '../lib/member-demo-data';

export default function DuesPage() {
  return (
    <>
      <section className="member-hero">
        <div className="member-hero-copy">
          <div className="member-eyebrow">Member Ledger</div>
          <h1 className="member-display">Dues & Payments</h1>
          <p className="member-lead">Manage your annual obligations, payment methods, invoices, and receipt history.</p>
        </div>
      </section>

      <section className="member-grid member-grid-dues">
        <div className="member-stack">
          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Current Balance</h2>
                <p>Total outstanding on your member account.</p>
              </div>
            </div>
            <div className="member-kpi">GHS 2,500.00</div>
            <Link href="/membership" className="member-action-button">Pay Dues</Link>
          </article>

          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Payment Methods</h2>
                <p>Saved channels for institutional payments.</p>
              </div>
            </div>

            <div className="member-list">
              {paymentMethods.map((method) => (
                <div key={method.label} className="member-list-item method">
                  <div>
                    <strong>{method.label}</strong>
                    <p>{method.note}</p>
                  </div>
                  <span className="member-inline-badge">{method.badge}</span>
                </div>
              ))}

              <button className="member-secondary-button" type="button">Add Visa / Mastercard</button>
            </div>
          </article>
        </div>

        <div className="member-stack">
          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Current Invoices</h2>
                <p>Pending invoices generated for your institution.</p>
              </div>
              <Link href="/documents" className="member-tertiary-link">View archive</Link>
            </div>

            <div className="member-table-wrap">
              <table className="member-table">
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentInvoices.map((invoice) => (
                    <tr key={invoice.reference}>
                      <td translate="no">{invoice.reference}</td>
                      <td>{invoice.description}</td>
                      <td>{invoice.dueDate}</td>
                      <td>{invoice.amount}</td>
                      <td><span className="member-status-chip warning">{invoice.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Payment History</h2>
                <p>Receipts previously issued to the archive.</p>
              </div>
            </div>

            <div className="member-table-wrap">
              <table className="member-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Reference</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment) => (
                    <tr key={payment.reference}>
                      <td>{payment.date}</td>
                      <td translate="no">{payment.reference}</td>
                      <td>{payment.amount}</td>
                      <td>
                        <Link href="/dues/RCT-2026-0412" className="member-tertiary-link">{payment.action}</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
