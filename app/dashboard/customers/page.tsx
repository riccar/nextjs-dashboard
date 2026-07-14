import Pagination from '@/app/dashboard/_components/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CustomersTableSkeleton, PaginationSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomersPages } from '@/app/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { PlusIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Customers',
};

type SearchParams = Promise<{ query?: string; page?: string } | undefined>;

export default function Page(props: { searchParams?: SearchParams }) {
  return (
    <div className="w-full">
      <h1 className={`text-xl md:text-2xl`}>Customers</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers" />
        <Link
          href="/dashboard/customers/create"
          className={clsx(
            'flex h-8 items-center rounded-md px-2 text-sm',
            'border border-[var(--bg-color-lighter)] bg-[var(--bg-color)] text-[var(--text-color)]',
            'transition-colors duration-300 hover:bg-[var(--bg-color-lighter)]',
            'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--bg-color-lighter)]',
          )}
        >
          <span className="hidden md:block">Create Customer</span>
          <PlusIcon className="h-5 md:ml-1" />
        </Link>
      </div>
      <Suspense fallback={<CustomersTableSkeleton />}>
        <TableWrapper searchParams={props.searchParams} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Suspense fallback={<PaginationSkeleton />}>
          <PaginationWrapper searchParams={props.searchParams} />
        </Suspense>
      </div>
    </div>
  );
}

async function TableWrapper({ searchParams }: { searchParams?: SearchParams }) {
  const params = await searchParams;
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;
  return <Table query={query} currentPage={currentPage} />;
}

async function PaginationWrapper({ searchParams }: { searchParams?: SearchParams }) {
  const params = await searchParams;
  const query = params?.query || '';
  const totalPages = await fetchCustomersPages(query);
  return <Pagination totalPages={totalPages} />;
}
