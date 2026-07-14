import { Suspense } from 'react';
import { auth, signOut } from '@/auth';
import UptimeOpsLogo from './uptime-ops-logo';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import MainNavLink from './MainNavLink';
import clsx from 'clsx';

export default function MainNav() {
  return (
    <div className="flex items-center justify-between py-6">
      <UptimeOpsLogo />
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <Suspense fallback={<AuthButtonSkeleton />}>
            <AuthButton />
          </Suspense>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}

async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex items-center gap-5">
        <MainNavLink href="/dashboard">Dashboard</MainNavLink>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <NavigationMenu.Item
            className={clsx(
              'relative h-7 before:absolute before:bottom-[-5px]',
              'before:block before:h-[5px] before:w-full before:rounded-md',
              "before:bg-accent before:content-['']",
              'before:opacity-0 before:transition-opacity hover:before:opacity-40',
            )}
          >
            <button type="submit" className="flex h-full items-center rounded-md px-3 leading-none">
              Sign out
            </button>
          </NavigationMenu.Item>
        </form>
      </div>
    );
  }

  return <MainNavLink href="/login">Sign in</MainNavLink>;
}

function AuthButtonSkeleton() {
  return (
    <div className="h-[36px] w-[72px] animate-pulse rounded-sm bg-surface-lighter" />
  );
}
