import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from './buttons';
import InvoiceStatus from './status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-sm bg-[var(--bg-color-light)] p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div key={invoice.id} className="mb-2 w-full rounded-sm p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center text-sm">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p className="text-[var(--text-color)]">{invoice.name}</p>
                    </div>
                    <p className="text-[var(--text-color)]">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="font-medium text-[var(--text-color)]">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p className="text-[var(--text-color)]">{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} currentPage={currentPage} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
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
            <tbody>
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="text-md w-full border-b border-[var(--bg-color-lighter)] py-3 text-[var(--text-color)] last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-sm [&:first-child>td:last-child]:rounded-tr-sm [&:last-child>td:first-child]:rounded-bl-sm [&:last-child>td:last-child]:rounded-br-sm"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{invoice.email}</td>
                  <td className="whitespace-nowrap px-3 py-3">{formatCurrency(invoice.amount)}</td>
                  <td className="whitespace-nowrap px-3 py-3">{formatDateToLocal(invoice.date)}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} currentPage={currentPage} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
