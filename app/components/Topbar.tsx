'use client';

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 10l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1a5 5 0 0 1 5 5v3l1.5 2.5H1.5L3 9V6a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6.5 13.5a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6 6.2A2 2 0 0 1 10 7c0 1.2-1 1.7-1.5 2.2-.3.3-.5.6-.5 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="8" cy="12" r=".7" fill="currentColor"/>
    </svg>
  );
}

export default function Topbar() {
  return (
    <div className="page-topbar" style={{ position: 'relative' }}>
      {/* Left: search */}
      <div className="topbar-search">
        <span style={{ color: 'var(--gray-400)' }}><SearchIcon /></span>
        <input placeholder="Search records..." />
      </div>

      {/* Center: role name */}
      <span style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        fontSize: 13, fontWeight: 700, color: 'var(--gray-800)', letterSpacing: '-0.01em',
        pointerEvents: 'none',
      }}>
        Institutional Architect
      </span>

      {/* Right: actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Bell with badge */}
        <div className="notif-badge">
          <button className="btn btn-ghost" style={{ padding: '0 6px', color: 'var(--gray-500)' }}>
            <BellIcon />
          </button>
          <span className="notif-badge-count">3</span>
        </div>

        {/* Help */}
        <button className="btn btn-ghost" style={{ padding: '0 6px', color: 'var(--gray-500)' }}>
          <HelpIcon />
        </button>

        {/* Support */}
        <a href="#" style={{ fontSize: 13, color: 'var(--gray-600)', textDecoration: 'none', fontWeight: 500 }}>
          Support
        </a>

        {/* Execute Action */}
        <button className="btn btn-dark" style={{ gap: 4 }}>
          Execute Action
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* User avatar */}
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: 'linear-gradient(135deg, #0570de 0%, #7c3aed 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 11, fontWeight: 700, flexShrink: 0, cursor: 'pointer',
        }}>EM</div>
      </div>
    </div>
  );
}
