export default function Home() {
  return (
    <main className="portal-gateway">
      <section className="portal-gateway-panel">
        <div className="portal-eyebrow">GIFF Digital Platform</div>
        <h1 className="portal-title">Two portals. One institutional story.</h1>
        <p className="portal-copy">
          Explore the member-facing archive experience and the executive operating console across the full EOI scope.
        </p>

        <div className="portal-choice-grid">
          <a className="portal-choice-card member" href="/dashboard">
            <div className="portal-choice-label">Member Portal</div>
            <h2>Digital archive, dues, documents, renewal, and profile standing.</h2>
            <span>Enter member experience</span>
          </a>

          <a className="portal-choice-card executive" href="/executive">
            <div className="portal-choice-label">Executive Console</div>
            <h2>Assessment, membership, dues, accounts, HR, migration, integrations, and training.</h2>
            <span>Enter executive experience</span>
          </a>
        </div>
      </section>
    </main>
  );
}
