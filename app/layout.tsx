import '@/app/ui/global.css';
import { lato } from '@/app/ui/fonts';
import { Metadata } from 'next';
import MainNav from './_components/MainNav';
import Footer from './Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | UptimeOps Dashboard',
    default: 'UptimeOps Dashboard',
  },
  description: 'Financial Dashboard for UptimeOps.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} bg-[var(--bg-color)] text-[var(--text-color)] antialiased`}
      >
        <header className="sticky top-0 z-50 bg-[var(--bg-color)]">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
            <MainNav />
          </div>
        </header>
        <section className="mx-auto max-w-[1200px] px-4 sm:px-8">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
