export default function SettingsPage() {
  return (
    <div>
      <div className="page-title-area">
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--gray-900)', letterSpacing: '-0.02em' }}>
          Settings
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--gray-500)', marginTop: 3 }}>
          System configuration and preferences
        </p>
      </div>
      <div className="page-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 360 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 52, height: 52, borderRadius: 'var(--radius-lg)',
            background: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px', fontSize: 22,
          }}>⚙</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--gray-700)', marginBottom: 6 }}>Settings Coming Soon</div>
          <div style={{ fontSize: 13, color: 'var(--gray-400)' }}>System settings and configuration options will appear here.</div>
        </div>
      </div>
    </div>
  );
}
