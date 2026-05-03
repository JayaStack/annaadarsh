import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "B.A – English",
    slug: "ba-english",
    image: "https://www.umu.ac.in/wp-content/uploads/2023/09/BA-English-Everything-students-must-know-about-this-course.jpg",
    desc: "Strengthens language, literature, and communication skills.",
  },
  {
    title: "B.Sc – Psychology",
    slug: "bsc-psychology",
    image: "https://assets.phenompeople.com/CareerConnectResources/prod/SWJOIN/images/b-sc-psychology-1742811272931.png",
    desc: "Builds foundations in cognitive and social psychology.",
  },
  {
    title: "BBA – Business Administration",
    slug: "bba-business-administration",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTSE8WY3blh85910q8IN5fjOytVORx8wVuQ&s",
    desc: "Develops leadership and business management skills.",
  },
  {
    title: "B.Com – General",
    slug: "bcom-general",
    image: "https://i.ytimg.com/vi/7qQEaNK8S-c/maxresdefault.jpg",
    desc: "Covers accounting, taxation, and business law.",
  },
  {
    title: "B.Com – Accounting & Finance",
    slug: "bcom-accounting-finance",
    image: "https://www.canamgroup.com/assets/uploads/_thumbs/1683096004-B.-Com-(Accounting-and-Finance)-Courses,-Admissions,-Eligibility,-Syllabus,-Cost,-Jobs-JPG.jpg",
    desc: "Advanced accounting, auditing, and financial management.",
  },
];

export default function CourseSlider() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % courses.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const current = courses[index];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content (40%) */}
          <div className="order-2 md:order-1 space-y-6">
            <div className="text-navy/60 text-xs font-medium tracking-wider uppercase">
              ACADEMIC PROGRAMS
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy">
              Courses designed for the careers of tomorrow
            </h2>
            <div className="space-y-4 transition-opacity duration-300">
              <h3 className="font-serif text-2xl text-navy font-semibold">
                {current.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to={`/courses/${current.slug}`}
                className="bg-navy text-white px-6 py-3 rounded-full text-sm font-sans font-500 hover:bg-navy/90 transition-all inline-flex items-center gap-2"
              >
                View Details →
              </Link>
              <Link
                to="/courses"
                className="border border-navy/20 text-navy px-6 py-3 rounded-full text-sm font-sans font-500 hover:bg-navy hover:text-white transition-all"
              >
                View All Courses
              </Link>
            </div>
          </div>

          {/* Right: Image with Controls (60%) */}
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
              <img
                key={index}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Arrow Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:scale-110 shadow-md flex items-center justify-center transition-transform duration-300"
                aria-label="Previous course"
              >
                <ChevronLeft className="w-6 h-6 text-navy" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:scale-110 shadow-md flex items-center justify-center transition-transform duration-300"
                aria-label="Next course"
              >
                <ChevronRight className="w-6 h-6 text-navy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
