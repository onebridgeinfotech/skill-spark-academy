import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/courses";
import { siteConfig, getWhatsAppUrl } from "@/lib/siteConfig";
import {
  ArrowRight, Users, Award, Clock, CheckCircle,
  Globe, Target, Shield, Rocket, GraduationCap,
  Briefcase, Phone, Mail, Trophy, Building2,
  ChevronRight, Star, Laptop, BookOpen, BarChart3,
  TrendingUp, Zap, PlayCircle, FileCheck, Headphones,
  MonitorPlay, UserCheck, GitBranch, BadgeCheck
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/onebridge-hero.png";
import previewImage from "@/assets/onebridge-preview.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/* ─── DATA ───────────────────────────────────────────────── */

const stats = [
  { label: "Learners Trained",        value: "12,000+", sub: "Since 2017",         icon: Users      },
  { label: "Placement Rate",          value: "95%",     sub: "Within 90 days",     icon: TrendingUp },
  { label: "Corporate Clients",       value: "180+",    sub: "Across 14 sectors",  icon: Building2  },
  { label: "Avg. Salary Uplift",      value: "£18k",    sub: "Post-certification",  icon: BarChart3  },
];

const differentiators = [
  {
    icon: BadgeCheck,
    title: "Vendor-Certified Instructors",
    desc: "Every trainer holds active certifications from Microsoft, AWS, Salesforce, and CompTIA — not just academic credentials. They deliver from real production experience.",
  },
  {
    icon: GitBranch,
    title: "Live Enterprise Projects",
    desc: "Trainees work on real client briefs sourced from our corporate partners, not contrived case studies. You graduate with a verifiable portfolio of production-grade work.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Placement Team",
    desc: "A full-time placement desk with direct relationships at 250+ hiring partners. We don't just train you — we actively introduce you to employers and prep you for technical interviews.",
  },
  {
    icon: MonitorPlay,
    title: "Flexible Delivery Formats",
    desc: "Full-time bootcamp, part-time evening cohorts, weekend intensives, and self-paced e-learning — structured around working professionals, not just students.",
  },
  {
    icon: FileCheck,
    title: "Certification-Aligned Curriculum",
    desc: "All programmes map directly to globally recognised vendor certifications: AWS SAA, AZ-104, Salesforce Admin, CISSP, CEH, and more — tracked with practice exams.",
  },
  {
    icon: Headphones,
    title: "Post-Course Support",
    desc: "12 months of post-graduation support: monthly alumni clinics, Slack community access, CV refresh, and re-sit prep — because career growth doesn't stop at graduation.",
  },
];

const modalities = [
  {
    icon: Laptop,
    label: "Live Online",
    desc: "Real-time instructor-led sessions via our virtual classroom. Full interaction, labs, and breakout rooms.",
    badge: "Most Popular",
  },
  {
    icon: Building2,
    label: "In-Person (London)",
    desc: "Hands-on classroom training at our Barking HQ. Ideal for team bookings and immersive learning.",
    badge: null,
  },
  {
    icon: GitBranch,
    label: "Blended Learning",
    desc: "Combine self-paced pre-learning with live weekly workshops. Structured for working professionals.",
    badge: "Flexible",
  },
  {
    icon: BookOpen,
    label: "Self-Paced E-Learning",
    desc: "Access recorded lectures, labs, and assessments at any time. Lifetime access with mentor Q&A slots.",
    badge: null,
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Needs Assessment",
    desc: "A free 30-minute consultation with a training advisor to map your background, goals, and the right programme pathway — individual or team.",
    icon: Target,
    detail: "Free consultation",
  },
  {
    step: "02",
    title: "Structured Delivery",
    desc: "Cohort-based training with certified instructors, live labs, enterprise project briefs, and weekly progress checkpoints.",
    icon: MonitorPlay,
    detail: "8–16 weeks",
  },
  {
    step: "03",
    title: "Certification Preparation",
    desc: "Dedicated exam prep sessions, practice tests mapped to vendor blueprints, and pass-guarantee support for eligible certifications.",
    icon: BadgeCheck,
    detail: "Exam-ready",
  },
  {
    step: "04",
    title: "Placement & Career Launch",
    desc: "CV optimisation, LinkedIn profiling, technical interview coaching, and warm introductions to our 250+ hiring partner network.",
    icon: Trophy,
    detail: "250+ hiring partners",
  },
];

const segments = [
  {
    title: "Individual Learners",
    sub: "Graduates & Job Seekers",
    desc: "Structured programmes that take you from foundational knowledge to job-ready in weeks. Real projects, certifications, and placement support included.",
    icon: GraduationCap,
    cta: "View Programmes",
    to: "/courses",
    tags: ["Certification-Aligned", "Live Projects", "Placement Support"],
  },
  {
    title: "Working Professionals",
    sub: "Upskill & Promote",
    desc: "Evening and weekend cohorts built for people already in employment. Advance from junior to senior, or pivot into a higher-demand specialism.",
    icon: Briefcase,
    cta: "Book Free Consultation",
    to: "/contact",
    tags: ["Flexible Schedule", "Advanced Tracks", "LinkedIn & CV Support"],
  },
  {
    title: "Enterprise & Corporate",
    sub: "Team Training Solutions",
    desc: "Bespoke training programmes designed for your technology roadmap. We train your teams on the exact stack, tools, and processes your organisation uses.",
    icon: Building2,
    cta: "Request Corporate Quote",
    to: "/contact",
    tags: ["Custom Curriculum", "On-site or Online", "Volume Licensing"],
    highlight: true,
  },
];

const outcomes = [
  { role: "Cloud Engineer",             salary: "£55k – £80k",  cert: "AWS / Azure",      growth: "+42%" },
  { role: "DevOps Specialist",          salary: "£60k – £90k",  cert: "DevOps Pro",        growth: "+38%" },
  { role: "Salesforce Developer",       salary: "£50k – £75k",  cert: "Salesforce Cert",   growth: "+35%" },
  { role: "AI / ML Engineer",           salary: "£65k – £100k", cert: "Industry Portfolio", growth: "+51%" },
  { role: "Cybersecurity Analyst",      salary: "£45k – £70k",  cert: "CISSP / CEH",       growth: "+40%" },
  { role: "Full-Stack Developer",       salary: "£50k – £80k",  cert: "Portfolio Projects", growth: "+33%" },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Associate Director",
    company: "Google",
    outcome: "Promoted within 6 months",
    text: "The project-led approach mirrors exactly what industry demands. My team now actively recruits Ismart Skills graduates because they arrive production-ready.",
    avatar: "AM",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    role: "DevOps Architect",
    company: "Barclays",
    outcome: "Salary increased by £22k",
    text: "I went from a support role to a DevOps Architect in under a year. The AWS and Kubernetes training was genuinely enterprise-grade — not watered-down bootcamp content.",
    avatar: "SK",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    role: "Senior AI Engineer",
    company: "IBM",
    outcome: "Hired in 5 weeks after graduation",
    text: "The gap between academic theory and production engineering is finally bridged here. The LLM Masterclass is the best AI training I've seen in the UK market.",
    avatar: "RS",
    rating: 5,
  },
  {
    name: "Priya Das",
    role: "Full-Stack Tech Lead",
    company: "Microsoft",
    outcome: "From junior to lead in 14 months",
    text: "Ismart Skills graduates don't just write code — they think architecturally. The mentorship from active industry professionals is what sets this apart from everything else.",
    avatar: "PD",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Cloud Security Specialist",
    company: "KPMG",
    outcome: "CISSP certified, hired immediately",
    text: "The CISSP track was the most rigorous preparation I encountered outside a dedicated enterprise programme. Passed first attempt and received two job offers within a week.",
    avatar: "VS",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    role: "Product & Technology Manager",
    company: "Amazon",
    outcome: "+£28k salary increase",
    text: "The integration of technical depth with business thinking is precisely what global tech firms look for. This is not a bootcamp — it is professional development at enterprise level.",
    avatar: "AI",
    rating: 5,
  },
];

