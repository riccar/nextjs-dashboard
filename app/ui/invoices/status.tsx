import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-[var(--bg-color-lighter)] text-[var(--text-color)]': status === 'pending',
          'bg-[var(--ok-color)] text-[var(--text-color)]': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-[var(--text-color)]" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-[var(--text-color)]" />
        </>
      ) : null}
    </span>
  );
}
