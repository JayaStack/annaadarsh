import { useState } from "react";
import { ChevronDown, GraduationCap, Layers, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MotionReveal, { revealItem } from "./MotionReveal";

export default function CourseSearchBar() {
  const [courseSearch, setCourseSearch] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("all");
  const [stream, setStream] = useState("all");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      courseSearch,
      degreeLevel,
      stream,
    });
  };

  return (
    <MotionReveal as="section" className="relative bg-cream py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={revealItem} className="text-center mb-12">
          <p className="section-label">Course Finder</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4 tracking-normal">
            Find Your Perfect Course
          </h2>
          <p className="text-lg text-muted font-light max-w-2xl mx-auto leading-8">
            Search our extensive range of undergraduate and postgraduate
            programs
          </p>
        </motion.div>

        <motion.form
          variants={revealItem}
          onSubmit={handleSearch}
          className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-[0_24px_70px_rgba(11,31,58,0.12)] ring-1 ring-navy/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="md:col-span-2">
              <label className="block text-navy text-sm font-semibold mb-3">
                Course Name
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/35" />
                <input
                  type="text"
                  placeholder="Search course..."
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 bg-white border border-slate-200 rounded-lg text-navy placeholder-navy/35 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-out"
                />
              </div>
            </div>

            <div>
              <label className="block text-navy text-sm font-semibold mb-3">
                Degree Level
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/35 pointer-events-none" />
                <select
                  value={degreeLevel}
                  onChange={(e) => setDegreeLevel(e.target.value)}
                  className="w-full h-14 pl-12 pr-10 bg-white border border-slate-200 rounded-lg text-navy appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-out cursor-pointer"
                >
                  <option value="all">All Levels</option>
                  <option value="ug">Undergraduate</option>
                  <option value="pg">Postgraduate</option>
                  <option value="diploma">Diploma</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/35 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-navy text-sm font-semibold mb-3">
                Stream
              </label>
              <div className="relative">
                <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/35 pointer-events-none" />
                <select
                  value={stream}
                  onChange={(e) => setStream(e.target.value)}
                  className="w-full h-14 pl-12 pr-10 bg-white border border-slate-200 rounded-lg text-navy appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-out cursor-pointer"
                >
                  <option value="all">All Streams</option>
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="arts">Arts</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/35 pointer-events-none" />
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto min-h-[56px] bg-gold hover:bg-gold-dark text-navy hover:text-white font-bold px-10 rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:shadow-xl"
              >
                Find Your Course
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <p className="text-muted text-sm">
              Can't decide?{" "}
              <span className="text-navy font-semibold">Browse all courses</span>{" "}
              or schedule a counselling session.
            </p>
            <Link
              to="/contact"
              className="text-gold hover:text-gold-dark font-semibold text-sm transition-all duration-300 ease-out hover:scale-105 active:scale-95 inline-block"
            >
              Talk to an Advisor
            </Link>
          </div>
        </motion.form>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: "Active Courses", value: "50+" },
            { label: "Expert Faculty", value: "200+" },
            { label: "Successful Alumni", value: "25K+" },
            { label: "Global Partners", value: "100+" },
          ].map((stat) => (
            <motion.div
              variants={revealItem}
              key={stat.label}
              className="text-center bg-white rounded-xl p-5 shadow-sm ring-1 ring-navy/5 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="text-2xl md:text-3xl font-bold text-navy mb-1 font-serif">
                {stat.value}
              </div>
              <p className="text-muted text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionReveal>
  );
}
