import Form from './_components/edit-form';
import Breadcrumbs from '@/app/dashboard/invoices/_components/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { InvoiceFormSkeleton } from '@/app/dashboard/invoices/_components/skeletons';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ page?: string }>;
};

export default function Page(props: PageProps) {
  return (
    <main>
      <Suspense fallback={<InvoiceFormSkeleton />}>
        <EditInvoiceContent {...props} />
      </Suspense>
    </main>
  );
}

async function EditInvoiceContent({ params, searchParams }: PageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const currentPage = resolvedSearchParams?.page ?? '1';
  const invoicesListHref =
    currentPage === '1' ? '/dashboard/invoices' : `/dashboard/invoices?page=${currentPage}`;

  const [invoice, customers] = await Promise.all([fetchInvoiceById(id), fetchCustomers()]);

  if (!invoice) {
    notFound();
  }

  return (
    <>
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
    </>
  );
}
