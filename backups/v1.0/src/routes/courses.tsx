import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/courses";
import { Search, SlidersHorizontal } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — OneBridge Infotech" },
      { name: "description", content: "Explore our comprehensive IT training courses in AWS, DevOps, Data Science, Full Stack Development, and more." },
      { property: "og:title", content: "IT Training Courses — OneBridge Infotech" },
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
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="section-padding text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta-foreground/10 text-cta-foreground text-xs font-bold mb-5 border border-cta-foreground/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cta" /> {courses.length} Courses Available
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-cta-foreground mb-4">Our Courses</h1>
            <p className="text-cta-foreground/60 text-lg">Find the perfect program to accelerate your career in tech.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-5 mb-10 flex flex-col md:flex-row gap-4 items-stretch shadow-sm"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-surface border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-surface border border-border rounded-xl pl-9 pr-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                >
                  {categories.map((c) => <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>)}
                </select>
              </div>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="bg-surface border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
              >
                {levels.map((l) => <option key={l} value={l}>{l === "All" ? "All Levels" : l}</option>)}
              </select>
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6 font-medium">
            Showing {filtered.length} course{filtered.length !== 1 ? "s" : ""}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 text-3xl">🔍</div>
              <p className="text-foreground font-heading font-bold text-lg mb-2">No courses found</p>
              <p className="text-muted-foreground text-sm">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
