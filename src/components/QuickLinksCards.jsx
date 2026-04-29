import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuickLinksCards() {
  const quickLinks = [
    {
      title: "Admissions",
      description: "Apply now and start your journey",
      image: "url(/images/college.jpg)",
      href: "/admissions",
      icon: "📋",
    },
    {
      title: "Fee Structure",
      description: "Transparent pricing & payment plans",
      image: "url(/images/college.jpg)",
      href: "/admissions",
      icon: "💰",
    },
    {
      title: "Campus Life",
      description: "Hostel, clubs, sports & more",
      image: "url(/images/college.jpg)",
      href: "/campus",
      icon: "🏫",
    },
    {
      title: "Book Campus Visit",
      description: "Experience our campus in person",
      image: "url(/images/college.jpg)",
      href: "/contact",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Quick Links
          </h2>
          <p className="text-lg text-muted font-light">
            Explore the most important information
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="group relative overflow-hidden rounded-xl h-72 cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: link.image }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/70 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                {/* Icon */}
                <div className="text-4xl">{link.icon}</div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {link.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
