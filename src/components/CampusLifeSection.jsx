import {
  Check,
  Library,
  Monitor,
  Play,
  School,
  Trophy,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import MotionReveal, { revealItem } from "./MotionReveal";
import FacilityCard from "./FacilityCard";

const campusIcons = [School, Library, Trophy, Users, Play, Monitor];

export default function CampusLifeSection() {
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
    {
      title: "Modern Classrooms",
      image: "/images/college.jpg",
      description: "Smart learning spaces designed for engagement and clarity.",
    },
    {
      title: "Wi-Fi Campus",
      image: "/images/college.jpg",
      description: "Always-connected campus support for study and collaboration.",
    },
    {
      title: "Laboratories",
      image: "/images/college.jpg",
      description: "Hands-on labs built for practical learning and discovery.",
    },
    {
      title: "Library",
      image: "/images/college.jpg",
      description: "Quiet research zones with a strong academic resource base.",
    },
    {
      title: "Hostel",
      image: "/images/college.jpg",
      description: "Comfortable living with secure and supportive amenities.",
    },
    {
      title: "Sports & Clubs",
      image: "/images/college.jpg",
      description: "A balanced campus life with activity, culture, and sport.",
    },
  ];

  return (
    <MotionReveal as="section" className="py-16 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="max-w-6xl mx-auto py-16">
          <motion.div variants={revealItem} className="w-full">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-serif font-semibold text-white tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
                World-Class Facilities
              </h3>
            </div>

            <div className="relative w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth pb-2">
              <div className="flex w-max gap-6 pr-6">
                {campusHighlights.map((facility) => (
                  <FacilityCard
                    key={facility.title}
                    title={facility.title}
                    image={facility.image}
                    description={facility.description}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionReveal>
  );
}
