import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sticky top-[76px] sm:self-start z-10 bg-[var(--bg-color)]">
        <SideNav />
      </div>
      <div className="grow p-3 sm:px-6 sm:py-0 bg-[var(--bg-color)] rounded-sm">{children}</div>
    </div> 
  );
}