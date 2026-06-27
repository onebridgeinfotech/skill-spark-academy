import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  HelpCircle, Zap, Brain, MessageSquare, Award, Users,
  ChevronRight, Star, Download, Sparkles, CheckCircle,
  Layers, Database, MapPin, X, Globe, Calendar, Clock, BookOpen,
  ArrowRight, ShieldCheck, Target, Headphones, Play, BadgeCheck
} from "lucide-react";
import { submitLead } from "@/lib/submitLead";

// ── Data (unchanged) ────────────────────────────────────────────────────────

const curriculum = [
  { week: 1,  focus: "Generative AI Foundations",            deliverables: "Platform setup, account structure, and baseline workflow",  tools: "Prompt Studio",      project: "Starter Workspace Setup"       },
  { week: 2,  focus: "Data Strategy and Prompt Engineering", deliverables: "Data mapping, source design, and validation",                tools: "Model APIs",         project: "Data Model Blueprint"          },
  { week: 3,  focus: "Automation and Agent Workflows",       deliverables: "Event logic and automation sequence design",                 tools: "Vector Search",      project: "Lifecycle Automation Flow"     },
  { week: 4,  focus: "Advanced LLM Integration",             deliverables: "Advanced orchestration and exception handling",              tools: "Agent Frameworks",   project: "Production Workflow Build"     },
  { week: 5,  focus: "Integration and Evaluation Pipelines", deliverables: "API integration and sync planning",                         tools: "Evaluation Toolkit", project: "Multi-system Integration"      },
  { week: 6,  focus: "Performance and Model Deployment",     deliverables: "KPI setup, dashboarding, and optimization loops",           tools: "Analytics Dashboard",project: "Performance Reporting Hub"     },
  { week: 7,  focus: "Industry Project Lab I",               deliverables: "Use-case implementation with mentor review",                tools: "Project Sandbox",    project: "Enterprise Scenario Prototype" },
  { week: 8,  focus: "Industry Project Lab II",              deliverables: "Scalability and governance hardening",                      tools: "Quality Checklist",  project: "Operational Readiness Audit"  },
  { week: 9,  focus: "Certification and Interview Readiness",deliverables: "Mock tests, role-play, and troubleshooting drills",         tools: "Exam Kit",           project: "Readiness Assessment"         },
  { week: 10, focus: "Capstone Delivery",                    deliverables: "End-to-end deployment and presentation",                    tools: "Portfolio Framework",project: "Generative AI Capstone"        },
];

const batches = [
  { title: "Weekday Morning",    start: "Monday",   days: "Mon–Fri", time: "9:00 AM – 10:30 AM GMT" },
  { title: "Weekend Intensive",  start: "Saturday", days: "Sat–Sun", time: "10:00 AM – 1:00 PM GMT" },
  { title: "Evening Fast-Track", start: "Tuesday",  days: "Tue–Thu", time: "7:00 PM – 9:00 PM GMT"  },
];

const features = [
  { icon: Sparkles,  title: "Live Instructor-Led Sessions", desc: "Master Generative AI through live classes led by industry-certified instructors with enterprise delivery experience." },
  { icon: Layers,    title: "Hands-On Project Labs",        desc: "Build real-world AI workflows covering prompt engineering, agent automation, and production deployment patterns." },
  { icon: Headphones,title: "24/7 Expert Support",          desc: "Get guidance any time on assignments, labs, and implementation blockers from senior mentors." },
  { icon: Award,     title: "Certification Pathway",        desc: "Structured preparation for globally recognised Generative AI certification outcomes with mock exams included." },
  { icon: Users,     title: "Peer Community Access",        desc: "Join an active network of AI learners, alumni, and industry professionals for ongoing knowledge sharing." },
  { icon: Database,  title: "Lifetime Content Access",      desc: "Revisit all recordings, technical templates, and model updates anytime via our secure learning platform." },
];

