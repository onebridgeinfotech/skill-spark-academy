import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, BarChart3, CheckCircle, ArrowRight, Users, MapPin, Star } from "lucide-react";
import type { CoursePage } from "@/lib/coursePages";
import { getRelatedCourses } from "@/lib/coursePages";

const levelColors: Record<string, string> = {
  Beginner: "text-emerald-600 border-emerald-600/20 bg-emerald-50",
  Intermediate: "text-[#004890] border-[#004890]/20 bg-blue-50",
  Advanced: "text-[#FF9E0D] border-[#FF9E0D]/20 bg-orange-50",
};

const ukLocations = [
  "London", "Manchester", "Birmingham", "Leeds",
  "Edinburgh", "Glasgow", "Bristol", "Liverpool",
  "Sheffield", "Cardiff", "Belfast", "Online UK",
];

export function CourseDetailPage({ course }: { course: CoursePage }) {
  const related = getRelatedCourses(course.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative pt-28 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #001a3a 0%, #003166 50%, #004890 100%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#FF9E0D" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-8 blur-3xl" style={{ background: "#004890" }} />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF9E0D]/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-10"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-[#FF9E0D]" />
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="h-3 w-3 text-[#FF9E0D]" />
            <span className="text-white">{course.category}</span>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-5xl">{course.icon}</span>
                <span className={`px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest ${levelColors[course.level]}`}>
                  {course.level}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                {course.name}
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mb-8 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <span className="flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/10 rounded-xl text-white font-semibold text-xs">
                  <Clock className="w-4 h-4 text-[#FF9E0D]" /> {course.duration}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/10 rounded-xl text-white font-semibold text-xs">
                  <BarChart3 className="w-4 h-4 text-[#FF9E0D]" /> {course.category}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-white/8 border border-white/10 rounded-xl text-white font-semibold text-xs">
                  <MapPin className="w-4 h-4 text-[#FF9E0D]" /> UK Nationwide
                </span>
              </div>

              <Link to="/contact">
                <Button className="h-14 px-10 bg-[#FF9E0D] hover:bg-amber-500 text-white rounded-xl font-bold text-base shadow-xl transition-all hover:shadow-2xl">
                  Enroll Now — Secure Your Place
                </Button>
              </Link>
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <div
                className="rounded-2xl p-6 border border-white/10"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#FF9E0D]/15 flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#FF9E0D]" fill="#FF9E0D" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Course Rating</p>
                    <p className="text-[#FF9E0D] text-xs font-semibold">4.9 / 5.0 · 200+ reviews</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Live Instructor-Led", value: "Weekly Cohorts" },
                    { label: "Delivery Mode", value: "In-Person & Online" },
                    { label: "Certificate", value: "Industry Recognised" },
                    { label: "Support", value: "Career Mentoring" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-white/50 text-xs">{item.label}</span>
                      <span className="text-white text-xs font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-3">Available Locations</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ukLocations.slice(0, 6).map((loc) => (
                      <span key={loc} className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white/70 bg-white/5 border border-white/8">
                        {loc}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-[#FF9E0D] bg-[#FF9E0D]/10 border border-[#FF9E0D]/20">
                      +{ukLocations.length - 6} more
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights & Audience */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(0,72,144,0.08)", color: "#004890" }}>
              Programme Highlights
            </span>
            <h2 className="text-3xl font-heading font-bold text-[#004890] mb-8">
              What You'll <span className="text-[#FF9E0D]">Learn</span>
            </h2>
            <ul className="space-y-3">
              {course.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-[#FF9E0D] shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(255,158,13,0.1)", color: "#FF9E0D" }}>
              Who Should Enrol
            </span>
            <h2 className="text-3xl font-heading font-bold text-[#004890] mb-8">
              Is This Course <span className="text-[#FF9E0D]">For You?</span>
            </h2>
            <div className="space-y-3">
              {course.audience.map((item) => (
                <div
                  key={item}
                  className="p-5 rounded-2xl border font-medium text-slate-700 flex items-start gap-3"
                  style={{ background: "#ffffff", border: "1px solid #e8f0fc" }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#004890] mt-2 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #002d5c 0%, #004890 50%, #003a75 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(255,158,13,0.15)", color: "#FF9E0D", border: "1px solid rgba(255,158,13,0.2)" }}>
              Career Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Where This Course <span className="text-[#FF9E0D]">Takes You</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {course.outcomes.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 flex items-start gap-4"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div className="w-8 h-8 rounded-xl bg-[#FF9E0D]/15 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#FF9E0D]" />
                </div>
                <p className="text-white/80 font-medium leading-relaxed text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UK Locations */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8faff 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <h2 className="text-2xl font-heading font-bold text-[#004890] mb-3">Available Across the UK</h2>
          <p className="text-slate-500 text-sm mb-8">Attend in-person at a location near you, or join our live online sessions.</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {ukLocations.map((loc) => (
              <span
                key={loc}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-[#004890] border"
                style={{ background: "#f0f7ff", border: "1px solid #d0e3ff" }}
              >
                <MapPin className="w-3.5 h-3.5 text-[#FF9E0D]" /> {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {related.length > 0 && (
        <section className="py-20" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-[#004890]">
                Related <span className="text-[#FF9E0D]">Programmes</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((c, i) => (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to="/courses/$slug"
                    params={{ slug: c.slug }}
                    className="group block p-6 bg-white rounded-2xl border hover:border-[#004890]/20 hover:shadow-lg transition-all"
                    style={{ border: "1px solid #e8f0fc" }}
                  >
                    <span className="text-3xl mb-4 block">{c.icon}</span>
                    <h3 className="font-heading font-bold text-[#004890] mb-2 group-hover:text-[#FF9E0D] transition-colors line-clamp-2">
                      {c.name}
                    </h3>
                    <p className="text-slate-400 text-xs mb-5 line-clamp-2 leading-relaxed">{c.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF9E0D]">
                      View Programme <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #001a3a 0%, #003166 50%, #004890 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(255,158,13,0.15)", color: "#FF9E0D", border: "1px solid rgba(255,158,13,0.2)" }}>
            Limited Cohort Places
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
            Ready to <span className="text-[#FF9E0D]">Get Started?</span>
          </h2>
          <p className="text-white/60 font-medium mb-10 text-lg">
            Speak with our advisors today and secure your place on the next cohort.
          </p>
          <Link to="/contact">
            <Button className="h-14 px-12 bg-[#FF9E0D] hover:bg-amber-500 text-white rounded-xl font-bold text-base shadow-xl transition-all hover:shadow-2xl">
              Enrol Now — Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
