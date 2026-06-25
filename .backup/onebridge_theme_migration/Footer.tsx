import { Link } from "@tanstack/react-router";
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowRight, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark relative overflow-hidden pt-32 pb-16 border-t border-white/5">
      {/* Background patterns & Particles */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cta/10 rounded-full blur-[150px] animate-float" />
      
      {/* Light motion particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px] animate-[pulse_3s_ease-in-out_infinite]"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s` 
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-cta to-primary flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-500">
                <Zap className="w-7 h-7 text-white fill-white" />
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter text-white">
                Skill<span className="text-primary">Forge</span>
              </span>
            </Link>
            <p className="text-white/40 text-lg leading-relaxed font-medium">
              Architecting the elite tech workforce of tomorrow. Immersive training designed for the global 1%.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-primary transition-all duration-500 shadow-inner group">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-black uppercase tracking-[0.2em] mb-10">Exploration</h4>
            <ul className="space-y-6">
              {[
                { label: "Elite Courses", to: "/courses" },
                { label: "About Forge", to: "/about" },
                { label: "Success Stories", to: "/why-choose-us" },
                { label: "Masterclasses", to: "/services" },
                { label: "Enterprise", to: "/services" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    className="text-white/50 hover:text-primary font-bold text-base transition-all flex items-center gap-3 hover:translate-x-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Categories */}
          <div>
            <h4 className="text-white text-lg font-black uppercase tracking-[0.2em] mb-10">Pathways</h4>
            <ul className="space-y-6">
              {[
                "Cloud Architecture",
                "Full-Stack Engineering",
                "DevOps Mastery",
                "Data Science / ML",
                "Cyber Security",
              ].map((cat) => (
                <li key={cat}>
                  <Link 
                    to="/courses" 
                    className="text-white/50 hover:text-cta font-bold text-base transition-all flex items-center gap-3 hover:translate-x-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="text-white text-lg font-black uppercase tracking-[0.2em] mb-10">Global HQ</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-white/60 font-medium leading-relaxed mt-1">
                  Forge Tower, Tech District,<br /> Bangalore, India 560001
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
                  <Mail className="w-5 h-5 text-cta" />
                </div>
                <span className="text-white/60 font-bold">nexus@skillforge.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
                  <Phone className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-white/60 font-bold">+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-sm font-bold tracking-widest uppercase">
            &copy; {currentYear} SkillForge Academy. Empowered by Industry Excellence.
          </p>
          <div className="flex gap-10">
            <Link to="/" className="text-white/20 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.15em]">Privacy Protocol</Link>
            <Link to="/" className="text-white/20 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.15em]">Licensing</Link>
            <Link to="/" className="text-white/20 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.15em]">Security Vault</Link>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-center gap-3 transition-opacity hover:opacity-100 opacity-60"
          >
            <div className="w-12 h-12 rounded-full border-2 border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowRight className="w-6 h-6 text-white -rotate-90 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Ignition</span>
          </button>
        </div>
        
        {/* Built with love */}
        <div className="mt-12 text-center">
            <p className="text-white/10 text-[10px] uppercase font-black tracking-widest flex items-center justify-center gap-2">
                Engineered with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for the next generation.
            </p>
        </div>
      </div>
    </footer>
  );
}
