import { Link } from "@tanstack/react-router";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface Course {
  id: string;
  name: string;
  duration: string;
  level: string;
  category: string;
  description: string;
  icon: string;
}

const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  Intermediate: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  Advanced: "bg-purple-500/10 text-purple-600 border-purple-500/20",
};

export function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-card glass rounded-[2.5rem] border border-border/40 p-10 depth-lift relative overflow-hidden flex flex-col h-full"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 via-white/5 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner border border-white/40">
          <span className="text-3xl filter drop-shadow-md">{course.icon}</span>
        </div>
        
        <h3 className="font-heading font-black text-2xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
          {course.name}
        </h3>
        
        <p className="text-muted-foreground mb-8 line-clamp-2 leading-relaxed font-medium flex-grow">
          {course.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-3 text-[10px] mb-10">
          <span className="flex items-center gap-2 text-foreground/70 bg-secondary/80 backdrop-blur-md rounded-full px-4 py-2 font-black border border-border/50 uppercase tracking-widest shadow-sm">
            <Clock className="w-4 h-4 text-primary" /> {course.duration}
          </span>
          <span className={`flex items-center gap-2 rounded-full px-4 py-2 font-black uppercase tracking-widest border transition-all shadow-sm ${levelColors[course.level] || "bg-muted text-muted-foreground border-border/50"}`}>
            <BarChart3 className="w-4 h-4" /> {course.level}
          </span>
        </div>
        
        <Link
          to="/courses"
          className="inline-flex items-center gap-3 text-sm font-black text-primary group-hover:gap-5 transition-all mt-auto uppercase tracking-[0.2em]"
        >
          View Program <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Hover bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-cta to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
