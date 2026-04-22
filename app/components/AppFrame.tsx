'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MemberSidebar from './MemberSidebar';
import MemberTopbar from './MemberTopbar';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const executivePrefixes = ['/executive', '/accounts', '/hr', '/audit'];

export default function AppFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const isGateway = pathname === '/';
  const isExecutive = executivePrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (navOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [navOpen]);

  if (isGateway) {
    return <>{children}</>;
  }

  if (isExecutive) {
    return (
      <>
        <Sidebar />
        {navOpen ? (
          <div className="mobile-drawer-backdrop" onClick={() => setNavOpen(false)}>
            <Sidebar mobile onNavigate={() => setNavOpen(false)} onClose={() => setNavOpen(false)} />
          </div>
        ) : null}
        <div className="main-content">
          <Topbar onMenuToggle={() => setNavOpen(true)} />
          {children}
        </div>
      </>
    );
  }

  return (
    <div className="member-shell">
      <MemberSidebar />
      {navOpen ? (
        <div className="mobile-drawer-backdrop" onClick={() => setNavOpen(false)}>
          <MemberSidebar mobile onNavigate={() => setNavOpen(false)} onClose={() => setNavOpen(false)} />
        </div>
      ) : null}
      <div className="member-main">
        <MemberTopbar onMenuToggle={() => setNavOpen(true)} />
        <main className="member-page">{children}</main>
      </div>
    </div>
  );
}
