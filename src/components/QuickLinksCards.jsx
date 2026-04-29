import {
  ArrowRight,
  Banknote,
  CalendarCheck,
  ClipboardList,
  School,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MotionReveal, { revealItem } from "./MotionReveal";

export default function QuickLinksCards() {
  const quickLinks = [
    {
      title: "Admissions",
      image: "/images/college.jpg",
      href: "/admissions",
    },
    {
      title: "Fee Structure",
      image: "/images/college.jpg",
      href: "/admissions",
    },
    {
      title: "Campus Life",
      image: "/images/college.jpg",
      href: "/campus",
    },
    {
      title: "Book Campus Visit",
      image: "/images/college.jpg",
      href: "/contact",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickLinks.map((link) => (
            <motion.div variants={revealItem} key={link.title}>
              <Link
                to={link.href}
                className="group rounded-xl overflow-hidden bg-black transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl block"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={link.image}
                    alt={link.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between px-5 py-5 bg-black">
                  <h3 className="text-white font-medium text-lg">
                    {link.title}
                  </h3>

                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionReveal>
  );
}
