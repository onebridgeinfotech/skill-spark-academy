import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Target, Eye, Trophy, Users, BookOpen, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — EslandIT Trainings" },
      { name: "description", content: "Learn about EslandIT Trainings' mission to empower professionals with industry-ready IT training." },
      { property: "og:title", content: "About Us — EslandIT Trainings" },
      { property: "og:description", content: "Our story, mission, and vision for IT education." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 50, suffix: "+", label: "Courses Offered" },
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 20, suffix: "+", label: "Industry Partners" },
];

function AboutPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="section-padding text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta-foreground/10 text-cta-foreground text-xs font-bold mb-5 border border-cta-foreground/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cta" /> Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-cta-foreground mb-4">About EslandIT Trainings</h1>
            <p className="text-cta-foreground/60 text-lg max-w-xl mx-auto">Building the next generation of IT professionals through world-class training.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Our Story
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-foreground mb-5">From Passion to Purpose</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              Founded by a team of industry veterans, EslandIT Trainings was born from a simple observation: traditional education wasn't keeping pace with the tech industry's rapid evolution.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We bridge that gap by delivering practical, project-based training that prepares professionals for real-world challenges from day one.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div key={i} className="stat-card card-hover">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="text-sm text-muted-foreground mt-2 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative">
          {[
            { icon: Target, title: "Our Mission", desc: "To democratize access to high-quality IT education and empower every professional to reach their full potential in the technology industry." },
            { icon: Eye, title: "Our Vision", desc: "To become the most trusted IT training platform globally, known for producing job-ready professionals who drive innovation." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-card rounded-2xl border border-border p-8 card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cta" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-cta/10 text-primary flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-background">
        <SectionHeading tag="Achievements" title="Milestones That Define Us" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Trophy, title: "Best IT Training Platform 2024", desc: "Recognized for excellence in professional IT education." },
            { icon: Users, title: "Corporate Partners in 10+ Countries", desc: "Trusted by enterprises for upskilling their workforce." },
            { icon: Award, title: "ISO 9001:2015 Certified", desc: "Quality management systems meeting international standards." },
          ].map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border border-border p-7 card-hover text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-cta" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-chart-3/15 to-chart-5/10 text-chart-3 flex items-center justify-center mx-auto mb-5">
                <a.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-card-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
