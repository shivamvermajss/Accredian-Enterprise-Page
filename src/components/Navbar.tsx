'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Stats', href: '#stats', id: 'stats' },
  { label: 'Clients', href: '#clients', id: 'clients' },
  { label: 'Accredian Edge', href: '#edge', id: 'edge' },
  { label: 'CAT', href: '#cat', id: 'cat' },
  { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'FAQs', href: '#faqs', id: 'faqs' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="#home" className="flex flex-col group">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1b73e8] tracking-tight group-hover:opacity-90 transition-opacity">
              accredian
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wide -mt-1">
              credentials that matter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative text-sm font-semibold transition-colors duration-200 py-2 ${
                    isActive
                      ? 'text-[#1b73e8]'
                      : 'text-slate-700 hover:text-[#1b73e8]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#1b73e8] rounded-full transition-all duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-[#1b73e8] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1b73e8]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-[#1b73e8]'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#1b73e8]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
