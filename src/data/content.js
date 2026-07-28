export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 2, suffix: "", label: "Full-scale builds shipped", icon: "rocket" },
  { value: 100, suffix: "%", label: "Projects include an admin dashboard", icon: "layout-dashboard" },
  { value: 6, suffix: " wks", label: "Average time to launch", icon: "timer" },
  { value: 24, suffix: "h", label: "Reply time on new enquiries", icon: "message-circle" },
];

export const services = [
  {
    title: "Web Design",
    icon: "pen-tool",
    short: "Interfaces built to convert, not just look nice.",
    detail:
      "Wireframes through pixel-perfect UI — mobile-first layouts, motion, and copy that guides visitors straight to your CTA.",
  },
  {
    title: "Full-Stack Development",
    icon: "code-2",
    short: "Production apps, not demo code.",
    detail:
      "Next.js, TypeScript and Postgres/Mongo under the hood — auth, payments, dashboards, and APIs built to actually hold up in production.",
  },
  {
    title: "App Development",
    icon: "smartphone",
    short: "One codebase, every screen.",
    detail:
      "Responsive web apps that behave like native apps — offline states, smooth transitions, installable on any device.",
  },
  {
    title: "AI Integration",
    icon: "sparkles",
    short: "AI that does real work in your product.",
    detail:
      "Prompt-to-output features, automated form/report generation, and AI-assisted workflows wired directly into your app — not a chatbot bolted on.",
  },
  {
    title: "Admin Dashboards",
    icon: "layout-dashboard",
    short: "Run your business without calling a developer.",
    detail:
      "Add products, edit content, track submissions, manage bookings — every build ships with a dashboard your team actually controls.",
  },
  {
    title: "Maintenance & Growth",
    icon: "trending-up",
    short: "Launch day is day one, not day done.",
    detail:
      "Ongoing fixes, feature additions, performance and SEO passes — so the site keeps earning after it ships.",
  },
];

export const work = [
  {
    name: "PackGo",
    tag: "Travel SaaS",
    tags: ["Web App", "Booking", "Dashboard"],
    url: "https://packgo-three.vercel.app/",
    blurb:
      "A booking platform built for a travel agency in Punjab. Visitors browse curated travel packages and book directly, while the team manages every package, price, and itinerary themselves through a dedicated admin dashboard — no developer required.",
    features: [
      "Public package catalog with booking flow",
      "Admin dashboard to add, edit & track packages",
      "Built for a real agency, currently pre-launch",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion"],
    status: "Pre-launch",
  },
  {
    name: "Formix",
    tag: "Clinical Form SaaS",
    tags: ["SaaS", "AI", "Multi-tenant"],
    url: "https://formix-saas-beta.vercel.app/",
    blurb:
      "A private, high-level SaaS built for a healthcare client (name withheld under NDA). Teams drag-and-drop forms together — or generate one from a single prompt — send them to customers, and track every submission in real time.",
    features: [
      "Drag-and-drop builder with 40+ field types",
      "One-prompt AI form generation",
      "Multi-tenant architecture with full submission tracking",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Groq AI", "dnd-kit"],
    status: "In production",
  },
];

export const process = [
  {
    step: "Discover",
    detail: "A short call to understand your business, your users, and what launch actually needs to look like.",
  },
  {
    step: "Design",
    detail: "Wireframes and UI you approve before a single line of production code gets written.",
  },
  {
    step: "Build",
    detail: "Full-stack development with weekly check-ins — you always know exactly what's shipped.",
  },
  {
    step: "Launch",
    detail: "Deployed, tested on real devices, and handed over with a dashboard you control.",
  },
  {
    step: "Support",
    detail: "We stay on for fixes, features, and growth — launch day is day one.",
  },
];

export const differentiators = [
  {
    icon: "zap",
    title: "Fast, without cutting corners",
    detail: "Most builds ship in weeks, not quarters — because we scope tight and don't drown in revisions.",
  },
  {
    icon: "message-square",
    title: "You're never guessing",
    detail: "Direct access to the people building your product. No account managers relaying messages.",
  },
  {
    icon: "sparkles",
    title: "AI baked in where it earns its place",
    detail: "We integrate AI when it removes real work for your users — not as a marketing checkbox.",
  },
  {
    icon: "shield-check",
    title: "We don't disappear after launch",
    detail: "Every build comes with a support window and a dashboard, so you're never locked out of your own product.",
  },
];

export const commitments = [
  {
    title: "Full dashboard access",
    detail: "You get the keys — edit content, track activity, and manage your own product from day one.",
  },
  {
    title: "Transparent scope & pricing",
    detail: "You see the plan and the price before we start. No surprise invoices, no scope creep.",
  },
  {
    title: "Built to hold up in production",
    detail: "Real auth, real databases, real error handling — not a prototype dressed up as a finished product.",
  },
  {
    title: "We answer within a day",
    detail: "DM us on Instagram or drop a message below — you'll hear back within 24 hours, most days sooner.",
  },
];

export const pricing = [
  {
    name: "Starter Site",
    price: "From ₹15k",
    desc: "A focused marketing site to get a business online and looking credible fast.",
    features: [
      "Up to 5 pages, fully responsive",
      "Contact form & basic SEO setup",
      "1 round of revisions included",
      "2 weeks average turnaround",
    ],
    highlight: false,
  },
  {
    name: "Growth Package",
    price: "From ₹45k",
    desc: "A custom web app with the features your business actually runs on.",
    features: [
      "Everything in Starter, plus:",
      "Admin dashboard to self-manage content",
      "Database, auth & booking/lead flows",
      "4–6 week average turnaround",
    ],
    highlight: true,
  },
  {
    name: "Full Platform",
    price: "Custom",
    desc: "Multi-tenant SaaS, AI integrations, and everything a full product needs.",
    features: [
      "Everything in Growth, plus:",
      "AI-powered features built into the product",
      "Multi-tenant / role-based architecture",
      "Ongoing support & feature roadmap",
    ],
    highlight: false,
  },
];

export const dashboardFeatures = [
  "Live project tracking, from kickoff to launch",
  "One place for invoices and payment status",
  "A direct line to the team — no lost email threads",
  "Full visibility into what's shipped and what's next",
];

export const social = {
  instagram: "https://instagram.com/azentweb",
};
