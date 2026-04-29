import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CourseSearchBar from "../components/CourseSearchBar";
import QuickLinksCards from "../components/QuickLinksCards";
import StatsSection from "../components/StatsSection";
import CoursesGrid from "../components/CoursesGrid";
import PlacementsSection from "../components/PlacementsSection";
import CampusLifeSection from "../components/CampusLifeSection";
import TestimonialsSection from "../components/TestimonialsSection";
import StickyApplyBar from "../components/StickyApplyBar";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Course Search Bar - Critical Conversion Element */}
      <CourseSearchBar />

      {/* Quick Links Cards */}
      <QuickLinksCards />

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Courses Grid */}
      <CoursesGrid />

      {/* Placements Section */}
      <PlacementsSection />

      {/* Campus Life Section */}
      <CampusLifeSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Sticky Apply Bar - Appears on scroll */}
      <StickyApplyBar />

      {/* Floating Buttons - WhatsApp & AI Chatbot */}
      <FloatingButtons />

      {/* Additional padding to account for sticky apply bar */}
      <div className="h-20"></div>
    </div>
  );
}
