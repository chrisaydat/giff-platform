'use client';

import type { ReactElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { label: 'Dashboard', href: '/dashboard', icon: GridIcon },
  { label: 'Membership', href: '/membership', icon: MembershipIcon },
  { label: 'Dues', href: '/dues', icon: WalletIcon },
  { label: 'Documents', href: '/documents', icon: DocumentIcon },
  { label: 'Notifications', href: '/notifications', icon: BellIcon },
  { label: 'Settings', href: '/settings', icon: SettingsIcon },
];

function CrestIcon() {
  return (
    <div className="member-crest" aria-hidden="true">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <path d="M16 3l10 4v7c0 7-4.5 12-10 15-5.5-3-10-8-10-15V7l10-4z" fill="rgba(122,88,43,0.22)" />
        <path d="M16 3l10 4v7c0 7-4.5 12-10 15-5.5-3-10-8-10-15V7l10-4z" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
        <path d="M10 11h12M16 8v14" stroke="rgba(255,255,255,0.75)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function GridIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity=".9" />
      <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity=".9" />
      <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity=".9" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity=".9" />
    </svg>
  );
}

function MembershipIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2.5l4.5 2v3.6c0 2.5-1.7 4.5-4.5 5.9-2.8-1.4-4.5-3.4-4.5-5.9V4.5l4.5-2z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      <circle cx="8" cy="7.4" r="1.5" fill="currentColor" opacity=".8" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 6.5h13" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="11.5" cy="9.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 1.5h5.7L13 4.8V14.5H4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9.5 1.5V5h3.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6 8.2h4M6 10.7h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
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

function SettingsIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 1.7v1.6M8 12.7v1.6M1.7 8h1.6M12.7 8h1.6M3.1 3.1l1.1 1.1M11.8 11.8l1.1 1.1M3.1 12.9l1.1-1.1M11.8 4.2l1.1-1.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="5" r="2.4" fill="currentColor" opacity=".85" />
      <path d="M2.5 13c0-2.7 2.4-4.7 5.5-4.7s5.5 2 5.5 4.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M9.5 3h2.5A1.5 1.5 0 0 1 13.5 4.5v7A1.5 1.5 0 0 1 12 13H9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 5L3.5 8 7 11M3.5 8h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavLink({
  href,
  label,
  icon: Icon,
  compact = false,
}: {
  href: string;
  label: string;
  icon: () => ReactElement;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link href={href} className={`member-nav-link${active ? ' active' : ''}${compact ? ' compact' : ''}`}>
      <span className="member-nav-icon">
        <Icon />
      </span>
      <span>{label}</span>
    </Link>
  );
}

export default function MemberSidebar() {
  return (
    <aside className="member-sidebar">
      <div className="member-sidebar-brand">
        <Link href="/dashboard" className="member-brand-link">
          <CrestIcon />
          <div>
            <div className="member-brand-name">GIFF Portal</div>
            <div className="member-brand-tagline">The Modern Archive</div>
          </div>
        </Link>
      </div>

      <nav className="member-nav" aria-label="Member navigation">
        {items.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} icon={item.icon} />
        ))}
      </nav>

      <div className="member-sidebar-footer">
        <NavLink href="/profile" label="Member Profile" icon={ProfileIcon} compact />
        <NavLink href="/" label="Logout" icon={LogoutIcon} compact />
      </div>
    </aside>
  );
}
