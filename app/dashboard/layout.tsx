import { Suspense } from 'react';
import SideNav, { SideNavFallback } from './_components/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sticky top-[82px] sm:top-[83px] z-10 bg-[var(--bg-color)] sm:self-start">
        <Suspense fallback={<SideNavFallback />}>
          <SideNav />
        </Suspense>
      </div>
      <div className="grow rounded-sm bg-[var(--bg-color)] p-3 sm:px-6 sm:py-0">{children}</div>
    </div>
  );
}
