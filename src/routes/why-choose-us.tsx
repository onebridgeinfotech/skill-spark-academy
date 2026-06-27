import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Briefcase, BookOpen, Clock, Headphones, X } from "lucide-react";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Ismart Skills" },
      { name: "description", content: "Discover what makes Ismart Skills the preferred IT training platform for professionals worldwide." },
      { property: "og:title", content: "Why Choose Ismart Skills" },
      { property: "og:description", content: "Industry experts, live projects, certifications, and placement support." },
    ],
  }),
  component: WhyChooseUsPage,
});

const advantages = [
  { icon: Users,      title: "Expert Instructors",      desc: "Learn from certified professionals with 10+ years of hands-on industry experience at top tech companies." },
  { icon: Briefcase,  title: "Real-World Projects",     desc: "Build a professional portfolio with industry-relevant projects that demonstrate your expertise to employers." },
  { icon: Award,      title: "Recognised Certifications", desc: "Earn globally recognised certifications that validate your skills and boost your resume." },
  { icon: BookOpen,   title: "Updated Curriculum",      desc: "Our courses are regularly updated to reflect the latest industry trends and technologies." },
  { icon: Clock,      title: "Flexible Learning",       desc: "Choose from live classes, self-paced modules, or weekend batches that fit your schedule." },
  { icon: Headphones, title: "24/7 Support",            desc: "Get round-the-clock mentor support and community access throughout your learning journey." },
];

const comparison = [
  { feature: "Live instructor-led classes",      us: true,  others: false },
  { feature: "Real-world projects",              us: true,  others: false },
  { feature: "Placement assistance",             us: true,  others: false },
  { feature: "24/7 mentor support",             us: true,  others: false },
  { feature: "Globally recognised certifications", us: true, others: true },
  { feature: "Flexible scheduling",              us: true,  others: false },
  { feature: "Corporate training programs",      us: true,  others: false },
  { feature: "Community access",                 us: true,  others: true  },
];

function WhyChooseUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20" style={{ background: "linear-gradient(135deg, #002d5c 0%, #004890 60%, #0057ab 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "#FF9E0D" }} />
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: "rgba(255,158,13,0.15)", color: "#FF9E0D", border: "1px solid rgba(255,158,13,0.25)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E0D]" /> The Ismart Skills Difference
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">Why Choose Ismart Skills</h1>
            <p className="text-white/60 text-lg">We don't just teach tech — we build careers.</p>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#004890] mt-3">What Sets Us Apart</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Everything you need to succeed in the tech industry, all in one place.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(90deg, #004890, #FF9E0D)" }} />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #e8f0fc 0%, #d0e3ff 100%)" }}>
                  <a.icon className="w-7 h-7 text-[#004890]" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#004890] mb-2">{a.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #002d5c 0%, #004890 50%, #003a75 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-3">Ismart Skills vs Others</h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto text-sm">See how we stack up against typical online learning platforms.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="grid grid-cols-3 px-6 py-4 text-sm font-bold"
              style={{ background: "rgba(255,158,13,0.15)" }}>
              <span className="text-white">Feature</span>
              <span className="text-center text-[#FF9E0D]">Ismart Skills</span>
              <span className="text-center text-white/50">Others</span>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className="grid grid-cols-3 px-6 py-3.5 text-sm transition-colors"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-white/80 font-medium">{row.feature}</span>
                <span className="text-center">{row.us
                  ? <CheckCircle2 className="w-5 h-5 text-[#FF9E0D] mx-auto" />
                  : <X className="w-5 h-5 text-red-400/60 mx-auto" />}
                </span>
                <span className="text-center">{row.others
                  ? <CheckCircle2 className="w-5 h-5 text-white/40 mx-auto" />
                  : <X className="w-5 h-5 text-red-400/30 mx-auto" />}
                </span>
              </div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="text-white font-semibold px-8 h-12 rounded-xl shadow-xl gap-2 hover:scale-105 transition-all"
                style={{ background: "linear-gradient(135deg, #FF9E0D 0%, #e68d08 100%)" }}>
                Start Learning Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
