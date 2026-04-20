'use client';

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice, DeleteInvoiceState } from '@/app/lib/actions';
import { useActionState } from 'react';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-md bg-[var(--bg-color-light)] px-4 text-sm font-medium text-[var(--text-color)] border border-[var(--accent-color)] transition-colors duration-300 hover:bg-[var(--bg-color-lighter)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-color)]"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id, currentPage }: { id: string, currentPage: number }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit?page=${currentPage}`}
      className="rounded-md border p-2 border-[var(--bg-color-lighter)] text-[var(--text-color)] transition-colors duration-300 hover:bg-[var(--bg-color-lighter)]"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  const initialState: DeleteInvoiceState = { message: null };

  const [_state, formAction] = useActionState(deleteInvoiceWithId, initialState);

  return (
    <form action={formAction}>
      <button type="submit"
        className="rounded-md border p-2 border-[var(--bg-color-lighter)] text-[var(--text-color)] transition-colors duration-300 hover:bg-[var(--bg-color-lighter)] hover:text-[var(--text-color)]"
      >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
    </button>
  </form>
);
}
