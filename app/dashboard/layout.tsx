import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sticky top-[76px] z-10 bg-[var(--bg-color)] sm:self-start">
        <SideNav />
      </div>
      <div className="grow rounded-sm bg-[var(--bg-color)] p-3 sm:px-6 sm:py-0">{children}</div>
    </div>
  );
}
