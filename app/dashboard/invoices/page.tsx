import Pagination from '@/app/dashboard/_components/pagination';
import Search from '@/app/dashboard/_components/search';
import Table from './_components/table';
import { InvoicesTableSkeleton } from './_components/skeletons';
import { PaginationSkeleton } from '@/app/dashboard/_components/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Invoices',
};

type SearchParams = Promise<{ query?: string; page?: string } | undefined>;

export default function Page(props: { searchParams?: SearchParams }) {
  return (
    <div className="w-full">
      <h1 className={`text-xl md:text-2xl`}>Invoices</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices" />
        <Link href="/dashboard/invoices/create" className="btn-ghost h-8">
          <span className="hidden md:block">Create Invoice</span>
          <PlusIcon className="h-5 md:ml-1" />
        </Link>
      </div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
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
  const totalPages = await fetchInvoicesPages(query);
  return <Pagination totalPages={totalPages} />;
}
