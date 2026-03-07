import { Faq, Hero, Section } from '../components/site';

export default function StartPage() {
  return (
    <>
      <Hero title="Book your FleetHive walkthrough" body="Use this first step to show your setup, understand the live workflow that fits your vehicles, and see what the next stage looks like before you commit further." primary={{ href: '#', label: 'Book your walkthrough' }} secondary={{ href: '#', label: 'Contact support' }} />
      <Section title="What happens next"><ol className="list-decimal space-y-1 pl-5"><li>You share a few details about your vehicles and current setup</li><li>FleetHive shows the live workflow most relevant to your situation</li><li>You see the next stage clearly: assisted setup, onboarding start, or another defined step</li></ol></Section>
      <Section title="What we need from you first"><ul className="list-disc space-y-1 pl-5"><li>Business name</li><li>Number of vehicles</li><li>Vehicle type or setup</li><li>Best contact details</li><li>Short note on what you want help getting under control</li></ul></Section>
      <Section title="What this step does and does not commit you to"><p>This page explains material commitment only where confirmed. It does not introduce unresolved pricing, trial, or member language.</p></Section>
      <Section title="FAQ"><Faq items={[{ q: 'Am I starting the product or requesting a walkthrough?', a: 'This page answers that directly in the headline and first body copy.' }, { q: 'How much information do I need to give?', a: 'Only information required to move into the next stage.' }]} /></Section>
    </>
  );
}
