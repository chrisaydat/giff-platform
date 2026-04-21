'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems: { label: string; href: string; icon: () => React.ReactElement }[] = [
  { label: 'Dashboard',  href: '/dashboard',  icon: DashIcon },
  { label: 'Membership', href: '/membership', icon: MembersIcon },
  { label: 'Dues',       href: '/dues',       icon: DuesIcon },
  { label: 'Accounts',   href: '/accounts',   icon: AccountsIcon },
  { label: 'HR',         href: '/hr',         icon: HRIcon },
  { label: 'Audit',      href: '/audit',      icon: AuditIcon },
];

function ShieldIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 3L5 7v9c0 6 4.7 11.6 10 13 5.3-1.4 10-7 10-13V7L15 3z" fill="#0570de" opacity="0.9"/>
      <path d="M10.5 15.5l3 3L19.5 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
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

function DuesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" opacity=".9"/>
      <path d="M1 7h14" stroke="currentColor" strokeWidth="1.4" opacity=".9"/>
      <circle cx="5" cy="11" r="1" fill="currentColor" opacity=".7"/>
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

function NavLink({ href, icon: Icon, label }: { href: string; icon: () => React.ReactElement; label: string }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + '/');
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
  const pathname = usePathname();
  const settingsActive = pathname === '/settings';

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div style={{ padding: '20px 20px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ShieldIcon />
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, lineHeight: '1.2', letterSpacing: '-0.01em' }}>GIFF Portal</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 1 }}>The Digital Estate</div>
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
        {/* Settings link */}
        <Link
          href="/settings"
          style={{
            display: 'flex', alignItems: 'center', gap: 9,
            padding: '8px 10px', borderRadius: 7, marginBottom: 4,
            textDecoration: 'none',
            background: settingsActive ? 'rgba(5,112,222,0.18)' : 'transparent',
            color: settingsActive ? '#60a5fa' : 'rgba(255,255,255,0.5)',
            fontSize: 13, fontWeight: settingsActive ? 600 : 400,
            transition: 'background 0.1s, color 0.1s', position: 'relative',
          }}
        >
          {settingsActive && (
            <span style={{
              position: 'absolute', left: 0, top: '20%', bottom: '20%',
              width: 3, borderRadius: '0 3px 3px 0', background: '#0570de',
            }} />
          )}
          <span style={{ color: settingsActive ? '#60a5fa' : 'rgba(255,255,255,0.35)', flexShrink: 0 }}>
            <SettingsIcon />
          </span>
          Settings
        </Link>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '10px 2px' }} />

        {/* User profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '2px 8px' }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #0570de 0%, #7c3aed 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 11, fontWeight: 700,
          }}>EM</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 12.5, fontWeight: 600, lineHeight: '1.2' }}>E. Mensah</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 1 }}>System Administrator</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
