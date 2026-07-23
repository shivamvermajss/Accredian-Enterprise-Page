'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface TabContent {
  id: string;
  label: string;
  items: FaqItem[];
}

const faqTabs: TabContent[] = [
  {
    id: 'course',
    label: 'About the Course',
    items: [
      {
        question: 'What types of corporate training programs does Accredian offer?',
        answer:
          'Accredian offers customized corporate training programs spanning Data Science, AI/ML, Product Management, Digital Transformation, and Executive Leadership tailored to meet specific enterprise objectives.',
      },
      {
        question: 'What domain specializations are available?',
        answer:
          'Specializations include Gen-AI Mastery, Fintech Innovation, Product & Innovation Hub, Tech & Data Insights, Operations Excellence, and Digital Enterprise.',
      },
      {
        question: 'Can programs be customized for our company?',
        answer:
          'Yes, all programs undergo a thorough skill gap analysis to tailor curriculum, case studies, and practical projects specifically to your organization’s domain and goals.',
      },
    ],
  },
  {
    id: 'delivery',
    label: 'About the Delivery',
    items: [
      {
        question: 'What learning formats are supported?',
        answer:
          'We support instructor-led live virtual classrooms, on-site bootcamp workshops, self-paced LMS learning, and hybrid delivery formats.',
      },
      {
        question: 'How do you measure training ROI and impact?',
        answer:
          'We provide comprehensive learning analytics dashboards, pre and post-assessment scores, project evaluation benchmarks, and employee feedback reports.',
      },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    items: [
      {
        question: 'How do we request a corporate proposal?',
        answer:
          'Click the "Enquire Now" button or contact our enterprise team directly. We will schedule an initial discovery call within 24 hours.',
      },
      {
        question: 'Are completion certificates provided to employees?',
        answer:
          'Yes, co-branded digital certificates verified by Accredian and partner institutions are issued upon successful program completion.',
      },
    ],
  },
];

export const FaqsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('course');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const currentTab = faqTabs.find((tab) => tab.id === activeTab) || faqTabs[0];

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Frequently Asked <span className="text-[#1b73e8]">Questions</span>
          </h2>
        </div>

        {/* Layout Grid: Left Tabs / Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {faqTabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setOpenIndexes([0]);
                  }}
                  className={`w-full text-center sm:text-left px-6 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#1b73e8] shadow-lg shadow-blue-500/10 border-2 border-[#1b73e8]/20'
                      : 'bg-white text-slate-700 hover:text-[#1b73e8] border border-slate-200 hover:border-blue-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Accordion Questions */}
          <div className="lg:col-span-8 space-y-4">
            {currentTab.items.map((item, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-100 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 text-sm sm:text-base hover:text-[#1b73e8] transition-colors focus:outline-none"
                  >
                    <span className="pr-4">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#1b73e8]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Enquire Now CTA Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center px-10 py-3.5 bg-[#1b73e8] hover:bg-[#1557b0] text-white font-bold text-base rounded-xl shadow-md shadow-blue-500/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default FaqsSection;
