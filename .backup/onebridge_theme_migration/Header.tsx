import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Zap, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/courses" as const, label: "All Courses" },
  { to: "/about" as const, label: "About Forge" },
  { to: "/why-choose-us" as const, label: "Why Us" },
];

const serviceLinks = [
  { to: "/services" as const, label: "IT Masterclasses" },
  { to: "/services" as const, label: "Corporate Strategy" },
  { to: "/services" as const, label: "Certification Paths" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled 
      ? "py-3 px-4 md:px-8" 
      : "py-6 px-4 md:px-8"
    }`}>
      <div className={`max-w-7xl mx-auto rounded-[2rem] transition-all duration-700 ${
        scrolled 
        ? "glass-dark shadow-premium py-2 px-8" 
        : "bg-white/10 backdrop-blur-xl border border-white/20 py-3 px-8 shadow-2xl"
      }`}>


        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-cta to-primary bg-[length:200%_200%] animate-[gradient_3s_ease_infinite] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="font-heading font-black text-2xl tracking-tighter transition-all duration-500 text-white">
              Skill<span className="text-primary group-hover:text-cta tracking-tighter">Forge</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="px-5 py-2.5 text-sm font-extrabold uppercase tracking-widest relative transition-all duration-300 group hover:scale-105 text-white active:scale-95"
                activeProps={{ className: "!text-primary !opacity-100 after:scale-x-100" }}
              >
                {link.label}
                <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
              </Link>
            ))}

            {/* Dropdown for Services */}
            <div className="relative ml-2" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <div className="px-5 py-2.5 text-sm font-extrabold uppercase tracking-widest cursor-pointer flex items-center gap-1 group transition-all text-white hover:text-primary">
                Services <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              </div>


              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute top-full left-0 mt-3 w-64 glass-dark rounded-[2rem] border border-white/10 shadow-premium p-3 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all group"
                      >
                        {s.label} <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="sm" className="rounded-xl px-6 font-black tracking-wide shadow-glow">
                JOIN FREE DEMO
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-3 rounded-2xl transition-all active:scale-90 text-white bg-primary/20 border border-white/10"
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
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden flex items-end sm:items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="w-full max-w-lg glass-dark rounded-[2.5rem] border border-white/10 p-8 shadow-premium relative overflow-hidden"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cta/20 rounded-full blur-[100px]" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-white/60 text-xs font-black uppercase tracking-[0.3em]">Navigation</span>
                  <button onClick={() => setMobileOpen(false)} className="text-white/40 hover:text-white"><X /></button>
                </div>
                
                <div className="grid gap-2">
                  {[...navLinks, { to: "/contact" as const, label: "Get in Touch" }].map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="text-3xl font-black text-white/90 hover:text-primary transition-all py-3 hover:pl-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-8 mt-8 border-t border-white/10 flex flex-col gap-4">
                  <Link to="/courses" onClick={() => setMobileOpen(false)}>
                    <Button variant="hero" className="w-full text-lg py-7 rounded-[1.5rem] shadow-glow">
                      Explore All Courses <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
