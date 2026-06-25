import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — EslandIT Trainings" },
      { name: "description", content: "Privacy policy for EslandIT Trainings. How we collect, use, and protect your personal data." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide when enrolling, contacting us, or subscribing to our newsletter — including your name, email address, phone number, and course preferences.",
  },
  {
    title: "How We Use Your Data",
    body: "Your data is used to deliver training services, respond to enquiries, send course updates, and improve our programmes. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Security",
    body: "We implement industry-standard security measures including encrypted transmission and access controls to protect your information.",
  },
  {
    title: "Your Rights",
    body: "You may request access, correction, or deletion of your personal data at any time by contacting info@eslanditsolutions.com.",
  },
];

function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #002d5c 0%, #004890 60%, #0057ab 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{ background: "rgba(255,158,13,0.15)", color: "#FF9E0D", border: "1px solid rgba(255,158,13,0.25)" }}>
            <Shield className="w-3.5 h-3.5" /> Data Governance
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-lg">How EslandIT Trainings protects and processes your personal information.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-4 md:px-8 space-y-6"
        >
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl p-8 shadow-sm"
              style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}>
              <h2 className="text-xl font-bold font-heading text-[#004890] mb-3 flex items-center gap-3">
                <span className="w-1.5 h-5 rounded-full bg-[#FF9E0D] flex-shrink-0" />
                {s.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <p className="text-sm text-slate-400 pt-4">
            Last updated: June 2026. For questions, visit our{" "}
            <Link to="/contact" className="text-[#004890] font-semibold hover:text-[#FF9E0D] transition-colors">contact page</Link>.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
