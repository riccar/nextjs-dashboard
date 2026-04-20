import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import itSupport from '../public/it-support.png';
import cloudInfrastructure from '../public/cloud-infrastructure.png';

export default function Page() {
  return (
    <main>
      <div className="flex flex-col gap-10 mt-10 text-center">
        <section>
          <h1 className="text-3xl sm:text-6xl font-bold mb-4 mx-5">IT that stays ahead of problems.</h1>
          <h2 className="text-xl mx-[20px]"><span className="font-bold">Uptime Ops</span> provides managed IT support designed to keep your systems stable and secure</h2>
        </section>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <section className="flex flex-col md:flex-row gap-8">
          <div>
            <Image src={itSupport} alt="Managed IT Support" width={200} height={200} />
            <h3 className="text-xl font-semibold my-2">Managed IT Support</h3>
            <p>
              We take care of day-to-day IT operations so your systems stay stable, secure, and
              predictable. Our focus is on preventing issues before they impact your business.
            </p>
          
            <h3 className="text-xl font-semibold my-2">Monitoring & Maintenance</h3>
            <p>
              We continuously monitor systems to detect and address issues early. Regular maintenance
              helps maintain performance and reduces unexpected downtime.
            </p>   
          </div>
          <div>
            <Image src={cloudInfrastructure} alt="Cloud Infrastructure Management" width={200} height={200} />
            <h3 className="text-xl font-semibold my-2">Cloud Infrastructure Management</h3>
            <p>
              We design and manage cloud environments  that scale with your needs. From setup to
              optimisation, we help ensure performance, reliability, and cost control.
            </p>
            
          <h3 className="text-xl font-semibold my-2">IT Strategy & Consulting</h3>
            <p>
              We provide guidance to align your technology with business goals. This includes planning, system improvements, and recommendations based on your current setup.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
