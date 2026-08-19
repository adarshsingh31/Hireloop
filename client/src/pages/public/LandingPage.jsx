import React from 'react';
import LandingNavbar from '../../components/landing/LandingNavbar';
import HeroSection from '../../components/landing/HeroSection';
import StatsSection from '../../components/landing/StatsSection';
import FeaturesSection from '../../components/landing/FeaturesSection';
import AIFeaturesSection from '../../components/landing/AIFeaturesSection';
import FeaturedJobsSection from '../../components/landing/FeaturedJobsSection';
import TestimonialsAndFAQSection from '../../components/landing/TestimonialsAndFAQSection';
import CTASection from '../../components/landing/CTASection';
import LandingFooter from '../../components/landing/LandingFooter';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Fixed Navigation Bar */}
      <LandingNavbar />

      {/* Main Landing Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Platform Statistics Counter */}
        <StatsSection />

        {/* 3. Role-Based Specialized Portals */}
        <FeaturesSection />

        {/* 4. AI Engine & Interactive Sandbox */}
        <AIFeaturesSection />

        {/* 5. Featured Campus Placement Drives */}
        <FeaturedJobsSection />

        {/* 6. Testimonials & FAQs */}
        <TestimonialsAndFAQSection />

        {/* 7. Call To Action Conversion */}
        <CTASection />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
