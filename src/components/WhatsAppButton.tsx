import { MessageCircle, ArrowUp, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/lib/siteConfig";

export function WhatsAppButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = () => {
    if (scrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  const url = getWhatsAppUrl();

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      {/* Scroll up / scroll down toggle button */}
      <motion.button
        onClick={handleScroll}
        className="w-16 h-16 rounded-2xl bg-[#004890] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 2.1, type: "spring", stiffness: 260, damping: 20 }}
        aria-label={scrolled ? "Scroll to top" : "Scroll to bottom"}
      >
        <div className="absolute inset-0 rounded-2xl bg-[#004890] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <AnimatePresence mode="wait" initial={false}>
          {scrolled ? (
            <motion.span
              key="up"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="relative z-10"
            >
              <ArrowUp className="w-8 h-8" />
            </motion.span>
          ) : (
            <motion.span
              key="down"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18 }}
              className="relative z-10"
            >
              <ArrowDown className="w-8 h-8" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* WhatsApp button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-2xl bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-2xl bg-[#25D366] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <MessageCircle className="w-8 h-8 relative z-10" />
      </motion.a>
    </div>
  );
}
