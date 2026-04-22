import Link from 'next/link';
import { currentInvoices, memberRecord, mockMomoFlow, paymentHistory, paymentMethods } from '../lib/member-demo-data';

type DuesPageProps = {
  searchParams?: Promise<{
    payment?: string;
  }>;
};

export default async function DuesPage({ searchParams }: DuesPageProps) {
  const params = (await searchParams) ?? {};
  const paymentSettled = params.payment === 'success';
  const invoiceRows = currentInvoices.map((invoice) => ({
    ...invoice,
    status: paymentSettled ? 'Paid' : invoice.status,
  }));

  return (
    <>
      <section className="member-hero">
        <div className="member-hero-copy">
          <div className="member-eyebrow">Member Ledger</div>
          <h1 className="member-display">Dues & Payments</h1>
          <p className="member-lead">Manage your annual obligations, payment methods, invoices, and receipt history.</p>
        </div>
      </section>

      {paymentSettled ? (
        <section className="member-payment-banner success">
          <div>
            <strong>Mock mobile money payment confirmed.</strong>
            <p>
              Invoice {mockMomoFlow.invoice.reference} has been marked paid for demo purposes and receipt{' '}
              <span translate="no">{mockMomoFlow.receiptReference}</span> is now available.
            </p>
          </div>
          <Link href={`/dues/${mockMomoFlow.receiptReference}`}>View receipt</Link>
        </section>
      ) : null}

      <section className="member-grid member-grid-dues">
        <div className="member-stack">
          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Current Balance</h2>
                <p>{paymentSettled ? 'The annual dues invoice has been cleared in this demo flow.' : 'Total outstanding on your member account.'}</p>
              </div>
            </div>
            <div className="member-kpi">{paymentSettled ? 'GHS 0.00' : memberRecord.outstandingDues}</div>
            <Link
              href={paymentSettled ? `/dues/${mockMomoFlow.receiptReference}` : '/dues/pay'}
              className="member-action-button"
            >
              {paymentSettled ? 'Download Receipt' : 'Pay Dues'}
            </Link>
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceRows.map((invoice) => (
                    <tr key={invoice.reference}>
                      <td translate="no">{invoice.reference}</td>
                      <td>{invoice.description}</td>
                      <td>{invoice.dueDate}</td>
                      <td>{invoice.amount}</td>
                      <td>
                        <span className={`member-status-chip ${paymentSettled ? 'success' : 'warning'}`}>{invoice.status}</span>
                      </td>
                      <td>
                        <Link
                          href={paymentSettled ? `/dues/${mockMomoFlow.receiptReference}` : '/dues/pay'}
                          className="member-tertiary-link"
                        >
                          {paymentSettled ? 'View Receipt' : 'Pay with MoMo'}
                        </Link>
                      </td>
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
                        <Link href={`/dues/${payment.reference}`} className="member-tertiary-link">{payment.action}</Link>
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
