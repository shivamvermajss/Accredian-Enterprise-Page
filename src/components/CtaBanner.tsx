'use client';

import React from 'react';
import { Headphones, ChevronRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#1b73e8] text-white p-8 sm:p-10 lg:p-12 shadow-xl shadow-blue-500/20">
          
          {/* Subtle Concentric Background Circles Effect */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            
            {/* Left Content */}
            <div className="flex items-center space-x-5">
              {/* Headset Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Headphones className="w-9 h-9 sm:w-11 sm:h-11 text-[#1b73e8]" />
              </div>

              {/* Headlines */}
              <div className="space-y-1 text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Want to Learn More About Our Training Solutions?
                </h2>
                <p className="text-sm sm:text-base text-blue-100 font-medium">
                  Get Expert Guidance for Your Team's Success!
                </p>
              </div>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-slate-50 text-[#1b73e8] font-bold text-base rounded-xl shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Us
                <ChevronRight className="w-5 h-5 ml-1 text-[#1b73e8]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CtaBanner;
