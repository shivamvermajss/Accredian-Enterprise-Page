import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ClientsSection from '@/components/ClientsSection';
import AccredianEdge from '@/components/AccredianEdge';
import CatFrameworkSection from '@/components/CatFrameworkSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FaqsSection from '@/components/FaqsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ClientsSection />
      <AccredianEdge />
      <CatFrameworkSection />
      <HowItWorksSection />
      <FaqsSection />
      <TestimonialsSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
