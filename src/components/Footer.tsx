'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-8 border-t border-slate-200 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo + Socials & CTA Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8">
          
          {/* Logo & Flat Social Icons */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col group w-fit">
              <span className="text-3xl font-extrabold text-[#1b73e8] tracking-tight">
                accredian
              </span>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide -mt-1">
                credentials that matter
              </span>
            </Link>

            {/* Flat Social Icons Row (Matching Image 2) */}
            <div className="flex items-center space-x-4 text-slate-800">
              {/* Facebook 'f' */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-slate-800 hover:text-[#1b73e8] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              
              {/* LinkedIn 'in' */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-800 hover:text-[#1b73e8] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>

              {/* Twitter Bird */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-slate-800 hover:text-[#1b73e8] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-slate-800 hover:text-[#1b73e8] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-slate-800 hover:text-[#1b73e8] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="flex flex-col items-start sm:items-end space-y-1">
            <button
              type="button"
              className="px-8 py-3 bg-[#1b73e8] hover:bg-[#1557b0] text-white font-bold text-base rounded-xl shadow-md transition-all duration-200"
            >
              Enquire Now
            </button>
            <span className="text-xs text-slate-500 font-medium">
              Speak with our Advisor
            </span>
          </div>

        </div>

        {/* Solid Divider Line 1 (Matching Image 2) */}
        <div className="border-t border-slate-700 my-6" />

        {/* Content Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-4">
          
          {/* Left Column: Accredian Links */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-extrabold text-slate-900 text-base">
              Accredian
            </h3>
            <ul className="space-y-2 text-sm font-medium text-slate-600">
              <li>
                <Link href="#" className="hover:text-[#1b73e8] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1b73e8] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1b73e8] transition-colors">
                  Why Accredian
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Us Details */}
          <div className="md:col-span-7 space-y-3">
            <h3 className="font-extrabold text-slate-900 text-base">
              Contact Us
            </h3>
            <div className="space-y-2 text-sm text-slate-700 leading-relaxed font-medium">
              <p>
                Email us:{' '}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-[#1b73e8] hover:underline font-semibold"
                >
                  enterprise@accredian.com
                </a>
              </p>
              <p className="text-slate-600">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>

        </div>

        {/* Solid Divider Line 2 & Centered Copyright (Matching Image 2) */}
        <div className="border-t border-slate-700 mt-8 pt-6 flex justify-center text-xs sm:text-sm text-slate-700 font-medium">
          <p>© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
