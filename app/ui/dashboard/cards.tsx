import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } =
    await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card title="Total Customers" value={numberOfCustomers} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-md bg-[var(--bg-color-light)] p-3 text-[var(--text-accent-color)]">
      <div className="flex">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className="ml-2 text-sm">{title}</h3>
      </div>
      <p className={`p-5 text-center font-semibold text-xl text-[var(--text-color)]`}>{value}</p>
    </div>
  );
}
