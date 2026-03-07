import { Faq, Hero, Section } from '../components/site';

export default function WhoItsForPage() {
  return (
    <>
      <Hero title="Is FleetHive a fit for the way your vehicles are run today?" body="FleetHive is positioned first for trades and field-service businesses with a handful of vans." primary={{ href: '/for-trades-businesses', label: 'See FleetHive for your business' }} secondary={{ href: '/how-it-works', label: 'See how it works' }} />
      <Section title="Best fit: businesses where vehicle admin has outgrown memory"><ul className="list-disc space-y-2 pl-5"><li><strong>Growing electrical contractor:</strong> several vans, no fleet department, admin split between owner and office.</li><li><strong>Plumbing or heating business:</strong> jobs depend on van availability and decisions are too reactive.</li><li><strong>Field-service operator:</strong> small mixed fleet with need for more structure than spreadsheets.</li></ul></Section>
      <Section title="Probably not the right fit if you need these first"><ul className="list-disc space-y-1 pl-5"><li>Live vehicle tracking or route optimisation</li><li>Enterprise fleet governance across large multi-site operations</li><li>A broad one-platform-for-every-fleet-job solution</li></ul></Section>
      <Section title="FAQ"><Faq items={[{ q: 'Could FleetHive fit if we don’t call ourselves a fleet?', a: 'Yes, if you run several working vehicles and admin has started to sprawl.' }, { q: 'Why include a wrong-fit section?', a: 'Specificity helps the right visitors self-qualify and reduces mistrust later.' }]} /></Section>
    </>
  );
}
