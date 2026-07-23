'use client';

import React from 'react';

export const CatFrameworkSection: React.FC = () => {
  return (
    <section id="cat" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            The <span className="text-[#1b73e8]">CAT Framework</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-600">
            Our Proven Approach to <span className="text-[#1b73e8]">Learning Excellence</span>
          </p>
        </div>

        {/* Soft Light Blue Backdrop Card */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#f4f8ff] border border-blue-100/60 p-8 sm:p-12 lg:p-16 shadow-sm">
          
          {/* 3 Circular Ring Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 max-w-6xl mx-auto justify-items-center items-center">
            
            {/* ITEM 1: CONCEPT */}
            <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] flex flex-col items-center justify-center text-center p-6 group">
              {/* Outer Circular Blue Arc */}
              <svg className="absolute inset-0 w-full h-full text-[#1b73e8] pointer-events-none" viewBox="0 0 300 300" fill="none">
                <path
                  d="M 235 65 A 125 125 0 1 0 265 205"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="235" cy="65" r="7" fill="currentColor" />
              </svg>

              {/* Inner Content inside the Circle */}
              <div className="relative z-10 space-y-3 flex flex-col items-center max-w-[210px]">
                <div className="mb-1 text-[#1b73e8]">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 9.5V8" />
                    <path d="M10 15h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Concept
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-tight">
                  Foundational knowledge for deep subject understanding.
                </p>
              </div>
            </div>

            {/* ITEM 2: APPLICATION */}
            <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] flex flex-col items-center justify-center text-center p-6 group">
              {/* Outer Circular Blue Arc */}
              <svg className="absolute inset-0 w-full h-full text-[#1b73e8] pointer-events-none" viewBox="0 0 300 300" fill="none">
                <path
                  d="M 65 235 A 125 125 0 1 0 235 65"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="65" cy="235" r="7" fill="currentColor" />
                <circle cx="235" cy="65" r="7" fill="currentColor" />
              </svg>

              {/* Inner Content inside the Circle */}
              <div className="relative z-10 space-y-3 flex flex-col items-center max-w-[210px]">
                <div className="mb-1 text-[#1b73e8]">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <circle cx="6" cy="6" r="0.8" fill="currentColor" />
                    <circle cx="9" cy="6" r="0.8" fill="currentColor" />
                    <circle cx="12" cy="6" r="0.8" fill="currentColor" />
                    <circle cx="12" cy="15" r="2" />
                    <path d="M12 12v1m0 4v1m3-3h-1m-4 0H9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Application
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-tight">
                  Practical implementation through real-world scenarios.
                </p>
              </div>
            </div>

            {/* ITEM 3: TOOLS */}
            <div className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] flex flex-col items-center justify-center text-center p-6 group">
              {/* Outer Circular Blue Arc */}
              <svg className="absolute inset-0 w-full h-full text-[#1b73e8] pointer-events-none" viewBox="0 0 300 300" fill="none">
                <path
                  d="M 65 235 A 125 125 0 1 1 265 205"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="65" cy="235" r="7" fill="currentColor" />
              </svg>

              {/* Inner Content inside the Circle */}
              <div className="relative z-10 space-y-3 flex flex-col items-center max-w-[210px]">
                <div className="mb-1 text-[#1b73e8]">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Tools
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-tight">
                  Resources and techniques for effective skill mastery.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CatFrameworkSection;
