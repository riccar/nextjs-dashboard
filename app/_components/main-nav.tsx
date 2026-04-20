import Link from 'next/link';
import { auth, signOut } from '@/auth';
import UptimeOpsLogo from '../ui/uptime-ops-logo';
import { NavigationMenu } from '@base-ui/react/navigation-menu';

export default async function MainNav() {
  const session = await auth();

  return (
    <div className="flex items-center justify-between py-6">
      <UptimeOpsLogo />
      <NavigationMenu.Root>
        <NavigationMenu.List>
            {session?.user ? (
              <form
                action={async () => {
                  'use server';
                  await signOut({ redirectTo: '/' });
                }}
              >
                <NavigationMenu.Item>
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-sm transition-colors duration-300 hover:bg-[var(--bg-color-lighter)] leading-none"
                  >
                    Sign out
                  </button>
                </NavigationMenu.Item>
              </form>
            ) : (
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="px-3 py-1 rounded-sm transition-colors duration-300 hover:bg-[var(--bg-color-lighter)]"
                  render={
                    <Link href="/login">
                      Sign in
                    </Link>
                  }
                />
              </NavigationMenu.Item>
            )}
          </NavigationMenu.List>
        </NavigationMenu.Root>
    </div>
  );
}
