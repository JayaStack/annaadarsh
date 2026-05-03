import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const facilities = [
  {
    title: "Bus Facility",
    image: "https://4.imimg.com/data4/SI/UE/GLADMIN-2/college-bus-250x250.jpg",
    desc: "Safe and reliable transportation connecting nearby areas to campus.",
  },
  {
    title: "Cafeteria",
    image: "https://www.masscollege.in/trust_images/amenities/canteen.jpg",
    desc: "Hygienic and affordable food options for students daily.",
  },
  {
    title: "Auditorium",
    image: "https://www.masscollege.in/trust_images/amenities/auditorium.jpg",
    desc: "Modern auditorium for events and seminars.",
  },
  {
    title: "RO Water System",
    image: "https://www.masscollege.in/trust_images/amenities/ro.png",
    desc: "Clean and safe drinking water across the campus.",
  },
  {
    title: "Xerox & Printing",
    image: "https://www.masscollege.in/trust_images/amenities/xerox.jpg",
    desc: "Quick printing and document services.",
  },
  {
    title: "Science & Tech Labs",
    image: "https://www.masscollege.in/trust_images/amenities/laboratory.jpg",
    desc: "Well-equipped labs for hands-on learning.",
  },
];

export default function FacilitiesSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % facilities.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  const current = facilities[index];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="text-navy/60 text-sm font-medium tracking-wider uppercase">
              Facilities
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy">
              Discover Our Premier Facilities
            </h2>
            <div className="space-y-4 transition-opacity duration-500">
              <h3 className="font-serif text-2xl text-navy font-semibold">
                {current.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {current.desc}
              </p>
            </div>
          </div>

          {/* Right: Image with Controls */}
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
              <img
                key={index}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            {/* Arrow Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all duration-300"
              aria-label="Previous facility"
            >
              <ChevronLeft className="w-6 h-6 text-navy" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all duration-300"
              aria-label="Next facility"
            >
              <ChevronRight className="w-6 h-6 text-navy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
