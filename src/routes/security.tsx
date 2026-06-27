import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Lock, CreditCard, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security Policy — Ismart Skills" },
      { name: "description", content: "Security practices and protocols at Ismart Skills for protecting learner and institutional data." },
    ],
  }),
  component: SecurityPage,
});

const sections = [
  {
    icon: Lock,
    title: "Platform Security",
    body: "All learning platforms use HTTPS encryption, secure authentication, and role-based access controls to ensure only authorised users access course materials.",
  },
  {
    icon: Shield,
    title: "Data Protection",
    body: "Learner records and payment information are stored on secure infrastructure with regular backups, monitoring, and incident response procedures.",
  },
  {
    icon: CreditCard,
    title: "Payment Security",
    body: "Financial transactions are processed through PCI-compliant payment providers. Ismart Skills does not store full card details on its servers.",
  },
  {
    icon: AlertTriangle,
    title: "Reporting Concerns",
    body: "If you identify a security vulnerability or suspect unauthorised access, report it immediately to info@ismartskills.uk.",
  },
];

function SecurityPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #002d5c 0%, #004890 60%, #0057ab 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{ background: "rgba(255,158,13,0.15)", color: "#FF9E0D", border: "1px solid rgba(255,158,13,0.25)" }}>
            <Shield className="w-3.5 h-3.5" /> Institutional Security
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-white mb-4">Security Policy</h1>
          <p className="text-white/60 text-lg">Our commitment to safeguarding training platforms, learner data, and institutional systems.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-4 md:px-8 space-y-5"
        >
          {sections.map((s, i) => (
            <div key={s.title} className="rounded-2xl p-8 shadow-sm flex gap-6"
              style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #e8f0fc 0%, #d0e3ff 100%)" }}>
                <s.icon className="w-5 h-5 text-[#004890]" />
              </div>
              <div>
                <h2 className="text-lg font-bold font-heading text-[#004890] mb-2">{s.title}</h2>
                <p className="text-slate-600 leading-relaxed text-sm">{s.body}</p>
              </div>
            </div>
          ))}

          <p className="text-sm text-slate-400 pt-4">
            Questions? Contact us via the{" "}
            <Link to="/contact" className="text-[#004890] font-semibold hover:text-[#FF9E0D] transition-colors">contact page</Link>.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