const categories = [
  "All Programmes",
  "Cloud & Infrastructure",
  "DevOps & SRE",
  "Data Science & AI",
  "Cybersecurity",
  "Full-Stack Dev",
  "Salesforce",
];

const categoryMap: Record<string, string[]> = {
  "Cloud & Infrastructure": ["Cloud"],
  "DevOps & SRE":           ["DevOps"],
  "Data Science & AI":      ["Data", "Artificial"],
  "Cybersecurity":          ["Cyber", "Security"],
  "Full-Stack Dev":         ["Web"],
  "Salesforce":             ["Salesforce"],
};

/* ─── PARTNER LOGOS — inline SVGs, no CDN dependency ─────── */

type Partner =
  | { name: string; kind: "svg"; path: string; hex: string; size: number }
  | { name: string; kind: "wordmark"; color: string; size: number }
  | { name: string; kind: "mswin" };

const partnerLogos: Partner[] = [
  // ── Available in simple-icons (paths extracted from npm package) ──
  {
    name: "Google", kind: "svg", hex: "4285F4", size: 22,
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
  },
  {
    name: "Accenture", kind: "svg", hex: "A100FF", size: 24,
    path: "m.66 16.95 13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z",
  },
  {
    name: "BT", kind: "svg", hex: "6400AA", size: 26,
    path: "M12.589 7.91h5.977v1.753H16.56v6.41h-1.97v-6.41h-2zM12 22.523C6.193 22.523 1.477 17.807 1.477 12 1.477 6.193 6.193 1.477 12 1.477c5.807 0 10.523 4.716 10.523 10.523 0 5.807-4.716 10.523-10.523 10.523M12 24c6.626 0 12-5.374 12-12S18.626 0 12 0C5.379 0 0 5.374 0 12s5.379 12 12 12M9.97 13.574c0-.516-.321-.865-.873-.865h-1.32v1.702h1.32c.552 0 .874-.345.874-.837m-.24-3.276c0-.433-.275-.732-.745-.732h-1.21v1.486h1.21c.47 0 .746-.299.746-.754m2.231 3.372c0 1.546-1.09 2.402-2.65 2.402H5.834V7.91h3.249c1.573 0 2.64.805 2.64 2.277 0 .672-.298 1.27-.781 1.634.552.326 1.021.947 1.021 1.85Z",
  },
  // ── Microsoft: rendered via "mswin" kind in PartnerLogo ──
  { name: "Microsoft", kind: "mswin" },
  // ── Amazon wordmark in brand color ────────────────────────
  { name: "Amazon",    kind: "wordmark", color: "#232F3E", size: 20 },
  // ── IBM wordmark ─────────────────────────────────────────
  { name: "IBM",       kind: "wordmark", color: "#0530AD", size: 22 },
  // ── Salesforce wordmark ───────────────────────────────────
  { name: "Salesforce",kind: "wordmark", color: "#00A1E0", size: 16 },
  // ── Barclays SVG ─────────────────────────────────────────
  {
    name: "Barclays", kind: "svg", hex: "00AEEF", size: 22,
    path: "M21.043 3.629a3.235 3.235 0 0 0-1.048-.54 3.076 3.076 0 0 0-.937-.144h-.046c-.413.006-1.184.105-1.701.71a1.138 1.138 0 0 0-.226 1.023.9.9 0 0 0 .555.63s.088.032.228.058c-.04.078-.136.214-.136.214-.179.265-.576.612-1.668.612h-.063c-.578-.038-1.056-.189-1.616-.915-.347-.45-.523-1.207-.549-2.452-.022-.624-.107-1.165-.256-1.6-.1-.29-.333-.596-.557-.742a2.55 2.55 0 0 0-.694-.336c-.373-.12-.848-.14-1.204-.146-.462-.01-.717.096-.878.292-.027.033-.032.05-.068.046-.084-.006-.272-.006-.328-.006-.264 0-.498.043-.721.09-.47.1-.761.295-1.019.503-.12.095-.347.365-.399.653a.76.76 0 0 0 .097.578c.14-.148.374-.264.816-.266.493-.002 1.169.224 1.406.608.336.547.27.99.199 1.517-.183 1.347-.68 2.048-1.783 2.203-.191.026-.38.04-.56.04-.776 0-1.34-.248-1.63-.716a.71.71 0 0 1-.088-.168s.087-.021.163-.056c.294-.14.514-.344.594-.661.09-.353.004-.728-.23-1.007-.415-.47-.991-.708-1.713-.708-.4 0-.755.076-.982.14-.908.256-1.633.947-2.214 2.112-.412.824-.7 1.912-.81 3.067-.11 1.13-.056 2.085.019 2.949.124 1.437.363 2.298.708 3.22a15.68 15.68 0 0 0 1.609 3.19c.09-.094.15-.161.308-.318.188-.19.724-.893.876-1.11.19-.27.51-.779.664-1.147l.15.119c.16.127.252.348.249.592-.003.215-.053.464-.184.922a8.703 8.703 0 0 1-.784 1.818c-.189.341-.27.508-.199.584.015.015.038.03.06.026.116 0 .34-.117.585-.304.222-.17.813-.672 1.527-1.675a15.449 15.449 0 0 0 1.452-2.521c.12.046.255.101.317.226a.92.92 0 0 1 .08.563c-.065.539-.379 1.353-.63 1.94-.425.998-1.208 2.115-1.788 2.877-.022.03-.163.197-.186.227.9.792 1.944 1.555 3.007 2.136.725.408 2.203 1.162 3.183 1.424.98-.262 2.458-1.016 3.184-1.424a17.063 17.063 0 0 0 3.003-2.134c-.05-.076-.13-.158-.183-.23-.582-.763-1.365-1.881-1.79-2.875-.25-.59-.563-1.405-.628-1.94-.028-.221-.002-.417.08-.565.033-.098.274-.218.317-.226.405.884.887 1.73 1.452 2.522.715 1.003 1.306 1.506 1.527 1.674.248.191.467.304.586.304a.07.07 0 0 0 .044-.012c.094-.069.017-.234-.183-.594a9.003 9.003 0 0 1-.786-1.822c-.13-.456-.18-.706-.182-.92-.004-.246.088-.466.248-.594l.15-.118c.155.373.5.919.665 1.147.15.216.685.919.876 1.11.156.158.22.222.308.32a15.672 15.672 0 0 0 1.609-3.19c.343-.923.583-1.784.707-3.222.075-.86.128-1.81.02-2.948-.101-1.116-.404-2.264-.81-3.068-.249-.49-.605-1.112-1.171-1.566z",
  },
  // ── KPMG / Deloitte / Capgemini wordmarks ─────────────────
  { name: "KPMG",      kind: "wordmark", color: "#00338D", size: 20 },
  { name: "Deloitte",  kind: "wordmark", color: "#86BC25", size: 18 },
  { name: "Capgemini", kind: "wordmark", color: "#0070AD", size: 16 },
  // ── Wipro SVG ─────────────────────────────────────────────
  {
    name: "Wipro", kind: "svg", hex: "341C53", size: 22,
    path: "M15.5415 12.0352c0-.8754-.69-1.5851-1.541-1.5851-.8513 0-1.5415.7097-1.5415 1.585 0 .8757.6902 1.5854 1.5416 1.5854.851 0 1.541-.7097 1.541-1.5853zm-1.541.837c-.4373 0-.7927-.3755-.7927-.837 0-.4611.3554-.8366.7928-.8366.437 0 .7923.3755.7923.8366 0 .4615-.3554.837-.7923.837zm-9.5842-2.2084l-.9272 2.8733c-.0148.046-.0665.0835-.1152.0835h-.084c-.0484 0-.1064-.0352-.1287-.078l-.95-1.8242-.9496 1.8243c-.0225.0427-.0803.0779-.1289.0779h-.0842c-.0483 0-.1002-.0374-.115-.0835L.006 10.6638c-.0222-.0693.019-.126.0915-.126h.5677c.0483 0 .1002.0379.115.084l.4688 1.452.8047-1.5458c.0223-.0428.0804-.0779.1289-.0779H2.24c.0485 0 .1063.0351.1289.0779l.805 1.5458.4685-1.452c.0148-.0461.0667-.084.1152-.084h.5672c.0727 0 .1138.0567.0915.126zm1.368 2.7367a.1323.1323 0 01-.1321.1322h-.5726a.1321.1321 0 01-.132-.1322v-2.7304c0-.0729.059-.1322.132-.1322h.5726a.1323.1323 0 01.1322.1322v2.7304zm.7409-2.7305v4.3155c0 .0733.059.1322.1321.1322h.5725a.1318.1318 0 00.132-.1322v-1.497c.2426.085.5106.132.7927.132.8024 0 1.4531-.7097 1.4531-1.5853 0-.8754-.6507-1.5851-1.4531-1.5851-.394 0-.751.171-1.0127.4487l-.0002-.0004-.1018-.2777c-.0167-.0453-.07-.0829-.1183-.0829h-.2642a.1321.1321 0 00-.1321.1322zm.8365.9c.1376-.2239.3713-.3714.6373-.3714.4235 0 .7667.3746.7667.8366 0 .4622-.3432.837-.7667.837-.2396 0-.4599-.063-.6373-.1694V11.57zm3.5755 1.9627h-.5723a.1321.1321 0 01-.1321-.1321V10.67c0-.0729.059-.1322.1321-.1322h.2642c.0483 0 .1016.0376.1183.0829l.1018.2777s.3195-.4483.87-.4483c.5507 0 .6172.1897.5712.2947-.0463.1047-.1714.3878-.197.4454-.0254.058-.0903.099-.1772.0657-.087-.0335-.5128-.1723-.8469.2329v1.9118a.1323.1323 0 01-.1321.1321z",
  },
];

