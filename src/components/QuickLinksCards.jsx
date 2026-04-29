import { ArrowRight, Banknote, CalendarCheck, ClipboardList, School } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MotionReveal, { revealItem } from "./MotionReveal";

export default function QuickLinksCards() {
  const quickLinks = [
    {
      title: "Admissions",
      description: "Apply now and start your journey",
      image: "url(/images/college.jpg)",
      href: "/admissions",
      icon: ClipboardList,
    },
    {
      title: "Fee Structure",
      description: "Transparent pricing & payment plans",
      image: "url(/images/college.jpg)",
      href: "/admissions",
      icon: Banknote,
    },
    {
      title: "Campus Life",
      description: "Hostel, clubs, sports & more",
      image: "url(/images/college.jpg)",
      href: "/campus",
      icon: School,
    },
    {
      title: "Book Campus Visit",
      description: "Experience our campus in person",
      image: "url(/images/college.jpg)",
      href: "/contact",
      icon: CalendarCheck,
    },
  ];

  return (
    <MotionReveal as="section" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={revealItem} className="text-center mb-16">
          <p className="section-label">Start Here</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 tracking-normal">
            Quick Links
          </h2>
          <p className="text-lg text-muted font-light">
            Explore the most important information
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => {
            const Icon = link.icon;

            return (
              <motion.div variants={revealItem} key={link.title}>
                <Link
                key={link.title}
                to={link.href}
                className="group relative overflow-hidden rounded-xl h-72 cursor-pointer shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: link.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/60 to-navy/20 transition-colors duration-300" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/12 backdrop-blur-md border border-white/20 text-gold flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors tracking-normal">
                      {link.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 leading-6">
                      {link.description}
                    </p>

                    <div className="flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </MotionReveal>
  );
}
