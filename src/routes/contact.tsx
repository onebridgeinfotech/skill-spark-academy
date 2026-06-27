import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Send, Globe, Zap, ArrowRight, Shield } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/siteConfig";
import { submitLead } from "@/lib/submitLead";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Connect Nodes — Ismart Skills" },
      { name: "description", content: "Contact the Ismart Skills London HQ. Accelerate your career in AI, Cloud, and DevOps with our industrial-grade mentorship tracks." },
      { property: "og:title", content: "Contact Ismart Skills HQ" },
      { property: "og:description", content: "Professional institutional inquiry Gateway for technical track enrollment." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", track: "General Inquiry", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const result = await submitLead({
        source: "contact",
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        programme: form.track,
        message: form.message,
      });
      alert(result.message || "Thank you. Our team will respond within 12 minutes.");
      setForm({ name: "", email: "", phone: "", track: "General Inquiry", message: "" });
    } catch (error) {
      alert(error instanceof Error ? error.message : "Unable to send your message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Cinematic Header Overlay */}
      <section className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #001a3a 0%, #003166 50%, #004890 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "#FF9E0D" }} />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9E0D]/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="border-l-[12px] border-[#FF9E0D] pl-12"
          >
            <span className="text-white/40 font-semibold uppercase tracking-widest text-[11px] block mb-6">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">Talk to <br /><span className="text-[#FF9E0D]">Our Team.</span></h1>
            <p className="text-xl text-blue-100 max-w-xl mt-6 leading-relaxed">Ready to start your IT career journey? Our team is here to help you find the right programme and answer any questions.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Connection Interface */}
      <section className="py-20 relative" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-20">
          
          {/* Intelligence HQ Information */}
          <div className="lg:col-span-2 space-y-12">
             <div className="surface-elevated p-12 rounded-[4rem] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#FF9E0D] shadow-[0_0_20px_#FF9E0D]" />
                <h3 className="text-2xl font-heading font-bold text-[#004890] mb-10">Contact Details</h3>
                
                <div className="space-y-12">
                  {[
                    { icon: MapPin, label: "Our Address", value: siteConfig.address.full, href: siteConfig.address.mapsUrl, color: "bg-blue-500" },
                    { icon: Phone, label: "Phone", value: siteConfig.phone.display, href: `tel:${siteConfig.phone.tel}`, color: "bg-green-500" },
                    { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp.display, href: getWhatsAppUrl(), color: "bg-green-600" },
                    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "bg-[#FF9E0D]" },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-6 group/item cursor-pointer"
                    >
                       <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-xl transition-all group-hover/item:scale-110`}>
                         <item.icon className="w-6 h-6" />
                       </div>
                       <div>
                         <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                         <p className="text-[#004890] text-base font-semibold leading-snug">{item.value}</p>
                       </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-gray-100">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between bg-green-500 rounded-[2rem] px-8 py-5 text-white font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-green-600 transition-all hover:scale-105 active:scale-95"
                    >
                      <div className="flex items-center gap-4">
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp {siteConfig.whatsapp.display}
                      </div>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
             </div>

             <div className="rounded-[4rem] overflow-hidden border-4 border-white shadow-2xl h-80 grayscale hover:grayscale-0 transition-all duration-700 depth-lift">
               <iframe
                 src={siteConfig.address.mapsEmbed}
                 width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                 title={`${siteConfig.name} London HQ`}
               />
             </div>
          </div>

          {/* Connection Protocol Form */}
          <div className="lg:col-span-3">
             <div className="bg-[#004890] rounded-[4rem] p-12 md:p-16 shadow-2xl relative border-gradient">
                <div className="flex items-center justify-between mb-16">
                   <div className="space-y-2">
                     <h3 className="text-3xl font-heading font-bold text-white">Send Us a <br />Message</h3>
                     <p className="text-blue-200/50 text-sm">We'll get back to you within 24 hours.</p>
                   </div>
                   <Zap className="w-16 h-16 text-[#FF9E0D] opacity-20 animate-pulse" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div className="space-y-2">
                        <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">Full Name *</label>
                        <input
                          type="text" placeholder="Your full name" required value={form.name}
                          onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 ring-[#FF9E0D]/30 transition-all placeholder:text-white/20 font-medium text-sm"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">Email Address *</label>
                        <input
                          type="email" placeholder="your@email.com" required value={form.email}
                          onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 ring-[#FF9E0D]/30 transition-all placeholder:text-white/20 font-medium text-sm"
                        />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">Phone Number</label>
                        <input
                          type="tel" placeholder="+44 7XXX XXXXXX" value={form.phone}
                          onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 ring-[#FF9E0D]/30 transition-all placeholder:text-white/20 font-medium text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">Course Interest</label>
                        <select
                          value={form.track}
                          onChange={(e) => setForm(p => ({ ...p, track: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 ring-[#FF9E0D]/30 transition-all appearance-none font-medium text-sm"
                        >
                           <option className="bg-[#004890]">General Inquiry</option>
                           <option className="bg-[#004890]">Artificial Intelligence</option>
                           <option className="bg-[#004890]">Salesforce Mastery</option>
                           <option className="bg-[#004890]">Cloud Engineering</option>
                        </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                      <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">Your Message *</label>
                      <textarea
                        placeholder="Tell us about your goals and how we can help..." rows={5} required value={form.message}
                        onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 ring-[#FF9E0D]/30 transition-all placeholder:text-white/20 font-medium text-sm resize-none"
                      />
                  </div>

                  <Button type="submit" disabled={submitting} className="w-full h-14 bg-[#FF9E0D] hover:bg-amber-500 text-white rounded-2xl font-bold text-base shadow-xl transition-all group active:scale-[0.98] flex items-center justify-center gap-3 mt-2">
                    {submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/5 opacity-40">
                    <Shield className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-semibold text-white uppercase tracking-widest">Your data is protected and never shared</span>
                  </div>
                </form>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}
