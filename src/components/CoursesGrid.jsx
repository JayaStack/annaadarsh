import { ArrowRight, BookOpen, Brain, Briefcase, ChartNoAxesCombined, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MotionReveal, { revealItem } from "./MotionReveal";

const courseIcons = [BookOpen, Brain, Briefcase, ChartNoAxesCombined, Landmark];

export default function CoursesGrid() {
  const courses = [
    {
      name: "B.A English",
      duration: "3 Years",
      description: "Master literature, language, and communication skills",
    },
    {
      name: "B.Sc Psychology",
      duration: "3 Years",
      description: "Understand human behavior and mental processes",
    },
    {
      name: "BBA",
      duration: "3 Years",
      description: "Develop leadership and business management expertise",
    },
    {
      name: "B.Com General",
      duration: "3 Years",
      description: "Build strong foundations in commerce and accounting",
    },
    {
      name: "B.Com Accounting & Finance",
      duration: "3 Years",
      description: "Specialize in financial management and audit",
    },
  ];

  return (
    <MotionReveal as="section" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={revealItem}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-8"
        >
          <div>
            <p className="section-label">Featured Programs</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 tracking-normal">
              Featured Courses
            </h2>
            <p className="text-lg text-muted font-light">
              Choose from our diverse range of undergraduate programs
            </p>
          </div>
          <Link
            to="/courses"
            className="hidden sm:flex items-center gap-2 text-navy hover:text-gold font-semibold transition-all duration-300 ease-out hover:scale-105 active:scale-95"
          >
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {courses.map((course, idx) => {
            const Icon = courseIcons[idx];
            const badge = idx < 2 ? "Popular" : "Featured";

            return (
              <motion.div variants={revealItem} key={course.name}>
                <Link
                key={course.name}
                to={`/courses/${course.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-white rounded-xl p-6 shadow-sm ring-1 ring-navy/5 hover:ring-gold/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-navy text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
                    {badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-navy mb-2 group-hover:text-gold transition-colors tracking-normal">
                  {course.name}
                </h3>

                <p className="text-sm text-gold font-semibold mb-4">
                  {course.duration}
                </p>

                <p className="text-muted text-sm mb-8 flex-grow leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-2 text-navy font-semibold group-hover:text-gold transition-colors">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-navy hover:text-gold font-semibold transition-all duration-300 ease-out hover:scale-105 active:scale-95"
          >
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <motion.div
          variants={revealItem}
          className="mt-16 bg-white rounded-xl p-8 shadow-sm ring-1 ring-navy/5"
        >
          <h3 className="text-2xl font-serif font-bold text-navy mb-6 tracking-normal">
            Explore by Category
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Science Courses",
                count: "12 Programs",
                icon: Brain,
              },
              {
                name: "Commerce Courses",
                count: "18 Programs",
                icon: ChartNoAxesCombined,
              },
              {
                name: "Arts Courses",
                count: "15 Programs",
                icon: BookOpen,
              },
            ].map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.name}
                  className="text-left p-5 rounded-lg bg-cream border border-transparent hover:border-gold/40 hover:bg-white hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] active:scale-95 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-white text-gold flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-navy group-hover:text-gold transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-sm text-muted">{category.count}</p>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </MotionReveal>
  );
}
