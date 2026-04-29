import { Star } from "lucide-react";
import { motion } from "framer-motion";
import MotionReveal, { revealItem } from "./MotionReveal";

const avatarSrc = (initials, color) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="48" fill="${color}"/>
      <text x="48" y="56" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#ffffff">${initials}</text>
    </svg>
  `)}`;

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      course: "B.A English",
      photo: "PS",
      role: "Content Associate",
      company: "Publishing House",
      review:
        "This college transformed my perspective on education. The faculty is incredibly supportive, and the placement rate is phenomenal. I got placed in a reputed publishing house!",
      rating: 5,
    },
    {
      name: "Rohit Patel",
      course: "BBA",
      photo: "RP",
      role: "Management Trainee",
      company: "Corporate Sector",
      review:
        "Outstanding campus life and excellent academic programs. The business simulations and industry interactions really prepared me for corporate life. Best decision ever!",
      rating: 5,
    },
    {
      name: "Anika Verma",
      course: "B.Sc Psychology",
      photo: "AV",
      role: "Research Intern",
      company: "Mental Health Organization",
      review:
        "The psychology department is exceptional with cutting-edge research opportunities. Faculty mentorship helped me secure an internship at a leading mental health organization.",
      rating: 5,
    },
  ];

  return (
    <MotionReveal as="section" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={revealItem} className="text-center mb-16">
          <p className="section-label">Student Voice</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 tracking-normal">
            Student Testimonials
          </h2>
          <p className="text-lg text-muted font-light">
            Hear from our successful graduates and current students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              variants={revealItem}
              key={testimonial.name}
              className="bg-white rounded-xl p-8 ring-1 ring-navy/5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
              </div>

              <p className="text-navy/75 text-base leading-8 mb-8 flex-grow">
                "{testimonial.review}"
              </p>

              <div className="h-px bg-slate-100 mb-6" />

              <div className="flex items-center gap-4">
                <img
                  src={avatarSrc(
                    testimonial.photo,
                    idx === 0 ? "#0B1F3A" : idx === 1 ? "#17365F" : "#C9A34E",
                  )}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover shadow-sm"
                />

                <div>
                  <h4 className="font-serif font-bold text-navy text-lg tracking-normal">
                    {testimonial.name}
                  </h4>
                  <p className="text-gold text-sm font-medium">
                    {testimonial.course}
                  </p>
                  <p className="text-muted text-xs mt-1">
                    {testimonial.role} | {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={revealItem}
          className="mt-16 bg-navy rounded-xl p-8 text-center shadow-[0_24px_70px_rgba(11,31,58,0.18)]"
        >
          <p className="text-white/80 text-base mb-5">
            Join{" "}
            <span className="text-gold font-bold">10,000+ happy students</span>{" "}
            who found their future here
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {["S", "A", "R"].map((initial) => (
                <div
                  key={initial}
                  className="w-10 h-10 rounded-full bg-white border-2 border-navy flex items-center justify-center text-sm font-bold text-navy -ml-3 first:ml-0"
                >
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-white/70">and 9,997+ more</span>
          </div>
        </motion.div>
      </div>
    </MotionReveal>
  );
}
