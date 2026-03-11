/**
 * All static content for the FleetHive marketing site.
 * Edit this file to change copy, pricing, features, or testimonials.
 */

export const LOGO_BASE_PATH = "/images/";

export const PARTNER_LOGOS = [
  { name: "Halfords",                  dark: "halfords_dark.svg",   light: "halfords_light.svg",   height: 28 },
  { name: "Hi-Q",                      dark: "hiq_dark.svg",        light: "hiq_light.svg",        height: 32 },
  { name: "Bosch Car Service",         dark: "bosch_dark.svg",      light: "bosch_light.svg",      height: 32 },
  { name: "ATS Euromaster",            dark: "euromaster_dark.svg", light: "euromaster_light.svg", height: 30 },
  { name: "In'n'Out Autocentres",      dark: "innout_dark.svg",     light: "innout_light.svg",     height: 34 },
  { name: "National Tyres & Autocare", dark: "national_dark.svg",   light: "national_light.svg",   height: 42 },
];

export const TICKER_WORDS = ["surprises.", "overspend.", "stress."];

export const NAV_LINKS = [
  { label: "How it works", href: "#product" },
  { label: "Pricing",      href: "#pricing" },
  { label: "Book a call",  href: "https://calendly.com/fleethive", external: true },
];

export const HERO_AVATARS = [
  { initials: "JM", bg: "#FFC83D", fg: "#0A0800" },
  { initials: "SB", bgDark: "#7DA6FF", bgLight: "#2F6FED", fg: "#FFFFFF" },
  { initials: "RT", bgDark: "#4FB37F", bgLight: "#147A4B", fg: "#FFFFFF" },
];

export const STATS = [
  { value: "14",   unit: "days", label: "average notice before a missed date",  detail: "Enough time to book, not scramble" },
  { value: "< 5",  unit: "min",  label: "to add any vehicle to FleetHive",      detail: "Start knowing before you finish your coffee" },
  { value: "Zero", unit: "",     label: "vans missed on a reminder",             detail: "Because the date reaches you first" },
];

export const PRODUCT_TABS = [
  {
    label: "Reminders",
    heading: "Never arrive at an expired MOT.",
    description: "FleetHive alerts you before service, MOT, insurance, and tax dates become problems. Configure how far ahead you want to know — and get on with the job.",
    bullets: [
      "MOT and service reminders",
      "Insurance and tax dates",
      "Custom lead times — 7, 14, or 30 days",
      "Alert reaches you before it's urgent",
    ],
  },
  {
    label: "Costs",
    heading: "Know what each van is costing you.",
    description: "See what every vehicle costs month by month, compare against the previous period, and make smarter decisions about repairs, replacements, and suppliers.",
    bullets: [
      "Monthly spend per vehicle",
      "Previous month comparison",
      "Fuel, service, repair breakdown",
      "Spot the outliers before they escalate",
    ],
  },
  {
    label: "Records",
    heading: "Everything stored, nothing lost.",
    description: "Service history, invoices, insurance documents — all attached to the right vehicle. No more hunting through email or paper files when a garage asks for history.",
    bullets: [
      "Full service history per vehicle",
      "Invoice and receipt store",
      "Insurance and tax document storage",
      "Shareable with garages on request",
    ],
  },
];

export const VALUE_PILLARS = [
  {
    num: "01",
    title: "Service and MOT dates",
    body: "Know what's due when, across every van. Reminders reach you before a date becomes a problem.",
    bullets: ["MOT and service reminders", "Insurance and tax dates", "Configurable lead times"],
  },
  {
    num: "02",
    title: "Running costs, per vehicle",
    body: "See what each van is actually costing. Compare month to month. Make supplier decisions with real data.",
    bullets: ["Cost breakdown per vehicle", "Invoice and service history", "Month-on-month comparison"],
  },
  {
    num: "03",
    title: "Records in one place",
    body: "Service records, invoices, and documents stay with the vehicle — not in inboxes, memory, or folders.",
    bullets: ["Full service history", "Invoice and document store", "Accessible when you need it"],
  },
];

export const TESTIMONIALS = {
  primary: {
    quote: "Knowing exactly what each van costs per month changed how I look at replacing the older ones. I had no idea there was that much difference between a van that looks fine and one that's quietly costing me.",
    attribution: "S. Barrett, Director · Plumbing & heating · 4 vans · Bristol",
  },
  secondary: [
    {
      quote: "We had MOT reminders going to three different inboxes and still nearly missed one. FleetHive fixed that inside a week — van would have been off the road for three days.",
      attribution: "J. Mitchell, Owner · Electrical contractor · 6 vans · Cardiff",
    },
    {
      quote: "Setup took about twenty minutes for all four vans. I wasn't expecting it to be that quick. The records view alone is worth it — everything's just there.",
      attribution: "R. Thompson, Director · Groundworks contractor · 4 vans · Leeds",
    },
  ],
};

export const PRICING_TIERS = [
  {
    name: "Free",
    price: "£0",
    subtitle: "1 vehicle",
    features: ["Action Calendar", "Easy service bookings", "Core maintenance tracking"],
    featured: false,
    ctaLabel: "Get started free",
  },
  {
    name: "Pro",
    price: "£12.95",
    subtitle: "2–5 vehicles · inc. VAT",
    features: ["Everything in Free", "Full spend benchmarks", "Cost forecasting", "Multi-vehicle control"],
    featured: true,
    ctaLabel: "Start free trial",
    trialNote: "14-day free trial · No card needed",
  },
  {
    name: "Fleet",
    price: "£19.85",
    subtitle: "6–10 vehicles · inc. VAT",
    extraNote: "+£1.50 inc. VAT per extra vehicle",
    features: ["Everything in Pro", "Multi-user access", "Extended vehicle range"],
    featured: false,
    ctaLabel: "Get started free",
  },
];

export const GOOD_FIT = [
  "You run 2 to 15 vans or work vehicles",
  "You're an electrician, plumber, groundworker, or similar trades business",
  "Vehicle admin currently lives in your head, a spreadsheet, or someone's inbox",
  "You've nearly missed (or have missed) a service date or MOT",
  "You want to know what each van is actually costing without a spreadsheet",
];

export const NOT_FIT = [
  "You're running a fleet of 50+ vehicles (you likely need a full TMS)",
  "You need GPS tracking or telematics (not what we do)",
  "You need driver scheduling or route planning",
  "You need compliance tools for HGV or PSV operators",
];

export const FOOTER_LINKS = ["Privacy", "Terms", "Contact"];

export const URLS = {
  login: "https://vloot.in/auth/login",
  onboarding: "https://vloot.in/onboarding/new",
  booking: "https://calendly.com/fleethive",
};
