import { Link } from "@tanstack/react-router";
import {
  Linkedin, Youtube, Instagram,
  Shield, ChevronRight, ArrowUpRight
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/siteConfig";

type SocialIconProps = {
  className?: string;
  style?: React.CSSProperties;
};

function XIcon({ className, style }: SocialIconProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const solutions = [
  { label: "IT Training Programmes",  to: "/courses"       },
  { label: "Corporate Training",       to: "/services"      },
  { label: "Self-Paced Learning",      to: "/services"      },
  { label: "Mentorship Network",       to: "/why-choose-us" },
  { label: "Placement Support",        to: "/why-choose-us" },
];

const company = [
  { label: `About ${siteConfig.nameCompact}`, to: "/about" },
  { label: "Why Choose Us",    to: "/why-choose-us" },
  { label: "Success Stories",  to: "/about"         },
  { label: "Contact Us",       to: "/contact"       },
  { label: "Privacy Policy",   to: "/privacy"       },
];

const programmes = [
  { label: "Artificial Intelligence",  to: "/courses" },
  { label: "Salesforce Cloud CRM",     to: "/courses" },
  { label: "DevOps & Cloud Eng.",      to: "/courses" },
  { label: "Data Science & MLOps",     to: "/courses" },
  { label: "Cyber Security",           to: "/courses" },
  { label: "Full-Stack Development",   to: "/courses" },
];

const socials: Array<{
  Icon: React.ComponentType<SocialIconProps>;
  href: string;
  label: string;
  color: string;
}> = [
  { Icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { Icon: XIcon, href: "#", label: "X", color: "#000000" },
  { Icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
  { Icon: Instagram, href: "#", label: "Instagram", color: "#E4405F" },
];

const footerSectionTitleClass =
  "text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF9E0D] mb-5 leading-none whitespace-nowrap";

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex min-w-0 flex-col">
      <h4 className={footerSectionTitleClass}>{title}</h4>
      {children}
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#002d5c] text-white">

      {/* ── Top CTA band ──────────────────────────────────── */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white leading-snug">
                Ready to advance your IT career?
              </h3>
              <p className="text-white/50 text-sm mt-1">
                Speak with an advisor today — average response time 12 minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF9E0D] hover:bg-[#e68d08] text-white text-sm font-semibold transition-colors shadow-md"
              >
                Explore Courses <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/8 hover:bg-white/12 border border-white/12 text-white text-sm font-semibold transition-colors"
              >
                Book Free Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-14">

          {/* Brand column */}
          <div className="w-full lg:w-[300px] lg:shrink-0 space-y-7">
            {/* Logo */}
            <div className="space-y-2">
              <Link
                to="/"
                aria-label={`${siteConfig.name} — Home`}
                className="inline-block rounded-xl transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9E0D]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#002d5c]"
              >
                <BrandLogo variant="footer" />
              </Link>
              <div className="text-[10px] font-medium text-white/35 uppercase tracking-widest">
                London, United Kingdom
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
              A leading UK-based IT training institution delivering industry-standard programmes that bridge the gap between academia and enterprise employment.
            </p>

            {/* Social icons */}
            <div className="flex gap-2 pt-1">
              {socials.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white flex items-center justify-center hover:scale-105 hover:shadow-md transition-all"
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns + newsletter — equal-width grid */}
          <div className="grid flex-1 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-x-10 lg:items-start">

          <FooterSection title="Solutions">
            <ul className="space-y-3">
              {solutions.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#FF9E0D] transition-opacity -ml-1 flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Company">
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#FF9E0D] transition-opacity -ml-1 flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Programmes">
            <ul className="space-y-3">
              {programmes.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#FF9E0D] transition-opacity -ml-1 flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="Stay Informed">
            <p className="text-xs text-white/40 leading-relaxed mb-4">
              Industry insights, new courses, and career tips — delivered monthly.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Work email address"
                className="w-full bg-white/6 border border-white/10 rounded-lg py-2.5 px-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#FF9E0D]/60 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-3.5 rounded-lg bg-[#004890] hover:bg-[#0057ab] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="flex items-center gap-1.5 text-white/25 text-[11px] mt-2.5">
              <Shield className="w-3 h-3" /> No spam. Unsubscribe anytime.
            </p>
          </FooterSection>

          </div>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <p className="text-white/30 text-xs order-2 md:order-1">
              &copy; {year} {siteConfig.nameLegal}. All rights reserved. Registered in England & Wales.
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-1 order-1 md:order-2">
              {[
                { label: "Privacy Policy",   to: "/privacy"  },
                { label: "Security Policy",  to: "/security" },
                { label: "Terms of Service", to: "/privacy"  },
              ].map((l, i, arr) => (
                <span key={l.label} className="flex items-center gap-1">
                  <Link to={l.to} className="text-white/35 hover:text-white/70 text-xs transition-colors whitespace-nowrap">
                    {l.label}
                  </Link>
                  {i < arr.length - 1 && <span className="text-white/15 text-xs select-none px-0.5">·</span>}
                </span>
              ))}
            </div>

            {/* Designed by */}
            <p className="text-xs order-3 whitespace-nowrap text-[#FF9E0D]">
              Designed by{" "}
              <a
                href="https://www.onebridgeinfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-[#ffb84d] transition-colors underline-offset-2 hover:underline"
              >
                Onebridge Infotech
              </a>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
