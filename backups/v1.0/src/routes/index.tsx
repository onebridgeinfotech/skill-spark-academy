import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/courses";
import { 
  ArrowRight, Users, Award, Clock, Star, Code, Cloud, CheckCircle, 
  Globe, Zap, Target, Shield, Rocket, GraduationCap, MessageCircle, 
  Briefcase, Phone, Mail, Send, Play, Trophy, Sparkles, Terminal,
  Building2, PlayCircle, Code2, Database, Server, Settings, BookOpen
} from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/onebridge-hero.png";
import previewImage from "@/assets/onebridge-preview.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const segments = [
  { 
    title: "Fresh Graduates", 
    desc: "Transform theoretical knowledge into practical skills with real projects and industry exposure.", 
    icon: GraduationCap,
    tags: ["Theory to Practice", "Real Projects", "Industry Exposure"]
  },
  { 
    title: "Working Professionals", 
    desc: "Upskill with cutting-edge technologies and methodologies for career growth and leadership.", 
    icon: Briefcase,
    tags: ["Advanced Skills", "Career Growth", "Leadership"]
  },
  { 
    title: "Career Switchers", 
    desc: "Transition smoothly into tech with comprehensive support and industry mentorship.", 
    icon: Rocket,
    tags: ["Complete Support", "Smooth Transition", "Mentorship"]
  }
];

const blueprintSteps = [
    { step: "01", title: "Diagnostic Triage", desc: "Assessment of your current skills and career trajectory alignment.", icon: Target },
    { step: "02", title: "Immersive Foundry", desc: "Live project training using industry-standard workspace environments.", icon: Terminal },
    { step: "03", title: "Mentorship Node", desc: "Access to 500+ expert mentors from top tech organizations.", icon: Users },
    { step: "04", title: "Placement Vault", desc: "Direct access to 250+ hiring partners and internship-to-job pathways.", icon: Trophy },
];

const placementStats = [
    { label: "Placement Rate", value: "95%", icon: TrendingUpIcon },
    { label: "Expert Mentors", value: "500+", icon: Users },
    { label: "Hiring Partners", value: "250+", icon: Building2 },
    { label: "Live Projects", value: "50+", icon: Code },
];

function TrendingUpIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
}

