import { Award, Users, Building2, Briefcase } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "High Quality Education",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT - Image */}
          <div className="reveal">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://www.thoughtco.com/thmb/PCVPjqDcfiY4az_kycvn-EJA-e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg"
                alt="Campus"
                className="w-full h-[420px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT - Content */}
          <div className="reveal">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-sans">
              About Us
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
              Building futures through quality education
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are a NAAC A++ accredited autonomous college with over 46 years
              of excellence. Our focus is on industry-ready education, modern
              infrastructure, and holistic student development.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-4 rounded-lg"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div className="text-sm font-medium text-gray-800">
                    {feature.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
