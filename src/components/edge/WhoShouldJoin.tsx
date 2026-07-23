'use client';

import React from 'react';
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react';

interface JoinCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const categories: JoinCategory[] = [
  {
    title: 'Tech Professionals',
    description: 'Enhance expertise, embrace tech, drive innovation.',
    icon: <MonitorCheck className="w-8 h-8 text-white" />,
  },
  {
    title: 'Non-Tech Professionals',
    description: 'Adapt digitally, collaborate in tech environments.',
    icon: <MonitorX className="w-8 h-8 text-white" />,
  },
  {
    title: 'Emerging Professionals',
    description: 'Develop powerful skills for rapid career growth.',
    icon: <GraduationCap className="w-8 h-8 text-white" />,
  },
  {
    title: 'Senior Professionals',
    description: 'Strengthen leadership, enhance strategic decisions.',
    icon: <Briefcase className="w-8 h-8 text-white" />,
  },
];

export const WhoShouldJoin: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Blue Card */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#1b73e8] text-white p-8 sm:p-12 lg:p-14 shadow-xl shadow-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-blue-100 font-semibold text-base tracking-wide">
                  Who Should Join?
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-1 leading-tight">
                  Strategic Skill Enhancement
                </h2>
              </div>

              {/* Team Executive Image cutout */}
              <div className="relative w-full max-w-sm h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                  alt="Business professionals collaborating"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right 2x2 Grid Column */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col space-y-3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 hover:bg-white/15 transition-all duration-200"
                >
                  <div className="p-2.5 bg-white/15 rounded-xl w-fit">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-50 font-normal leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WhoShouldJoin;
