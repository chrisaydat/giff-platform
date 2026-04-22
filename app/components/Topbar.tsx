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
    <div className="page-topbar executive-topbar">
      {/* Left: search */}
      <div className="topbar-search">
        <label htmlFor="executive-search" className="sr-only">Search the executive console</label>
        <span style={{ color: 'var(--gray-400)' }}><SearchIcon /></span>
        <input id="executive-search" name="executive_search" placeholder="Search console…" autoComplete="off" />
      </div>

      {/* Center: role name */}
      <span className="executive-topbar-title">
        Executive Console
      </span>

      {/* Right: actions */}
      <div className="executive-topbar-actions">
        {/* Bell with badge */}
        <div className="notif-badge">
          <button className="btn btn-ghost" style={{ padding: '0 6px', color: 'var(--gray-500)' }} aria-label="Open executive notifications">
            <BellIcon />
          </button>
          <span className="notif-badge-count">3</span>
        </div>

        {/* Help */}
        <button className="btn btn-ghost" style={{ padding: '0 6px', color: 'var(--gray-500)' }} aria-label="Open executive help">
          <HelpIcon />
        </button>

        {/* Support */}
        <a href="/executive/settings" className="executive-topbar-link">
          Settings
        </a>

        {/* Execute Action */}
        <a href="/dashboard" className="btn btn-dark" style={{ gap: 4 }}>
          View Member Side
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* User avatar */}
        <div className="executive-avatar">EC</div>
      </div>
    </div>
  );
}
