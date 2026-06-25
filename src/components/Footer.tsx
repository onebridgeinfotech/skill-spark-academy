import { Link } from "@tanstack/react-router";
import {
  Zap, Mail, Phone, MapPin,
  Twitter, Linkedin, Youtube, Instagram,
  Shield, ChevronRight, ArrowUpRight, Clock, Globe
} from "lucide-react";

const solutions = [
  { label: "IT Training Programmes",  to: "/courses"       },
  { label: "Corporate Training",       to: "/services"      },
  { label: "Self-Paced Learning",      to: "/services"      },
  { label: "Mentorship Network",       to: "/why-choose-us" },
  { label: "Placement Support",        to: "/why-choose-us" },
];

const company = [
  { label: "About EslandIT",   to: "/about"         },
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

const accreditations = [
  "Microsoft Certified Partner",
  "AWS Training Partner",
  "Salesforce Authorised",
  "CPD Accredited",
];

const socials = [
  { Icon: Linkedin, href: "#", label: "LinkedIn"  },
  { Icon: Twitter,  href: "#", label: "Twitter/X" },
  { Icon: Youtube,  href: "#", label: "YouTube"   },
  { Icon: Instagram,href: "#", label: "Instagram" },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">

          {/* Brand column — 4 cols */}
          <div className="xl:col-span-4 space-y-7">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                <Zap className="w-5 h-5 text-[#004890] fill-[#004890]" />
              </div>
              <div className="leading-none">
                <div className="font-heading font-bold text-lg text-white tracking-tight">
                  EslandIT<span className="text-[#FF9E0D]">Trainings</span>
                </div>
                <div className="text-[10px] font-medium text-white/35 uppercase tracking-widest mt-0.5">
                  London, United Kingdom
                </div>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
              A leading UK-based IT training institution delivering industry-standard programmes that bridge the gap between academia and enterprise employment.
            </p>

            {/* Contact details */}
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:info@eslanditsolutions.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF9E0D]/20 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#FF9E0D]" />
                  </div>
                  info@eslanditsolutions.com
                </a>
              </li>
              <li>
                <a href="tel:02038190333" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF9E0D]/20 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#FF9E0D]" />
                  </div>
                  0203 8190 333
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF9E0D]" />
                </div>
                <span className="leading-relaxed">
                  Suite-G, Weller House,<br />
                  58–60 Longbridge Rd, Barking,<br />
                  London, IG11 8RT
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/6 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#FF9E0D]" />
                </div>
                Mon–Sat: 9:00 AM – 7:00 PM GMT
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-2 pt-1">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center text-white/40 hover:text-[#FF9E0D] hover:bg-white/10 hover:border-[#FF9E0D]/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions — 2 cols */}
          <div className="xl:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF9E0D] mb-5">Solutions</p>
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
          </div>

          {/* Company — 2 cols */}
          <div className="xl:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF9E0D] mb-5">Company</p>
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
          </div>

          {/* Programmes — 2 cols */}
          <div className="xl:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF9E0D] mb-5">Programmes</p>
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
          </div>

          {/* Newsletter + Accreditations — 2 cols */}
          <div className="xl:col-span-2 space-y-8">
            {/* Newsletter */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF9E0D] mb-5">Stay Informed</p>
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
            </div>

            {/* Accreditations */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FF9E0D] mb-4">Accreditations</p>
              <div className="space-y-2">
                {accreditations.map((a) => (
                  <div key={a} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9E0D] flex-shrink-0" />
                    <span className="text-xs text-white/45 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <p className="text-white/30 text-xs order-2 md:order-1">
              &copy; {year} EslandIT Trainings Ltd. All rights reserved. Registered in England & Wales.
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

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-white/30 hover:text-white/70 text-xs transition-colors order-3 group"
            >
              <Globe className="w-3.5 h-3.5" />
              London, UK
              <span className="text-white/15">·</span>
              <span className="group-hover:underline">Back to top ↑</span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
