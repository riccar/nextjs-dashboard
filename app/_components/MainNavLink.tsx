'use client';

import { NavigationMenu } from '@base-ui/react/navigation-menu';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainNavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname.includes("dashboard");

  return (
    <NavigationMenu.Item
      className={clsx(
        "relative h-7 before:absolute before:bottom-[-5px] before:block before:h-[5px]",
        "before:w-full before:rounded-md before:content-['']",
        "before:bg-[var(--accent-color)] before:transition-opacity",
        isActive ? 'before:opacity-100' : 'before:opacity-0 hover:before:opacity-40',
      )}
    >
      <NavigationMenu.Link
        className="flex h-full items-center rounded-md px-3"
        render={<Link href={href}>{children}</Link>}
      />
    </NavigationMenu.Item>
  );
}
