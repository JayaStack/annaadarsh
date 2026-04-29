import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/college.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            Admissions Open Now
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
          Build Your Future with
          <span className="block text-gold mt-2">World-Class Education</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-white/90 mb-12 max-w-2xl mx-auto font-light tracking-wide">
          NAAC A++ Accredited • 46+ Years • Industry-Ready Programs
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold/90 text-navy font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/courses"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5" />
          </Link>

          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300">
            Get Brochure
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
