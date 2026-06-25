import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/courses";
import { Search, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — EslandIT Trainings" },
      { name: "description", content: "Explore our comprehensive IT training courses in AWS, DevOps, Data Science, Full Stack Development, and more." },
      { property: "og:title", content: "IT Training Courses — EslandIT Trainings" },
      { property: "og:description", content: "Browse expert-led courses and start your tech career today." },
    ],
  }),
  component: CoursesPage,
});

const categories = ["All", ...new Set(courses.map((c) => c.category))];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || c.category === category;
      const matchLevel = level === "All" || c.level === level;
      return matchSearch && matchCat && matchLevel;
    });
  }, [search, category, level]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20" style={{ background: "linear-gradient(135deg, #002d5c 0%, #004890 60%, #0057ab 100%)" }}>
        <div className="absolute inset-0 dot-grid opacity-15" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#FF9E0D" }} />
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: "rgba(255,158,13,0.15)", color: "#FF9E0D", border: "1px solid rgba(255,158,13,0.25)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E0D]" /> {courses.length} Courses Available
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">Our Courses</h1>
            <p className="text-white/60 text-lg">Find the perfect programme to accelerate your career in tech.</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-5 mb-10 flex flex-col md:flex-row gap-4 items-stretch shadow-md"
            style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl pl-11 pr-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004890]/30 transition-all"
                style={{ background: "#f8faff", border: "1px solid #e2eaf8" }}
              />
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded-xl pl-9 pr-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004890]/30 appearance-none cursor-pointer transition-all"
                  style={{ background: "#f8faff", border: "1px solid #e2eaf8" }}
                >
                  {categories.map((c) => <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>)}
                </select>
              </div>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004890]/30 appearance-none cursor-pointer transition-all"
                style={{ background: "#f8faff", border: "1px solid #e2eaf8" }}
              >
                {levels.map((l) => <option key={l} value={l}>{l === "All" ? "All Levels" : l}</option>)}
              </select>
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm text-slate-500 mb-6 font-medium">
            Showing <span className="text-[#004890] font-bold">{filtered.length}</span> course{filtered.length !== 1 ? "s" : ""}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl"
                style={{ background: "linear-gradient(135deg, #e8f0fc, #d0e3ff)" }}>🔍</div>
              <p className="text-[#004890] font-heading font-bold text-lg mb-2">No courses found</p>
              <p className="text-slate-500 text-sm">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
