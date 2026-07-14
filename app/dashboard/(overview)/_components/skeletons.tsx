import { shimmer } from '@/app/dashboard/_components/skeletons';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-sm bg-[var(--bg-color-light)] p-2 shadow-sm`}
    >
      <div className="flex p-3">
        <div className="h-5 w-5 rounded-sm bg-[var(--bg-color-lighter)]" />
        <div className="ml-2 h-4 w-16 rounded-sm bg-[var(--bg-color-lighter)] text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-sm bg-[var(--bg-color)] p-4">
        <div className="h-5 w-20 rounded-sm bg-[var(--bg-color-lighter)]" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-sm bg-[var(--bg-color-light)]" />
      <div className="rounded-sm bg-[var(--bg-color-light)] p-4">
        <div className="mt-0 grid h-[310px] grid-cols-12 items-end gap-2 rounded-sm bg-[var(--bg-color)] p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-[var(--bg-color-lighter)]" />
          <div className="ml-2 h-4 w-20 rounded-sm bg-[var(--bg-color-lighter)]" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-[var(--bg-color-lighter)] py-3">
      <div className="flex items-center">
        <div className="mr-2 h-5 w-8 rounded-full bg-[var(--bg-color-lighter)]" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-sm bg-[var(--bg-color-lighter)]" />
          <div className="mt-2 h-3 w-12 rounded-sm bg-[var(--bg-color-lighter)]" />
        </div>
      </div>
      <div className="mt-2 h-3 w-12 rounded-sm bg-[var(--bg-color-lighter)]" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-7 w-36 rounded-sm bg-[var(--bg-color-light)]" />
      <div className="flex grow flex-col justify-between rounded-sm bg-[var(--bg-color-light)] p-3">
        <div className="bg-[var(--bg-color)] px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-[var(--bg-color-lighter)]" />
          <div className="ml-2 h-4 w-20 rounded-sm bg-[var(--bg-color-lighter)]" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-sm bg-[var(--bg-color-light)]`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}
