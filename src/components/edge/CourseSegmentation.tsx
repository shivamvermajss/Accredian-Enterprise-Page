'use client';

import React from 'react';

interface SegmentItem {
  title: string;
  subtext: string;
  imageUrl: string;
}

const segments: SegmentItem[] = [
  {
    title: 'Program Specific',
    subtext: 'Certificate, Executive, Post Graduate Certificate',
    imageUrl:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Industry Specific',
    subtext: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Topic Specific',
    subtext: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
    imageUrl:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Level Specific',
    subtext: 'Senior Leadership, Mid-Career Professionals, Freshers',
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
];

export const CourseSegmentation: React.FC = () => {
  return (
    <div className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Tailored <span className="text-[#1b73e8]">Course Segmentation</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-600">
            Explore <span className="text-[#1b73e8]">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-center bg-white">
                <h3 className="text-xl font-extrabold text-[#1b73e8] mb-2 group-hover:text-[#1557b0] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {card.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CourseSegmentation;
