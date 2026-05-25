'use client';

import Link from 'next/link';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dashboard' },
  { name: 'Invoices', href: '/dashboard/invoices' },
  { name: 'Customers', href: '/dashboard/customers' },
];

function NavLinks({ activePath }: { activePath: string | null }) {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex flex-row gap-2 pb-4 pr-4 sm:flex-col">
        {links.map((link) => {
          const isActive = activePath === link.href;
          return (
            <NavigationMenu.Item key={link.name} className="sm:w-full">
              <NavigationMenu.Link
                className={clsx(
                  'flex items-center overflow-hidden rounded-md transition-colors duration-300 hover:bg-[var(--bg-color-lighter)] sm:w-full',
                  { 'bg-[var(--bg-color-lighter)]': isActive },
                )}
                render={
                  <Link href={link.href}>
                    <span
                      className={clsx(
                        'w-[5px] self-stretch',
                        isActive ? 'bg-[var(--accent-color)]' : 'bg-transparent',
                      )}
                      aria-hidden
                    />
                    <span className="flex-1 px-3 py-1">{link.name}</span>
                  </Link>
                }
              />
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default function SideNav() {
  const pathname = usePathname();
  return <NavLinks activePath={pathname} />;
}

// Static fallback used inside a <Suspense> boundary so the sidebar can be part
// of the prerendered shell without reading the runtime `usePathname()` API.
// Renders the same markup with no active highlight; the real SideNav replaces
// it at hydration with the correct active state.
export function SideNavFallback() {
  return <NavLinks activePath={null} />;
}
