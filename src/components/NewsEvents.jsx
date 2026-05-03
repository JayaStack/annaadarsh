import { ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Annual Tech Fest 2025",
    description: "Join us for three days of innovation, workshops, and competitions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4n4h5rRpQd428RfagSXjg1g7cE_5VNSMUdw&s",
  },
  {
    id: 2,
    title: "Cultural Extravaganza",
    description: "Celebrating diversity through music, dance, and art performances",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XCV00Ou7LWDHiIZNqhp8SYsZ3EgDxwN4DA&s",
  },
];

const news = [
  { id: 1, text: "Pongal Celebrations 2024" },
  { id: 2, text: "New library resources added" },
  { id: 3, text: "Admission open for 2026 batch" },
  { id: 4, text: "Naan Mudhalvan – 2025" },
];

export default function NewsEvents() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-gold-600 font-medium text-sm uppercase tracking-wider mb-2">
            News & Events
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-semibold">
            Stay updated with campus life
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 reveal">
          {/* Left: Event Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-[320px]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-gold-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-white/90 line-clamp-2 mb-3">
                    {event.description}
                  </p>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Latest News */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h3 className="font-serif text-xl font-semibold text-navy-900 mb-6">
              Latest News
            </h3>
            <div className="space-y-4">
              {news.map((item, idx) => (
                <div key={item.id}>
                  <div className="group flex items-center justify-between cursor-pointer py-2">
                    <p className="text-sm text-navy-700 group-hover:text-gold-600 transition-colors flex-1">
                      {item.text}
                    </p>
                    <ArrowRight className="w-4 h-4 text-navy-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                  </div>
                  {idx < news.length - 1 && (
                    <div className="border-b border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center reveal">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-navy-900 text-white rounded-full hover:bg-gold-600 transition-colors duration-300 font-medium">
            View All Events
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