const testimonials = [
    { name: "Arjun Mehta", role: "Associate Director at Google", text: "Leading the future of AI and helping students master cutting-edge technologies. The project-led training here is mirror-perfect for industry needs.", image: "A" },
    { name: "Sarah Khan", role: "DevOps Architect", text: "Delivering in-depth DevOps training and building scalable cloud solutions. EslandIT provides the workspace-first experience modern firms demand.", image: "S" },
    { name: "Rohit Sharma", role: "Senior AI Engineer at IBM", text: "Pioneering generative AI solutions and mentoring the next generation. The gap between academics and industry is finally bridged here.", image: "R" },
    { name: "Priya Das", role: "Full Stack Lead at Microsoft", text: "Empowering developers with architectural excellence. EslandIT's blueprint ensures students don't just write code, they build products.", image: "P" },
    { name: "Vikram Singh", role: "Cloud Security Specialist", text: "Securing the enterprise perimeter with zero-trust architectures. The security tracks here are the most rigorous I have seen in the sector.", image: "V" },
    { name: "Ananya Iyer", role: "Product Manager at Amazon", text: "Navigating complex product life cycles. The integration of technology and business logic at EslandIT is what global firms look for.", image: "A" },
];

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#FF9E0D] z-[100] origin-left" style={{ scaleX }} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-[85vh] bg-[#004890] clip-path-hero" />
          <div className="absolute inset-0 grid-pattern-bridge opacity-[0.05]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full pt-12 md:pt-0">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                   <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                   <span className="text-white text-[10px] font-tech font-bold uppercase tracking-[0.3em]">India's Best IT Training Provider</span>
                </div>
              </motion.div>

              <h1 className="text-white font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic">
                Accelerate <br />
                <span className="text-[#FF9E0D]">Your Career.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-xl font-medium leading-relaxed italic border-l-2 border-[#FF9E0D] pl-8">
                Bridge the gap between academics and industry. Master the most in-demand tech skills through project-led training, real-world internships, and industry mentorship.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <Link to="/courses">
                  <Button className="px-12 py-8 bg-[#FF9E0D] hover:bg-[#ffae33] text-white rounded-2xl font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95">VIEW COURSES <ArrowRight className="ml-3 w-5 h-5" /></Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="px-10 py-8 border-2 border-white/40 text-white hover:bg-white hover:text-[#004890] rounded-2xl font-black text-xl backdrop-blur-md transition-all">JOIN DEMO</Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-8 pt-16">
                 <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#FF9E0D]" /><span className="text-white text-xs font-bold uppercase italic tracking-wider">Internship Pathways</span></div>
                 <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#FF9E0D]" /><span className="text-white text-xs font-bold uppercase italic tracking-wider">Live Projects</span></div>
                 <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#FF9E0D]" /><span className="text-white text-xs font-bold uppercase italic tracking-wider">Industry Mentors</span></div>
              </div>
            </div>

            <div className="hidden lg:block relative text-right">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative inline-block">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF9E0D]/20 rounded-full blur-[100px]" />
                    <img src={heroImage} alt="Hero" className="w-[500px] h-auto relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)]" />
                    <div className="absolute bottom-20 -right-5 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-gray-100">
                        <div className="text-[#004890] font-black text-4xl italic">95%</div>
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Placement Rate</div>
                    </div>
                </motion.div>
            </div>
          </div>
        </div>
        <style>{` .clip-path-hero { clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 100%); } `}</style>
      </section>

      {/* About Section - Empowering Generation */}
      <section className="py-40 bg-white" id="about">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-32 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative order-2 lg:order-1 pt-10 pl-10">
                  <div className="absolute inset-0 bg-[#004890]/5 rounded-[4rem] group-hover:scale-105 transition-transform translate-x-4 translate-y-4" />
                  <img src={previewImage} alt="Mission" className="relative z-10 w-full rounded-[4rem] shadow-2xl border-2 border-gray-100" />
                  <div className="absolute -bottom-8 -left-8 bg-[#FF9E0D] p-10 rounded-[3rem] shadow-2xl text-white z-20">
                      <Rocket className="w-12 h-12 mb-4" />
                      <div className="text-2xl font-black italic uppercase leading-none">🚀 Transforming <br />Education</div>
                  </div>
              </motion.div>
              <div className="space-y-10 order-1 lg:order-2">
                  <div className="border-l-8 border-[#004890] pl-10">
                     <span className="text-[#FF9E0D] font-tech font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Our Mission</span>
                     <h2 className="text-4xl md:text-6xl font-black text-[#004890] tracking-tighter uppercase italic leading-[0.9]">Empowering Tech <br /><span className="text-gray-300">Leaders.</span></h2>
                  </div>
                  <p className="text-xl text-gray-600 font-bold italic leading-relaxed">"At EslandIT Trainings, we don't just teach—we build careers. We bridge the critical gap between traditional academics and real-world industry demands."</p>
                  <div className="grid grid-cols-2 gap-6">
                      {["Project-Based Learning", "Industry Mentorship", "Hands-on Experience", "Job-Ready Skills"].map(item => (
                          <div key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                              <CheckCircle className="w-5 h-5 text-[#FF9E0D]" />
                              <span className="text-sm font-black text-[#004890] uppercase italic">{item}</span>
                          </div>
                      ))}
                  </div>
                  <p className="text-gray-500 italic text-sm">We believe mastery comes from execution. Our academy focuses on project-led training that mirrors real workplace scenarios, ensuring our graduates are truly job-ready from day one.</p>
              </div>
          </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-24">
                  <span className="text-[#FF9E0D] font-tech font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Tailored Experience</span>
                  <h2 className="text-4xl md:text-6xl font-black text-[#004890] tracking-tighter uppercase italic">Who We <span className="text-[#FF9E0D]">Serve.</span></h2>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                  {segments.map((s, i) => (
                      <motion.div key={i} whileHover={{ y: -15 }} className="p-12 bg-white rounded-[4rem] border border-gray-100 shadow-2xl group transition-all">
                          <div className="w-20 h-20 rounded-[2.5rem] bg-gray-50 flex items-center justify-center text-[#004890] mb-10 group-hover:bg-[#004890] group-hover:text-white transition-colors"><s.icon className="w-10 h-10" /></div>
                          <h3 className="text-2xl font-black text-[#004890] mb-6 uppercase tracking-tighter italic">{s.title}</h3>
                          <p className="text-gray-500 font-bold italic leading-relaxed mb-8">"{s.desc}"</p>
                          <div className="flex flex-wrap gap-2">
                              {s.tags.map(tag => <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-blue-50 text-[#004890] px-3 py-1.5 rounded-full">{tag}</span>)}
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Why Choose Us - Results Driven */}
      <section className="py-32 bg-[#004890] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FF9E0D]/5 opacity-20" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-24">
                  <span className="text-white/40 font-tech font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Absolute Advantage</span>
                  <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-[0.8] mb-10">Built for the Ambitious. <br /><span className="text-[#FF9E0D]">Defined by Results.</span></h2>
                  <p className="text-blue-100/60 max-w-3xl mx-auto font-bold italic">Our holistic ecosystem is designed to transform potential into performance, providing everything you need to thrive in the modern tech economy.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {placementStats.map((s, i) => (
                      <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md group hover:bg-white transition-all duration-700">
                          <s.icon className="w-12 h-12 text-[#FF9E0D] mb-10 group-hover:scale-110 transition-transform" />
                          <div className="text-6xl font-black text-white group-hover:text-[#004890] transition-colors mb-2 tracking-tighter italic">{s.value}</div>
                          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-[#004890]/40 transition-colors">{s.label}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Student Blueprint - The Process */}
      <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-10">
                      <div className="border-l-8 border-[#FF9E0D] pl-10">
                         <span className="text-[#004890] font-tech font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Structural Engineering</span>
                         <h2 className="text-5xl md:text-7xl font-black text-[#004890] tracking-tighter uppercase italic leading-[0.85]">The Student <br /><span className="text-gray-200">Blueprint.</span></h2>
                      </div>
                      <p className="text-gray-500 font-bold italic leading-relaxed">Our workspace-first educational experience is replicated from top IT hubs. We ensure each node in our network follows a precision pathway to technical sovereignty.</p>
                      <Button className="px-12 py-8 bg-[#004890] text-white rounded-2xl font-black uppercase italic shadow-2xl hover:scale-105 transition-all">START YOUR JOURNEY</Button>
                  </div>
                  <div className="space-y-8">
                      {blueprintSteps.map((s, i) => (
                          <div key={i} className="flex gap-10 group">
                              <div className="text-6xl font-black text-gray-100 group-hover:text-[#FF9E0D] transition-colors leading-none">{s.step}</div>
                              <div className="space-y-2">
                                  <h4 className="text-2xl font-black text-[#004890] uppercase italic group-hover:translate-x-2 transition-transform">{s.title}</h4>
                                  <p className="text-gray-500 font-bold italic text-sm">"{s.desc}"</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Courses Foundry - Browse IT Courses */}
      <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="border-l-8 border-[#004890] pl-10">
                    <span className="text-[#FF9E0D] font-tech font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Solution Tracks</span>
                    <h2 className="text-5xl md:text-7xl font-black text-[#004890] tracking-tighter uppercase italic">Browse IT <span className="text-[#FF9E0D]">Courses.</span></h2>
                </div>
                <Link to="/courses" className="text-[#004890] font-black uppercase italic tracking-widest text-sm border-b-4 border-[#FF9E0D] pb-2 hover:gap-6 transition-all">View Full Matrix</Link>
            </div>

            {/* Category Filter Section */}
            <div className="mb-20 space-y-10">
                <div className="flex justify-center">
                    <div className="bg-[#FF9E0D] px-10 py-4 rounded-full shadow-lg flex items-center gap-4 group cursor-pointer hover:scale-105 transition-all">
                        <Star className="w-5 h-5 text-white animate-pulse" />
                        <span className="text-white font-black uppercase italic tracking-widest text-sm">Browse more courses</span>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                    {["All Courses", "Artificial Intelligence", "Salesforce", "Marketing", "DevOps", "Data Science", "Cloud Computing", "Programming & Frameworks", "BI and Visualization", "Cyber Security", "Others"].map((cat, i) => (
                        <button 
                            key={i} 
                            className={`px-8 py-3 rounded-xl font-black text-[10px] uppercase italic tracking-widest transition-all shadow-sm border ${
                                i === 0 
                                ? "bg-[#004890] text-white border-[#004890]" 
                                : "bg-white text-[#004890] border-gray-200 hover:border-[#004890] hover:bg-gray-50"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.slice(0, 4).map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
            </div>
        </div>
      </section>

      {/* Testimonials - Validated Mentorship Wall */}
      <section className="py-32 bg-[#004890] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FF9E0D]/5 opacity-20" />
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-24">
              <span className="text-white/40 font-tech font-bold uppercase tracking-[0.4em] text-[10px] block mb-4">Validated Trajectory</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">Success <span className="text-[#FF9E0D]">Founders.</span></h2>
          </div>

          {/* Infinite Marquee Mode */}
          <div className="relative flex overflow-hidden">
              <motion.div 
                className="flex gap-12 py-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
              >
                  {[...testimonials, ...testimonials].map((t, i) => (
                      <div key={i} className="flex-shrink-0 w-[450px] p-12 rounded-[4rem] bg-white/5 border border-white/10 backdrop-blur-md relative group overflow-hidden shadow-2xl transition-all">
                          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                              <Star className="w-20 h-20 text-white" />
                          </div>
                          <p className="text-xl font-bold text-white italic leading-relaxed mb-12 relative z-10 transition-colors">"{t.text}"</p>
                          <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                              <div className="w-16 h-16 rounded-2xl bg-[#FF9E0D] flex items-center justify-center text-white text-2xl font-black shadow-2xl">{t.image}</div>
                              <div>
                                  <p className="text-lg font-black text-white uppercase italic">{t.name}</p>
                                  <p className="text-xs font-bold text-blue-200 uppercase tracking-widest">{t.role}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </motion.div>
          </div>
      </section>

      {/* Intelligence Hub - One Step Away */}
      <section className="py-32 bg-white relative overflow-hidden" id="contact">
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-20">
              <p className="text-[#004890]/60 font-tech font-bold uppercase tracking-[0.4em] text-xs mb-4">Have questions about our programs? Want to learn more about our assessment process? We're here to help!</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 relative z-10">
              {/* Left Side: Contact Info */}
              <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 shadow-xl flex flex-col justify-center">
                  <h3 className="text-3xl sm:text-4xl font-black text-[#004890] mb-12 uppercase italic tracking-tighter">Contact Information</h3>
                  <div className="space-y-10">
                      <div className="flex items-center gap-8 group">
                          <div className="w-16 h-16 rounded-2xl bg-[#004890] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg"><Mail className="w-8 h-8" /></div>
                          <div>
                              <p className="text-[#004890] text-xl font-bold italic">Email Us</p>
                              <p className="text-gray-500 text-lg">info@eslanditsolutions.com</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-8 group">
                          <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg"><Phone className="w-8 h-8" /></div>
                          <div>
                              <p className="text-[#004890] text-xl font-bold italic">Call / WhatsApp</p>
                              <p className="text-gray-500 text-lg">0203 8190 333</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-8 group">
                          <div className="w-16 h-16 rounded-2xl bg-[#FF9E0D] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg"><Globe className="w-8 h-8" /></div>
                          <div>
                              <p className="text-[#004890] text-xl font-bold italic">Our Office</p>
                              <p className="text-gray-500 text-lg leading-relaxed max-w-xs">Suite-G, Weller House, 58-60 Longbridge Rd, Barking, IG11 8RT.</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-[#004890] rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#FF9E0D]" />
                  <div className="text-center mb-12">
                      <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase italic">One Step Away</h3>
                      <p className="text-[#FF9E0D] text-[10px] font-black uppercase tracking-[0.4em] mt-3">Configure Your Learning Ecosystem</p>
                  </div>
                  <form className="space-y-6">
                      <div className="space-y-2">
                          <label className="text-[10px] font-black text-blue-100 uppercase tracking-widest ml-2">Full Name</label>
                          <div className="relative">
                              <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-14 text-white focus:ring-2 ring-[#FF9E0D] outline-none transition-all placeholder:text-white/20" placeholder="Enter your full name" />
                          </div>
                      </div>
                      <div className="space-y-2">
                          <label className="text-[10px] font-black text-blue-100 uppercase tracking-widest ml-2">Verified Email</label>
                          <div className="relative">
                              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-14 text-white focus:ring-2 ring-[#FF9E0D] outline-none transition-all placeholder:text-white/20" placeholder="name@gmail.com" />
                          </div>
                      </div>
                      <div className="space-y-2">
                          <label className="text-[10px] font-black text-blue-100 uppercase tracking-widest ml-2">WhatsApp / Contact Number</label>
                          <div className="relative">
                              <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-14 text-white focus:ring-2 ring-[#FF9E0D] outline-none transition-all placeholder:text-white/20" placeholder="+91 00000 00000" />
                          </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label className="text-[10px] font-black text-blue-100 uppercase tracking-widest ml-2">Course Interest</label>
                              <div className="relative">
                                  <BookOpen className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-14 text-white focus:ring-2 ring-[#FF9E0D] outline-none transition-all appearance-none">
                                      <option className="bg-[#004890]">Select Course</option>
                                      <option className="bg-[#004890]">Generative AI</option>
                                      <option className="bg-[#004890]">Salesforce Cloud</option>
                                      <option className="bg-[#004890]">AWS DevSecOps</option>
                                  </select>
                              </div>
                          </div>
                          <div className="space-y-2">
                              <label className="text-[10px] font-black text-blue-100 uppercase tracking-widest ml-2">Service Required</label>
                              <div className="relative">
                                  <Settings className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-14 text-white focus:ring-2 ring-[#FF9E0D] outline-none transition-all appearance-none">
                                      <option className="bg-[#004890]">Select Service</option>
                                      <option className="bg-[#004890]">Live Training</option>
                                      <option className="bg-[#004890]">Corporate Solutions</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                      <Button className="w-full py-10 bg-[#FF9E0D] hover:bg-orange-600 text-white rounded-2xl font-black text-2xl shadow-2xl transition-all group mt-6">
                          MESSAGE <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-4 transition-transform" />
                      </Button>
                      <p className="text-[9px] text-center text-white/30 uppercase tracking-[0.3em] mt-8">BY CONTINUING, YOU AGREE TO THE <Link to="/terms" className="text-white/60 hover:text-white">TERMS OF SERVICE</Link></p>
                  </form>
              </div>
          </div>
      </section>
    </div>
  );
}
