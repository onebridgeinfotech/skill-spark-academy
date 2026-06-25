import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Rocket, Brain, Code, Cpu, Terminal, 
  CheckCircle2, HelpCircle, ChevronDown, Sparkles,
  Zap, Shield, Search, MessageSquare, Database,
  ArrowRight, PlayCircle, Globe, Award, Users,
  Workflow, BarChart, Layers, Clock, MapPin, 
  Download, FileText, ChevronRight, Star, X,
  BookOpen, Headphones
} from "lucide-react";
import { useState, useEffect } from "react";

const curriculum = [
  { week: 1, focus: 'Generative AI Foundations', deliverables: 'Platform setup, account structure, and baseline workflow', tools: 'Prompt Studio', project: 'Starter Workspace Setup' },
  { week: 2, focus: 'Data Strategy and prompt engineering', deliverables: 'Data mapping, source design, and validation', tools: 'Model APIs', project: 'Data Model Blueprint' },
  { week: 3, focus: 'Automation and agent workflows', deliverables: 'Event logic and automation sequence design', tools: 'Vector Search', project: 'Lifecycle Automation Flow' },
  { week: 4, focus: 'Advanced llm integration', deliverables: 'Advanced orchestration and exception handling', tools: 'Agent Frameworks', project: 'Production Workflow Build' },
  { week: 5, focus: 'Integration and evaluation pipelines', deliverables: 'API integration and sync planning', tools: 'Evaluation Toolkit', project: 'Multi-system Integration' },
  { week: 6, focus: 'Performance and model deployment', deliverables: 'KPI setup, dashboarding, and optimization loops', tools: 'Analytics Dashboard', project: 'Performance Reporting Hub' },
  { week: 7, focus: 'Industry Project Lab I', deliverables: 'Use-case implementation with mentor review', tools: 'Project Sandbox', project: 'Enterprise Scenario Prototype' },
  { week: 8, focus: 'Industry Project Lab II', deliverables: 'Scalability and governance hardening', tools: 'Quality Checklist', project: 'Operational Readiness Audit' },
  { week: 9, focus: 'Certification and Interview Readiness', deliverables: 'Mock tests, role-play, and troubleshooting drills', tools: 'Exam Kit', project: 'Readiness Assessment' },
  { week: 10, focus: 'Capstone Delivery', deliverables: 'End-to-end deployment and presentation', tools: 'Portfolio Framework', project: 'Generative AI Capstone' }
];

const cities = [
    { name: 'Hyderabad', slug: 'hyderabad' },
    { name: 'Bangalore', slug: 'bangalore' },
    { name: 'Chennai', slug: 'chennai' },
    { name: 'Pune', slug: 'pune' },
    { name: 'Mumbai', slug: 'mumbai' },
    { name: 'Delhi NCR', slug: 'delhi-ncr' },
    { name: 'Dubai', slug: 'dubai' },
    { name: 'Singapore', slug: 'singapore' },
];

const testimonials = [
  { stars: 5, quote: 'The Generative AI labs helped me apply prompt engineering in a live project and moved from reactive fixes to proactive architecture.', author: 'Nitya B.', role: 'AI Engineer' },
  { stars: 5, quote: 'Mentor reviews made Generative AI implementation clearer, especially around agent workflows and production troubleshooting.', author: 'Arjun M.', role: 'ML Lead' },
  { stars: 5, quote: 'I used the capstone patterns to deliver llm integration with measurable business outcomes at my firm.', author: 'Lavanya G.', role: 'Product Specialist' }
];

const faqs = [
  { q: 'How long is the Generative AI course?', a: 'The program runs for 12 weeks with live classes, labs, and project reviews.' },
  { q: 'Is Generative AI available online?', a: 'Yes. You can join live online from India and international locations via our high-bandwidth institutional bridge.' },
  { q: 'Do I need prior coding experience?', a: 'Basic logic and API awareness are helpful, but we cover the technical foundations for Generative AI from the ground up.' },
  { q: 'Will I get access to GPUs?', a: 'Yes, we provide cloud compute credits for fine-tuning labs and model evaluation modules.' }
];

