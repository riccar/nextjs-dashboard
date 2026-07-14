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
            <NavigationMenu.Item
              key={link.name}
              className={clsx(
                "relative before:absolute before:bottom-[-5px]",
                "before:block before:h-[5px] before:w-full before:rounded-md",
                "before:bg-accent before:content-[''] before:transition-opacity",
                "sm:before:top-0 sm:before:h-full sm:before:w-[5px]",
                isActive ? 'before:opacity-100' : 'before:opacity-0 hover:before:opacity-40',
              )}
            >
              <NavigationMenu.Link
                className={
                  'flex items-center overflow-hidden rounded-md sm:w-full'
                }
                render={
                  <Link href={link.href}>
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
