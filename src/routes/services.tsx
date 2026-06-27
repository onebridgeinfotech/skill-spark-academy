import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, PlayCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ismart Skills" },
      { name: "description", content: "IT Trainings, Corporate Trainings, and Self-Paced Learning programs tailored to your needs." },
      { property: "og:title", content: "Training Services — Ismart Skills" },
      { property: "og:description", content: "Comprehensive IT training solutions for individuals and enterprises." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: GraduationCap,
    title: "IT Trainings",
    desc: "Instructor-led live sessions with hands-on labs and real-world projects.",
    features: ["Live online classes", "Hands-on lab access", "Real-world projects", "24/7 mentor support", "Certification preparation", "Job placement assistance"],
    accent: "#004890",
  },
  {
    icon: Building2,
    title: "Corporate Trainings",
    desc: "Custom upskilling programs designed for enterprise teams and organizations.",
    features: ["Custom curriculum design", "Flexible scheduling", "Dedicated account manager", "Progress tracking & reports", "Team assessments", "Volume discounts"],
    accent: "#002d5c",
  },
  {
    icon: PlayCircle,
    title: "Self-Paced Learning",
    desc: "Learn at your own pace with recorded sessions, quizzes, and projects.",
    features: ["Lifetime access to content", "Interactive quizzes", "Downloadable resources", "Community forum access", "Certificate on completion", "Mobile-friendly platform"],
    accent: "#FF9E0D",
  },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20" style={{ background: "linear-gradient(135deg, #002d5c 0%, #004890 60%, #0057ab 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: "#FF9E0D" }} />
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: "rgba(255,158,13,0.15)", color: "#FF9E0D", border: "1px solid rgba(255,158,13,0.25)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E0D]" /> What We Offer
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
            <p className="text-white/60 text-lg">Comprehensive training solutions for individuals and enterprises.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div style={{ direction: "ltr" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${s.accent}20 0%, ${s.accent}10 100%)` }}>
                  <s.icon className="w-8 h-8" style={{ color: s.accent }} />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#004890] mb-4">{s.title}</h2>
                <p className="text-slate-500 leading-relaxed mb-6 text-lg">{s.desc}</p>
                <Link to="/contact">
                  <Button className="text-white font-semibold gap-2 px-6 h-11 rounded-xl shadow-md hover:shadow-lg transition-all"
                    style={{ background: `linear-gradient(135deg, #004890 0%, #002d5c 100%)` }}>
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div style={{ direction: "ltr" }} className="rounded-2xl p-7 relative overflow-hidden shadow-lg"
                style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}>
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${s.accent}, #FF9E0D)` }} />
                <h4 className="font-heading font-bold text-[#004890] mb-5 text-lg">What's Included</h4>
                <ul className="space-y-3.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#FF9E0D]" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
