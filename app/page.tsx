import Link from 'next/link';
import { CardGrid, Faq, Hero, Section, householdRouteLive } from './components/site';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Stay on top of the vehicles you rely on."
        body="FleetHive helps you keep maintenance, reminders, records, and running costs under better control. Start with the route that fits how you use vehicles today."
        primary={{ href: '/for-trades-businesses', label: 'For trades businesses' }}
        secondary={{ href: householdRouteLive ? '/for-households' : '/how-it-works', label: householdRouteLive ? 'For households' : 'See how it works' }}
      />

      <Section title="Choose the route that matches your setup" eyebrow="Home / router">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-graphite/15 bg-white p-5 dark:border-sand/15 dark:bg-graphite/60">
            <h3 className="text-xl font-semibold">For growing trades businesses with a handful of vans</h3>
            <p className="mt-2">Use FleetHive to keep service dates, records, invoices, and running costs from living in memory, inboxes, and scattered spreadsheets.</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Keep service, MOT, and key vehicle dates under control</li><li>See what each van is costing</li><li>Keep records and invoice history in one place</li><li>Make booking and supplier decisions with better context</li>
            </ul>
            <Link href="/for-trades-businesses" className="mt-4 inline-block font-semibold underline underline-offset-4">See FleetHive for your business</Link>
          </article>
          {householdRouteLive ? (
            <article className="rounded-2xl border border-graphite/15 bg-white p-5 dark:border-sand/15 dark:bg-graphite/60">
              <h3 className="text-xl font-semibold">For households managing more than one vehicle</h3>
              <p className="mt-2">Keep all your vehicles in one place, reduce reminder chaos, and make booking and cost decisions with more confidence.</p>
              <Link href="/for-households" className="mt-4 inline-block font-semibold underline underline-offset-4">See how it works for households</Link>
            </article>
          ) : (
            <article className="rounded-2xl border border-dashed border-graphite/30 bg-white p-5 dark:border-sand/35 dark:bg-graphite/60">
              <p className="eyebrow">Conditional route status</p>
              <h3 className="text-xl font-semibold">Household route is intentionally not published in nav at this stage</h3>
              <p className="mt-2">Per approved artefacts, this route remains conditional until CTA path, proof stack, and launch readiness are confirmed.</p>
            </article>
          )}
        </div>
      </Section>

      <Section title="Multiple vehicles create more admin than most people plan for.">
        <p>Once you are tracking more than one vehicle, the work rarely stays in one place. Dates sit in diaries. Invoices sit in inboxes. Costs are hard to compare. Booking decisions get made reactively. FleetHive is designed to give that work a clearer home.</p>
      </Section>

      <Section title="Built first for businesses where vehicles are part of the working day" eyebrow="Trade-first proof preview">
        <p>FleetHive is positioned first for owner-managed trades and field-service businesses with a handful of vans.</p>
        <Link href="/start" className="inline-block rounded-full bg-ink px-5 py-3 text-sm font-semibold text-sand dark:bg-amber dark:text-ink">Book a walkthrough</Link>
      </Section>

      <Section title="Two routes. Different vehicle realities.">
        <CardGrid cards={[{ title: 'Trades businesses', body: 'Vehicles are tied to jobs, schedules, and downtime risk. The next step is likely a walkthrough or assisted setup.' }, { title: 'Households (conditional)', body: 'Vehicles are tied to shared admin and reminders. This path should only appear as a full route when genuinely live.' }]} />
      </Section>

      <Section title="FAQ">
        <Faq items={[{ q: 'Is FleetHive for businesses or households?', a: 'FleetHive currently spans both, but the site is structured trade-first. Use the household route only if that path is live and clearly offered.' }, { q: 'Is this broad fleet-management software?', a: 'FleetHive is safer to understand as maintenance and running-cost control for people managing multiple vehicles.' }, { q: 'What happens if I choose the business route?', a: 'You move into the trade path, where FleetHive explains current workflow and the next step clearly before asking for commitment.' }]} />
      </Section>
    </>
  );
}