/* ─── PARTNER LOGO COMPONENT ────────────────────────────── */

function PartnerLogo({ partner }: { partner: Partner }) {
  const wrapper = "shrink-0 opacity-55 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center";

  if (partner.kind === "mswin") {
    return (
      <div className={wrapper}>
        <svg viewBox="0 0 88 19" height={19} aria-label="Microsoft">
          <rect x="0" y="0" width="9" height="9" fill="#F25022"/>
          <rect x="9.5" y="0" width="9" height="9" fill="#7FBA00"/>
          <rect x="0" y="9.5" width="9" height="9" fill="#00A4EF"/>
          <rect x="9.5" y="9.5" width="9" height="9" fill="#FFB900"/>
          <text x="23" y="14.5" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="13" fontWeight="300" fill="#737373" letterSpacing="0.01em">Microsoft</text>
        </svg>
      </div>
    );
  }

  if (partner.kind === "wordmark") {
    return (
      <div className={wrapper}>
        <span style={{
          color: partner.color,
          fontSize: `${partner.size}px`,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
          fontFamily: "Inter, sans-serif",
        }}>
          {partner.name}
        </span>
      </div>
    );
  }

  // kind === "svg"
  return (
    <div className={wrapper}>
      <svg
        viewBox="0 0 24 24"
        aria-label={partner.name}
        style={{ height: `${partner.size}px`, width: "auto" }}
      >
        <path fill={`#${partner.hex}`} d={partner.path} />
      </svg>
    </div>
  );
}

