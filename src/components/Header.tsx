import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Zap, ChevronDown, ArrowRight, Search, Play, Users } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { courses, getCourseLink } from "@/lib/courses";

const mobileNavLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About Us" },
  { to: "/why-choose-us" as const, label: "Why Choose Us" },
  { to: "/courses" as const, label: "Courses" },
  { to: "/services" as const, label: "Services" },
  { to: "/contact" as const, label: "Contact" },
];

const navLinkClass =
  "px-2.5 xl:px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-[#004890] rounded-md hover:bg-[#004890]/5 transition-all whitespace-nowrap shrink-0";

const navLinkActiveClass = "text-[#004890] bg-[#004890]/5 font-semibold whitespace-nowrap shrink-0";

const navButtonClass =
  "px-2.5 xl:px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-[#004890] rounded-md hover:bg-[#004890]/5 transition-all flex items-center gap-1 whitespace-nowrap shrink-0";

const serviceLinks = [
  { to: "/services" as const, label: "IT Trainings", icon: Zap, desc: "Hands-on technical programs" },
  { to: "/services" as const, label: "Corporate Trainings", icon: Users, desc: "Tailored for enterprise teams" },
  { to: "/services" as const, label: "Self-Paced Learning", icon: Play, desc: "Learn at your own schedule" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const filteredCourses = courses.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "glass-header shadow-sm"
          : "bg-white/95 backdrop-blur-md md:bg-white/80 md:backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8">
        <div className="flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center min-h-[56px] md:min-h-[68px] py-2.5 md:py-3">

          {/* Logo */}
          <Link
            to="/"
            aria-label={`${siteConfig.name} — Home`}
            className="inline-flex shrink-0 items-center rounded-md transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004890]/40 focus-visible:ring-offset-2 lg:justify-self-start"
          >
            <BrandLogo variant="header" />
          </Link>

          {/* Desktop Nav — centered in header */}
          <nav className="hidden lg:flex lg:justify-self-center items-center flex-nowrap gap-0.5 xl:gap-1">
            <Link
              to="/"
              className={navLinkClass}
              activeProps={{ className: navLinkActiveClass }}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={navLinkClass}
              activeProps={{ className: navLinkActiveClass }}
            >
              About Us
            </Link>

            <Link
              to="/why-choose-us"
              className={navLinkClass}
              activeProps={{ className: navLinkActiveClass }}
            >
              Why Choose Us
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button className={navButtonClass}>
                Courses <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${coursesOpen ? "rotate-180 text-[#004890]" : ""}`} />
              </button>

              <AnimatePresence>
                {coursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-100 rounded-xl shadow-lg p-4 z-50"
                  >
                    <div className="relative mb-3">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-lg py-2.5 pl-9 pr-3 text-sm text-slate-700 focus:outline-none focus:border-[#004890] transition-colors"
                      />
                    </div>

                    <div className="space-y-0.5">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 pb-1.5">Popular Programs</p>
                      {filteredCourses.map((c) => (
                        <Link
                          key={c.id}
                          {...(c.slug ? getCourseLink(c.slug) : { to: "/courses" as const })}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-all group"
                        >
                          <div>
                            <div className="text-sm font-semibold text-slate-700 group-hover:text-[#004890] transition-colors">{c.name}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{c.category} · {c.duration}</div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#FF9E0D] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                      {filteredCourses.length === 0 && (
                        <p className="py-4 text-center text-slate-400 text-sm">No courses found.</p>
                      )}
                      <Link
                        to="/courses"
                        className="flex items-center justify-center gap-1.5 pt-3 mt-1 border-t border-slate-100 text-xs font-semibold text-[#004890] hover:text-[#FF9E0D] transition-colors"
                      >
                        View all courses <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative shrink-0"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={navButtonClass}>
                Services <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-[#004890]" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-100 rounded-xl shadow-lg p-3 z-50"
                  >
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-50 transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#004890]/8 flex items-center justify-center text-[#004890] group-hover:bg-[#004890] group-hover:text-white transition-colors flex-shrink-0">
                          <s.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-700">{s.label}</div>
                          <div className="text-xs text-slate-400">{s.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={navLinkClass}
              activeProps={{ className: navLinkActiveClass }}
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex lg:justify-self-end items-center gap-2">
            {/* Search toggle */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:text-[#004890] hover:bg-[#004890]/6 transition-all"
                aria-label="Search courses"
              >
                <Search className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-white border border-slate-100 rounded-xl shadow-lg p-4 z-50"
                  >
                    <div className="relative mb-3">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        autoFocus
                        type="text"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-lg py-2.5 pl-9 pr-3 text-sm text-slate-700 focus:outline-none focus:border-[#004890] transition-colors"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 pb-1.5">
                        {searchQuery ? "Results" : "Popular Programmes"}
                      </p>
                      {filteredCourses.map((c) => (
                        <Link
                          key={c.id}
                          {...(c.slug ? getCourseLink(c.slug) : { to: "/courses" as const })}
                          onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-all group"
                        >
                          <div>
                            <div className="text-sm font-semibold text-slate-700 group-hover:text-[#004890] transition-colors">{c.name}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{c.category} · {c.duration}</div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#FF9E0D] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                      {filteredCourses.length === 0 && (
                        <p className="py-4 text-center text-slate-400 text-sm">No courses found.</p>
                      )}
                      <Link
                        to="/courses"
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-center gap-1.5 pt-3 mt-1 border-t border-slate-100 text-xs font-semibold text-[#004890] hover:text-[#FF9E0D] transition-colors"
                      >
                        View all courses <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact">
              <Button className="bg-[#004890] hover:bg-[#003870] text-white text-sm font-semibold px-5 h-10 rounded-lg shadow-sm hover:shadow-md transition-all">
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile search + hamburger */}
          <div className="lg:hidden ml-auto flex items-center gap-1">
            {/* Search icon — mobile/tablet */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 hover:text-[#004890] hover:bg-[#004890]/6 transition-all"
                aria-label="Search courses"
              >
                <Search className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-[90vw] max-w-sm bg-white border border-slate-100 rounded-xl shadow-lg p-4 z-50"
                  >
                    <div className="relative mb-3">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        autoFocus
                        type="text"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-lg py-2.5 pl-9 pr-3 text-sm text-slate-700 focus:outline-none focus:border-[#004890] transition-colors"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 pb-1.5">
                        {searchQuery ? "Results" : "Popular Programmes"}
                      </p>
                      {filteredCourses.map((c) => (
                        <Link
                          key={c.id}
                          {...(c.slug ? getCourseLink(c.slug) : { to: "/courses" as const })}
                          onClick={() => { setSearchOpen(false); setSearchQuery(""); setMobileOpen(false); }}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-all group"
                        >
                          <div>
                            <div className="text-sm font-semibold text-slate-700 group-hover:text-[#004890] transition-colors">{c.name}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{c.category} · {c.duration}</div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#FF9E0D] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                      {filteredCourses.length === 0 && (
                        <p className="py-4 text-center text-slate-400 text-sm">No courses found.</p>
                      )}
                      <Link
                        to="/courses"
                        onClick={() => { setSearchOpen(false); setMobileOpen(false); }}
                        className="flex items-center justify-center gap-1.5 pt-3 mt-1 border-t border-slate-100 text-xs font-semibold text-[#004890] hover:text-[#FF9E0D] transition-colors"
                      >
                        View all courses <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-[#004890] hover:bg-[#004890]/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-[#004890] hover:bg-[#003870] text-white font-semibold py-3 rounded-lg">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
