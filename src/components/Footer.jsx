import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { COLLEGE_NAME } from "../constants/college";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1F3A] bg-gradient-to-b from-[#0B1F3A] to-[#071a2f] text-white pt-20 pb-10">
      <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
        <img
          src="/images/map-outline.svg"
          alt=""
          className="w-[400px] max-w-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">
              Connect
            </h3>
            <div className="space-y-3 text-sm text-gray-400 leading-6">
              <a
                href="mailto:admissions@aias.edu.in"
                className="block text-white hover:text-yellow-500 transition-colors"
              >
                admissions@aias.edu.in
              </a>
              <a
                href="tel:04426212089"
                className="block text-white hover:text-yellow-500 transition-colors"
              >
                044 – 2621 2089
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                <span>
                  AI, II Street, 9th Main Road, Anna Nagar, Chennai – 600 040
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">
              Talk
            </h3>
            <div className="space-y-3 text-sm text-gray-400 leading-6 max-w-xs">
              <p className="text-white">{COLLEGE_NAME}</p>
              <p className="text-gray-400">
                NAAC A++ accredited autonomous college affiliated to University
                of Madras.
              </p>
              <div className="pt-2 flex items-center gap-3 text-gray-400">
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Instagram
                </a>
                <span className="text-white/20">/</span>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  LinkedIn
                </a>
                <span className="text-white/20">/</span>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4">
              Find
            </h3>
            <div className="space-y-3 text-sm text-gray-400 leading-6">
              <Link
                to="/about"
                className="block text-white hover:text-yellow-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/courses"
                className="block text-white hover:text-yellow-500 transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/placements"
                className="block text-white hover:text-yellow-500 transition-colors"
              >
                Placements
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-yellow-500 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Dr. Vikram Agarwal College</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Grievance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
