import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page(props: { searchParams?: Promise<{ query?: string; page?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <h1 className={`text-xl md:text-2xl`}>Invoices</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices" />
        <Link
          href="/dashboard/invoices/create"
          className="flex h-8 items-center rounded-md bg-[var(--bg-color)] text-[var(--text-color)] px-2 text-sm border border-[var(--bg-color-lighter)] transition-colors duration-300 hover:bg-[var(--bg-color-lighter)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--bg-color-lighter)]"
        >
          <span className="hidden md:block">Create Invoice</span>
          <PlusIcon className="h-5 md:ml-1" />
        </Link>
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}