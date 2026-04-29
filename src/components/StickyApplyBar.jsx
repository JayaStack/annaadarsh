import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyApplyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-cream shadow-2xl transition-all duration-300 z-40 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Text */}
          <div>
            <h3 className="font-serif font-bold text-navy text-lg">
              Admissions Open
            </h3>
            <p className="text-muted text-sm">
              Don't miss out on limited seats — Apply now!
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 ml-auto">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold/90 text-navy font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-muted hover:text-navy hover:bg-cream rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
