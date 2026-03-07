import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

export const householdRouteLive = false;

const nav = [
  { href: '/', label: 'Home' },
  { href: '/for-trades-businesses', label: 'For trades businesses' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/who-its-for', label: 'Who it’s for' },
  { href: '/start', label: 'Start' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-graphite/10 bg-sand/95 backdrop-blur dark:border-sand/15 dark:bg-ink/95">
      <div className="section-shell flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="inline-flex items-center">
          <Image src="/fleethive_logo_primary.svg" alt="FleetHive" width={142} height={28} priority className="hidden dark:block" />
          <Image src="/fleethive_logo_black.svg" alt="FleetHive" width={142} height={28} priority className="block dark:hidden" />
        </Link>
        <nav className="hidden gap-5 text-sm font-medium lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-amberDeep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amberDeep dark:hover:text-amber">
              {item.label}
            </Link>
          ))}
          {householdRouteLive ? <Link href="/for-households">For households</Link> : null}
        </nav>
        <Link href="/start" className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-sand transition hover:bg-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink dark:bg-amber dark:text-ink dark:hover:bg-amberDeep">
          Book a walkthrough
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-graphite/10 bg-white dark:border-sand/15 dark:bg-graphite">
      <div className="section-shell flex flex-col gap-5 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p>FleetHive marketing v1. Trade-first route live. Household route remains conditional until approved.</p>
        <nav className="flex gap-4">
          <a href="#" className="underline-offset-4 hover:underline">Privacy</a>
          <a href="#" className="underline-offset-4 hover:underline">Terms</a>
          <a href="#" className="underline-offset-4 hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export function Hero({ title, body, primary, secondary }: { title: string; body: string; primary: { href: string; label: string }; secondary?: { href: string; label: string } }) {
  return (
    <section className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
        <p className="max-w-2xl text-lg text-graphite/80 dark:text-sand/85">{body}</p>
        <div className="flex flex-wrap gap-3">
          <Link href={primary.href} className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-sand hover:bg-graphite dark:bg-amber dark:text-ink dark:hover:bg-amberDeep">{primary.label}</Link>
          {secondary ? <Link href={secondary.href} className="rounded-full border border-graphite/20 px-5 py-3 text-sm font-semibold hover:bg-graphite/5 dark:border-sand/30 dark:hover:bg-sand/10">{secondary.label}</Link> : null}
        </div>
      </div>
      <div className="rounded-2xl border border-dashed border-graphite/25 bg-white p-4 dark:border-sand/30 dark:bg-graphite/70">
        <div className="eyebrow mb-3">Approved placeholder (non-proof image)</div>
        <img src="https://placehold.co/1200x760/F7F5EF/2A2A2A?text=Reserved+for+approved+workflow+screenshot" alt="Generic placeholder panel reserved for approved FleetHive workflow screenshot" className="w-full rounded-xl" />
      </div>
    </section>
  );
}

export function Section({ title, children, eyebrow }: { title: string; children: ReactNode; eyebrow?: string }) {
  return (
    <section className="section-shell border-t border-graphite/10 dark:border-sand/15">
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight">{title}</h2>
      <div className="mt-6 space-y-4 text-base text-graphite/85 dark:text-sand/90">{children}</div>
    </section>
  );
}

export function CardGrid({ cards }: { cards: { label?: string; title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <article key={card.title} className="rounded-2xl border border-graphite/10 bg-white p-5 dark:border-sand/15 dark:bg-graphite/60">
          {card.label ? <p className="eyebrow mb-2">{card.label}</p> : null}
          <h3 className="text-xl font-semibold">{card.title}</h3>
          <p className="mt-2 text-graphite/80 dark:text-sand/85">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="rounded-xl border border-graphite/15 bg-white p-4 dark:border-sand/15 dark:bg-graphite/60">
          <summary className="cursor-pointer font-semibold">{item.q}</summary>
          <p className="mt-2 text-graphite/80 dark:text-sand/85">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
