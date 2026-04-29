import {
  Check,
  FlaskConical,
  Library,
  Monitor,
  Play,
  School,
  Trophy,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import MotionReveal, { revealItem } from "./MotionReveal";

const campusIcons = [School, Library, Trophy, Users, Play, Monitor];

export default function CampusLifeSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const campusImages = [
    {
      id: 1,
      title: "Main Campus",
      category: "Infrastructure",
    },
    {
      id: 2,
      title: "Library & Study Areas",
      category: "Facilities",
    },
    {
      id: 3,
      title: "Sports Complex",
      category: "Sports",
    },
    {
      id: 4,
      title: "Hostel Amenities",
      category: "Accommodation",
    },
    {
      id: 5,
      title: "Student Clubs",
      category: "Activities",
    },
    {
      id: 6,
      title: "Tech Labs",
      category: "Technology",
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
    <MotionReveal as="section" className="py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={revealItem} className="text-center mb-16">
          <p className="section-label">Campus Experience</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-normal">
            Campus Life
          </h2>
          <p className="text-lg text-white/70 font-light">
            Experience a vibrant community with excellent infrastructure
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusImages.map((image, idx) => {
            const Icon = campusIcons[idx];

            return (
              <motion.button
                variants={revealItem}
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-xl h-64 cursor-pointer text-left transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl active:scale-95"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url(/images/college.jpg)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/65 to-navy/20" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  <div className="inline-flex w-fit">
                    <span className="text-xs font-semibold text-gold bg-white/10 border border-white/15 px-3 py-1 rounded-full backdrop-blur">
                      {image.category}
                    </span>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-lg bg-white/10 text-gold flex items-center justify-center mb-4 border border-white/15">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors tracking-normal">
                      {image.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-4 h-4 fill-white" />
                      <span className="text-sm font-medium">View Gallery</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={revealItem} className="relative">
            <div className="absolute inset-y-0 -left-6 right-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/60 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-semibold text-white mb-8 tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
                World-Class Facilities
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {campusHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-gray-200 text-sm leading-7 transition duration-300 hover:text-white">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={revealItem}
            className="bg-white rounded-xl p-8 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
          >
            <div className="mb-8">
              <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center mb-5">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4 tracking-normal">
                Experience Our Campus
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Come visit our state-of-the-art campus and experience the
                vibrant student life. Our campus is strategically located with
                excellent connectivity and surrounded by a supportive community.
              </p>

              <div className="space-y-4">
                <button className="w-full bg-navy hover:bg-navy-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:shadow-lg">
                  Schedule Campus Visit
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-navy/20 hover:border-navy hover:bg-cream text-navy font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95">
                  <Play className="w-4 h-4 fill-navy" />
                  Virtual Tour
                </button>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h4 className="font-semibold text-navy mb-4">Quick Facts</h4>
              <div className="space-y-3">
                {[
                  { label: "Total Campus Area", value: "25 Acres" },
                  { label: "Hostel Capacity", value: "2,000+ Students" },
                  { label: "Library Books", value: "50,000+" },
                  { label: "Labs & Studios", value: "40+" },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="flex justify-between items-center gap-4"
                  >
                    <span className="text-muted text-sm">{fact.label}</span>
                    <span className="font-semibold text-navy whitespace-nowrap">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionReveal>
  );
}