/* ─── COMPONENT ─────────────────────────────────────────── */

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All Programmes");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const filteredCourses = courses.filter((c) => {
    if (selectedCategory === "All Programmes") return true;
    const keywords = categoryMap[selectedCategory] ?? [];
    return keywords.some((kw) => c.category.toLowerCase().includes(kw.toLowerCase()) || c.name.toLowerCase().includes(kw.toLowerCase()));
  }).slice(0, 8);

  return (
    <div className="overflow-x-hidden bg-white">

      {/* Reading progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-[#FF9E0D] z-[200] origin-left" style={{ scaleX }} />

      {/* ══════════════════════════════════════════════════════
          HERO — Enterprise-first positioning
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#003a75] pt-20">
        {/* Background layers */}
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#002d5c] via-[#003a75] to-[#004890]" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#FF9E0D]/6 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full py-16 md:py-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

            {/* Left — 3 cols */}
            <div className="lg:col-span-3 space-y-8">

              {/* Trust badge */}
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/8 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-semibold">Now Enrolling — Q3 2026 Cohort</span>
                  </div>
                  <div className="w-px h-4 bg-white/15" />
                  <span className="text-white/50 text-xs">12,000+ Professionals Trained</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}>
                <h1 className="text-white font-heading font-bold leading-[1.1] tracking-tight">
                  <span className="text-5xl md:text-6xl lg:text-[4.5rem]">Enterprise-Grade</span>
                  <br />
                  <span className="text-5xl md:text-6xl lg:text-[4.5rem]">IT Training.</span>
                  <br />
                  <span className="text-[#FF9E0D] text-5xl md:text-6xl lg:text-[4.5rem]">Real-World Results.</span>
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-white/65 text-lg leading-relaxed max-w-xl"
              >
                Vendor-certified programmes in Cloud, DevOps, AI, Cybersecurity, and Salesforce. Delivered by active industry professionals with guaranteed placement support and a 95% employment rate within 90 days.
              </motion.p>

              {/* CTAs */}
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }} className="flex flex-wrap gap-4">
                <Link to="/courses">
                  <Button className="h-12 px-8 bg-[#FF9E0D] hover:bg-[#e68d08] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all text-sm gap-2">
                    Browse Programmes <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="h-12 px-8 bg-transparent border border-white/25 text-white hover:bg-white/10 font-semibold rounded-lg text-sm gap-2 transition-all">
                    <PlayCircle className="w-4 h-4" /> Book Free Consultation
                  </Button>
                </Link>
              </motion.div>

              {/* Trust ticks */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                {[
                  "Microsoft Learning Partner",
                  "AWS Authorised Training",
                  "CPD Accredited",
                  "95% Placement Rate",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-white/55 text-xs font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FF9E0D] flex-shrink-0" />
                    {t}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — 2 cols: Hero image + floating stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="hidden lg:block lg:col-span-2 relative"
            >
              <div className="relative mx-auto max-w-[380px]">
                <div className="absolute -inset-4 bg-[#FF9E0D]/10 rounded-3xl blur-2xl" />
                <img src={heroImage} alt="Enterprise IT Training" className="relative z-10 w-full drop-shadow-2xl rounded-2xl animate-float" />

                {/* Stat card 1 */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-8 bg-white rounded-xl p-4 shadow-2xl z-20 border border-slate-100 min-w-[150px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-md bg-emerald-50 flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Placement Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-[#004890] font-heading">95%</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Within 90 days of graduation</div>
                </motion.div>

                {/* Stat card 2 */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="absolute -top-4 -right-6 bg-white rounded-xl p-4 shadow-2xl z-20 border border-slate-100"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-md bg-amber-50 flex items-center justify-center">
                      <Award className="w-3.5 h-3.5 text-[#FF9E0D]" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Avg Salary Uplift</span>
                  </div>
                  <div className="text-2xl font-bold text-[#004890] font-heading">£18,000</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Post-certification average</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48L1440 48L1440 24C1200 0 960 0 720 24C480 48 240 48 0 24L0 48Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HIRING PARTNERS MARQUEE
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 overflow-hidden" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
          <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            Our graduates are hired at
          </p>
        </div>
        {/* Scrolling ticker */}
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-16 items-center shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...partnerLogos, ...partnerLogos].map((p, i) => (
              <PartnerLogo key={i} partner={p} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          KEY METRICS
      ══════════════════════════════════════════════════════ */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #004890 0%, #002d5c 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl p-6 text-center cursor-default transition-all duration-300 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors" style={{ background: "rgba(255,158,13,0.18)" }}>
                  <s.icon className="w-5 h-5 text-[#FF9E0D]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold font-heading text-white leading-none mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-white/80 mb-1">{s.label}</div>
                <div className="text-xs text-white/40">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHO WE SERVE — Individual / Professional / Enterprise
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="accent-divider mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Training Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#004890] mt-3 leading-tight">
              Built for Every Stage of Your Career
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Whether you're an individual learner, a working professional seeking advancement, or an enterprise team building capability — we have a programme engineered for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((seg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative rounded-2xl p-8 flex flex-col overflow-hidden ${
                  seg.highlight
                    ? "shadow-2xl"
                    : "border border-slate-100 shadow-md hover:shadow-xl transition-shadow duration-300"
                }`}
                style={seg.highlight ? {
                  background: "linear-gradient(145deg, #004890 0%, #002d5c 100%)",
                } : i === 0 ? {
                  background: "linear-gradient(145deg, #f0f7ff 0%, #ffffff 100%)",
                } : {
                  background: "linear-gradient(145deg, #fffbf0 0%, #ffffff 100%)",
                }}
              >
                {/* Decorative circle accent */}
                <div className={`absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-10 ${
                  seg.highlight ? "bg-white" : i === 0 ? "bg-[#004890]" : "bg-[#FF9E0D]"
                }`} />

                {seg.highlight && (
                  <div className="absolute top-5 right-5">
                    <span className="px-3 py-1 bg-[#FF9E0D] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow">
                      Corporate
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-13 h-13 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  seg.highlight
                    ? "bg-white/15 text-white"
                    : i === 0
                    ? "bg-[#004890] text-white"
                    : "bg-[#FF9E0D] text-white"
                }`}>
                  <seg.icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] mb-1.5" style={{
                  color: seg.highlight ? "#FF9E0D" : i === 0 ? "#004890" : "#FF9E0D"
                }}>
                  {seg.sub}
                </span>
                <h3 className={`text-xl font-bold font-heading mb-3 leading-snug ${
                  seg.highlight ? "text-white" : "text-slate-900"
                }`}>
                  {seg.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 flex-grow ${
                  seg.highlight ? "text-white/70" : "text-slate-500"
                }`}>
                  {seg.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {seg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-semibold"
                      style={seg.highlight ? {
                        background: "rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.85)",
                        border: "1px solid rgba(255,255,255,0.18)",
                      } : i === 0 ? {
                        background: "rgba(0,72,144,0.08)",
                        color: "#004890",
                        border: "1px solid rgba(0,72,144,0.15)",
                      } : {
                        background: "rgba(255,158,13,0.1)",
                        color: "#b86e00",
                        border: "1px solid rgba(255,158,13,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={seg.to}>
                  <button className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                    seg.highlight
                      ? "bg-[#FF9E0D] hover:bg-[#e68d08] text-white shadow-lg shadow-orange-500/25"
                      : i === 0
                      ? "bg-[#004890] hover:bg-[#003570] text-white shadow-md shadow-blue-900/20"
                      : "bg-[#FF9E0D] hover:bg-[#e68d08] text-white shadow-md shadow-orange-400/20"
                  }`}>
                    {seg.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY Ismart Skills — 6 Differentiators
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 60%, #f8faff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
            <div>
              <div className="accent-divider mb-4" />
              <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Why Ismart Skills</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#004890] mt-3 leading-tight">
                Not a Bootcamp.<br />A Career Investment.
              </h2>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed">
              The IT training market is flooded with low-quality, pre-recorded content that leaves learners unprepared. Ismart Skills delivers the opposite — live instruction from practitioners, certification-aligned content, and a placement desk that stays with you long after graduation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-7 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #e8f0fc 0%, #d0e3ff 100%)" }}>
                  <d.icon className="w-5 h-5 text-[#004890]" />
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">{d.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
                <div className="mt-5 h-0.5 rounded-full transition-all duration-300 group-hover:w-full w-8"
                  style={{ background: "linear-gradient(90deg, #004890, #FF9E0D)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LEARNING MODALITIES
      ══════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #002d5c 0%, #004890 50%, #003a75 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Delivery Formats</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-3">
              Learn the Way That Works for You
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modalities.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                {m.badge && (
                  <span className="absolute -top-2.5 left-4 px-2.5 py-0.5 rounded-full text-white text-[9px] font-bold uppercase tracking-wide shadow-md"
                    style={{ background: "#FF9E0D" }}>
                    {m.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(255,158,13,0.15)" }}>
                  <m.icon className="w-5 h-5 text-[#FF9E0D]" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{m.label}</h4>
                <p className="text-xs text-white/55 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FEATURED PROGRAMMES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="accent-divider mb-4" />
              <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Programmes</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#004890] mt-3 leading-tight">
                Industry-Recognised Training Tracks
              </h2>
              <p className="text-slate-500 mt-3 text-sm max-w-lg">
                All programmes are aligned to vendor certification blueprints and mapped to current job market demands.
              </p>
            </div>
            <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-[#004890] hover:text-[#FF9E0D] transition-colors whitespace-nowrap shrink-0 group">
              View full catalogue <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "text-white shadow-md shadow-blue-900/20"
                    : "text-slate-600 hover:text-slate-800"
                }`}
                style={selectedCategory === cat ? {
                  background: "linear-gradient(135deg, #004890 0%, #002d5c 100%)"
                } : {
                  background: "#f1f5f9",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCourses.map((c, i) => (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <CourseCard course={c} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAREER OUTCOMES / SALARY TABLE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #001a3a 0%, #003166 50%, #001a3a 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#004890" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: "#FF9E0D" }} />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Career Outcomes</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3">
              What Our Graduates Earn
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              UK market salary ranges for roles our graduates land within 90 days. Figures based on 2025 graduate placement data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-white font-semibold text-base leading-snug">{o.role}</h4>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap ml-3"
                    style={{ background: "rgba(52,211,153,0.15)", color: "#34d399", border: "1px solid rgba(52,211,153,0.2)" }}>
                    {o.growth}
                  </span>
                </div>
                <div className="text-3xl font-bold font-heading text-[#FF9E0D] mb-3">{o.salary}</div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF9E0D]/60" />
                  <span className="text-white/40 text-xs">{o.cert}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/20 text-xs mt-10">
            Salary ranges sourced from LinkedIn Salary Insights, Glassdoor UK, and ITJobsWatch (2025). Growth % reflects median uplift vs pre-training role.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LEARNING JOURNEY — 4-Step Process
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="accent-divider mb-4" />
              <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#004890] mt-3 leading-tight">
                From Enrolment to Employment
              </h2>
              <p className="text-slate-500 mt-5 text-base leading-relaxed">
                A structured, accountable process that doesn't end at graduation. We stay with you until you're employed — and beyond.
              </p>

              {/* Quick-stats row */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "Free",  label: "Initial Consultation" },
                  { value: "12mo",  label: "Post-Course Support"  },
                  { value: "250+",  label: "Hiring Partners"      },
                ].map((q) => (
                  <div key={q.label} className="rounded-2xl p-4 text-center"
                    style={{ background: "linear-gradient(135deg, #004890 0%, #002d5c 100%)" }}>
                    <div className="text-xl font-bold font-heading text-white">{q.value}</div>
                    <div className="text-[10px] text-white/55 font-medium mt-1 leading-snug">{q.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-block mt-8">
                <Button className="text-white font-semibold px-6 h-11 rounded-xl shadow-lg gap-2 transition-all hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #FF9E0D 0%, #e68d08 100%)" }}>
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {journeySteps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl transition-all duration-300 group hover:shadow-lg hover:-translate-x-1"
                  style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, #004890 0%, #002d5c 100%)" }}>
                      <s.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-slate-800 font-bold text-base">{s.title}</h4>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                        style={{ background: "rgba(255,158,13,0.1)", color: "#b86e00", border: "1px solid rgba(255,158,13,0.2)" }}>
                        {s.detail}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="flex-shrink-0 font-bold text-2xl font-heading self-start text-[#004890]/10 group-hover:text-[#FF9E0D]/30 transition-colors">
                    {s.step}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MISSION / ABOUT SNAPSHOT
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #f0f7ff 0%, #e8f0fc 50%, #f0f7ff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-6 rounded-2xl" style={{ background: "rgba(0,72,144,0.07)" }} />
              <img src={previewImage} alt="Live training session" className="relative z-10 w-full rounded-2xl shadow-xl border-4 border-white" />
              <div className="absolute -bottom-5 -right-5 rounded-2xl p-5 shadow-2xl text-white z-20 border-4 border-white"
                style={{ background: "linear-gradient(135deg, #004890 0%, #002d5c 100%)" }}>
                <Zap className="w-6 h-6 text-[#FF9E0D] mb-2" />
                <div className="text-sm font-bold leading-tight">9 Years of<br />Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <div>
                <div className="accent-divider mb-4" />
                <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Our Mission</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#004890] mt-3 leading-tight">
                  Closing the Gap Between Education and Enterprise
                </h2>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                Founded in London in 2017, Ismart Skills was built around a single premise: the IT skills gap is not a talent problem — it's a training problem. Academic courses produce graduates who know theory. Employers need professionals who can ship production code, manage live infrastructure, and work in agile enterprise teams from day one.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Every programme we design is mapped to real job descriptions, delivered by instructors who hold active vendor certifications and work on production systems — not just career educators.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Vendor-Certified Trainers",
                  "Live Enterprise Projects",
                  "Certification-Aligned Content",
                  "Guaranteed Placement Support",
                  "12-Month Post-Course Access",
                  "Corporate Training Solutions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 group">
                    <CheckCircle className="w-4 h-4 text-[#FF9E0D] flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <Link to="/about">
                  <Button className="bg-[#004890] hover:bg-[#003870] text-white font-semibold gap-2 rounded-lg transition-all text-sm px-5 h-10">
                    Our Story <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/why-choose-us">
                  <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-[#004890] hover:text-[#004890] font-semibold gap-2 rounded-lg text-sm px-5 h-10">
                    Why Choose Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #003166 0%, #004890 40%, #005bb0 70%, #003166 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="w-10 h-0.5 bg-[#FF9E0D] mb-4" />
              <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Alumni Outcomes</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mt-3">
                Real Results from Real Graduates
              </h2>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF9E0D] text-[#FF9E0D]" />
              ))}
              <span className="text-white/60 text-sm ml-2">4.9 / 5 avg rating</span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-5 py-4 px-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[360px] bg-white/6 border border-white/10 rounded-xl p-6 hover:bg-white/9 transition-all"
              >
                {/* Outcome badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 mb-4">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-[10px] font-bold">{t.outcome}</span>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-[#FF9E0D] text-[#FF9E0D]" />
                  ))}
                </div>

                <p className="text-white/75 text-sm leading-relaxed mb-5">"{t.text}"</p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div className="w-9 h-9 rounded-full bg-[#FF9E0D] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/45 text-xs mt-0.5">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT & ENQUIRY FORM
      ══════════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8faff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: info */}
            <div className="space-y-10">
              <div>
                <div className="accent-divider mb-4" />
                <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Get Started</span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#004890] mt-3 leading-tight">
                  Speak with a Training Advisor
                </h2>
                <p className="text-slate-500 mt-4 text-base leading-relaxed max-w-md">
                  Whether you're enquiring for yourself or your team, our advisors will recommend the right programme, walk you through funding options, and answer any questions — no pressure.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-5">
                {[
                  { icon: Mail,  label: "Email",            value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "bg-[#004890]" },
                  { icon: Phone, label: "Phone",            value: siteConfig.phone.display, href: `tel:${siteConfig.phone.tel}`, color: "bg-green-600" },
                  { icon: Phone, label: "WhatsApp",         value: siteConfig.whatsapp.display, href: getWhatsAppUrl(), color: "bg-green-600" },
                  { icon: Globe, label: "London Training HQ", value: siteConfig.address.full, href: siteConfig.address.mapsUrl, color: "bg-[#FF9E0D]" },
                  { icon: Clock, label: "Office Hours",     value: "Monday – Saturday, 9:00 AM – 7:00 PM GMT", href: "#", color: "bg-slate-600" },
                ].map((item) => (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-start gap-4 group">
                    <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-slate-700 font-medium text-sm leading-relaxed">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap gap-5 pt-5 border-t border-slate-100">
                {[
                  { icon: Shield,    label: "Certified Trainers"      },
                  { icon: Award,     label: "Industry Accredited"     },
                  { icon: UserCheck, label: "Dedicated Placement Team"},
                  { icon: Clock,     label: "Avg. Response: 12 mins"  },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                    <t.icon className="w-3.5 h-3.5 text-[#004890]" />
                    {t.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-[#003a75] rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF9E0D]" />
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold font-heading text-white mb-1">Enquire or Enrol</h3>
                <p className="text-white/45 text-sm mb-8">We'll match you to the right programme and respond within 12 minutes.</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-semibold text-white/45 uppercase tracking-wide">Full Name *</label>
                      <input type="text" placeholder="Jane Smith" className="field" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-semibold text-white/45 uppercase tracking-wide">Email Address *</label>
                      <input type="email" placeholder="jane@company.com" className="field" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-semibold text-white/45 uppercase tracking-wide">Phone Number</label>
                      <input type="tel" placeholder="+44 7700 000000" className="field" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-semibold text-white/45 uppercase tracking-wide">Enquiry Type</label>
                      <select className="field">
                        <option value="">Select...</option>
                        <option>Individual Training</option>
                        <option>Corporate / Team Training</option>
                        <option>Apprenticeship Levy</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold text-white/45 uppercase tracking-wide">Programme of Interest</label>
                    <select className="field">
                      <option value="">Select a programme</option>
                      <option>AWS Solutions Architect</option>
                      <option>Microsoft Azure Administration</option>
                      <option>DevOps & SRE Engineering</option>
                      <option>Data Science & MLOps</option>
                      <option>Generative AI & LLM Masterclass</option>
                      <option>Cybersecurity & Ethical Hacking</option>
                      <option>Salesforce Admin & Dev</option>
                      <option>Full-Stack Development</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold text-white/45 uppercase tracking-wide">Message (optional)</label>
                    <textarea rows={3} placeholder="Tell us about your background, goals, or team size..." className="field resize-none" />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-[#FF9E0D] hover:bg-[#e68d08] text-white font-semibold rounded-lg shadow-md gap-2 text-sm mt-1">
                    Submit Enquiry <ArrowRight className="w-4 h-4" />
                  </Button>

                  <p className="text-center text-white/25 text-xs flex items-center justify-center gap-1.5">
                    <Shield className="w-3 h-3" />
                    Your data is protected under our Privacy Policy. We never share your details.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA BANNER
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FF9E0D 0%, #ffb94a 50%, #FF9E0D 100%)" }}>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15" style={{ background: "rgba(0,45,92,0.4)" }} />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
                Ready to transform your career — or your team?
              </h2>
              <p className="text-white/80 mt-2 text-base">
                Join 12,000+ professionals who chose Ismart Skills. The next cohort starts soon.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link to="/courses">
                <Button className="h-12 px-7 font-bold rounded-xl shadow-xl transition-all text-sm gap-2 hover:scale-105"
                  style={{ background: "#002d5c", color: "#ffffff" }}>
                  Browse Courses <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="h-12 px-7 font-semibold rounded-xl text-sm transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff", border: "2px solid rgba(255,255,255,0.6)" }}>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
