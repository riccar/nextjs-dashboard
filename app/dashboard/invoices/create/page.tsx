import Form from './_components/create-form';
import Breadcrumbs from '@/app/dashboard/invoices/_components/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { InvoiceFormSkeleton } from '@/app/dashboard/invoices/_components/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Suspense fallback={<InvoiceFormSkeleton />}>
        <CreateFormWrapper />
      </Suspense>
    </main>
  );
}

async function CreateFormWrapper() {
  const customers = await fetchCustomers();
  return <Form customers={customers} />;
}
