'use client';

import React from 'react';

interface ClientLogo {
  name: string;
  logo: React.ReactNode;
}

// Crisp SVG representations matching the brand logos in screenshot
const clientLogos: ClientLogo[] = [
  {
    name: 'Reliance Industries Limited',
    logo: (
      <div className="flex flex-col items-center">
        {/* Reliance Crest emblem */}
        <div className="w-8 h-8 rounded-full bg-[#c5a059]/20 flex items-center justify-center mb-1">
          <svg className="w-5 h-5 text-[#9a752e]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
        </div>
        <span className="font-serif font-bold text-slate-800 text-sm tracking-tight">Reliance</span>
        <span className="text-[8px] tracking-wider text-slate-500 font-medium uppercase">Industries Limited</span>
      </div>
    ),
  },
  {
    name: 'HCL',
    logo: (
      <span className="text-3xl font-black italic tracking-widest text-[#00529b] font-sans">
        HCL
      </span>
    ),
  },
  {
    name: 'IBM',
    logo: (
      <div className="flex flex-col space-y-0.5 justify-center">
        {/* Striped IBM effect */}
        <span className="text-3xl font-extrabold tracking-widest text-[#054ada] font-mono leading-none border-b-2 border-[#054ada] pb-0.5">
          IBM
        </span>
      </div>
    ),
  },
  {
    name: 'CRIF',
    logo: (
      <div className="flex flex-col items-center">
        <span className="text-2xl font-black italic text-[#003b71] tracking-tighter">
          CRIF
        </span>
        <span className="text-[7px] text-[#003b71] font-semibold tracking-tight -mt-0.5">
          Together to the next level
        </span>
      </div>
    ),
  },
  {
    name: 'ADP',
    logo: (
      <span className="text-3xl font-black text-[#d0271d] tracking-tighter font-sans">
        ADP
      </span>
    ),
  },
  {
    name: 'BAYER',
    logo: (
      <div className="w-14 h-14 rounded-full border-2 border-emerald-500 p-0.5 flex items-center justify-center relative">
        <div className="w-full h-full rounded-full border border-sky-400 flex flex-col items-center justify-center bg-white text-[9px] font-black text-slate-800 leading-none tracking-widest">
          <span>B</span>
          <span>A Y E R</span>
          <span>R</span>
        </div>
      </div>
    ),
  },
];

export const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-16 md:py-20 bg-slate-50/60 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Proven <span className="text-[#1b73e8]">Partnerships</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-600">
            Successful Collaborations With the <span className="text-[#1b73e8]">Industry's Best</span>
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 items-center justify-items-center">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 w-full h-24 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
              title={client.name}
            >
              <div className="opacity-85 group-hover:opacity-100 transition-opacity">
                {client.logo}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
