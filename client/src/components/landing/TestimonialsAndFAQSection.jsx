import React, { useState } from 'react';
import { Quote, ChevronDown, ChevronUp, HelpCircle, Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../../data/mockData';

const TestimonialsAndFAQSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section id="faqs" className="py-24 relative bg-slate-950/70 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Block */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>Campus Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Trusted by Students, Recruiters & Placement Officers
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Hear how HireLoop is transforming university placements across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-7 border border-slate-700/80 flex flex-col justify-between relative shadow-lg shadow-black/20"
              >
                <div>
                  <Quote className="w-8 h-8 text-indigo-500/30 mb-4" />
                  <p className="text-slate-200 text-sm leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="text-2xl">{item.avatar}</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-indigo-400 font-medium">{item.role}</p>
                    <p className="text-[11px] text-slate-400">{item.college}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Block */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Everything You Need to Know
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Got questions about AI mock interviews, eligibility verification, or recruiter onboarding?
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-slate-800 text-indigo-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsAndFAQSection;
