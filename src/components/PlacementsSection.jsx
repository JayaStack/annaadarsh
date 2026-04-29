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
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Top Placements & Career Opportunities
          </h2>
          <p className="text-lg text-white/70 font-light">
            Our students work with leading global companies
          </p>
        </div>

        {/* Company Logos Strip */}
        <div className="mb-16 bg-navy-light rounded-xl p-8 md:p-12 border border-white/10">
          <h3 className="text-white font-semibold mb-8 text-center">
            Our Top Recruiters
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {topRecruiters.map((company, idx) => (
              <div
                key={idx}
                className="w-full h-16 flex items-center justify-center bg-navy rounded-lg border border-white/10 hover:border-gold/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <span className="font-semibold text-white/70 group-hover:text-gold text-sm transition-colors text-center px-2">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-navy-light rounded-xl p-8 border border-white/10 text-center hover:border-gold/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2 font-serif">
                {stat.value}
              </div>
              <p className="text-white/70 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Placement Highlights */}
        <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-8 md:p-12 border border-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
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
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-gold text-lg mt-0.5">✓</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Notable Achievements */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
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
                ].map((achievement, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-white/70 text-sm">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
