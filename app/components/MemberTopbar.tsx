'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memberRecord } from '../lib/member-demo-data';

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 4h11M2.5 8h11M2.5 12h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 10l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2a4 4 0 0 1 4 4v2.7l1.2 2H2.8L4 8.7V6a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.7 12.8a1.3 1.3 0 0 0 2.6 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.2 6.1A2 2 0 0 1 10 6.9c0 1.2-1 1.7-1.5 2.2-.3.3-.5.6-.5 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="11.9" r=".7" fill="currentColor" />
    </svg>
  );
}

const placeholders: Record<string, string> = {
  '/dashboard': 'Search records…',
  '/membership': 'Search renewal steps…',
  '/dues': 'Search invoices & receipts…',
  '/dues/pay': 'Search payment flow…',
  '/documents': 'Search archive…',
  '/notifications': 'Search updates…',
  '/settings': 'Search preferences…',
  '/profile': 'Search credentials…',
};

export default function MemberTopbar({ onMenuToggle }: { onMenuToggle?: () => void }) {
  const pathname = usePathname();
  const placeholder = placeholders[pathname] ?? 'Search archive…';

  return (
    <header className="member-topbar">
      <div className="member-topbar-leading">
        <button type="button" className="mobile-menu-button" onClick={onMenuToggle} aria-label="Open member navigation">
          <MenuIcon />
        </button>

        <Link href="/dashboard" className="member-topbar-brand" translate="no">
          GIFF
        </Link>
      </div>

      <div className="member-search">
        <label htmlFor="member-search" className="sr-only">Search the member archive</label>
        <span className="member-search-icon">
          <SearchIcon />
        </span>
        <input id="member-search" name="member_search" type="search" placeholder={placeholder} autoComplete="off" />
      </div>

      <div className="member-topbar-actions">
        <Link href="/membership" className="member-primary-cta">
          Renew Membership
        </Link>

        <Link href="/notifications" className="member-icon-button" aria-label="Open notifications">
          <BellIcon />
          <span className="member-count-dot">2</span>
        </Link>

        <button className="member-icon-button member-topbar-help" type="button" aria-label="Open help and support">
          <HelpIcon />
        </button>

        <Link href="/profile" className="member-avatar-link member-topbar-avatar" aria-label="Open member profile">
          <span>{memberRecord.initials}</span>
        </Link>
      </div>
    </header>
  );
}
