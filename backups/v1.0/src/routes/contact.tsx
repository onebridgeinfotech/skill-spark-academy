import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — OneBridge Infotech" },
      { name: "description", content: "Get in touch with OneBridge Infotech. Reach out for course inquiries, demo requests, or corporate training needs." },
      { property: "og:title", content: "Contact OneBridge Infotech" },
      { property: "og:description", content: "Reach out for course inquiries, demo requests, or corporate training." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="section-padding text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta-foreground/10 text-cta-foreground text-xs font-bold mb-5 border border-cta-foreground/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cta" /> We'd Love to Hear From You
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-cta-foreground mb-4">Get in Touch</h1>
            <p className="text-cta-foreground/60 text-lg">Have questions? We're here to help you start your journey.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Form - takes 3 columns */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-3">
            <h2 className="font-heading text-2xl font-extrabold text-foreground mb-2">Send us a Message</h2>
            <p className="text-muted-foreground text-sm mb-8">Fill in the form and our team will get back within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text" placeholder="Your Name" required value={form.name}
                  onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email" placeholder="Email Address" required value={form.email}
                  onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="tel" placeholder="Phone Number" value={form.phone}
                onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))}
                className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message" rows={5} required value={form.message}
                onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                className="w-full bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info - takes 2 columns */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl border border-border p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cta" />
              <h3 className="font-heading font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                  { icon: Mail, label: "Email", value: "info@OneBridge Infotech.com" },
                  { icon: MapPin, label: "Address", value: "Tech Park, Whitefield, Bangalore, India 560066" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-cta/10 text-primary flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20your%20IT%20training%20programs"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-chart-5/10 text-chart-5 rounded-2xl px-6 py-5 font-bold text-sm hover:bg-chart-5/15 transition-colors border border-chart-5/20"
            >
              <MessageCircle className="w-5 h-5" /> Chat with us on WhatsApp
            </a>

            <div className="rounded-2xl overflow-hidden border border-border h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9932!2d77.7461!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWhitefield%2C+Bangalore!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="OneBridge Infotech Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
