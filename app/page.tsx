import Image from 'next/image';
import itSupport from '../public/it-support.png';
import cloudInfrastructure from '../public/cloud-infrastructure.png';

export default function Page() {
  return (
    <main>
      <div className="mt-10 flex flex-col gap-10 text-center">
        <section>
          <h1 className="mx-5 mb-4 text-3xl font-bold sm:text-6xl">
            IT that stays ahead of problems.
          </h1>
          <h2 className="mx-[20px] text-xl">
            <span className="font-bold">Uptime Ops</span> provides managed IT support designed to
            keep your systems stable and secure
          </h2>
        </section>
      </div>
      <div className="mt-10 flex flex-col gap-10 md:flex-row">
        <section className="flex flex-col gap-8 md:flex-row">
          <div>
            <Image src={itSupport} alt="Managed IT Support" width={200} height={200} />
            <h3 className="my-2 text-xl font-semibold">Managed IT Support</h3>
            <p>
              We take care of day-to-day IT operations so your systems stay stable, secure, and
              predictable. Our focus is on preventing issues before they impact your business.
            </p>

            <h3 className="my-2 text-xl font-semibold">Monitoring & Maintenance</h3>
            <p>
              We continuously monitor systems to detect and address issues early. Regular
              maintenance helps maintain performance and reduces unexpected downtime.
            </p>
          </div>
          <div>
            <Image
              src={cloudInfrastructure}
              alt="Cloud Infrastructure Management"
              width={200}
              height={200}
            />
            <h3 className="my-2 text-xl font-semibold">Cloud Infrastructure Management</h3>
            <p>
              We design and manage cloud environments that scale with your needs. From setup to
              optimisation, we help ensure performance, reliability, and cost control.
            </p>

            <h3 className="my-2 text-xl font-semibold">IT Strategy & Consulting</h3>
            <p>
              We provide guidance to align your technology with business goals. This includes
              planning, system improvements, and recommendations based on your current setup.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
