import { Play } from "lucide-react";
import { useState } from "react";

export default function CampusLifeSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const campusImages = [
    {
      id: 1,
      title: "Main Campus",
      category: "Infrastructure",
      thumbnail: "📚",
    },
    {
      id: 2,
      title: "Library & Study Areas",
      category: "Facilities",
      thumbnail: "📖",
    },
    {
      id: 3,
      title: "Sports Complex",
      category: "Sports",
      thumbnail: "⚽",
    },
    {
      id: 4,
      title: "Hostel Amenities",
      category: "Accommodation",
      thumbnail: "🏠",
    },
    {
      id: 5,
      title: "Student Clubs",
      category: "Activities",
      thumbnail: "🎭",
    },
    {
      id: 6,
      title: "Tech Labs",
      category: "Technology",
      thumbnail: "💻",
    },
  ];

  const campusHighlights = [
    "Modern classrooms with latest technology",
    "Wi-Fi enabled entire campus",
    "State-of-the-art laboratory facilities",
    "Spacious hostel with all amenities",
    "Athletic fields and sports complex",
    "Multi-cuisine mess with quality food",
    "24/7 security and surveillance",
    "Medical center & counseling services",
    "Active student clubs and societies",
    "Regular cultural & sports events",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
            Campus Life
          </h2>
          <p className="text-lg text-muted font-light">
            Experience a vibrant community with excellent infrastructure
          </p>
        </div>

        {/* Image Grid */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-xl h-64 cursor-pointer"
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy flex items-center justify-center text-7xl hover:scale-110 transition-transform duration-500">
                {image.thumbnail}
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/60 transition-colors duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                {/* Category Badge */}
                <div className="inline-flex w-fit">
                  <span className="text-xs font-semibold text-gold bg-navy/50 px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>

                {/* Title & CTA */}
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {image.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-4 h-4 fill-white" />
                    <span className="text-sm font-medium">View Gallery</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Description & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Highlights */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-navy mb-8">
              World-Class Facilities
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {campusHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-gold text-lg font-bold mt-0.5">✓</span>
                  <p className="text-muted text-sm leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - CTA Section */}
          <div className="bg-gold/5 rounded-xl p-8 border border-gold/10">
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                Experience Our Campus
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Come visit our state-of-the-art campus and experience the
                vibrant student life. Our campus is strategically located with
                excellent connectivity and surrounded by a supportive community.
              </p>

              <div className="space-y-4">
                <button className="w-full bg-navy hover:bg-navy-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                  Schedule Campus Visit
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-navy hover:bg-navy/5 text-navy font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  <Play className="w-4 h-4 fill-navy" />
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="border-t border-gold/20 pt-8">
              <h4 className="font-semibold text-navy mb-4">Quick Facts</h4>
              <div className="space-y-3">
                {[
                  { label: "Total Campus Area", value: "25 Acres" },
                  { label: "Hostel Capacity", value: "2,000+ Students" },
                  { label: "Library Books", value: "50,000+" },
                  { label: "Labs & Studios", value: "40+" },
                ].map((fact, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-muted text-sm">{fact.label}</span>
                    <span className="font-semibold text-navy">
                      {fact.value}
                    </span>
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
