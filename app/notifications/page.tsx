import Link from 'next/link';
import { announcements, notifications } from '../lib/member-demo-data';

export default function NotificationsPage() {
  return (
    <>
      <section className="member-hero">
        <div className="member-hero-copy">
          <div className="member-eyebrow">Inbox</div>
          <h1 className="member-display">Notifications</h1>
          <p className="member-lead">Critical alerts, institutional updates, and announcement summaries from the archive.</p>
        </div>
      </section>

      <section className="member-grid member-grid-notifications">
        <div className="member-stack">
          <div className="member-filter-strip">
            <button type="button" className="member-filter active">All</button>
            <button type="button" className="member-filter">Alerts</button>
            <button type="button" className="member-filter">Payments</button>
            <button type="button" className="member-filter">Announcements</button>
          </div>

          <article className="member-surface">
            <div className="member-panel-heading">
              <div>
                <h2>Critical Alerts</h2>
                <p>Actionable items that could affect your standing or account access.</p>
              </div>
            </div>

            <div className="member-list">
              {notifications.critical.map((item) => (
                <div key={item.title} className="member-list-item alert">
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                    <span>{item.when}</span>
                  </div>
                  <Link href={item.href} className="member-action-button small">{item.action}</Link>
                </div>
              ))}
            </div>
          </article>

          <article className="member-surface">
            <div className="member-panel-heading">
              <div>
                <h2>Updates & Activity</h2>
                <p>Recent account and ledger events issued by the institution.</p>
              </div>
            </div>

            <div className="member-list">
              {notifications.updates.map((item) => (
                <div key={item.title} className="member-list-item">
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                    <span>{item.when}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="member-stack">
          <article className="member-surface">
            <div className="member-panel-heading compact">
              <div>
                <h2>Institutional Announcements</h2>
                <p>Events and policy notices.</p>
              </div>
            </div>

            <div className="member-list">
              {announcements.map((item) => (
                <div key={item.title} className="member-announcement">
                  <div className="member-announcement-visual" aria-hidden="true" />
                  <div className="member-inline-badge">{item.tag}</div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                  <span>{item.date}</span>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </>
  );
}

