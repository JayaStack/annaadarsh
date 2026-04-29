import { motion } from "framer-motion";
import MotionReveal, { revealItem } from "./MotionReveal";

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
    <MotionReveal as="section" className="py-28 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={revealItem} className="mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-gold mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-normal">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-300 font-light leading-8 max-w-2xl">
            Proven excellence in education & placements
          </p>
          <div className="h-px bg-white/10 my-12" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <motion.div variants={revealItem} key={stat.label}>
              <div className="text-3xl font-semibold text-yellow-500">
                {stat.number}
              </div>
              <h3 className="mt-2 font-medium text-white">{stat.label}</h3>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionReveal>
  );
}
