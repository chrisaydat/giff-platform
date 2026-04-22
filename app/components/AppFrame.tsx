'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import MemberSidebar from './MemberSidebar';
import MemberTopbar from './MemberTopbar';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const executivePrefixes = ['/executive', '/accounts', '/hr', '/audit'];

export default function AppFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isGateway = pathname === '/';
  const isExecutive = executivePrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

  if (isGateway) {
    return <>{children}</>;
  }

  if (isExecutive) {
    return (
      <>
        <Sidebar />
        <div className="main-content">
          <Topbar />
          {children}
        </div>
      </>
    );
  }

  return (
    <div className="member-shell">
      <MemberSidebar />
      <div className="member-main">
        <MemberTopbar />
        <main className="member-page">{children}</main>
      </div>
    </div>
  );
}
