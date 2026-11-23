import { Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import InstagramIcon from "./ui/InstagramIcon";
import AzenwebLogo from "./ui/AzenwebLogo";
import { company, nav, social } from "../data/content";

function LinkedInIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 15, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050507] pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Top Section: Logo & Pitch */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-14 border-b border-white/[0.08]">
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <AzenwebLogo size="lg" showTagline={true} />
            <p className="mt-3 max-w-sm text-sm text-[#8E8D94] leading-relaxed">
              We design, engineer, and deploy high-performance software, websites,
              mobile apps, and custom operational platforms for ambitious enterprises.
            </p>
            <div className="mt-2 flex items-center gap-2.5">
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#8E8D94] transition-colors hover:border-white hover:text-white"
              >
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-xs font-bold text-white">WA</span>
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#8E8D94] transition-colors hover:border-white hover:text-white"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://linkedin.com/company/azenweb"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#8E8D94] transition-colors hover:border-white hover:text-white"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href="https://x.com/azenweb"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#8E8D94] transition-colors hover:border-white hover:text-white"
              >
                <XIcon size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#525157]">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[#8E8D94] transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Office & Call */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#525157]">
              Headquarters
            </span>
            <div className="flex flex-col gap-3 text-sm text-[#8E8D94]">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-white shrink-0" />
                <span>{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-white shrink-0" />
                <span>{company.email}</span>
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin size={15} className="text-white shrink-0" />
                <span>{company.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Directly Inspired by Image 3 Banner) */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-[#525157]">
            © {new Date().getFullYear()} Azenweb. Digital products, built to scale.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8E8D94] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
