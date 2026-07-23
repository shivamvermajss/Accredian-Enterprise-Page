'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

interface HeroFeature {
  text: string;
}

const features: HeroFeature[] = [
  { text: 'Tailored Solutions' },
  { text: 'Industry Insights' },
  { text: 'Expert Guidance' },
];

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="py-6 md:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Banner Card Container */}
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#ebf3ff] border border-blue-100/80 shadow-lg shadow-blue-950/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center p-6 sm:p-10 md:p-14 lg:p-16">
          
          {/* Left Column: Heading, Details & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Next-Gen{' '}
              <span className="text-[#1b73e8]">Expertise</span>
              <br />
              For Your{' '}
              <span className="text-[#1b73e8]">Enterprise</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-xl leading-relaxed">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 pb-3">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 text-slate-800 font-semibold text-sm sm:text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1b73e8] hover:bg-[#1557b0] text-white font-semibold text-base rounded-xl shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right Column: Hero Executive Team Image */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-full max-w-lg lg:max-w-none h-[360px] sm:h-[440px] lg:h-[480px] flex items-end justify-center">
              <Image
                src="/hero-executives-v3.png"
                alt="Accredian Corporate Executive Team"
                fill
                priority
                unoptimized
                className="object-contain object-bottom drop-shadow-xl hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
