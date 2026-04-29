import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoursesGrid() {
  const courses = [
    {
      name: "B.A English",
      duration: "3 Years",
      description: "Master literature, language, and communication skills",
      image: "🎓",
    },
    {
      name: "B.Sc Psychology",
      duration: "3 Years",
      description: "Understand human behavior and mental processes",
      image: "🧠",
    },
    {
      name: "BBA",
      duration: "3 Years",
      description: "Develop leadership and business management expertise",
      image: "💼",
    },
    {
      name: "B.Com General",
      duration: "3 Years",
      description: "Build strong foundations in commerce and accounting",
      image: "📊",
    },
    {
      name: "B.Com Accounting & Finance",
      duration: "3 Years",
      description: "Specialize in financial management and audit",
      image: "💰",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-muted font-light">
              Choose from our diverse range of undergraduate programs
            </p>
          </div>
          <Link
            to="/courses"
            className="hidden sm:flex items-center gap-2 text-gold hover:text-gold/80 font-semibold transition-colors"
          >
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {courses.map((course, idx) => (
            <Link
              key={idx}
              to={`/courses/${course.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-white border border-cream/50 rounded-xl p-6 hover:shadow-xl hover:border-gold/30 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {course.image}
              </div>

              {/* Course Name */}
              <h3 className="text-xl font-serif font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                {course.name}
              </h3>

              {/* Duration */}
              <p className="text-sm text-gold font-semibold mb-3">
                {course.duration}
              </p>

              {/* Description */}
              <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
                {course.description}
              </p>

              {/* CTA Button */}
              <div className="flex items-center gap-2 text-navy font-semibold group-hover:text-gold transition-colors">
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-12 text-center sm:hidden">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-semibold transition-colors"
          >
            View All Courses
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Course Categories Info */}
        <div className="mt-16 bg-gold/5 rounded-xl p-8 border border-gold/10">
          <h3 className="text-2xl font-serif font-bold text-navy mb-6">
            Explore by Category
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Science Courses",
                count: "12 Programs",
                icon: "🔬",
              },
              {
                name: "Commerce Courses",
                count: "18 Programs",
                icon: "📈",
              },
              {
                name: "Arts Courses",
                count: "15 Programs",
                icon: "🎨",
              },
            ].map((category, idx) => (
              <button
                key={idx}
                className="text-left p-4 rounded-lg bg-white border border-cream/50 hover:border-gold hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="font-semibold text-navy group-hover:text-gold transition-colors">
                  {category.name}
                </h4>
                <p className="text-sm text-muted">{category.count}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
