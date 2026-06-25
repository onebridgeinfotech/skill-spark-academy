import { Link } from "@tanstack/react-router";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import { getCourseLink } from "@/lib/courses";
import { motion } from "framer-motion";

export interface Course {
  id: string;
  name: string;
  duration: string;
  level: string;
  category: string;
  description: string;
  icon: string;
  slug?: string;
}

const levelConfig: Record<string, { label: string; className: string }> = {
  Beginner:     { label: "Beginner",     className: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
  Intermediate: { label: "Intermediate", className: "bg-blue-50 text-[#004890] border border-blue-200" },
  Advanced:     { label: "Advanced",     className: "bg-amber-50 text-[#b86b00] border border-amber-200" },
};

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const level = levelConfig[course.level] ?? { label: course.level, className: "bg-slate-50 text-slate-600 border border-slate-200" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="group card-base flex flex-col h-full p-6 rounded-xl"
    >
      {/* Top row: level badge + hot badge */}
      <div className="flex items-center justify-between mb-5">
        <span className={`label-pill text-xs font-semibold ${level.className}`}>{level.label}</span>
        {index % 2 === 0 && (
          <span className="label-pill bg-[#FF9E0D]/10 text-[#c47800] border border-[#FF9E0D]/30 text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E0D] animate-pulse" />
            High Demand
          </span>
        )}
      </div>

      {/* Icon / category accent */}
      <div className="w-11 h-11 rounded-lg bg-[#004890]/8 flex items-center justify-center mb-4">
        <span className="text-lg font-bold text-[#004890] font-mono-tech">{course.name[0]}</span>
      </div>

      {/* Title */}
      <h3 className="font-heading font-700 text-lg font-bold text-slate-800 mb-3 leading-snug group-hover:text-[#004890] transition-colors">
        {course.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-grow mb-5">
        {course.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-slate-400 font-medium pb-5 border-b border-slate-100 mb-5">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#FF9E0D]" />
          {course.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5 text-[#004890]" />
          Outcome-focused
        </span>
      </div>

      {/* CTA */}
      <Link
        {...(course.slug ? getCourseLink(course.slug) : { to: "/courses" as const })}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#004890] hover:text-[#FF9E0D] transition-colors group/link"
      >
        Explore Course
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>

      {/* Hover accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#004890] to-[#FF9E0D] rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}
