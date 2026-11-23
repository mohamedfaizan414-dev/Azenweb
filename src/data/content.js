export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
<<<<<<< HEAD
  { label: "Why Us", href: "#why-us" },
=======
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

<<<<<<< HEAD
export const company = {
  name: "Azenweb",
  tagline: "SOFTWARE / PRODUCTS / SOLUTIONS",
  headline: "Build. Innovate. Grow.",
  subheadline:
    "Your trusted software development partner for modern business solutions. We design, engineer, and deploy digital products that work as hard as your business does.",
  phone: "+91 95446 61551",
  rawPhone: "9544661551",
  whatsappUrl:
    "https://wa.me/919544661551?text=Hi%20Azenweb%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  email: "azenweb4@gmail.com",
  location: "Kerala, India",
  instagram: "https://instagram.com/azenweb",
  instagramHandle: "@azenweb",
  website: "https://azenweb.com",
};

export const stats = [
  { value: 5, suffix: "+", label: "Shipped Live Products", icon: "rocket" },
  { value: 5, suffix: "", label: "Diverse Industries Served", icon: "shield-check" },
  { value: 100, suffix: "%", label: "Include Custom Admin Console", icon: "layout-dashboard" },
  { value: 24, suffix: "h", label: "Direct Founder Reply Guarantee", icon: "message-circle" },
=======
export const stats = [
  { value: 2, suffix: "", label: "Full-scale builds shipped", icon: "rocket" },
  { value: 100, suffix: "%", label: "Projects include an admin dashboard", icon: "layout-dashboard" },
  { value: 6, suffix: " wks", label: "Average time to launch", icon: "timer" },
  { value: 24, suffix: "h", label: "Reply time on new enquiries", icon: "message-circle" },
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
];

export const services = [
  {
<<<<<<< HEAD
    title: "Websites & Web Apps",
    icon: "pen-tool",
    short: "Fast, responsive sites & portals that convert visitors.",
    detail:
      "Modern Next.js & React architectures with high-performance SEO, mobile-first responsiveness, slick Three.js/motion interactions, and conversion-optimized funnels.",
  },
  {
    title: "Mobile Applications",
    icon: "smartphone",
    short: "Polished iOS and Android apps built for daily use.",
    detail:
      "Cross-platform React Native apps and progressive web applications engineered for seamless gestures, offline capability, push notifications, and app store readiness.",
  },
  {
    title: "AI Solutions & Integrations",
    icon: "sparkles",
    short: "Practical automation & AI features that save real hours.",
    detail:
      "Prompt-to-form generation, custom LLM pipelines, intelligent document parsing, automated workflows, and AI assistants tailored to your company's core operations.",
  },
  {
    title: "Custom Software & Dashboards",
    icon: "layout-dashboard",
    short: "Consoles, tools & backends shaped around your workflow.",
    detail:
      "Control your entire business without calling a developer. Role-based access, inventory tracking, analytics, booking engines, and CRM integrations built in.",
  },
  {
    title: "Full-Stack Architecture",
    icon: "code-2",
    short: "Production-grade infrastructure built to scale smoothly.",
    detail:
      "Robust PostgreSQL, MongoDB, serverless API design, payment gateways (Stripe, Razorpay), authentication systems, and cloud deployments on Vercel and AWS.",
  },
  {
    title: "End-to-End Launch & Growth",
    icon: "trending-up",
    short: "From initial discovery through deployment and beyond.",
    detail:
      "Launch day is day one, not day done. We handle domain setup, security audits, performance profiling, post-launch maintenance, and continuous feature expansion.",
  },
];

export const industries = [
  "Travel & Tourism",
  "Healthcare & SaaS",
  "Social Networks",
  "E-Commerce & Retail",
  "Digital Marketing & Media",
=======
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
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
];

export const work = [
  {
    name: "PackGo",
<<<<<<< HEAD
    industry: "Travel & Tourism",
    tag: "Travel · Web Platform",
    tags: ["Travel & Tourism", "Booking Engine", "Curator Console", "Responsive App"],
    url: "https://packgo-three.vercel.app/",
    blurb:
      "A booking platform for handcrafted journeys. Travel agency owners publish curated holiday packages, and travelers discover, shortlist and book trips with a dedicated curator console.",
    features: [
      "Search by destination with popular picks & themed collections",
      "Wishlist, trips and custom profile for every traveler",
      "Curator Console: bookings pipeline, itineraries & user directory",
      "Responsive mobile app view with light and dark mode support",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion"],
    status: "Live Platform",
  },
  {
    name: "Formix",
    industry: "Healthcare SaaS",
    tag: "SaaS · Form Builder",
    tags: ["Healthcare SaaS", "AI Form Engine", "Hospital Systems", "Multi-tenant"],
    url: "https://formix-saas-beta.vercel.app/",
    blurb:
      "Chart the form once. Render it everywhere. Drag-and-drop and AI form builder designed for hospital paperwork, patient admissions, clinical assessments, and real-time response tracking.",
    features: [
      "Drag-and-drop builder with a library of 40+ clinical fields",
      "One-prompt AI form generation for rapid clinical chart deployment",
      "Draft, preview, publish and full immutable version history",
      "Super admin dashboard for forms, hospitals, patients & audit logs",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Groq AI", "dnd-kit"],
    status: "Live Beta",
  },
  {
    name: "Sparc Club",
    industry: "Social Networks",
    tag: "Social · Mobile & Web App",
    tags: ["Founder Network", "Web + Mobile", "Round Tables", "Real-time"],
    url: "https://thesparcclub.com/",
    blurb:
      "Where connections create opportunities. A private social network for entrepreneurs and verified founders to connect, share milestones, discover collabs, and hold Round Table discussion rooms.",
    features: [
      "Founder feed with stories, milestones, polls and collaborative updates",
      "Discover and connect with verified entrepreneurs across industries",
      "Real-time messaging, founder profiles and bookmarked resources",
      "Round Table discussion rooms for topic-based founder mastermind groups",
    ],
    stack: ["React", "React Native", "Firebase", "Node.js", "Stripe"],
    status: "Live Network",
  },
  {
    name: "Hasn Al Wadi",
    industry: "E-Commerce",
    tag: "E-Commerce · UAE Market",
    tags: ["E-Commerce", "UAE Retail", "Pantry Essentials", "WhatsApp Ordering"],
    url: "https://hasn-al-wadi-nu.vercel.app/",
    blurb:
      "Good ingredients make every meal feel like home. Online store for Hasn Al Wadi Flour Mill in Umm Al Quwain, UAE. Customers browse 9 pantry staples across 4 categories with basket and direct concierge ordering.",
    features: [
      "Product catalogue featuring rice, flour, spices and pulses",
      "Category filters, instant product search and price calculation",
      "Basket and direct WhatsApp ordering pipeline for UAE customers",
      "Warm, brand-led visual design optimized for Gulf regional shoppers",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel", "WhatsApp API"],
    status: "Live Store",
  },
  {
    name: "Mahsa Media",
    industry: "Digital Marketing",
    tag: "Marketing · Brand Website",
    tags: ["Creative Studio", "3D WebGL", "Kerala & GCC", "High Impact"],
    url: "https://mahsamedia.com/",
    blurb:
      "Marketing that earns its attention. Cinematic dark brand site for a premier digital marketing studio serving Kerala and the GCC, trusted by clients including partners of Tata Motors and Ather Energy.",
    features: [
      "Cinematic animated brand intro featuring a dynamic 3D logo reveal",
      "Clear editorial sections for client work, services, studio and process",
      "Bold, high-contrast typography engineered for mobile clarity",
      "Fast, high-conversion inquiry funnel built for corporate acquisitions",
    ],
    stack: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    status: "Live Studio",
=======
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
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
  },
];

export const process = [
  {
    step: "Discover",
<<<<<<< HEAD
    detail: "We learn your business, your target users, and your commercial goals through a focused kickoff session.",
  },
  {
    step: "Design",
    detail: "Clean, high-converting interfaces and interactive prototypes, approved with you before code begins.",
  },
  {
    step: "Build",
    detail: "Engineered to be fast, secure, mobile-first, and easy to extend, with transparent milestone check-ins.",
  },
  {
    step: "Launch",
    detail: "Zero-downtime deployment, production testing on real devices, and full handover with custom admin keys.",
  },
  {
    step: "Grow",
    detail: "Ongoing support, security patches, performance tuning, and feature iterations so your software scales.",
=======
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
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
  },
];

export const differentiators = [
  {
<<<<<<< HEAD
    icon: "rocket",
    title: "Real products, already live",
    detail: "Five shipped products across five different industries that you and your clients can test right now.",
  },
  {
    icon: "smartphone",
    title: "Web, mobile & admin in one team",
    detail: "Websites, mobile apps, databases, and admin consoles engineered harmoniously under a single roof.",
  },
  {
    icon: "shield-check",
    title: "A clear plan before we start",
    detail: "Scope, milestones, and written quotes upfront — honest timelines with absolutely no surprise invoices.",
  },
  {
    icon: "message-square",
    title: "Direct line to the builders",
    detail: "You talk directly with the engineers and designers shaping your product, never an account manager relay.",
=======
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
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
  },
];

export const commitments = [
  {
<<<<<<< HEAD
    title: "Full dashboard & code ownership",
    detail: "You receive the keys — self-manage your content, database entries, and brand assets from day one.",
  },
  {
    title: "Transparent scope & pricing",
    detail: "You review the exact roadmap and fixed cost in writing. Zero hidden fees, zero surprise additions.",
  },
  {
    title: "Built to hold up in production",
    detail: "Production auth, relational databases, clean error handling — not a prototype dressed up as software.",
  },
  {
    title: "24-Hour founder response",
    detail: "Call, WhatsApp, or message us — you speak with the leadership team with guaranteed same-day attention.",
=======
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
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
  },
];

export const pricing = [
  {
    name: "Starter Site",
    price: "From ₹15k",
<<<<<<< HEAD
    desc: "A focused, ultra-fast brand site to establish credibility, rank on Google, and capture client inquiries fast.",
    features: [
      "Up to 5 pages, 100% mobile-first responsive",
      "Interactive 3D / motion accents & contact funnel",
      "SEO setup, OpenGraph cards & analytics",
      "14-day turnaround with revision window",
=======
    desc: "A focused marketing site to get a business online and looking credible fast.",
    features: [
      "Up to 5 pages, fully responsive",
      "Contact form & basic SEO setup",
      "1 round of revisions included",
      "2 weeks average turnaround",
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
    ],
    highlight: false,
  },
  {
<<<<<<< HEAD
    name: "Growth Platform",
    price: "From ₹45k",
    desc: "A custom web application with interactive databases, client portals, and the self-management console you need.",
    features: [
      "Everything in Starter, plus:",
      "Custom Admin Dashboard to manage all content",
      "Database, secure authentication & booking/leads",
      "Payment gateway integration (Stripe / Razorpay)",
      "4–6 week delivery with staging previews",
=======
    name: "Growth Package",
    price: "From ₹45k",
    desc: "A custom web app with the features your business actually runs on.",
    features: [
      "Everything in Starter, plus:",
      "Admin dashboard to self-manage content",
      "Database, auth & booking/lead flows",
      "4–6 week average turnaround",
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
    ],
    highlight: true,
  },
  {
<<<<<<< HEAD
    name: "Enterprise & SaaS",
    price: "Custom",
    desc: "Full-scale multi-tenant SaaS, cross-platform mobile apps, AI automation, and custom corporate systems.",
    features: [
      "Everything in Growth, plus:",
      "AI-powered features & automated business workflows",
      "Web + iOS & Android mobile application",
      "Multi-tenant & role-based permission architecture",
      "Dedicated SLAs, ongoing roadmap & scaling support",
=======
    name: "Full Platform",
    price: "Custom",
    desc: "Multi-tenant SaaS, AI integrations, and everything a full product needs.",
    features: [
      "Everything in Growth, plus:",
      "AI-powered features built into the product",
      "Multi-tenant / role-based architecture",
      "Ongoing support & feature roadmap",
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
    ],
    highlight: false,
  },
];

export const dashboardFeatures = [
<<<<<<< HEAD
  "Live milestone tracking from kickoff to launch",
  "One centralized place for documents and payment milestones",
  "Direct line to the engineering team — no lost email threads",
  "Full visibility into deployed features and upcoming roadmap sprints",
=======
  "Live project tracking, from kickoff to launch",
  "One place for invoices and payment status",
  "A direct line to the team — no lost email threads",
  "Full visibility into what's shipped and what's next",
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
];

export const social = {
  instagram: "https://instagram.com/azenweb",
<<<<<<< HEAD
  phone: "+91 95446 61551",
  email: "azenweb4@gmail.com",
=======
>>>>>>> 56792d3bb0982ac11f84e0b2dca95d6c8ff1564c
};
