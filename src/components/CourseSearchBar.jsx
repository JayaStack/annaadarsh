import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseSearchBar() {
  const [courseSearch, setCourseSearch] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("all");
  const [stream, setStream] = useState("all");

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search logic
    console.log({
      courseSearch,
      degreeLevel,
      stream,
    });
  };

  return (
    <section className="bg-navy py-16 md:py-20 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Find Your Perfect Course
          </h2>
          <p className="text-lg text-white/70 font-light">
            Search our extensive range of undergraduate and postgraduate
            programs
          </p>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="bg-navy-light rounded-xl p-6 md:p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Course Search Input */}
            <div className="md:col-span-2">
              <label className="block text-white text-sm font-medium mb-3">
                Course Name
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search course..."
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-navy border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            {/* Degree Level Dropdown */}
            <div>
              <label className="block text-white text-sm font-medium mb-3">
                Degree Level
              </label>
              <div className="relative">
                <select
                  value={degreeLevel}
                  onChange={(e) => setDegreeLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-navy border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  <option value="all">All Levels</option>
                  <option value="ug">Undergraduate</option>
                  <option value="pg">Postgraduate</option>
                  <option value="diploma">Diploma</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-white/50 pointer-events-none" />
              </div>
            </div>

            {/* Stream Dropdown */}
            <div>
              <label className="block text-white text-sm font-medium mb-3">
                Stream
              </label>
              <div className="relative">
                <select
                  value={stream}
                  onChange={(e) => setStream(e.target.value)}
                  className="w-full px-4 py-3 bg-navy border border-white/20 rounded-lg text-white appearance-none focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  <option value="all">All Streams</option>
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="arts">Arts</option>
                </select>
                <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-white/50 pointer-events-none" />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Find Your Course
              </button>
            </div>
          </div>

          {/* Info Text */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm">
              Can't decide?{" "}
              <span className="text-gold font-medium">Browse all courses</span>{" "}
              or schedule a counselling session.
            </p>
            <Link
              to="/contact"
              className="text-gold hover:text-gold/80 font-medium text-sm transition-colors"
            >
              Talk to an Advisor →
            </Link>
          </div>
        </form>

        {/* Quick Stats Below Search */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: "Active Courses", value: "50+" },
            { label: "Expert Faculty", value: "200+" },
            { label: "Successful Alumni", value: "25K+" },
            { label: "Global Partners", value: "100+" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
