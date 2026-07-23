'use client';

import React from 'react';
import {
  Lightbulb,
  UserCheck,
  RotateCw,
  Cpu,
  ArrowUpRight,
  Target,
  Package,
} from 'lucide-react';

interface EdgeStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: 'top' | 'bottom';
  bgColor: string;
}

const steps: EdgeStep[] = [
  {
    id: 1,
    title: 'Tailored Solutions',
    description: "Programs customized to your organization's goals and challenges.",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    position: 'top',
    bgColor: 'bg-cyan-500',
  },
  {
    id: 2,
    title: 'Expert Guidance',
    description: 'Learn from industry leaders with real-world success.',
    icon: <UserCheck className="w-6 h-6 text-white" />,
    position: 'bottom',
    bgColor: 'bg-blue-600',
  },
  {
    id: 3,
    title: 'Innovative Framework',
    description: 'Proprietary methods for impactful, application-driven results.',
    icon: <RotateCw className="w-6 h-6 text-white" />,
    position: 'top',
    bgColor: 'bg-[#1b73e8]',
  },
  {
    id: 4,
    title: 'Advanced Technology',
    description: 'State-of-the-art LMS for seamless learning experiences.',
    icon: <Cpu className="w-6 h-6 text-white" />,
    position: 'bottom',
    bgColor: 'bg-blue-700',
  },
  {
    id: 5,
    title: 'Diverse Offerings',
    description: 'Courses across industries, skill levels, and emerging fields.',
    icon: <ArrowUpRight className="w-6 h-6 text-white" />,
    position: 'top',
    bgColor: 'bg-indigo-600',
  },
  {
    id: 6,
    title: 'Proven Impact',
    description: 'Trusted by leading organizations for measurable ROI.',
    icon: <Target className="w-6 h-6 text-white" />,
    position: 'bottom',
    bgColor: 'bg-blue-900',
  },
  {
    id: 7,
    title: 'Flexible Delivery',
    description: 'Online and offline options tailored to your needs.',
    icon: <Package className="w-6 h-6 text-white" />,
    position: 'top',
    bgColor: 'bg-blue-600',
  },
];

export const EdgeTimeline: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-24 space-y-2">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
          The <span className="text-[#1b73e8]">Accredian Edge</span>
        </h2>
        <p className="text-base sm:text-lg font-medium text-slate-600">
          Key Aspects of <span className="text-[#1b73e8]">Our Strategic Training</span>
        </p>
      </div>

      {/* Timeline Desktop Container */}
      <div className="relative max-w-7xl mx-auto px-4 hidden lg:block py-16">
        
        {/* Curving Dotted Wave Line */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-16 pointer-events-none z-0">
          <svg className="w-full h-full text-slate-300" preserveAspectRatio="none" viewBox="0 0 1200 100">
            <path
              d="M 0,50 Q 100,10 200,50 T 400,50 T 600,50 T 800,50 T 1000,50 T 1200,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
        </div>

        {/* Timeline Items Grid */}
        <div className="grid grid-cols-7 gap-2 relative z-10">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative flex flex-col items-center group">
              
              {/* TOP CONTENT CARD */}
              {step.position === 'top' && (
                <div className="absolute bottom-28 w-44 text-center space-y-1 group-hover:-translate-y-1 transition-transform duration-200">
                  <div className="flex items-center justify-center space-x-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#1b73e8]" />
                    <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    {step.description}
                  </p>
                  {/* Stem Line Down to Badge */}
                  <div className="w-[1.5px] h-8 bg-blue-300 mx-auto mt-2" />
                </div>
              )}

              {/* CENTER CIRCULAR ICON BADGE */}
              <div className="relative my-auto">
                <div className="w-20 h-20 rounded-full bg-white p-2 shadow-lg border-2 border-blue-100 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <div className={`w-full h-full rounded-full ${step.bgColor} flex items-center justify-center shadow-inner`}>
                    {step.icon}
                  </div>
                </div>
                {/* Arrow indicator pointing to next */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-slate-300 font-bold text-xs">
                    »
                  </div>
                )}
              </div>

              {/* BOTTOM CONTENT CARD */}
              {step.position === 'bottom' && (
                <div className="absolute top-28 w-44 text-center space-y-1 group-hover:translate-y-1 transition-transform duration-200">
                  {/* Stem Line Up to Badge */}
                  <div className="w-[1.5px] h-8 bg-blue-300 mx-auto mb-2" />
                  <div className="flex items-center justify-center space-x-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#1b73e8]" />
                    <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    {step.description}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      {/* Timeline Mobile / Tablet View */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto px-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-start space-x-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all"
          >
            <div className={`w-14 h-14 rounded-full ${step.bgColor} flex items-center justify-center flex-shrink-0 shadow-md`}>
              {step.icon}
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 text-base">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EdgeTimeline;
