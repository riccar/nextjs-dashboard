import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  
  const revenue = await fetchRevenue();
  
  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`mb-4 text-xl`}>
        Recent Revenue
      </h2>
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-sm bg-[var(--bg-color-light)] p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label} className="text-[var(--text-color)]">{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-[var(--accent-color)]"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-[var(--text-color)] sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5" />
          <h3 className="ml-2 text-sm ">Last 12 months</h3>
        </div>
      </div>
  );
}
