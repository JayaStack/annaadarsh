import { Bus, Utensils, Mic, Droplet, Printer, FlaskConical } from "lucide-react";

const facilities = [
  {
    title: "Bus Facility",
    image: "https://www.masscollege.in/trust_images/amenities/bus.jpg",
    desc: "Safe and reliable transportation connecting nearby areas to campus.",
    icon: Bus,
  },
  {
    title: "Cafeteria",
    image: "https://www.masscollege.in/trust_images/amenities/canteen.jpg",
    desc: "Hygienic and affordable food options for students daily.",
    icon: Utensils,
  },
  {
    title: "Auditorium",
    image: "https://www.masscollege.in/trust_images/amenities/auditorium.jpg",
    desc: "Modern auditorium for events, seminars, and guest lectures.",
    icon: Mic,
  },
  {
    title: "RO Water System",
    image: "https://www.masscollege.in/trust_images/amenities/ro.png",
    desc: "Clean and safe drinking water across the campus.",
    icon: Droplet,
  },
  {
    title: "Xerox & Printing",
    image: "https://www.masscollege.in/trust_images/amenities/xerox.jpg",
    desc: "Quick printing and document services available on campus.",
    icon: Printer,
  },
  {
    title: "Science & Tech Labs",
    image: "https://www.masscollege.in/trust_images/amenities/laboratory.jpg",
    desc: "Well-equipped labs for hands-on learning and research.",
    icon: FlaskConical,
  },
];

export default function Facilities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <div className="text-navy/60 text-sm font-medium tracking-wider uppercase mb-3">
            Facilities
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">
            Discover Our Premier Facilities
          </h2>
          <p className="text-gray-600 text-lg">
            We provide a world-class environment to support learning, innovation, and student growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white border border-navy/10 rounded-2xl shadow-sm overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg reveal"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                    <facility.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-navy font-semibold">
                    {facility.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
