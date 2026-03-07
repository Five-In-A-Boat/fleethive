import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter, SiteHeader } from './components/site';

export const metadata: Metadata = {
  title: 'FleetHive | Control vehicle admin, maintenance, and running costs',
  description:
    'FleetHive helps people and businesses who manage multiple vehicles stay ahead of maintenance, records, reminders, and running costs.',
  openGraph: {
    title: 'FleetHive',
    description:
      'FleetHive helps people and businesses who manage multiple vehicles stay ahead of maintenance, records, reminders, and running costs.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
