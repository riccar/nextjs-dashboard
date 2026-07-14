import { CustomersTableSkeleton } from './_components/skeletons';
import { PaginationSkeleton } from '@/app/dashboard/_components/skeletons';

export default function Loading() {
  return (
    <div className="w-full">
      <h1 className="text-xl md:text-2xl">Customers</h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <div className="h-8 w-1/2 rounded-md bg-surface-light" />
        <div className="h-8 w-[120px] rounded-md bg-surface-light" />
      </div>
      <CustomersTableSkeleton />
      <div className="mt-5 flex w-full justify-center">
        <PaginationSkeleton />
      </div>
    </div>
  );
}
