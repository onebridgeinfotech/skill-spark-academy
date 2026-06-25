import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseCard } from "@/components/CourseCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { courses } from "@/lib/courses";
import { 
  Award, Users, Briefcase, BookOpen, Star, ArrowRight, 
  CheckCircle2, Zap, Shield, GraduationCap, Play, Sparkles,
  Rocket, Trophy, Clock, Globe, ShieldCheck
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const trustLogos = ["IBM", "HCL", "Barclays", "Accenture", "TCS", "Infosys"];

const benefits = [
  { icon: Users, title: "Expert Mentorship", desc: "Direct training from lead architects with 12+ years of industry tenure.", color: "bg-blue-50", iconColor: "text-blue-600", borderColor: "border-blue-100" },
  { icon: Briefcase, title: "Live Lab Projects", desc: "Build enterprise-grade applications in a high-stakes production environment.", color: "bg-emerald-50", iconColor: "text-emerald-600", borderColor: "border-emerald-100" },
  { icon: Award, title: "Globally Recognized", desc: "Earn certifications validated by top tech councils and global partners.", color: "bg-amber-50", iconColor: "text-amber-600", borderColor: "border-amber-100" },
  { icon: BookOpen, title: "Placement Vault", desc: "Access the inner circle of HR managers and elite placement opportunities.", color: "bg-purple-50", iconColor: "text-purple-600", borderColor: "border-purple-100" },
];

const pathways = [
  { 
    role: "Cloud Architect", 
    level: "Architect Track", 
    salary: "$145k+ Avg", 
    skills: ["AWS / Azure Solutions", "IaC & Terraform", "Serverless Patterns"],
    icon: Rocket,
    color: "bg-blue-600",
    shadow: "shadow-blue-200"
  },
  { 
    role: "Full Stack Lead", 
    level: "Engineering Track", 
    salary: "$120k+ Avg", 
    skills: ["React & Next.js 15", "Node.js & Go", "PostgreSQL Architect"],
    icon: Zap,
    color: "bg-indigo-600",
    shadow: "shadow-indigo-200"
  },
  { 
    role: "DevOps Manager", 
    level: "Operations Track", 
    salary: "$130k+ Avg", 
    skills: ["Kubernetes Scaling", "CI/CD Precision", "Security Ops"],
    icon: ShieldCheck,
    color: "bg-emerald-600",
    shadow: "shadow-emerald-200"
  },
  { 
    role: "Data Engineer", 
    level: "Analytics Track", 
    salary: "$140k+ Avg", 
    skills: ["MLOps Lifecycle", "Spark & Big Data", "AI Integration"],
    icon: Trophy,
    color: "bg-amber-600",
    shadow: "shadow-amber-200"
  }
];

const testimonials = [
  { name: "Priya Sharma", role: "AWS Architect at TCS", text: "SkillForge transformed my career. The hands-on projects and expert guidance helped me land my dream job within 3 months.", rating: 5 },
  { name: "Rahul Verma", role: "Full Stack Developer", text: "The curriculum is incredibly well-structured. I went from beginner to employed in just 4 months. Best investment ever.", rating: 5 },
  { name: "Anita Desai", role: "Data Scientist at Infosys", text: "The mentors genuinely care about your growth. I got placed at a top MNC with a 120% salary hike.", rating: 5 },
];

function HomePage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.05]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - High Authority Deep Navy */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 grid-pattern-premium opacity-[0.1]" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/40 via-transparent to-transparent" />
          <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F172A]" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Sparkles className="w-3.5 h-3.5" /> Unleash Your Technical Potential
              </div>
              
              <h1 className="font-heading text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
                Forge Your <br />
                <span className="text-blue-500">Digital Career.</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
                Elite IT training modules engineered by lead architects from top global tech stack providers. 
                Experience immersive learning that yields real-world career breakthroughs.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link to="/courses">
                  <Button variant="hero" size="xl" className="group px-12 py-8 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-lg">
                    Discover Programs <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">Join Free Demo</div>
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Next Class: Today 8PM</div>
                  </div>
                </div>
              </div>

              {/* Trust Metric */}
              <div className="mt-16 pt-8 border-t border-white/5 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-slate-800" />)}
                </div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-normal">
                    Trusted by Over <br /> <span className="text-white text-base">5,000+ Professionals</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 1 }} className="hidden lg:block relative">
              <div className="relative glass-dark p-12 rounded-[3.5rem] border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/40">
                        <Rocket className="w-8 h-8" />
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4">Executive Training <br /> Modules</h3>
                    <p className="text-slate-400 mb-8 font-medium">Master Kubernetes, Serverless and Distributed Systems with hands-on labs.</p>
                    <div className="flex items-center gap-2 text-blue-400 font-black text-sm uppercase tracking-[0.2em]">
                        <CheckCircle2 className="w-5 h-5" /> 100% Placement Record
                    </div>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Wall */}
      <section className="py-16 bg-white border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0 hover:grayscale-0 hover:saturate-100 hover:opacity-100 transition-all duration-700">
            {trustLogos.map(logo => <div key={logo} className="text-2xl font-black text-slate-900 tracking-tighter">{logo}</div>)}
        </div>
      </section>

      {/* Strategic Pathways - High Performance Visualization */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[120px]" />
        <SectionHeading 
          tag="Career Trajectories" 
          title="Designed for Professional Ascendancy" 
          description="Choose your destination. We provide the architectural blueprint and toolsets to excel in the world's most high-value tech roles." 
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {pathways.map((path, i) => (
            <motion.div
              key={path.role}
              whileHover={{ y: -12 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm transition-all hover:shadow-2xl relative group overflow-hidden"
            >
              <div className={`absolute top-0 right-0 p-8 text-black/5 group-hover:text-blue-500/10 transition-colors`}>
                  <path.icon className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${path.color} flex items-center justify-center text-white mb-8 shadow-xl ${path.shadow}`}>
                    <path.icon className="w-7 h-7" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">{path.level}</div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-6">{path.role}</h3>
                  <ul className="space-y-4 mb-10">
                    {path.skills.map(s => (
                        <li key={s} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {s}
                        </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <div className="text-xl font-black text-slate-900">{path.salary}</div>
                    <div className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs Content */}
      <section className="section-padding bg-white relative">
        <SectionHeading 
          tag="Vertical Programs" 
          title="Master Specific High-Demand Flux" 
          description="Instructor-led intensive modules focused on modern industry delivery patterns." 
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.slice(0, 4).map((c, i) => (
            <CourseCard key={c.id} course={c} index={i} />
          ))}
        </div>
        <div className="text-center mt-20">
            <Link to="/courses">
                <Button variant="outline" size="xl" className="rounded-2xl border-2 border-slate-200 hover:border-blue-600 px-12 py-8 font-black tracking-widest text-xs transition-all">DISCOVER THE ENTIRE CATALOG</Button>
            </Link>
        </div>
      </section>

      {/* Why Choose Us - Authority Design */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-premium opacity-[0.05]" />
        <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">The Legacy System</div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">An Elite Pedigree <br /> Education Foundry</h2>
                <p className="text-lg text-slate-400">We replace outdated theory with the high-stakes engineering patterns used in today's leading tech corridors.</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
                <motion.div
                key={b.title}
                whileHover={{ y: -8 }}
                className="bg-slate-800/50 backdrop-blur-md p-10 rounded-[3rem] border border-white/5 group transition-all hover:bg-slate-800"
                >
                <div className={`w-16 h-16 rounded-2xl ${b.color} flex items-center justify-center mb-8 border ${b.borderColor} group-hover:scale-110 transition-transform`}>
                    <b.icon className={`w-8 h-8 ${b.iconColor}`} />
                </div>
                <h3 className="font-heading font-black text-xl text-white mb-4">{b.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-sm">{b.desc}</p>
                </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* Testimonials - Impact Stories */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <SectionHeading 
          tag="Community Impact" 
          title="Voices of Success" 
          description="True career transformations verified by industry lead architects and recruiters." 
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white p-12 rounded-[3rem] border border-slate-200 relative flex flex-col h-full hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-10">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-5 h-5 text-amber-500 fill-amber-500" />)}
              </div>
              <p className="text-xl font-medium text-slate-700 mb-12 flex-grow italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-blue-500/20">{t.name[0]}</div>
                <div>
                  <p className="text-xl font-black text-slate-900 tracking-tight">{t.name}</p>
                  <p className="text-sm font-bold text-blue-600">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final - Convergent Power */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[5rem] p-24 md:p-40 text-center relative overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-transparent to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-[0.8] transition-transform group-hover:scale-105">Forge Your <br /> <span className="opacity-70">Future Path.</span></h2>
            <div className="flex flex-wrap justify-center gap-10">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="rounded-3xl px-16 py-10 text-2xl bg-white text-blue-600 hover:bg-slate-100 font-black shadow-2xl">Initialize Journey</Button>
              </Link>
            </div>
            <p className="mt-12 text-blue-100 text-xs font-black uppercase tracking-[0.4em] italic opacity-60">Join the Technical 1% Today</p>
          </div>
        </div>
      </section>
    </div>
  );
}
