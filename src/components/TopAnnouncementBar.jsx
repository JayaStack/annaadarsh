import React from 'react';

const TopAnnouncementBar = () => {
  return (
    <div className="bg-black text-white h-10 overflow-hidden flex items-center">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee {
          animation: scroll 20s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="marquee whitespace-nowrap text-sm">
        <span>
          UG &amp; PG Admissions 2026–27 - Online sale of Application portal opens from 14/03/2026 | 
          <a href="/admissions" className="hover:underline cursor-pointer ml-1">Click Here</a>
          <span className="mx-4">•</span>
          End Semester Examination April 2026 Time Table | 
          <a href="/examinations" className="hover:underline cursor-pointer ml-1">Click Here</a>
        </span>
      </div>
    </div>
  );
};

export default TopAnnouncementBar;
