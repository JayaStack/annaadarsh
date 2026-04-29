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
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-white/70 font-light">
            Proven excellence in education & placements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-navy-light rounded-xl p-8 md:p-10 border border-white/10 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold text-gold mb-3 font-serif">
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-base leading-relaxed">
                {stat.description}
              </p>

              {/* Accent Line */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-gold to-gold/50 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-navy-light rounded-xl p-8 border border-gold/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "46+", label: "Years Experience" },
              { value: "A++", label: "NAAC Accreditation" },
              { value: "50+", label: "Active Courses" },
              { value: "25K+", label: "Alumni Network" },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {item.value}
                </div>
                <p className="text-white/70 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
