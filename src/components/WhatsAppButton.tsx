import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const message = encodeURIComponent("Hi, I'm interested in your IT training programs");
  const url = `https://wa.me/442038190333?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-2xl bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
      initial={{ scale: 0, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-2xl bg-[#25D366] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
      <MessageCircle className="w-8 h-8 relative z-10" />
    </motion.a>

  );
}
