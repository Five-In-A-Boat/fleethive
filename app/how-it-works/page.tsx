import { CardGrid, Faq, Hero, Section } from '../components/site';

export default function HowItWorksPage() {
  return (
    <>
      <Hero title="See what FleetHive helps you stay on top of now." body="FleetHive is safest to understand as a maintenance and running-cost control layer: one place to keep dates, records, spend visibility, and booking-related decisions clearer." primary={{ href: '/start', label: 'Book a walkthrough' }} secondary={{ href: '/who-its-for', label: 'See who it’s for' }} />
      <Section title="From fragmented vehicle admin to one clearer operating picture"><p>This page explains live workflow in present tense. It does not imply broad category breadth the product does not safely support.</p></Section>
      <Section title="What you can do now"><CardGrid cards={[{ label: 'Product-native workflow', title: 'Keep reminders and key dates visible', body: 'Bring MOT, maintenance, and other vehicle-admin dates into one clearer view.' }, { label: 'Product-native workflow', title: 'Keep records where they are usable', body: 'Store vehicle history and supporting documents so information is not locked in inboxes and folders.' }, { label: 'Product-native workflow', title: 'See costs with more context', body: 'Use spend visibility, benchmarking, and forecasting tools to understand what each vehicle is costing.' }, { label: 'Product-native workflow', title: 'Keep invoice and spend history easier to review', body: 'Bring spend records and invoice uploads into a structure you can work from.' }]} /></Section>
      <Section title="Some service-related actions may sit closer to partner-enabled workflow"><p>Where supported, FleetHive may connect more closely to booking, approval, or payment-related actions. Public copy should stay precise here.</p></Section>
      <Section title="What not to expect from the current safe story"><ul className="list-disc space-y-1 pl-5"><li>Not telematics, dispatch, or route optimisation software</li><li>Not a command-centre platform for large enterprise fleets</li><li>Not a promise that future modules are live today</li></ul></Section>
      <Section title="FAQ"><Faq items={[{ q: 'Is everything on this page live today?', a: 'Only live present-tense workflow should appear. Future modules must be clearly separated or removed.' }, { q: 'Is FleetHive just a booking layer?', a: 'No. Booking-related steps are one part of wider ongoing control across reminders, records, and spend.' }]} /></Section>
    </>
  );
}
