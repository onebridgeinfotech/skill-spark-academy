import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, PlayCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — OneBridge Infotech" },
      { name: "description", content: "IT Trainings, Corporate Trainings, and Self-Paced Learning programs tailored to your needs." },
      { property: "og:title", content: "Training Services — OneBridge Infotech" },
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
  },
  {
    icon: Building2,
    title: "Corporate Trainings",
    desc: "Custom upskilling programs designed for enterprise teams and organizations.",
    features: ["Custom curriculum design", "Flexible scheduling", "Dedicated account manager", "Progress tracking & reports", "Team assessments", "Volume discounts"],
  },
  {
    icon: PlayCircle,
    title: "Self-Paced Learning",
    desc: "Learn at your own pace with recorded sessions, quizzes, and projects.",
    features: ["Lifetime access to content", "Interactive quizzes", "Downloadable resources", "Community forum access", "Certificate on completion", "Mobile-friendly platform"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="section-padding text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta-foreground/10 text-cta-foreground text-xs font-bold mb-5 border border-cta-foreground/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cta" /> What We Offer
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-cta-foreground mb-4">Our Services</h1>
            <p className="text-cta-foreground/60 text-lg">Comprehensive training solutions for individuals and enterprises.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div style={{ direction: "ltr" }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-cta/10 text-primary flex items-center justify-center mb-5">
                  <s.icon className="w-8 h-8" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{s.desc}</p>
                <Link to="/contact"><Button variant="cta" size="lg">Get Started <ArrowRight className="w-4 h-4" /></Button></Link>
              </div>
              <div style={{ direction: "ltr" }} className="bg-card rounded-2xl border border-border p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cta" />
                <h4 className="font-heading font-bold text-card-foreground mb-5 text-lg">What's Included</h4>
                <ul className="space-y-3.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-cta shrink-0" /> {f}
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
