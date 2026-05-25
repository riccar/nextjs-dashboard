'use client';

import { AtSymbolIcon, KeyIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-sm border border-[var(--bg-color-lighter)] bg-[var(--bg-color-light)] px-6 pb-4 pt-8 text-[var(--text-color)]">
        <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label className="mb-3 mt-5 block font-medium text-[var(--text-color)]" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-[var(--bg-color-lighter)] bg-[var(--bg-color)] py-[9px] pl-10 text-sm text-[var(--text-color)] outline-2 placeholder:text-[var(--text-color)]/70"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[var(--text-color)] peer-focus:text-[var(--text-color)]" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block font-medium text-[var(--text-color)]"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-[var(--bg-color-lighter)] bg-[var(--bg-color)] py-[9px] pl-10 text-sm text-[var(--text-color)] outline-2 placeholder:text-[var(--text-color)]/70"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[var(--text-color)] peer-focus:text-[var(--text-color)]" />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button
          className={clsx(
            'mt-9 w-full',
            'flex h-12 items-center rounded-md px-2 text-sm',
            'border border-[var(--bg-color-lighter)] bg-[var(--bg-color)] text-[var(--text-color)]',
            'transition-colors duration-300 hover:bg-[var(--bg-color-lighter)]',
            'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--bg-color-lighter)]',
          )}
          aria-disabled={isPending}
        >
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-[var(--accent-color)]" />
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-[var(--error-color)]" />
              <p className="text-sm text-[var(--error-color)]">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
