import { Link } from "react-router-dom";

const coursesData = [
  {
    title: "B.A – English",
    slug: "ba-english",
    image: "https://www.umu.ac.in/wp-content/uploads/2023/09/BA-English-Everything-students-must-know-about-this-course.jpg",
    description: "Strengthens language, literature, and communication skills."
  },
  {
    title: "B.Sc – Psychology",
    slug: "bsc-psychology",
    image: "https://assets.phenompeople.com/CareerConnectResources/prod/SWJOIN/images/b-sc-psychology-1742811272931.png",
    description: "Builds foundations in cognitive and social psychology."
  },
  {
    title: "BBA – Business Administration",
    slug: "bba-business-administration",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTSE8WY3blh85910q8IN5fjOytVORx8wVuQ&s",
    description: "Develops leadership and business management skills."
  },
  {
    title: "B.Com – General",
    slug: "bcom-general",
    image: "https://i.ytimg.com/vi/7qQEaNK8S-c/maxresdefault.jpg",
    description: "Covers accounting, taxation, and business law."
  },
  {
    title: "B.Com – Accounting & Finance",
    slug: "bcom-accounting-finance",
    image: "https://www.canamgroup.com/assets/uploads/_thumbs/1683096004-B.-Com-(Accounting-and-Finance)-Courses,-Admissions,-Eligibility,-Syllabus,-Cost,-Jobs-JPG.jpg",
    description: "Advanced accounting, auditing, and financial management."
  }
];

export default function CoursesGrid() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-navy/60 text-sm font-medium tracking-wider uppercase mb-3">
              Academic Programs
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy">
              Courses designed for the careers of tomorrow
            </h2>
          </div>
          <Link
            to="/courses"
            className="border border-navy/20 text-navy px-6 py-3 rounded-full text-sm font-sans font-500 hover:bg-navy hover:text-white transition-all self-start md:self-auto"
          >
            View All Courses →
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <Link
              key={course.slug}
              to={`/courses/${course.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-navy/10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[16/9]">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy font-semibold mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm font-sans leading-relaxed mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="inline-flex items-center gap-2 text-navy font-sans text-sm font-500 group-hover:gap-3 transition-all">
                  View Details
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
