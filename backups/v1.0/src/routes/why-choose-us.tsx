import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Briefcase, BookOpen, Clock, Headphones, X } from "lucide-react";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — OneBridge Infotech" },
      { name: "description", content: "Discover what makes OneBridge Infotech the preferred IT training platform for professionals worldwide." },
      { property: "og:title", content: "Why Choose OneBridge Infotech" },
      { property: "og:description", content: "Industry experts, live projects, certifications, and placement support." },
    ],
  }),
  component: WhyChooseUsPage,
});

const advantages = [
  { icon: Users, title: "Expert Instructors", desc: "Learn from certified professionals with 10+ years of hands-on industry experience at top tech companies." },
  { icon: Briefcase, title: "Real-World Projects", desc: "Build a professional portfolio with industry-relevant projects that demonstrate your expertise to employers." },
  { icon: Award, title: "Recognized Certifications", desc: "Earn globally recognized certifications that validate your skills and boost your resume." },
  { icon: BookOpen, title: "Updated Curriculum", desc: "Our courses are regularly updated to reflect the latest industry trends and technologies." },
  { icon: Clock, title: "Flexible Learning", desc: "Choose from live classes, self-paced modules, or weekend batches that fit your schedule." },
  { icon: Headphones, title: "24/7 Support", desc: "Get round-the-clock mentor support and community access throughout your learning journey." },
];

const comparison = [
  { feature: "Live instructor-led classes", us: true, others: false },
  { feature: "Real-world projects", us: true, others: false },
  { feature: "Placement assistance", us: true, others: false },
  { feature: "24/7 mentor support", us: true, others: false },
  { feature: "Globally recognized certifications", us: true, others: true },
  { feature: "Flexible scheduling", us: true, others: false },
  { feature: "Corporate training programs", us: true, others: false },
  { feature: "Community access", us: true, others: true },
];

function WhyChooseUsPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="section-padding text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta-foreground/10 text-cta-foreground text-xs font-bold mb-5 border border-cta-foreground/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cta" /> The OneBridge Infotech Difference
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-cta-foreground mb-4">Why Choose OneBridge Infotech</h1>
            <p className="text-cta-foreground/60 text-lg">We don't just teach tech — we build careers.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <SectionHeading tag="Advantages" title="What Sets Us Apart" description="Everything you need to succeed in the tech industry, all in one place." />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group bg-card rounded-2xl border border-border p-7 card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-cta opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-cta/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <a.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative">
          <SectionHeading tag="Comparison" title="OneBridge Infotech vs Others" description="See how we stack up against typical online learning platforms." />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-gradient-to-r from-primary/5 to-cta/5 px-6 py-4 text-sm font-bold">
              <span className="text-foreground">Feature</span>
              <span className="text-center text-primary">OneBridge Infotech</span>
              <span className="text-center text-muted-foreground">Others</span>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className="grid grid-cols-3 px-6 py-3.5 text-sm border-t border-border hover:bg-accent/50 transition-colors">
                <span className="text-card-foreground font-medium">{row.feature}</span>
                <span className="text-center">{row.us ? <CheckCircle2 className="w-5 h-5 text-cta mx-auto" /> : <X className="w-5 h-5 text-destructive mx-auto" />}</span>
                <span className="text-center">{row.others ? <CheckCircle2 className="w-5 h-5 text-muted-foreground mx-auto" /> : <X className="w-5 h-5 text-destructive/40 mx-auto" />}</span>
              </div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link to="/contact"><Button variant="cta" size="xl">Start Learning Today</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}