const relatedCourses = [
  { title: "Oracle Eloqua Marketing",  desc: "Oracle Eloqua Marketing Automation training with live projects and certification support.", icon: Globe,       slug: "oracle-eloqua"          },
  { title: "Salesforce Admin",          desc: "Salesforce Admin training with live projects, hands-on labs, and certification support.",   icon: ShieldCheck, slug: "salesforce-admin"        },
  { title: "Salesforce Data Cloud",     desc: "Salesforce Data Cloud training with projects and certification support.",                   icon: Zap,         slug: "salesforce-data-cloud"   },
  { title: "Salesforce Marketing",      desc: "Salesforce Marketing Cloud training with live projects and certification support.",         icon: Target,      slug: "salesforce-marketing"    },
  { title: "Digital Marketing with AI", desc: "Digital Marketing with AI training with projects and certification support.",              icon: BookOpen,    slug: "digital-marketing-ai"    },
  { title: "Salesforce Pardot",         desc: "Salesforce Pardot training with live projects, labs, and certification support.",          icon: Users,       slug: "salesforce-pardot"       },
];

const testimonials = [
  { stars: 5, quote: "The Generative AI labs helped me apply prompt engineering in a live project and moved from reactive fixes to proactive architecture.", author: "Nitya B.",   role: "AI Engineer"         },
  { stars: 5, quote: "Mentor reviews made implementation clearer, especially around agent workflows and production troubleshooting in enterprise environments.", author: "Arjun M.",   role: "ML Developer"        },
  { stars: 5, quote: "I used the capstone patterns from this programme to deliver LLM integration with measurable business outcomes for my employer.",          author: "Lavanya G.", role: "Product Specialist"   },
  { stars: 5, quote: "Weekly assignments and mock scenarios gave me confidence in evaluation pipelines and cross-team communication at enterprise scale.",       author: "Rohan J.",   role: "Generative AI Lead"  },
  { stars: 5, quote: "This track balanced architecture depth with practical execution — I now independently own complex AI delivery tasks.",                    author: "Neha N.",    role: "Senior Specialist"    },
];

const articles = [
  { icon: BookOpen,     badge: "Tutorial",     badgeColor: "#e8f0fc",            badgeText: "#004890", title: "Generative AI Tutorial for Beginners", desc: "A complete guide to Generative AI fundamentals and implementation flow.",               href: "#", readTime: "20 min" },
  { icon: MessageSquare,badge: "Interview",    badgeColor: "rgba(255,158,13,0.12)", badgeText: "#b86e00",title: "AI Interview Questions",               desc: "Top technical interview questions on prompt engineering and agent workflows.",         href: "#", readTime: "30 min" },
  { icon: Award,        badge: "Certification",badgeColor: "rgba(52,211,153,0.12)", badgeText: "#065f46",title: "AI Certification Guide",               desc: "Exam roadmap, skill checklist, and prep strategy for industrial AI certifications.", href: "#", readTime: "18 min" },
];

const faqs = [
  { q: "How long is the Generative AI course?",    a: "The programme runs for 10 weeks with live classes, industry labs, and project reviews included." },
  { q: "Is Generative AI training available online?", a: "Yes. You can join live online from anywhere in the UK and internationally via our high-quality learning platform." },
  { q: "Do I need prior experience?",              a: "No prior specialist experience is required. The training starts from fundamentals and progresses to enterprise-level implementation." },
  { q: "Will I get recordings for missed classes?", a: "Yes, every live class is recorded and shared via our LMS with lifetime access — revisit content any time." },
];

const ukLocations = [
  { city: "London",      region: "England"          },
  { city: "Manchester",  region: "England"          },
  { city: "Birmingham",  region: "England"          },
  { city: "Leeds",       region: "England"          },
  { city: "Bristol",     region: "England"          },
  { city: "Liverpool",   region: "England"          },
  { city: "Sheffield",   region: "England"          },
  { city: "Newcastle",   region: "England"          },
  { city: "Nottingham",  region: "England"          },
  { city: "Edinburgh",   region: "Scotland"         },
  { city: "Glasgow",     region: "Scotland"         },
  { city: "Cardiff",     region: "Wales"            },
  { city: "Belfast",     region: "Northern Ireland" },
  { city: "Online UK",   region: "Nationwide"       },
];

