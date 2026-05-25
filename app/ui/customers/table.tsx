import Image from 'next/image';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-sm bg-[var(--bg-color-light)] p-2 md:pt-0">
            <div className="md:hidden">
              {customers?.map((customer) => (
                <div key={customer.id} className="mb-2 w-full rounded-sm p-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center text-sm">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </div>
                      <p className="text-sm text-[var--text-color]">{customer.email}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between  py-4">
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Pending</p>
                      <p className="font-medium">{customer.total_pending}</p>
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Paid</p>
                      <p className="font-medium">{customer.total_paid}</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p>{customer.total_invoices} invoices</p>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-[var(--text-accent-color)] md:table">
              <thead className="bg-[var(--bg-color-light)] text-left text-md font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Total Invoices
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Total Pending
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium">
                    Total Paid
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[var(--bg-color-lighter)] text-[var(--text-color)]">
                {customers.map((customer) => (
                  <tr key={customer.id} className="text-md w-full border-b border-[var(--bg-color-lighter)] py-3 text-[var(--text-color)]">
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src={customer.image_url}
                          className="rounded-full"
                          alt={`${customer.name}'s profile picture`}
                          width={28}
                          height={28}
                        />
                        <p>{customer.name}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-5">
                      {customer.email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-5">
                      {customer.total_invoices}
                    </td>
                    <td className="whitespace-nowrap px-4 py-5">
                      {customer.total_pending}
                    </td>
                    <td className="whitespace-nowrap px-4 py-5 group-first-of-type:rounded-sm group-last-of-type:rounded-sm">
                      {customer.total_paid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
