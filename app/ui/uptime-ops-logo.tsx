import Image from 'next/image';
import logo from '@/public/uptime-ops-logo.png';

export default function UptimeOpsLogo() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Image src={logo} alt="UptimeOps" width={40} height={40} priority />
      <span className="text-xl font-bold">
        <span className="text-[var(--text-color)]">Uptime</span>
        <span className="text-[var(--accent-color)]">Ops</span>
      </span>
    </div>
  );
}