// ── Component ────────────────────────────────────────────────────────────────

export function GenerativeAICourse() {
  const [activeTab, setActiveTab] = useState("overview");
  const [scrolled, setScrolled]   = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalEmail, setModalEmail] = useState("");
  const [brochureSubmitting, setBrochureSubmitting] = useState(false);

  const handleBrochureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBrochureSubmitting(true);
    try {
      const result = await submitLead({
        source: "brochure_download",
        name: modalName,
        email: modalEmail,
        courseSlug: "generative-ai",
        programme: "Generative AI & LLM Masterclass",
      });
      alert(result.message || "Brochure request received. We'll email you shortly.");
      setModalName("");
      setModalEmail("");
      setIsModalOpen(false);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Unable to submit brochure request.");
    } finally {
      setBrochureSubmitting(false);
    }
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const tabs = [
    { id: "overview",       label: "Overview"      },
    { id: "audience",       label: "Who Can Join"  },
    { id: "prerequisites",  label: "Prerequisites" },
    { id: "curriculum",     label: "Curriculum"    },
    { id: "training",       label: "Training"      },
    { id: "certification",  label: "Certification" },
    { id: "availability",   label: "Availability"  },
    { id: "features",       label: "Features"      },
    { id: "faqs",           label: "FAQs"          },
  ];

  const tabContent: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6 max-w-4xl">
        <p className="text-base font-semibold text-[#004890] leading-relaxed">
          The Generative AI programme delivers practical AI engineering skills — model integration,
          prompt optimisation, and agent-driven workflows — aligned to current UK enterprise demand.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We bridge the gap between academic theory and production implementation. Participants build
          deployable AI solutions using prompt engineering, agent workflows, and scalable patterns
          used by leading UK organisations. Every cohort combines live instruction with real
          enterprise projects, mentor review, and certification preparation.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 pt-2">
          {[
            { label: "Duration",  value: "10 Weeks"      },
            { label: "Format",    value: "Live + Labs"   },
            { label: "Cohort",    value: "Limited Seats" },
          ].map(s => (
            <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "linear-gradient(135deg,#e8f0fc,#f0f7ff)", border: "1px solid #d0e3ff" }}>
              <div className="text-lg font-bold text-[#004890]">{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),

    audience: (
      <div className="space-y-5">
        <h4 className="font-bold text-[#004890] text-xl font-heading">Who Can Join?</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Digital marketers looking to master AI-driven automation workflows.",
            "CRM and marketing operations professionals in the Salesforce ecosystem.",
            "IT professionals seeking hands-on Generative AI implementation skills.",
            "Salesforce Admins and Developers expanding their scope into AI.",
            "Career switchers and recent graduates targeting AI engineering roles.",
            "Freelancers and consultants delivering AI transformation projects.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "#f8faff", border: "1px solid #e8f0fc" }}>
              <BadgeCheck className="w-5 h-5 text-[#FF9E0D] flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),

    prerequisites: (
      <div className="space-y-5 max-w-2xl">
        <h4 className="font-bold text-[#004890] text-xl font-heading">Prerequisites</h4>
        <div className="space-y-3">
          {[
            "Basic programming knowledge (any language).",
            "Helpful but not required: familiarity with APIs and data fundamentals.",
            "No prior Generative AI experience needed — we start from the ground up.",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "#f8faff", border: "1px solid #e8f0fc" }}>
              <CheckCircle className="w-5 h-5 text-[#FF9E0D] flex-shrink-0" />
              <span className="text-slate-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),

    curriculum: (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold font-heading text-[#004890]">10-Week Curriculum</h3>
            <p className="text-sm text-slate-500 mt-1">Structured weekly modules with live labs and mini-projects</p>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="text-white font-semibold text-sm px-6 h-10 rounded-xl shadow-md gap-2 hover:shadow-lg transition-all shrink-0"
            style={{ background: "linear-gradient(135deg,#FF9E0D,#e68d08)" }}
          >
            <Download className="w-4 h-4" /> Download Brochure
          </Button>
        </div>
        <div className="overflow-x-auto rounded-xl shadow-sm" style={{ border: "1px solid #e8f0fc" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "linear-gradient(135deg,#004890,#002d5c)" }}>
                <th className="px-5 py-4 text-left text-white font-semibold text-xs uppercase tracking-widest whitespace-nowrap">Week</th>
                <th className="px-5 py-4 text-left text-white font-semibold text-xs uppercase tracking-widest">Focus Area</th>
                <th className="px-5 py-4 text-left text-white font-semibold text-xs uppercase tracking-widest hidden md:table-cell">Deliverables</th>
                <th className="px-5 py-4 text-left text-white font-semibold text-xs uppercase tracking-widest hidden lg:table-cell">Tools</th>
                <th className="px-5 py-4 text-left text-white font-semibold text-xs uppercase tracking-widest hidden lg:table-cell">Mini-Project</th>
              </tr>
            </thead>
            <tbody>
              {curriculum.map((row, i) => (
                <tr key={i} className="transition-colors hover:bg-[#f0f7ff]" style={{ background: i % 2 === 0 ? "#ffffff" : "#fafcff", borderTop: "1px solid #eef2fb" }}>
                  <td className="px-5 py-4 font-bold text-[#FF9E0D] whitespace-nowrap">W{row.week}</td>
                  <td className="px-5 py-4 font-semibold text-[#004890] text-sm">{row.focus}</td>
                  <td className="px-5 py-4 text-slate-500 text-xs hidden md:table-cell">{row.deliverables}</td>
                  <td className="px-5 py-4 text-[#004890] text-xs font-mono hidden lg:table-cell">{row.tools}</td>
                  <td className="px-5 py-4 text-slate-600 text-xs hidden lg:table-cell">{row.project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),

    training: (
      <div className="space-y-5">
        <h4 className="font-bold text-[#004890] text-xl font-heading">Training Formats</h4>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Play,   title: "Self-Paced",       desc: "Recorded sessions with lifetime access to all future content updates and materials." },
            { icon: Users,  title: "Instructor-Led",   desc: "Live classes with hands-on enterprise projects and real-time instructor feedback." },
            { icon: Target, title: "1:1 Mentorship",   desc: "Personalised guidance and project review sessions with industry practitioners." },
          ].map(item => (
            <div key={item.title} className="p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "linear-gradient(135deg,#004890,#002d5c)" }}>
                <item.icon className="w-7 h-7 text-[#FF9E0D]" />
              </div>
              <h4 className="font-bold text-[#004890] text-base mb-2 font-heading">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),

    certification: (
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto" style={{ background: "linear-gradient(135deg,rgba(255,158,13,0.15),rgba(255,158,13,0.08))", border: "1px solid rgba(255,158,13,0.25)" }}>
          <Award className="w-10 h-10 text-[#FF9E0D]" />
        </div>
        <h4 className="text-2xl font-bold font-heading text-[#004890]">Industry-Recognised Certification</h4>
        <p className="text-slate-600 leading-relaxed">
          The Generative AI programme includes mock tests, interview preparation, and certification guidance
          to validate your technical skills. Upon completion you receive an Ismart Skills institutional certificate
          recognised by our 250+ UK hiring partners and global enterprise clients.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 pt-2">
          {[
            { label: "Mock Exams",         value: "Included" },
            { label: "Interview Prep",     value: "Included" },
            { label: "Certificate",        value: "Digital + PDF" },
          ].map(s => (
            <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "linear-gradient(135deg,#e8f0fc,#f0f7ff)", border: "1px solid #d0e3ff" }}>
              <div className="text-sm font-bold text-[#004890]">{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),

    availability: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-[#004890] text-xl font-heading mb-1">UK Training Locations</h4>
          <p className="text-slate-500 text-sm">Available in-person across the UK, and online nationwide.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {ukLocations.map(loc => (
            <div key={loc.city} className="p-3 rounded-xl flex items-center gap-2.5 transition-all hover:shadow-sm" style={{ background: "#f8faff", border: "1px solid #e8f0fc" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#004890,#002d5c)" }}>
                <MapPin className="w-3.5 h-3.5 text-[#FF9E0D]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#004890]">{loc.city}</div>
                <div className="text-[10px] text-slate-400">{loc.region}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-slate-400 text-xs">Don't see your city? The programme is available online across the entire UK.</p>
      </div>
    ),

    features: (
      <div className="space-y-4">
        <h4 className="font-bold text-[#004890] text-xl font-heading">Programme Features</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className="p-5 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-0.5" style={{ background: "#f8faff", border: "1px solid #e8f0fc" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,158,13,0.12)" }}>
                <f.icon className="w-5 h-5 text-[#FF9E0D]" />
              </div>
              <h4 className="font-semibold text-[#004890] mb-1.5 text-sm">{f.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),

    faqs: (
      <div className="space-y-4">
        <h4 className="font-bold text-[#004890] text-xl font-heading">Frequently Asked Questions</h4>
        {faqs.map((faq, i) => (
          <div key={i} className="p-6 rounded-2xl transition-all" style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}>
            <h5 className="font-semibold text-[#004890] mb-2 flex gap-3 items-start text-sm">
              <HelpCircle className="w-5 h-5 text-[#FF9E0D] shrink-0 mt-0.5" /> {faq.q}
            </h5>
            <p className="text-slate-500 text-sm pl-8 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    ),
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg,#001a3a 0%,#003166 55%,#004890 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[120px] opacity-10" style={{ background: "#FF9E0D" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-8" style={{ background: "#0057ab" }} />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-xs font-medium text-white/40 mb-10">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#FF9E0D]" />
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="h-3 w-3 text-[#FF9E0D]" />
            <span className="text-white/70">Generative AI</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ background: "rgba(255,158,13,0.15)", border: "1px solid rgba(255,158,13,0.25)" }}>
                <Sparkles className="w-3.5 h-3.5 text-[#FF9E0D]" />
                <span className="text-[#FF9E0D] text-xs font-semibold uppercase tracking-widest">Live & Hands-On</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white leading-tight mb-4">
                Generative AI<br />
                <span className="text-[#FF9E0D]">Training Course</span>
              </h1>
              <h2 className="text-xl font-semibold text-white/70 mb-5 font-heading">
                10-Week Hands-On Programme · UK Cohorts
              </h2>
              <p className="text-white/60 text-base max-w-lg mb-8 leading-relaxed">
                Master AI engineering with live projects, role-ready workflows, and mentor-led certification preparation — delivered by UK-based industry practitioners.
              </p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Calendar, label: "10 Weeks" },
                  { icon: Clock,    label: "40+ Hours" },
                  { icon: Zap,      label: "Live Labs" },
                  { icon: BadgeCheck, label: "Certificate" },
                ].map(p => (
                  <span key={p.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-medium" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <p.icon className="w-3.5 h-3.5 text-[#FF9E0D]" /> {p.label}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="text-white font-semibold px-8 h-12 rounded-xl shadow-xl gap-2 hover:scale-105 transition-all text-sm" style={{ background: "linear-gradient(135deg,#FF9E0D,#e68d08)" }}>
                    Enrol Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-6 h-12 rounded-xl font-semibold text-sm text-white transition-all hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  <Download className="w-4 h-4" /> Download Brochure
                </button>
              </div>
            </motion.div>

            {/* Right — info card */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="hidden lg:block">
              <div className="rounded-2xl p-8 shadow-2xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "10",    sub: "Week Programme"  },
                    { value: "40+",   sub: "Live Hours"      },
                    { value: "1:1",   sub: "Mentorship"      },
                    { value: "UK",    sub: "Based Instructors"},
                  ].map(s => (
                    <div key={s.sub} className="rounded-xl p-4 text-center" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="text-2xl font-extrabold text-white font-heading">{s.value}</div>
                      <div className="text-xs text-white/45 mt-0.5">{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Feature list */}
                <div className="space-y-3">
                  {[
                    "Live instructor-led sessions every week",
                    "Real enterprise project labs included",
                    "Certification prep + mock exams",
                    "12-month post-course support",
                    "Placement assistance via 250+ partners",
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-[#FF9E0D] flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {["N","A","L","R","E"].map((l, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#002d5c] flex items-center justify-center text-xs font-bold text-white" style={{ background: `hsl(${210 + i * 20}, 70%, 45%)` }}>{l}</div>
                      ))}
                    </div>
                    <div className="text-xs text-white/55 ml-1">127+ graduates · <span className="text-[#FF9E0D] font-semibold">4.9 ★</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(180deg,#f8faff 0%,#ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Why Choose This Course</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#004890] mt-3">
              Everything You Need to Succeed in AI
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Live training, enterprise project labs, and mentor support — designed for UK professionals moving into AI roles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-7 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg,#e8f0fc,#d0e3ff)" }}>
                  <f.icon className="w-5 h-5 text-[#004890]" />
                </div>
                <h3 className="font-bold text-[#004890] mb-2 text-base font-heading">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-5 h-0.5 rounded-full w-8 transition-all duration-300 group-hover:w-full" style={{ background: "linear-gradient(90deg,#004890,#FF9E0D)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE DETAILS TABS ──────────────────────────────────────────── */}
      <section className="py-20" id="course-details" style={{ background: "linear-gradient(135deg,#f0f7ff 0%,#e8f0fc 50%,#f0f7ff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Course Details</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#004890] mt-3">
              Explore the Full Curriculum
            </h2>
            <p className="text-slate-500 mt-3 text-sm">Curriculum, prerequisites, certification, FAQs and everything you need to know.</p>
          </div>

          {/* Sticky tab bar */}
          <div className={`sticky top-[72px] z-[50] mb-8 transition-all duration-300 ${scrolled ? "py-3" : ""}`}>
            <div className="flex flex-wrap gap-2 justify-center bg-white p-2 rounded-2xl shadow-sm max-w-fit mx-auto" style={{ border: "1px solid #e8f0fc" }}>
              {tabs.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs transition-all whitespace-nowrap"
                  style={activeTab === t.id
                    ? { background: "linear-gradient(135deg,#004890,#002d5c)", color: "#ffffff", boxShadow: "0 4px 12px rgba(0,72,144,0.25)" }
                    : { color: "#004890" }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="p-8 md:p-12 rounded-2xl min-h-[440px] shadow-md"
              style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── UPCOMING BATCHES ─────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Upcoming Cohorts</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#004890] mt-3">Choose Your Schedule</h2>
            <p className="text-slate-500 mt-3 text-sm">All sessions are live online with full recordings provided.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {batches.map((b, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={i === 1
                  ? { background: "linear-gradient(135deg,#004890,#002d5c)", border: "2px solid #004890" }
                  : { background: "#ffffff", border: "1px solid #e8f0fc" }}
              >
                {i === 1 && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest shadow-md" style={{ background: "#FF9E0D" }}>
                    Most Popular
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: i === 1 ? "rgba(255,158,13,0.2)" : "linear-gradient(135deg,#e8f0fc,#d0e3ff)" }}>
                  <Calendar className={`w-5 h-5 ${i === 1 ? "text-[#FF9E0D]" : "text-[#004890]"}`} />
                </div>
                <h4 className={`text-lg font-bold font-heading mb-4 ${i === 1 ? "text-white" : "text-[#004890]"}`}>{b.title}</h4>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2.5 text-sm" style={{ color: i === 1 ? "rgba(255,255,255,0.7)" : "#64748b" }}>
                    <Calendar className="w-4 h-4 text-[#FF9E0D] flex-shrink-0" />
                    Starts {b.start} · {b.days}
                  </div>
                  <div className="flex items-center gap-2.5 text-sm" style={{ color: i === 1 ? "rgba(255,255,255,0.7)" : "#64748b" }}>
                    <Clock className="w-4 h-4 text-[#FF9E0D] flex-shrink-0" />
                    {b.time}
                  </div>
                </div>
                <Link to="/contact">
                  <Button className="w-full h-11 font-semibold rounded-xl text-sm transition-all hover:scale-105"
                    style={i === 1
                      ? { background: "linear-gradient(135deg,#FF9E0D,#e68d08)", color: "#ffffff" }
                      : { background: "linear-gradient(135deg,#004890,#002d5c)", color: "#ffffff" }}>
                    Enrol Now
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 overflow-hidden" style={{ background: "linear-gradient(135deg,#001a3a 0%,#003166 45%,#004890 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-8 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="w-10 h-0.5 bg-[#FF9E0D] mb-4" />
              <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Graduate Outcomes</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-3">What Our Learners Say</h2>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#FF9E0D] text-[#FF9E0D]" />)}
              <span className="text-white/50 text-sm ml-2">4.9 / 5 from 127 graduates</span>
            </div>
          </div>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-5 py-2 px-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[360px] rounded-2xl p-6 hover:bg-white/10 transition-all" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, si) => <Star key={si} className="w-4 h-4 fill-[#FF9E0D] text-[#FF9E0D]" />)}
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0" style={{ background: "#FF9E0D" }}>
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.author}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLES & GUIDES ────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(180deg,#ffffff 0%,#f8faff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Expert Resources</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#004890] mt-3">Articles & Guides</h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">Expert-curated resources to deepen your knowledge before and after the course.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <Link key={i} to="/contact" className="group block rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110" style={{ background: "linear-gradient(135deg,#004890,#002d5c)" }}>
                    <a.icon className="w-6 h-6 text-[#FF9E0D]" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide" style={{ background: a.badgeColor, color: a.badgeText }}>
                    {a.badge}
                  </span>
                </div>
                <h4 className="font-bold text-[#004890] mb-2 text-base font-heading group-hover:text-[#FF9E0D] transition-colors">{a.title}</h4>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{a.desc}</p>
                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #f0f4fb" }}>
                  <span className="flex items-center gap-1.5 text-slate-400 text-xs"><Clock className="w-3.5 h-3.5" /> {a.readTime}</span>
                  <span className="text-[#004890] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED COURSES ──────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(135deg,#f0f7ff 0%,#e8f0fc 50%,#f0f7ff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="w-10 h-0.5 bg-[#FF9E0D] mx-auto mb-4" />
            <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">Explore More</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#004890] mt-3">Related Training Tracks</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedCourses.map((c, i) => (
              <Link key={i} to="/courses/$slug" params={{ slug: c.slug }} className="group rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110" style={{ background: "linear-gradient(135deg,#e8f0fc,#d0e3ff)" }}>
                  <c.icon className="w-5 h-5 text-[#004890]" />
                </div>
                <h4 className="font-bold text-[#004890] mb-2 font-heading group-hover:text-[#FF9E0D] transition-colors">{c.title}</h4>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{c.desc}</p>
                <span className="text-[#004890] text-xs font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Explore track <ArrowRight className="w-3.5 h-3.5 text-[#FF9E0D]" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── UK LOCATIONS ─────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(135deg,#002d5c 0%,#004890 50%,#003a75 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="w-10 h-0.5 bg-[#FF9E0D] mb-4" />
              <span className="text-xs font-semibold text-[#FF9E0D] uppercase tracking-widest">UK Training Locations</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-3 mb-5 leading-tight">
                Generative AI Training<br />Across the UK
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Our programme is delivered in-person at major UK cities and live online for professionals across England, Scotland, Wales, and Northern Ireland. All sessions are recorded for flexible access.
              </p>
              <Link to="/contact">
                <Button className="text-white font-semibold px-6 h-11 rounded-xl gap-2 shadow-lg hover:scale-105 transition-all text-sm" style={{ background: "linear-gradient(135deg,#FF9E0D,#e68d08)" }}>
                  Check Availability <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ukLocations.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-xl p-3.5 flex items-center gap-3 transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <MapPin className="w-4 h-4 text-[#FF9E0D] flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm font-semibold">{loc.city}</div>
                    <div className="text-white/35 text-[10px]">{loc.region}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#FF9E0D 0%,#ffb347 50%,#FF9E0D 100%)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px,rgba(0,0,0,0.15) 1px,transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        >
          <span className="inline-block px-5 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(0,45,92,0.15)", color: "#001a3a" }}>
            Next UK Cohort Starting Soon · Limited Places
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white leading-tight mb-4">
            Ready to Launch Your<br />AI Career?
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            Join 127+ professionals who built enterprise AI skills with Ismart Skills. Enrol now or download the brochure to learn more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button className="font-bold px-8 h-12 rounded-xl shadow-xl text-sm gap-2 hover:scale-105 transition-all" style={{ background: "#002d5c", color: "#ffffff" }}>
                Enrol Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 h-12 rounded-xl font-semibold text-sm text-white transition-all hover:bg-white/20"
              style={{ background: "rgba(255,255,255,0.18)", border: "2px solid rgba(255,255,255,0.5)" }}
            >
              <Download className="w-4 h-4" /> Download Brochure
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── BROCHURE MODAL ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6" style={{ background: "rgba(0,29,61,0.85)", backdropFilter: "blur(12px)" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "#ffffff" }}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg,#004890,#FF9E0D)" }} />

              <div className="p-8">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all">
                  <X className="w-5 h-5" />
                </button>

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg,#e8f0fc,#d0e3ff)" }}>
                  <Download className="w-6 h-6 text-[#004890]" />
                </div>

                <h3 className="text-2xl font-bold font-heading text-[#004890] mb-1">Download the Brochure</h3>
                <p className="text-slate-500 text-sm mb-6">Get the full programme syllabus, pricing, and intake dates sent directly to your inbox.</p>

                <form className="space-y-4" onSubmit={handleBrochureSubmit}>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Full Name *</label>
                    <input type="text" placeholder="Jane Smith" required value={modalName} onChange={(e) => setModalName(e.target.value)} className="w-full rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004890]/30 transition-all" style={{ background: "#f8faff", border: "1px solid #e2eaf8" }} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Email Address *</label>
                    <input type="email" placeholder="jane@company.com" required value={modalEmail} onChange={(e) => setModalEmail(e.target.value)} className="w-full rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004890]/30 transition-all" style={{ background: "#f8faff", border: "1px solid #e2eaf8" }} />
                  </div>
                  <Button type="submit" disabled={brochureSubmitting} className="w-full h-11 font-semibold rounded-xl text-sm gap-2 shadow-md mt-2" style={{ background: "linear-gradient(135deg,#FF9E0D,#e68d08)", color: "#ffffff" }}>
                    {brochureSubmitting ? "Sending..." : "Send Me the Brochure"} <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-center text-slate-400 text-xs">We'll send it within 2 minutes. No spam, ever.</p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export const Route = createFileRoute("/generative-ai-course")({
  head: () => ({
    meta: [
      { title: "Generative AI Course — Live Training UK | Ismart Skills" },
      { name: "description", content: "10-week live Generative AI training programme for UK professionals. Hands-on labs, enterprise projects, certification prep, and placement support across London, Manchester, Birmingham and online." },
    ],
  }),
  component: GenerativeAICourse,
});
