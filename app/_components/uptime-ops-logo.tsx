import Image from 'next/image';
import logo from '@/public/uptime-ops-logo.png';
import Link from 'next/link';

export default function UptimeOpsLogo() {
  return (
    <Link href="/">
      <div className="flex flex-row items-center gap-2">
        <Image src={logo} alt="UptimeOps" width={40} height={40} priority />
        <span className="text-xl font-bold hidden sm:block">
          <span className="text-content">Uptime</span>
          <span className="text-accent">Ops</span>
        </span>
      </div>
    </Link>
  );
}
