import { Check } from "lucide-react";
import { motion } from "framer-motion";
import MotionReveal, { revealItem } from "./MotionReveal";

const logoSrc = (company) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="48" viewBox="0 0 180 48">
      <rect width="180" height="48" rx="8" fill="white"/>
      <text x="90" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#0B1F3A">${company}</text>
    </svg>
  `)}`;

export default function PlacementsSection() {
  const topRecruiters = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Deloitte",
    "Amazon",
    "Google",
    "Microsoft",
    "IBM",
    "HCL",
    "Cognizant",
    "Capgemini",
  ];

  const placementStats = [
    {
      label: "Average Package",
      value: "₹6.5 LPA",
    },
    {
      label: "Highest Package",
      value: "₹22 LPA",
    },
    {
      label: "Companies Visited",
      value: "500+",
    },
    {
      label: "Placement Rate",
      value: "95%",
    },
  ];

  return (
    <MotionReveal as="section" className="py-28 bg-white">
      <div className="w-full px-6 lg:px-16">
        <motion.div variants={revealItem} className="text-center mb-16">
          <p className="section-label">Career Outcomes</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 tracking-normal">
            Top Placements & Career Opportunities
          </h2>
          <p className="text-lg text-muted font-light">
            Our students work with leading global companies
          </p>
        </motion.div>

        <motion.div variants={revealItem} className="w-full py-12">
          <div className="max-w-7xl mx-auto text-center mb-10 px-4 sm:px-6 lg:px-8">
            <h3 className="text-navy font-semibold mb-2">Our Top Recruiters</h3>
            <p className="text-muted">
              Our students work with leading global companies
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />

            <div className="flex gap-12 w-max marquee-track animate-scroll px-6 lg:px-16">
              {[...topRecruiters, ...topRecruiters].map((company, idx) => (
                <div
                  key={`${company}-${idx}`}
                  className="flex items-center justify-center min-w-[140px] h-20 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={logoSrc(company)}
                    alt={`${company} logo`}
                    className="h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat) => (
            <motion.div
              variants={revealItem}
              key={stat.label}
              className="bg-navy rounded-xl p-8 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2 font-serif tracking-normal">
                {stat.value}
              </div>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={revealItem}
          className="bg-navy rounded-xl p-8 md:p-12 shadow-[0_24px_70px_rgba(11,31,58,0.18)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-normal">
                Success Stories
              </h3>
              <ul className="space-y-4">
                {[
                  "Customized training programs for each stream",
                  "Industry expert mentorship sessions",
                  "Mock interviews & group discussions",
                  "Internship opportunities with top companies",
                  "Dedicated placement cell support",
                  "Resume building workshops",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-normal">
                Notable Achievements
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "100% Core Sector Placement",
                    desc: "In IT, Finance, and HR roles",
                  },
                  {
                    title: "Global Opportunities",
                    desc: "Students placed in US, UK, Australia, and Middle East",
                  },
                  {
                    title: "Entrepreneur Support",
                    desc: "Startup incubation and mentorship programs",
                  },
                ].map((achievement) => (
                  <div
                    key={achievement.title}
                    className="bg-white/[0.06] rounded-lg p-5 ring-1 ring-white/10 transition-all duration-300 ease-out hover:bg-white/[0.1] hover:-translate-y-2 hover:shadow-xl"
                  >
                    <h4 className="font-semibold text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-white/70 text-sm">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionReveal>
  );
}
