import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export default async function Page(props: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ page?: string }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const id = params.id;
  const currentPage = searchParams?.page ?? '1';
  const invoicesListHref =
    currentPage === '1'
      ? '/dashboard/invoices'
      : `/dashboard/invoices?page=${currentPage}`;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

	if (!invoice) {
		notFound();
	}

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: invoicesListHref },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit?page=${currentPage}`,
            active: true,
          },
        ]}
      />
      <Form
        invoice={invoice}
        customers={customers}
        currentPage={currentPage}
        invoicesListHref={invoicesListHref}
      />
    </main>
  );
}