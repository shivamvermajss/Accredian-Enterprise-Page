'use client';

import React from 'react';

interface StatItem {
  value: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    value: '10K+',
    description: 'Professionals Trained For Exceptional Career Success',
  },
  {
    value: '200+',
    description: 'Sessions Delivered With Unmatched Learning Excellence',
  },
  {
    value: '5K+',
    description: 'Active Learners Engaged In Dynamic Courses',
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Our <span className="text-[#1b73e8]">Track Record</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-600">
            The Numbers Behind <span className="text-[#1b73e8]">Our Success</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 py-8 md:py-4 transition-transform hover:-translate-y-1 duration-200"
            >
              {/* Stat Value Badge */}
              <div className="inline-flex items-center justify-center bg-[#dbeafe]/80 px-8 py-2.5 rounded-full mb-6 shadow-sm">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1b73e8] tracking-tight">
                  {stat.value}
                </span>
              </div>

              {/* Stat Description */}
              <p className="text-slate-900 font-bold text-sm sm:text-base leading-snug max-w-[260px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
