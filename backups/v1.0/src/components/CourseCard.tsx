import { Link } from "@tanstack/react-router";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

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

const levelColors: Record<string, string> = {
  Beginner: "text-emerald-600 border-emerald-600/20 bg-emerald-50",
  Intermediate: "text-[#004890] border-[#004890]/20 bg-blue-50",
  Advanced: "text-[#FF9E0D] border-[#FF9E0D]/20 bg-orange-50",
};

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 relative overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"
      >
          <span className="text-8xl italic font-black text-[#004890]">{course.name[0]}</span>
      </div>
      
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="relative z-10 flex flex-col h-full"
      >
        <div className={`px-4 py-1.5 rounded-lg border text-[10px] font-tech font-bold uppercase tracking-widest w-fit mb-8 ${levelColors[course.level]}`}>
          {course.level}
        </div>
        
        <h3 className="font-heading font-black text-3xl text-[#004890] mb-4 leading-none tracking-tighter italic uppercase group-hover:text-[#FF9E0D] transition-colors">
          {course.name}
        </h3>
        
        <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed font-bold flex-grow text-sm group-hover:text-gray-700 transition-colors">
          {course.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-6 text-[11px] mb-12">
          <span className="flex items-center gap-2 text-gray-400 font-tech font-bold uppercase tracking-widest group-hover:text-[#004890] transition-colors">
            <Clock className="w-4 h-4 text-[#FF9E0D]" /> {course.duration}
          </span>
          <span className="flex items-center gap-2 text-gray-400 font-tech font-bold uppercase tracking-widest group-hover:text-[#004890] transition-colors">
            <BarChart3 className="w-4 h-4 text-[#004890]" /> Institutional
          </span>
        </div>
        
        <Link
          to={course.slug ? (course.slug as any) : "/courses"}
          className="inline-flex items-center gap-4 text-xs font-tech font-bold text-[#FF9E0D] uppercase tracking-widest italic group-hover:gap-6 transition-all"
        >
          View Track <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#FF9E0D] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
