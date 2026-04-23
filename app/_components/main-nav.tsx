import { Suspense } from 'react';
import Link from 'next/link';
import { auth, signOut } from '@/auth';
import UptimeOpsLogo from '../ui/uptime-ops-logo';
import { NavigationMenu } from '@base-ui/react/navigation-menu';

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
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
      >
        <NavigationMenu.Item>
          <button
            type="submit"
            className="rounded-sm px-3 py-2 leading-none transition-colors duration-300 hover:bg-[var(--bg-color-lighter)]"
          >
            Sign out
          </button>
        </NavigationMenu.Item>
      </form>
    );
  }

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link
        className="rounded-sm px-3 py-2 transition-colors duration-300 hover:bg-[var(--bg-color-lighter)]"
        render={<Link href="/login">Sign in</Link>}
      />
    </NavigationMenu.Item>
  );
}

function AuthButtonSkeleton() {
  return (
    <div className="h-[36px] w-[72px] animate-pulse rounded-sm bg-[var(--bg-color-lighter)]" />
  );
}
