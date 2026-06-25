import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, Users, Briefcase, Shield, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — EslandIT Trainings" },
      { name: "description", content: "Founded in London in 2017, EslandIT Trainings bridges the gap between academic theory and enterprise employment through industry-standard IT training." },
      { property: "og:title", content: "About EslandIT Trainings" },
      { property: "og:description", content: "Our story of professional evolution and technical excellence." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "500+",  label: "Graduates Placed" },
  { value: "95%",  label: "Placement Rate"   },
  { value: "250+", label: "Hiring Partners"  },
  { value: "9yrs", label: "Years of Excellence" },
];

const values = [
  { icon: Zap,      title: "Precision",  desc: "Every module is engineered for maximum industrial relevance — no theoretical filler, only skills employers demand." },
  { icon: Briefcase,title: "Velocity",   desc: "Accelerating the path from beginner to job-ready professional in the shortest responsible timeline." },
  { icon: Users,    title: "Network",    desc: "Direct integration with 250+ global hiring partners for guaranteed placement support." },
];

function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #001a3a 0%, #003166 50%, #004890 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#FF9E0D" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: "#004890" }} />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: "rgba(255,158,13,0.15)", color: "#FF9E0D", border: "1px solid rgba(255,158,13,0.25)" }}>
              <Shield className="w-3.5 h-3.5" /> Governance & Vision
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-white leading-tight mb-6">
              About<br /><span className="text-[#FF9E0D]">EslandIT.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              "We don't just teach technology — we facilitate professional evolution. Our mission is to engineer the skills that command global salaries."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #004890 0%, #002d5c 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="text-4xl font-extrabold font-heading text-white mb-2">{s.value}</div>
                <div className="text-xs font-semibold text-white/50 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="accent-divider mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-[#004890] mt-3 leading-tight mb-8">
              Closing the Gap Between Education & Enterprise
            </h2>
            <div className="space-y-5 text-slate-600 text-base leading-relaxed">
              <p>Founded in London in 2017, EslandIT Trainings was built around a single premise: the IT skills gap is not a talent problem — it's a training problem.</p>
              <p>Academic courses produce graduates who know theory. Employers need professionals who can ship production code, manage live infrastructure, and work in agile enterprise teams from day one.</p>
              <p>Every programme we design is mapped to real job descriptions, delivered by instructors who hold active vendor certifications and work on production systems.</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Vendor-Certified Trainers",
                "Live Enterprise Projects",
                "Certification-Aligned Content",
                "Guaranteed Placement Support",
                "12-Month Post-Course Access",
                "Corporate Training Solutions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF9E0D] flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="inline-block mt-8">
              <Button className="text-white font-semibold px-6 h-11 rounded-xl shadow-md gap-2 hover:shadow-lg transition-all"
                style={{ background: "linear-gradient(135deg, #004890 0%, #002d5c 100%)" }}>
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl p-12 text-white shadow-2xl relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #004890 0%, #002d5c 100%)" }}>
              <Globe className="w-16 h-16 text-[#FF9E0D] mb-8 opacity-40" />
              <h3 className="text-3xl font-extrabold font-heading leading-tight mb-6">
                Global Placement<br />Network.
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">Strategically located in London to facilitate global technical transfers and placement into top-tier hiring networks across the UK, Europe, and beyond.</p>
              <div className="grid grid-cols-2 gap-3">
                {["UK & Europe", "United States", "UAE & Gulf", "Asia Pacific"].map((r) => (
                  <div key={r} className="flex items-center gap-2 text-sm font-medium text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9E0D]" /> {r}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #001a3a 0%, #003166 50%, #001a3a 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Governing Principles</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white mt-3">
              The EslandIT <span className="text-[#FF9E0D]">Code.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all"
                  style={{ background: "rgba(255,158,13,0.15)" }}>
                  <v.icon className="w-7 h-7 text-[#FF9E0D]" />
                </div>
                <h4 className="text-xl font-bold font-heading text-white mb-3">{v.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
