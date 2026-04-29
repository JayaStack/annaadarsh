import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Academics",
    children: [
      { label: "All Courses", href: "/courses" },
      { label: "Faculty", href: "/faculty" },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Campus", href: "/campus" },
  { label: "Admissions", href: "/admissions" },
  { label: "News & Events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const subTextColor = "text-gray-400";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1F3A] border-b border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-4 hover:opacity-90 transition-all duration-300 flex-shrink-0"
          >
            <img
              src="/images/logo.png"
              alt="College Logo"
              className="h-11 w-11 object-contain rounded-full border border-white/20 bg-white/20 backdrop-blur-sm p-1"
            />

            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold text-white tracking-wide">
                Dr. Vikram Agarwal College
              </p>
              <p className={`text-xs ${subTextColor} tracking-wide`}>
                Arts &amp; Science
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-6 xl:ml-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-sans font-medium text-white/80 tracking-wide hover:text-white hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 active:scale-95">
                    {link.label}
                    <svg
                      className="w-3.5 h-3.5 mt-0.5 opacity-60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div className="absolute top-full left-0 w-full h-3" />

                  <div className="absolute top-full left-0 pt-2 z-50 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className="w-48 bg-[#0B1F3A] rounded-xl shadow-xl py-2 ring-1 ring-white/10 border border-white/10">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 font-sans transition-all duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-sans tracking-wide transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:bg-white/10 hover:backdrop-blur-sm ${location.pathname === link.href ? "text-white font-medium bg-white/10" : "text-white/80 hover:text-white"}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center ml-4">
            <Link
              to="/admissions"
              className="px-6 py-2.5 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 shadow-md transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            >
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[#0B1F3A] border-b border-white/10 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <div className="px-4 py-2 text-xs font-sans font-semibold tracking-widest uppercase text-yellow-500">
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className="block px-6 py-2.5 text-sm text-white/80 font-sans hover:text-white hover:bg-white/5 rounded transition-all duration-300"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`block px-4 py-2.5 text-sm font-sans rounded-xl transition-all duration-300 ${location.pathname === link.href ? "text-white font-medium bg-white/10" : "text-white/80 hover:text-white hover:bg-white/5"}`}
              >
                {link.label}
              </Link>
            ),
          )}
          <div className="pt-3 border-t border-white/10">
            <Link
              to="/admissions"
              className="block text-center bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-sans font-semibold hover:bg-yellow-300 shadow-md transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