const WordGlobe = () => {
    const locations = ["USA", "Canada", "Australia", "UAE", "UK", "Hyderabad", "Bangalore", "Chennai", "Pune", "Mumbai", "Delhi NCR", "London", "Dubai", "Singapore"];
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000 overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-xl">
            <div className="absolute w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]" />
            <div className="absolute z-10 w-24 h-24 bg-[#004890] rounded-full flex items-center justify-center shadow-lg border border-white/20">
                <MapPin className="h-10 w-10 text-white animate-bounce" />
            </div>
            <div className="relative w-full h-full animate-[spin_60s_linear_infinite]">
                {locations.map((text, i) => {
                    const angle = (i / locations.length) * Math.PI * 2;
                    const radius = 170;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * (radius * 0.4);
                    return (
                        <motion.div key={i} className="absolute left-1/2 top-1/2" style={{ x, y }}>
                            <span className="whitespace-nowrap font-bold text-[10px] md:text-xs uppercase tracking-tighter text-[#004890]/60">
                                {text}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export function GenerativeAICourse() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'audience', label: 'Eligible Candidates' },
    { id: 'curriculum', label: 'Course Syllabus' },
    { id: 'training', label: 'Training Modes' },
    { id: 'availability', label: 'Global Offices' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const tabContent: Record<string, React.ReactNode> = {
    overview: (
      <div className="text-gray-600 space-y-6 text-lg leading-relaxed max-w-4xl">
        <p>Master the future of technology with our **Generative AI Masterclass**. This course delivers institutional-grade AI engineering skills including model integration, prompt optimization, and autonomous agent-driven workflows.</p>
        <p>We bridge the gap between theory and industry implementation, ensuring every candidate graduates with a portfolio of production-ready work audited by industry mentors.</p>
      </div>
    ),
    audience: (
      <div className="grid md:grid-cols-2 gap-4">
        {[
            'IT Professionals seeking transition to AI roles.',
            'Data analysts mastering LLM & RAG architectures.',
            'Strategic Product Leaders driving AI initiatives.',
            'Entrepreneurs building AI-first solutions.'
        ].map((item, i) => (
            <div key={i} className="p-5 bg-white rounded-xl border border-gray-100 flex gap-4 items-center shadow-sm hover:border-[#004890]/20 transition-all">
                <CheckCircle2 className="w-6 h-6 text-[#FF9E0D]" />
                <span className="text-[#004890] font-bold">{item}</span>
            </div>
        ))}
      </div>
    ),
    curriculum: (
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-xl">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#004890] text-white">
            <tr>
              <th className="px-6 py-4">Timeline</th>
              <th className="px-6 py-4">Focus Core</th>
              <th className="px-6 py-4">Tech Stack</th>
              <th className="px-6 py-4">Industrial Lab</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {curriculum.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-[#004890]">Week {row.week}</td>
                <td className="px-6 py-4 text-gray-900 font-medium">{row.focus}</td>
                <td className="px-6 py-4 text-[#FF9E0D] font-mono text-xs uppercase">{row.tools}</td>
                <td className="px-6 py-4 text-gray-500 italic">{row.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    training: (
        <div className="grid md:grid-cols-3 gap-6">
            {[
                { title: "Instructor-Led", desc: "Live sessions with real-time lab mentoring." },
                { title: "Flexible Learning", desc: "Self-paced modules with lifetime access." },
                { title: "Enterprise Bridge", desc: "Cooperative training for bank-grade teams." }
            ].map(opt => (
                <div key={opt.title} className="p-8 bg-white rounded-2xl border border-gray-100 text-center shadow-md hover:shadow-lg transition-all group">
                    <h4 className="text-[#004890] font-black text-xl mb-3">{opt.title}</h4>
                    <div className="h-1 w-12 bg-[#FF9E0D] mx-auto mb-4 group-hover:w-20 transition-all" />
                    <p className="text-gray-600 text-sm">{opt.desc}</p>
                </div>
            ))}
        </div>
    ),
    availability: (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {cities.map(city => (
                <div key={city.slug} className="p-4 bg-white rounded-xl border border-gray-100 flex items-center gap-3 hover:bg-[#E8F0F8] transition-all cursor-pointer">
                    <MapPin className="w-4 h-4 text-[#004890]" />
                    <span className="text-[#004890] font-bold text-sm">{city.name}</span>
                </div>
            ))}
        </div>
    ),
    faqs: (
        <div className="space-y-3">
            {faqs.map((f, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="text-[#004890] font-bold text-lg flex items-center gap-3 mb-3">
                        <HelpCircle className="w-5 h-5 text-[#FF9E0D]" /> {f.q}
                    </h4>
                    <p className="text-gray-600 pl-8 leading-relaxed">{f.a}</p>
                </div>
            ))}
        </div>
    )
  };

  return (
    <div className="min-h-screen bg-[#F4F7F9]">
      <div className="h-16 bg-[#004890] w-full sticky top-0 z-[60]" />

      <section className="relative pt-12 pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#004890] mb-8 uppercase tracking-widest bg-[#E8F0F8] w-fit px-4 py-2 rounded-full">
            <Globe className="w-3 h-3" /> OneBridge Education Network
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-7xl font-black text-[#004890] leading-tight mb-6">
                Register your <br />
                <span className="text-[#FF9E0D]">AI career</span> with us.
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Join our premium Generative AI Masterclass and bridge the gap to industrial-scale AI engineering.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/#contact-section">
                  <Button className="px-10 py-7 bg-[#FF9E0D] hover:bg-[#e68d08] text-white rounded-xl font-black text-xl shadow-lg transition-transform hover:-translate-y-1">
                    LOGIN TO ENROLL
                  </Button>
                </Link>
                <button onClick={() => setIsModalOpen(true)} className="px-10 py-7 bg-white border-2 border-[#FF9E0D] text-[#FF9E0D] rounded-xl font-bold flex items-center gap-3 hover:bg-[#FF9E0D]/5 transition-all">
                    <Download className="w-5 h-5" /> SYLLABUS PDF
                </button>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#004890]" />
                    <div>
                        <div className="text-xl font-black text-[#004890]">100%</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Live sessions</div>
                    </div>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-[#004890]" />
                    <div>
                        <div className="text-xl font-black text-[#004890]">Accredited</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Certifications</div>
                    </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block relative">
              <div className="bg-[#E8F0F8] p-12 rounded-[3rem] border border-white relative overflow-hidden group">
                  <div className="bg-white p-8 rounded-2xl shadow-2xl relative z-10 border border-gray-100">
                      <div className="flex items-center justify-between mb-8">
                          <div className="font-black text-[#004890] text-2xl italic tracking-tighter">ONEBRIDGE</div>
                          <div className="w-10 h-10 bg-[#FF9E0D] rounded-full flex items-center justify-center text-white"><Sparkles className="w-6 h-6" /></div>
                      </div>
                      <div className="space-y-4">
                          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} className="h-full bg-[#004890]" />
                          </div>
                          <div className="flex justify-between text-xs font-bold text-[#004890]">
                              <span>Neural Processor</span>
                              <span>Active</span>
                          </div>
                      </div>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {[
                  { label: "1800-425-1199", value: "TOLL FREE SUPPORT", i: Headphones },
                  { label: "12 Weeks", value: "INTENSIVE COURSE", i: Clock },
                  { label: "25+ Projects", value: "HANDS-ON LABS", i: Layers },
                  { label: "Accredited", value: "GLOBAL CERTIFICATE", i: Award }
              ].map((s, idx) => (
                  <div key={idx} className="p-8 text-center flex flex-col items-center group">
                      <s.i className="w-8 h-8 text-[#004890] mb-4 group-hover:scale-110 transition-transform" />
                      <div className="text-xl font-black text-[#004890]">{s.label}</div>
                      <div className="text-[9px] font-bold text-gray-400 tracking-[0.2em]">{s.value}</div>
                  </div>
              ))}
          </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-[#004890]">Course <span className="text-[#FF9E0D]">Information.</span></h2>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-2 md:p-8 border border-gray-100">
                <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-4">
                    {tabs.map(t => (
                        <button
                            key={t.id}
                            onClick={() => setActiveTab(t.id)}
                            className={`px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${activeTab === t.id ? 'bg-[#004890] text-white shadow-lg' : 'text-[#004890] hover:bg-gray-50'}`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
                
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
                        {tabContent[activeTab]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </section>

      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
              <WordGlobe />
              <div>
                  <h2 className="text-4xl font-black text-[#004890] mb-8 leading-tight">Global Connectivity. <br /><span className="text-[#FF9E0D]">Local Expertise.</span></h2>
                  <p className="text-lg text-gray-600 mb-10">Our AI network spans across the globe, providing consistent institutional-grade training.</p>
              </div>
          </div>
      </section>

      <section className="py-24 bg-[#004890] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
              <h2 className="text-center text-white text-4xl font-black mb-16">Accredited by <span className="text-[#FF9E0D]">Our Learners.</span></h2>
              <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((t, i) => (
                      <div key={i} className="bg-white p-8 rounded-3xl shadow-xl">
                          <div className="flex gap-1 mb-4">
                              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#FF9E0D] text-[#FF9E0D]" />)}
                          </div>
                          <p className="text-gray-600 italic font-medium mb-6">"{t.quote}"</p>
                          <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#E8F0F8] rounded-full flex items-center justify-center font-black text-[#004890]">{t.author[0]}</div>
                              <div>
                                  <div className="font-black text-[#004890]">{t.author}</div>
                                  <div className="text-[10px] font-bold text-gray-400 uppercase">{t.role}</div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#004890]/60 backdrop-blur-md">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl">
                    <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#004890]"><X className="w-6 h-6" /></button>
                    <h3 className="text-3xl font-black text-[#004890] mb-2 uppercase tracking-tighter">Get the <span className="text-[#FF9E0D]">Syllabus.</span></h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-[#004890] font-bold" />
                        <input type="email" placeholder="email@address.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-[#004890] font-bold" />
                        <Button className="w-full py-8 bg-[#FF9E0D] text-white font-black text-xl uppercase rounded-xl shadow-lg mt-4">SUBMIT REQUEST</Button>
                    </form>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
}

export const Route = createFileRoute("/generative-ai-course")({
  head: () => ({
    meta: [
      { title: "Generative AI Course — Master AI in 12 Weeks | OneBridge Infotech" },
      { name: "description", content: "Master Generative AI with industrial accuracy. Architect production-ready AI solutions with our Federal-grade training." },
    ],
  }),
  component: GenerativeAICourse,
});
