import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      course: "B.A English",
      photo: "👩‍🎓",
      review:
        "This college transformed my perspective on education. The faculty is incredibly supportive, and the placement rate is phenomenal. I got placed in a reputed publishing house!",
      rating: 5,
    },
    {
      name: "Rohit Patel",
      course: "BBA",
      photo: "👨‍🎓",
      review:
        "Outstanding campus life and excellent academic programs. The business simulations and industry interactions really prepared me for corporate life. Best decision ever!",
      rating: 5,
    },
    {
      name: "Anika Verma",
      course: "B.Sc Psychology",
      photo: "👩‍💼",
      review:
        "The psychology department is exceptional with cutting-edge research opportunities. Faculty mentorship helped me secure an internship at a leading mental health organization.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Student Testimonials
          </h2>
          <p className="text-lg text-white/70 font-light">
            Hear from our successful graduates and current students
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-navy-light rounded-xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
              </div>

              {/* Review Text */}
              <p className="text-white/80 text-base leading-relaxed mb-6 flex-grow italic">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-6"></div>

              {/* Student Info */}
              <div className="flex items-center gap-4">
                {/* Photo */}
                <div className="text-4xl">{testimonial.photo}</div>

                {/* Details */}
                <div>
                  <h4 className="font-serif font-bold text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gold text-sm font-medium">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-white/5 rounded-xl p-8 border border-white/10 text-center">
          <p className="text-white/80 text-base mb-4">
            Join{" "}
            <span className="text-gold font-bold">10,000+ happy students</span>{" "}
            who found their future here
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gold/30 border-2 border-navy-light flex items-center justify-center text-sm font-bold text-white -ml-3 first:ml-0"
                >
                  {String(i)}
                </div>
              ))}
            </div>
            <span className="text-white/70">and 9,997+ more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
