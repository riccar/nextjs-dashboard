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

export default function SideNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex flex-row sm:flex-col gap-2 pb-4 pr-4">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <NavigationMenu.Item key={link.name} className="sm:w-full">
              <NavigationMenu.Link
                className={clsx(
                  'flex items-center overflow-hidden rounded-sm transition-colors duration-300 hover:bg-[var(--bg-color-lighter)] sm:w-full',
                  { 'bg-[var(--bg-color-lighter)]': isActive }
                )}
                render={
                  <Link href={link.href}>
                    <span
                      className={clsx(
                        'w-[5px] self-stretch',
                        isActive ? 'bg-[var(--accent-color)]' : 'bg-transparent'
                      )}
                      aria-hidden
                    />
                    <span className="px-3 py-1 flex-1">{link.name}</span>
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
