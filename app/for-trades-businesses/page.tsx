import { CardGrid, Faq, Hero, Section } from '../components/site';

export default function TradesPage() {
  return (
    <>
      <Hero title="Get control of the vans that keep your jobs moving." body="FleetHive helps growing trades businesses stay ahead of service dates, records, running costs, invoice checks, and booking decisions without adopting heavyweight fleet software." primary={{ href: '/start', label: 'Book a walkthrough' }} secondary={{ href: '/how-it-works', label: 'See how it works' }} />
      <Section title="Too many vans for memory. Too little appetite for another bloated system.">
        <p>Most small trades businesses do not have a fleet department. Vehicle admin lives wherever it can: the owner’s head, an office inbox, a spreadsheet, a garage relationship, or a pile of invoices.</p>
        <ul className="list-disc space-y-1 pl-5"><li>Service and MOT dates are easy to miss when everything is spread out</li><li>Costs are hard to compare vehicle by vehicle</li><li>Invoices are stored everywhere except in one usable record</li><li>Booking decisions get made reactively, often with poor context</li></ul>
      </Section>
      <Section title="What FleetHive helps you stay on top of now">
        <CardGrid cards={[{ label: 'Product-native workflow', title: 'Know what each vehicle needs next', body: 'Keep key dates, reminders, and maintenance planning in one clearer operating view.' }, { label: 'Product-native workflow', title: 'Keep records and invoices where you can actually use them', body: 'Store vehicle history, spend records, and uploaded invoices in one place.' }, { label: 'Product-native workflow', title: 'See what each van is costing', body: 'Use spend visibility, benchmarking, and forecasting tools to understand where costs are moving.' }, { label: 'Partner-enabled capability / needs clear approval', title: 'Make booking decisions with better context', body: 'Where supported, FleetHive can sit closer to booking, approval, or payment-related workflow.' }]} />
      </Section>
      <Section title="Built for a handful of working vans, not for fleet-software theatre"><p>The point is fewer surprises around the vehicles your business depends on.</p></Section>
      <Section title="What the first step should feel like" eyebrow="What happens next"><ol className="list-decimal space-y-1 pl-5"><li>Tell us about your vehicles and current setup</li><li>We show the live FleetHive workflow that fits your situation</li><li>If it looks right, we move you into the next stage of setup or onboarding</li></ol></Section>
      <Section title="FAQ"><Faq items={[{ q: 'We only have a few vans. Are we too small?', a: 'The primary trade story is built around businesses with a handful of vans, especially where no dedicated fleet manager exists.' }, { q: 'Is this telematics or tracking software?', a: 'No. FleetHive is better understood as maintenance and running-cost control.' }, { q: 'Am I booking a demo or starting the product?', a: 'The safest current stance is an explicit walkthrough or assisted setup until true self-serve is confirmed.' }]} /></Section>
    </>
  );
}
