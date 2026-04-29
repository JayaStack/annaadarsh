import { ArrowRight, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { revealContainer, revealItem } from "./MotionReveal";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.06, 1.16]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 90]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ scale, y, backgroundImage: "url(/images/college.jpg)" }}
      />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/75 via-navy/72 to-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-black/25" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={revealContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <motion.div
            variants={revealItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Admissions Open Now
          </motion.div>

          <motion.h1
            variants={revealItem}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-7 leading-[0.95] tracking-normal text-balance"
          >
            Build Your Future with
            <span className="block text-gold mt-3">World-Class Education</span>
          </motion.h1>

          <motion.p
            variants={revealItem}
            className="text-lg md:text-xl text-white/88 mb-10 max-w-2xl font-light leading-8"
          >
            NAAC A++ Accredited | 46+ Years | Industry-Ready Programs
          </motion.p>

          <motion.div
            variants={revealItem}
            className="flex flex-col sm:flex-row items-start gap-4 mb-20"
          >
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-3 min-h-[56px] px-8 bg-gold hover:bg-gold-dark text-navy hover:text-white font-semibold rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:shadow-xl"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-3 min-h-[56px] px-8 bg-white/10 backdrop-blur-md border border-white/35 hover:bg-white hover:text-navy text-white font-semibold rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button className="inline-flex items-center justify-center gap-3 min-h-[56px] px-8 bg-transparent border border-white/35 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95">
              Get Brochure
              <Download className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
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
      </motion.div>
    </section>
  );
}
