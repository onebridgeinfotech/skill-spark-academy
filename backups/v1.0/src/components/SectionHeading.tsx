import { motion } from "framer-motion";

export function SectionHeading({ tag, title, description, align = "center" }: { tag?: string; title: string; description?: string, align?: "center" | "left" }) {
  const words = title.split(' ');
  const lastWord = words[words.length - 1];
  const firstWords = words.slice(0, -1).join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-4xl px-4 ${align === "center" ? "text-center mx-auto" : "text-left"} mb-12`}
    >
      {tag && (
        <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-gold/10 text-gold text-[10px] font-tech font-bold uppercase tracking-[0.4em] mb-8 border border-gold/20 shadow-[0_0_20px_rgba(251,191,36,0.1)] ${align === "center" ? "mx-auto" : ""}`}>
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          {tag}
        </div>
      )}
      <h2 className={`font-heading text-4xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-[calc(-0.04em)] uppercase italic`}>
        {firstWords} <span className="text-gold group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all">{lastWord}</span>
      </h2>
      {description && (
        <p className={`text-slate-400 leading-relaxed text-xl md:text-2xl font-bold italic max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          "{description}"
        </p>
      )}
    </motion.div>
  );
}
