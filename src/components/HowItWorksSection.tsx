'use client';

import React from 'react';
import { TrendingUp, Presentation, Tv } from 'lucide-react';

interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stepsData: StepItem[] = [
  {
    stepNumber: 1,
    title: 'Skill Gap Analysis',
    description: 'Assess team skill gaps and developmental needs.',
    icon: <TrendingUp className="w-7 h-7 text-white" />,
  },
  {
    stepNumber: 2,
    title: 'Customized Training Plan',
    description: 'Create a tailored roadmap addressing organizational goals.',
    icon: <Presentation className="w-7 h-7 text-white" />,
  },
  {
    stepNumber: 3,
    title: 'Flexible Program Delivery',
    description: 'Deliver adaptable programs aligned with industry and organizational needs.',
    icon: <Tv className="w-7 h-7 text-white" />,
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            How We <span className="text-[#1b73e8]">Deliver Results</span> That Matter?
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-600">
            A Structured Three-Step Approach to <span className="text-[#1b73e8]">Skill Development</span>
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {stepsData.map((step) => (
            <div
              key={step.stepNumber}
              className="relative bg-[#f3f7fe] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center border-x-4 border-[#1b73e8] group"
            >
              {/* Step Numbered Badge (Top-Left) */}
              <div className="absolute top-5 left-5 w-7 h-7 rounded-full border border-blue-200 bg-white flex items-center justify-center font-extrabold text-xs text-slate-800 shadow-xs">
                {step.stepNumber}
              </div>

              {/* Icon Circle (Center) */}
              <div className="w-16 h-16 rounded-full bg-[#1b73e8] flex items-center justify-center mb-6 mt-4 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-200">
                {step.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
