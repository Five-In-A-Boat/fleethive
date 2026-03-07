import { Hero, Section } from '../components/site';

export const metadata = { robots: { index: false, follow: false }, title: 'FleetHive household route (conditional)' };

export default function HouseholdPage() {
  return (
    <>
      <Hero title="Keep household vehicle admin in one clearer place." body="This route is implemented as a conditional page and should only be promoted when route, CTA path, screenshots, and proof stack are confirmed for launch." primary={{ href: '/start', label: 'Get started (only if true)' }} secondary={{ href: '/how-it-works', label: 'See how FleetHive works' }} />
      <Section title="Route publication guardrail"><p>Do not publish this route prominently unless household launch readiness is confirmed across product path and approved assets.</p></Section>
    </>
  );
}
