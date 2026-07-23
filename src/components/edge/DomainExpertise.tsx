'use client';

import React from 'react';
import {
  Lightbulb,
  BrainCircuit,
  Users,
  BarChart3,
  Settings,
  Globe,
  CreditCard,
} from 'lucide-react';

interface DomainItem {
  title: string;
  icon: React.ReactNode;
}

const domains: DomainItem[] = [
  {
    title: 'Product & Innovation Hub',
    icon: <Lightbulb className="w-8 h-8 text-[#1b73e8]" />,
  },
  {
    title: 'Gen-AI Mastery',
    icon: <BrainCircuit className="w-8 h-8 text-[#1b73e8]" />,
  },
  {
    title: 'Leadership Elevation',
    icon: <Users className="w-8 h-8 text-[#1b73e8]" />,
  },
  {
    title: 'Tech & Data Insights',
    icon: <BarChart3 className="w-8 h-8 text-[#1b73e8]" />,
  },
  {
    title: 'Operations Excellence',
    icon: <Settings className="w-8 h-8 text-[#1b73e8]" />,
  },
  {
    title: 'Digital Enterprise',
    icon: <Globe className="w-8 h-8 text-[#1b73e8]" />,
  },
  {
    title: 'Fintech Innovation Lab',
    icon: <CreditCard className="w-8 h-8 text-[#1b73e8]" />,
  },
];

export const DomainExpertise: React.FC = () => {
  return (
    <div className="py-16 bg-slate-50/40 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Our <span className="text-[#1b73e8]">Domain Expertise</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-600">
            <span className="text-[#1b73e8]">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        {/* 7 Card Layout */}
        <div className="flex flex-col items-center">
          {/* Top 6 cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-6">
            {domains.slice(0, 6).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg text-center">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* 7th Centered Bottom Card */}
          <div className="w-full max-w-sm">
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200">
                {domains[6].icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg text-center">
                {domains[6].title}
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DomainExpertise;
