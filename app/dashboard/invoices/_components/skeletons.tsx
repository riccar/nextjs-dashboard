import { shimmer } from '@/app/dashboard/_components/skeletons';

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

export function InvoiceFormSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-md bg-[var(--bg-color-light)] p-4 md:p-6`}
    >
      <div className="mb-4 h-4 w-24 rounded-sm bg-[var(--bg-color-lighter)]" />
      <div className="mb-6 h-10 w-full rounded-md bg-[var(--bg-color-lighter)]" />
      <div className="mb-4 h-4 w-28 rounded-sm bg-[var(--bg-color-lighter)]" />
      <div className="mb-6 h-10 w-full rounded-md bg-[var(--bg-color-lighter)]" />
      <div className="mb-4 h-4 w-32 rounded-sm bg-[var(--bg-color-lighter)]" />
      <div className="mb-6 flex gap-4">
        <div className="h-20 w-full rounded-md bg-[var(--bg-color-lighter)]" />
        <div className="h-20 w-full rounded-md bg-[var(--bg-color-lighter)]" />
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <div className="h-10 w-24 rounded-md bg-[var(--bg-color-lighter)]" />
        <div className="h-10 w-32 rounded-md bg-[var(--bg-color-lighter)]" />
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
          <table className="hidden min-w-full md:table">
            <thead className="text-md rounded-lg text-left font-normal text-[var(--text-accent-color)]">
              <tr>
                <th scope="col" className="w-[24%] px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="w-[24%] px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="w-[14%] px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="w-[14%] px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="w-[12%] px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative w-[12%] py-3 pl-6 pr-3">
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
