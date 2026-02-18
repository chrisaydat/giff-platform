'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  {
    section: 'Overview',
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: DashIcon },
    ],
  },
  {
    section: 'Core Modules',
    items: [
      { label: 'Membership', href: '/membership', icon: MembersIcon },
      { label: 'Dues & Fees', href: '/dues', icon: DuesIcon },
      { label: 'Accounts', href: '/accounts', icon: AccountsIcon },
      { label: 'HR Management', href: '/hr', icon: HRIcon },
    ],
  },
  {
    section: 'System',
    items: [
      { label: 'Settings', href: '/settings', icon: SettingsIcon },
      { label: 'Audit Trail', href: '/audit', icon: AuditIcon },
    ],
  },
];

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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div style={{
        padding: '20px 20px 18px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #0570de 0%, #0460c8 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 800, color: 'white', letterSpacing: '-0.5px',
            flexShrink: 0,
          }}>G</div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14, lineHeight: '1.2', letterSpacing: '-0.01em' }}>GIFF Portal</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 1 }}>v2.0 · 2026</div>
          </div>
        </div>
      </div>

      {/* User block */}
      <div style={{
        padding: '14px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: '50%',
            background: 'linear-gradient(135deg, #0570de 0%, #7c3aed 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: 12, fontWeight: 700, flexShrink: 0,
          }}>A</div>
          <div style={{ minWidth: 0 }}>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 12.5, fontWeight: 600, lineHeight: '1.2' }}>Admin User</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 1 }}>Administrator</div>
          </div>
          <div style={{
            marginLeft: 'auto',
            width: 6, height: 6, borderRadius: '50%', background: '#10b981', flexShrink: 0,
          }} />
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '10px 10px', overflowY: 'auto' }}>
        {nav.map((section) => (
          <div key={section.section} style={{ marginBottom: 4 }}>
            <div style={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: 10,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.09em',
              padding: '10px 10px 5px',
            }}>
              {section.section}
            </div>
            {section.items.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 9,
                    padding: '8px 10px',
                    borderRadius: 7,
                    marginBottom: 1,
                    textDecoration: 'none',
                    background: active ? 'rgba(5,112,222,0.18)' : 'transparent',
                    color: active ? '#60a5fa' : 'rgba(255,255,255,0.5)',
                    fontSize: 13,
                    fontWeight: active ? 600 : 400,
                    transition: 'background 0.1s, color 0.1s',
                    position: 'relative',
                  }}
                >
                  {active && (
                    <span style={{
                      position: 'absolute',
                      left: 0, top: '20%', bottom: '20%',
                      width: 3, borderRadius: '0 3px 3px 0',
                      background: '#0570de',
                    }} />
                  )}
                  <span style={{ color: active ? '#60a5fa' : 'rgba(255,255,255,0.35)', flexShrink: 0 }}>
                    <Icon />
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div style={{
        padding: '14px 20px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        flexShrink: 0,
      }}>
        <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, lineHeight: 1.5 }}>
          Powered by <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Semper Fidum</span>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.15)', fontSize: 10, marginTop: 2, fontStyle: 'italic' }}>
          Faithful Solutions. Lasting Impact.
        </div>
      </div>
    </aside>
  );
}
