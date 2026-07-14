import { InvoicesTableSkeleton, PaginationSkeleton } from '@/app/ui/skeletons';

export default function Loading() {
  return (
    <div className="w-full">
      <h1 className="text-xl md:text-2xl">Invoices</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <div className="h-8 w-1/2 rounded-md bg-[var(--bg-color-light)]" />
        <div className="h-8 w-[120px] rounded-md bg-[var(--bg-color-light)]" />
      </div>
      <InvoicesTableSkeleton />
      <div className="mt-5 flex w-full justify-center">
        <PaginationSkeleton />
      </div>
    </div>
  );
}
