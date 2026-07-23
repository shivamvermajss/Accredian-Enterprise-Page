'use client';

import React, { useState } from 'react';

interface Testimonial {
  id: number;
  clientName: string;
  logo: React.ReactNode;
  quote: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    clientName: 'ADP',
    logo: (
      <span className="text-3xl font-black text-[#d0271d] tracking-tighter font-sans">
        ADP
      </span>
    ),
    quote:
      '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
  },
  {
    id: 2,
    clientName: 'BAYER',
    logo: (
      <div className="w-12 h-12 rounded-full border-2 border-emerald-500 p-0.5 flex items-center justify-center">
        <div className="w-full h-full rounded-full border border-sky-400 flex flex-col items-center justify-center bg-white text-[8px] font-black text-slate-800 leading-none tracking-widest">
          <span>B</span>
          <span>A Y E R</span>
          <span>R</span>
        </div>
      </div>
    ),
    quote:
      '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
  },
  {
    id: 3,
    clientName: 'HCL',
    logo: (
      <span className="text-3xl font-black italic tracking-widest text-[#00529b] font-sans">
        HCL
      </span>
    ),
    quote:
      '"The customized learning paths transformed our engineering teams. Accredian delivered hands-on training that directly accelerated our digital transformation initiatives."',
  },
  {
    id: 4,
    clientName: 'IBM',
    logo: (
      <span className="text-3xl font-extrabold tracking-widest text-[#054ada] font-mono leading-none border-b-2 border-[#054ada]">
        IBM
      </span>
    ),
    quote:
      '"Partnering with Accredian allowed us to upskill over 500 professionals seamlessly. The practical, application-driven approach ensured measurable business impact."',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Show 2 items per slide
  const totalSlides = Math.ceil(testimonialsData.length / 2);
  const currentPair = testimonialsData.slice(
    activeSlide * 2,
    activeSlide * 2 + 2
  );

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Testimonials from <span className="text-[#1b73e8]">Our Partners</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-600">
            What <span className="text-[#1b73e8]">Our Clients</span> Are Saying
          </p>
        </div>

        {/* 2-Column Testimonials Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-10">
          {currentPair.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Client Logo */}
              <div className="mb-6 h-12 flex items-center">
                {testimonial.logo}
              </div>

              {/* Quote Content */}
              <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed italic">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-200 ${
                activeSlide === idx
                  ? 'w-8 bg-[#1b73e8]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
