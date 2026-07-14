export function CustomersMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-sm p-4">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <div className="mb-2 flex items-center">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-[var(--bg-color-lighter)]"></div>
              <div className="h-5 w-24 rounded-sm bg-[var(--bg-color-lighter)]"></div>
            </div>
          </div>
          <div className="h-5 w-40 rounded-sm bg-[var(--bg-color-lighter)]"></div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between py-4">
        <div className="flex w-1/2 flex-col gap-2">
          <div className="h-4 w-12 rounded-sm bg-[var(--bg-color-lighter)]"></div>
          <div className="h-5 w-20 rounded-sm bg-[var(--bg-color-lighter)]"></div>
        </div>
        <div className="flex w-1/2 flex-col gap-2">
          <div className="h-4 w-12 rounded-sm bg-[var(--bg-color-lighter)]"></div>
          <div className="h-5 w-20 rounded-sm bg-[var(--bg-color-lighter)]"></div>
        </div>
      </div>
      <div className="h-5 w-24 rounded-sm bg-[var(--bg-color-lighter)]"></div>
    </div>
  );
}

export function CustomersTableRowSkeleton() {
  return (
    <tr className="w-full border-b border-[var(--bg-color-lighter)] py-3 last-of-type:border-none">
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-[var(--bg-color-lighter)]"></div>
          <div className="h-6 w-24 rounded-sm bg-[var(--bg-color-lighter)]"></div>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-5">
        <div className="h-6 w-40 rounded-sm bg-[var(--bg-color-lighter)]"></div>
      </td>
      <td className="whitespace-nowrap px-4 py-5">
        <div className="h-6 w-12 rounded-sm bg-[var(--bg-color-lighter)]"></div>
      </td>
      <td className="whitespace-nowrap px-4 py-5">
        <div className="h-6 w-20 rounded-sm bg-[var(--bg-color-lighter)]"></div>
      </td>
      <td className="whitespace-nowrap px-4 py-5">
        <div className="h-6 w-20 rounded-sm bg-[var(--bg-color-lighter)]"></div>
      </td>
    </tr>
  );
}

export function CustomersTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-sm bg-[var(--bg-color-light)] p-2 md:pt-0">
            <div className="md:hidden">
              <CustomersMobileSkeleton />
              <CustomersMobileSkeleton />
              <CustomersMobileSkeleton />
              <CustomersMobileSkeleton />
              <CustomersMobileSkeleton />
              <CustomersMobileSkeleton />
            </div>
            <table className="hidden min-w-full md:table">
              <thead className="bg-[var(--bg-color-light)] text-left text-md font-normal text-[var(--text-accent-color)]">
                <tr>
                  <th scope="col" className="w-[24%] px-4 py-5 font-medium sm:pl-6">
                    Customer
                  </th>
                  <th scope="col" className="w-[28%] px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="w-[16%] px-3 py-5 font-medium">
                    Total Invoices
                  </th>
                  <th scope="col" className="w-[16%] px-3 py-5 font-medium">
                    Total Pending
                  </th>
                  <th scope="col" className="w-[16%] px-4 py-5 font-medium">
                    Total Paid
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--bg-color-lighter)]">
                <CustomersTableRowSkeleton />
                <CustomersTableRowSkeleton />
                <CustomersTableRowSkeleton />
                <CustomersTableRowSkeleton />
                <CustomersTableRowSkeleton />
                <CustomersTableRowSkeleton />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
