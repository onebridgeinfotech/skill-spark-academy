import { Link } from "@tanstack/react-router";
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowRight, Heart, Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#004890] relative overflow-hidden pt-40 pb-20">
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          {/* Brand Column */}
          <div className="space-y-12">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-2xl">
                <Zap className="w-8 h-8 text-[#FF9E0D] fill-[#FF9E0D]" />
              </div>
              <span className="font-heading font-black text-3xl tracking-tighter text-white uppercase italic">
                EslandIT<span className="text-[#FF9E0D] font-black">Trainings</span>
              </span>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed font-bold italic">
              Empowering the next generation of industrial architects. Global stability through technical mastery.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-[#FF9E0D] hover:bg-white/10 transition-all border border-white/5">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FF9E0D] text-sm font-black uppercase tracking-[0.4em] mb-12 italic">The Ecosystem</h4>
            <ul className="space-y-8">
              {[
                { label: "Technical Tracks", to: "/courses" },
                { label: "Institutional Profile", to: "/about" },
                { label: "Global Outcomes", to: "/why-choose-us" },
                { label: "Enterprise Solutions", to: "/services" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    className="text-white/60 hover:text-white font-black text-sm transition-all uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Categories */}
          <div>
            <h4 className="text-[#FF9E0D] text-sm font-black uppercase tracking-[0.4em] mb-12 italic">Verticals</h4>
            <ul className="space-y-8">
              {[
                "Modern Architecture",
                "Full-Stack Systems",
                "DevOps Deployment",
                "Machine Learning Ops",
              ].map((cat) => (
                <li key={cat}>
                  <Link 
                    to="/courses" 
                    className="text-white/60 hover:text-white font-black text-sm transition-all uppercase tracking-widest"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="text-[#FF9E0D] text-sm font-black uppercase tracking-[0.4em] mb-12 italic">Intelligence HQ</h4>
            <ul className="space-y-10">
              <li className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-[#FF9E0D] shrink-0" />
                <span className="text-white/60 font-bold text-sm leading-relaxed uppercase tracking-widest">
                  Suite-G, Weller House, 58-60 Longbridge Rd,<br /> Barking, IG11 8RT.
                </span>
              </li>
              <li className="flex items-center gap-6">
                <Mail className="w-6 h-6 text-white shrink-0" />
                <span className="text-white font-black text-sm uppercase tracking-widest">info@eslanditsolutions.com</span>
              </li>
              <li className="flex items-center gap-6">
                <Phone className="w-6 h-6 text-white shrink-0" />
                <span className="text-white font-black text-sm uppercase tracking-widest">0203 8190 333</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-20 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
              <Shield className="w-6 h-6 text-[#FF9E0D]" />
              <p className="text-white/20 text-[10px] font-black tracking-[0.4em] uppercase">
                &copy; {currentYear} EslandIT Trainings. Institutional Excellence Secured.
              </p>
          </div>
          <div className="flex gap-12">
            <Link to="/" className="text-white/20 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">Security Protocol</Link>
            <Link to="/" className="text-white/20 hover:text-white transition-colors text-[10px] font-black uppercase tracking-[0.2em]">Privacy Shield</Link>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 opacity-40 hover:opacity-100 transition-all"
          >
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Initialize Rise</span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FF9E0D] transition-colors">
              <ArrowRight className="w-6 h-6 text-white -rotate-45 group-hover:-rotate-90 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
