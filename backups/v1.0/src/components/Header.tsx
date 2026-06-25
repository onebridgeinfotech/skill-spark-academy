import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Zap, ChevronDown, ArrowRight, Search, Play, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "@/lib/courses";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About Us" },
  { to: "/why-choose-us" as const, label: "Why Choose Us" },
];

const serviceLinks = [
  { to: "/services" as const, label: "IT Trainings", icon: Zap },
  { to: "/services" as const, label: "Corporate Trainings", icon: Users },
  { to: "/services" as const, label: "Self-Paced Training", icon: Play },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCourses = courses.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
      ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 py-3" 
      : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-[#004890] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all">
              <Zap className="w-7 h-7 text-[#FF9E0D] fill-[#FF9E0D]" />
            </div>
            <span className="font-heading font-black text-2xl tracking-tight text-[#004890] uppercase italic">
              EslandIT<span className="text-[#FF9E0D]">Trainings</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="px-3 py-2 text-[11px] font-tech font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#FF9E0D] transition-all relative group"
                activeProps={{ className: "!text-[#FF9E0D] italic" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#FF9E0D] transition-all scale-x-0 group-hover:scale-x-100 shadow-[0_0_10px_#FF9E0D]" />
              </Link>
            ))}

            {/* Courses Searchable Dropdown */}
            <div 
                className="relative"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
            >
                <button className="px-3 py-2 text-[11px] font-tech font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#FF9E0D] transition-all flex items-center gap-2 group">
                    Courses <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${coursesOpen ? 'rotate-180 text-[#FF9E0D]' : 'group-hover:text-[#FF9E0D]'}`} />
                </button>

                <AnimatePresence>
                    {coursesOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-4 w-96 bg-white border border-gray-100 rounded-2xl shadow-2xl p-6 overflow-hidden z-50"
                        >
                            <div className="relative mb-6">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder="Search technical tracks..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-xs font-tech text-[#004890] focus:outline-none focus:border-[#004890] transition-all"
                                />
                            </div>
                            
                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Top Programs</div>
                                {filteredCourses.map((c) => (
                                    <Link
                                        key={c.id}
                                        to={c.slug ? `/generative-ai-course` : "/courses" as any}
                                        className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all group"
                                    >
                                        <div>
                                            <div className="text-sm font-bold text-[#004890] group-hover:text-[#FF9E0D] transition-colors">{c.name}</div>
                                            <div className="text-[10px] text-gray-400 font-tech uppercase">{c.category} • {c.duration}</div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-[#FF9E0D] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                ))}
                                {filteredCourses.length === 0 && (
                                    <div className="p-4 text-center text-gray-400 text-xs font-bold italic">No matching tracks found.</div>
                                )}
                                <Link to="/courses" className="block text-center pt-4 border-t border-gray-100 text-[10px] font-black text-[#FF9E0D] uppercase tracking-widest hover:tracking-[0.2em] transition-all">
                                    View Full Catalog
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
            >
                <button className="px-3 py-2 text-[11px] font-tech font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#FF9E0D] transition-all flex items-center gap-2">
                    Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                    {servicesOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-4 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 overflow-hidden z-50"
                        >
                            <div className="space-y-2">
                                {serviceLinks.map((s) => (
                                    <Link
                                        key={s.label}
                                        to={s.to}
                                        className="flex items-center gap-4 px-4 py-4 text-xs font-black uppercase tracking-widest text-[#004890] hover:bg-gray-50 rounded-xl transition-all group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#FF9E0D] group-hover:bg-[#FF9E0D] group-hover:text-white transition-colors">
                                            <s.icon className="w-4 h-4" />
                                        </div>
                                        {s.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Link
                to="/contact"
                className="px-3 py-2 text-[11px] font-tech font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#FF9E0D] transition-all"
            >
                Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/contact">
              <Button size="lg" className="rounded-xl px-10 bg-[#FF9E0D] hover:bg-[#e68d08] text-white font-black tracking-widest text-[10px] shadow-lg transition-all hover:scale-105 active:scale-95">
                ENROLL NOW
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-3 rounded-xl border border-gray-100 text-[#004890]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden p-6 pt-24 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-center pb-20">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-2xl font-black text-[#004890] hover:text-[#FF9E0D] uppercase tracking-tighter">Home</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="text-2xl font-black text-[#004890] hover:text-[#FF9E0D] uppercase tracking-tighter">About Us</Link>
              <Link to="/why-choose-us" onClick={() => setMobileOpen(false)} className="text-2xl font-black text-[#004890] hover:text-[#FF9E0D] uppercase tracking-tighter">Why Choose Us</Link>
              <Link to="/courses" onClick={() => setMobileOpen(false)} className="text-2xl font-black text-[#004890] hover:text-[#FF9E0D] uppercase tracking-tighter">Courses</Link>
              
              <div className="py-6 border-y border-gray-100 space-y-4">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Our Services</div>
                  {serviceLinks.map(s => (
                    <Link key={s.label} to={s.to} onClick={() => setMobileOpen(false)} className="block text-lg font-bold text-[#004890]/60 hover:text-[#FF9E0D] uppercase tracking-tight">{s.label}</Link>
                  ))}
              </div>

              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-2xl font-black text-[#004890] hover:text-[#FF9E0D] uppercase tracking-tighter">Contact</Link>
              
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="pt-8">
                <Button className="w-full py-8 rounded-2xl bg-[#FF9E0D] text-white font-black text-xl shadow-lg uppercase italic">
                   Scale Further
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
