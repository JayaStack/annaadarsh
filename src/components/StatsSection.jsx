import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import MotionReveal, { revealItem } from "./MotionReveal";

const icons = [BriefcaseBusiness, GraduationCap, Award];

export default function StatsSection() {
  const stats = [
    {
      number: "95%",
      label: "Placement Rate",
      description: "Students placed within 3 months",
    },
    {
      number: "10K+",
      label: "Active Students",
      description: "From India & abroad",
    },
    {
      number: "500+",
      label: "Top Recruiters",
      description: "Including Fortune 500 companies",
    },
  ];

  return (
    <MotionReveal as="section" className="py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <motion.div variants={revealItem} className="lg:sticky lg:top-28">
            <p className="section-label">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-normal">
              Why Choose Us?
            </h2>
            <p className="text-lg text-white/70 font-light leading-8">
              Proven excellence in education & placements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, idx) => {
              const Icon = icons[idx];

              return (
                <motion.div
                  variants={revealItem}
                  key={stat.label}
                  className="group bg-white/[0.06] rounded-xl p-8 md:p-10 border border-white/10 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/[0.09] hover:border-gold/50 hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-navy transition-colors duration-300 ease-out">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-5xl md:text-6xl font-bold text-gold mb-3 font-serif tracking-normal">
                    {stat.number}
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 tracking-normal">
                    {stat.label}
                  </h3>

                  <p className="text-white/70 text-base leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          variants={revealItem}
          className="mt-16 bg-white rounded-xl p-8 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "46+", label: "Years Experience" },
              { value: "A++", label: "NAAC Accreditation" },
              { value: "50+", label: "Active Courses" },
              { value: "25K+", label: "Alumni Network" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl md:text-4xl font-bold text-navy mb-2 font-serif">
                  {item.value}
                </div>
                <p className="text-muted text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MotionReveal>
  );
}
