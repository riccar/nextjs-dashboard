const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent';

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

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-[var(--bg-color-lighter)] last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-sm [&:first-child>td:last-child]:rounded-tr-sm [&:last-child>td:first-child]:rounded-bl-sm [&:last-child>td:last-child]:rounded-br-sm">
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[var(--bg-color-lighter)]"></div>
          <div className="h-6 w-24 rounded-sm bg-[var(--bg-color-lighter)]"></div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded-sm bg-[var(--bg-color-lighter)]"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded-sm bg-[var(--bg-color-lighter)]"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded-sm bg-[var(--bg-color-lighter)]"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded-sm bg-[var(--bg-color-lighter)]"></div>
      </td>
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded-sm bg-[var(--bg-color-lighter)]"></div>
          <div className="h-[38px] w-[38px] rounded-sm bg-[var(--bg-color-lighter)]"></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-sm bg-[var(--bg-color)] p-4">
      <div className="flex items-center justify-between border-b border-[var(--bg-color-lighter)] pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-[var(--bg-color-lighter)]"></div>
          <div className="h-6 w-16 rounded-sm bg-[var(--bg-color-lighter)]"></div>
        </div>
        <div className="h-6 w-16 rounded-sm bg-[var(--bg-color-lighter)]"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded-sm bg-[var(--bg-color-lighter)]"></div>
          <div className="mt-2 h-6 w-24 rounded-sm bg-[var(--bg-color-lighter)]"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded-sm bg-[var(--bg-color-lighter)]"></div>
          <div className="h-10 w-10 rounded-sm bg-[var(--bg-color-lighter)]"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-sm bg-[var(--bg-color-light)] p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-[var(--text-color)] md:table">
            <thead className="rounded-sm text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-[var(--bg-color)]">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
