'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems: { label: string; href: string; icon: () => React.ReactElement }[] = [
  { label: 'Overview', href: '/executive', icon: DashIcon },
  { label: 'Assessment', href: '/executive/assessment', icon: AssessmentIcon },
  { label: 'Membership', href: '/executive/members', icon: MembersIcon },
  { label: 'Dues & Fees', href: '/executive/fees', icon: FeesIcon },
  { label: 'Accounts', href: '/accounts', icon: AccountsIcon },
  { label: 'HR', href: '/hr', icon: HRIcon },
  { label: 'Audit', href: '/audit', icon: AuditIcon },
  { label: 'Migration', href: '/executive/migration', icon: MigrationIcon },
  { label: 'Integrations', href: '/executive/integrations', icon: IntegrationsIcon },
  { label: 'Training', href: '/executive/training', icon: TrainingIcon },
  { label: 'Settings', href: '/executive/settings', icon: SettingsIcon },
];

function InstitutionIcon() {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: 6,
      background: 'rgba(255,255,255,0.06)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M2 7h16M4 7V16M8 7V16M12 7V16M16 7V16M2 16h16M10 2L2 7h16L10 2z"
          stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function DashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity=".9"/>
      <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity=".9"/>
      <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity=".9"/>
      <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity=".9"/>
    </svg>
  );
}

function MembersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5" r="2.5" fill="currentColor" opacity=".9"/>
      <path d="M1 13c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".9"/>
      <circle cx="12" cy="5" r="2" fill="currentColor" opacity=".5"/>
      <path d="M11 13c0-1.5.8-2.8 2-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
    </svg>
  );
}

function AssessmentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" opacity=".9" />
      <path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity=".9" />
    </svg>
  );
}

function AccountsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 12l3-4 3 2 3-5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".9"/>
      <path d="M2 14h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
    </svg>
  );
}

function FeesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" opacity=".9" />
      <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity=".9" />
    </svg>
  );
}

function HRIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" opacity=".9"/>
      <path d="M5 8h6M5 11h4M5 5h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity=".9"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.4" opacity=".9"/>
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.42 1.42M11.53 11.53l1.42 1.42M3.05 12.95l1.42-1.42M11.53 4.47l1.42-1.42" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".9"/>
    </svg>
  );
}

function AuditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" opacity=".9"/>
      <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".9"/>
      <path d="M5 7h4M7 5v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity=".6"/>
    </svg>
  );
}

function MigrationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 4h7M10 2l2 2-2 2M13 12H6M6 10l-2 2 2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
    </svg>
  );
}

function IntegrationsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="4" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" opacity=".9" />
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.4" opacity=".9" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" opacity=".9" />
      <path d="M5.7 7.1L10.3 4.9M5.7 8.9l4.6 2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity=".9" />
    </svg>
  );
}

function TrainingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 3.5L8 1l6 2.5L8 6 2 3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity=".9" />
      <path d="M4 6.5v3.8C4 11.8 6 13 8 13s4-1.2 4-2.7V6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity=".9" />
    </svg>
  );
}

function NavLink({ href, icon: Icon, label }: { href: string; icon: () => React.ReactElement; label: string }) {
  const pathname = usePathname();
  const active = href === '/executive'
    ? pathname === href
    : pathname === href || pathname.startsWith(href + '/');
  return (
    <Link
      href={href}
      style={{
        display: 'flex', alignItems: 'center', gap: 9,
        padding: '8px 10px', borderRadius: 7, marginBottom: 1,
        textDecoration: 'none',
        background: active ? 'rgba(5,112,222,0.18)' : 'transparent',
        color: active ? '#60a5fa' : 'rgba(255,255,255,0.5)',
        fontSize: 13, fontWeight: active ? 600 : 400,
        transition: 'background 0.1s, color 0.1s', position: 'relative',
      }}
    >
      {active && (
        <span style={{
          position: 'absolute', left: 0, top: '20%', bottom: '20%',
          width: 3, borderRadius: '0 3px 3px 0', background: '#0570de',
        }} />
      )}
      <span style={{ color: active ? '#60a5fa' : 'rgba(255,255,255,0.35)', flexShrink: 0 }}>
        <Icon />
      </span>
      {label}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div style={{ padding: '20px 20px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <InstitutionIcon />
          <div>
            <div className="executive-sidebar-title">GIFF Executive</div>
            <div className="executive-sidebar-subtitle">Operations Console</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} icon={item.icon} label={item.label} />
        ))}
      </nav>

      {/* Bottom: Settings + User Profile */}
      <div style={{ padding: '12px 10px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
        <Link
          href="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 9,
            padding: '8px 10px',
            borderRadius: 7,
            marginBottom: 4,
            textDecoration: 'none',
            color: 'rgba(255,255,255,0.56)',
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}>
            <MembersIcon />
          </span>
          Return to Member Portal
        </Link>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '10px 2px' }} />

        {/* System Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>System Status</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: 500 }}>• Online</span>
        </div>
      </div>
    </aside>
  );
}
