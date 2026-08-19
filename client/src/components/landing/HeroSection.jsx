import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle, Bot, Zap, Briefcase, GraduationCap, Building2, ChevronRight } from 'lucide-react';
import { HIRING_PARTNERS } from '../../data/mockData';
import useAuthStore from '../../store/authStore';

const HeroSection = () => {
  const { loginAsDemo } = useAuthStore();
  const navigate = useNavigate();

  const handleRoleQuickStart = (role) => {
    loginAsDemo(role);
    if (role === 'student') navigate('/student/dashboard');
    else if (role === 'recruiter') navigate('/recruiter/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Campus Recruitment Season 2026 Live</span>
              <span className="text-slate-400">|</span>
              <span className="text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> AI Powered
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Bridge Campus Talent with Dream Careers using{' '}
              <span className="gradient-text">Adaptive AI</span>.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              HireLoop is the unified intelligent placement portal. Prepare students with realistic 
              <strong className="text-white font-semibold"> AI Mock Interviews</strong>, empower recruiters with 
              <strong className="text-white font-semibold"> automated shortlisting</strong>, and give placement cells 
              <strong className="text-white font-semibold"> instant verified analytics</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="#drives"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Browse Active Drives</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Instant Role Launch Bar (For fast previewing) */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-xs font-semibold text-slate-400 mb-3 text-center lg:text-left">
                🚀 Or launch an instant interactive demo without signing up:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <button
                  onClick={() => handleRoleQuickStart('student')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-indigo-950/60 border border-indigo-500/30 hover:border-indigo-500 text-indigo-300 text-xs font-medium transition-all"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Student View</span>
                </button>
                <button
                  onClick={() => handleRoleQuickStart('recruiter')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-purple-950/60 border border-purple-500/30 hover:border-purple-500 text-purple-300 text-xs font-medium transition-all"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Recruiter Hub</span>
                </button>
                <button
                  onClick={() => handleRoleQuickStart('admin')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-emerald-950/60 border border-emerald-500/30 hover:border-emerald-500 text-emerald-300 text-xs font-medium transition-all"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Placement Cell</span>
                </button>
              </div>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Verified College Records</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>24/7 AI Interview Sim</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>Zero Manual Excel Chaos</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Interactive Mock UI Showcases */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Showcase Card */}
            <div className="glass-card rounded-2xl p-6 shadow-2xl shadow-indigo-950/50 border border-slate-700/80 relative z-10 space-y-4">
              
              {/* Card Header: AI Interview Simulation Live Preview */}
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">AI Interviewer Simulator</h4>
                    <p className="text-[10px] text-slate-400">Frontend Engineer Track (React & JS)</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                </span>
              </div>

              {/* Chat Simulation Bubble */}
              <div className="space-y-2.5 text-xs">
                {/* AI Bubble */}
                <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700/60 space-y-1">
                  <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wider">AI Question</span>
                  <p className="text-slate-200">
                    "How does React 19 handle automatic batching compared to previous versions?"
                  </p>
                </div>

                {/* Candidate Answer Score Card */}
                <div className="bg-indigo-950/40 rounded-xl p-3 border border-indigo-700/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-indigo-300 uppercase">AI Evaluation Breakdown</span>
                    <span className="text-xs font-extrabold text-amber-300">Score: 94 / 100</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px]">
                    <div className="bg-slate-900/80 p-1.5 rounded text-center border border-slate-800">
                      <div className="text-slate-400">Concept</div>
                      <div className="font-bold text-emerald-400">96%</div>
                    </div>
                    <div className="bg-slate-900/80 p-1.5 rounded text-center border border-slate-800">
                      <div className="text-slate-400">Clarity</div>
                      <div className="font-bold text-indigo-400">92%</div>
                    </div>
                    <div className="bg-slate-900/80 p-1.5 rounded text-center border border-slate-800">
                      <div className="text-slate-400">Speed</div>
                      <div className="font-bold text-purple-400">1.2s</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature: Live Drive Shortlist Notification */}
              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                    NT
                  </div>
                  <div>
                    <div className="font-semibold text-white">Nexus Cloud Drive</div>
                    <div className="text-[10px] text-slate-400">Shortlisted for Final Round (₹20 LPA)</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Approved
                </span>
              </div>

            </div>

            {/* Floating Metric Pill 1 */}
            <div className="absolute -top-5 -left-5 bg-slate-800/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-700 z-20 flex items-center gap-3 animate-float-slow hidden sm:flex">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">98.4% Placement</div>
                <div className="text-[10px] text-slate-400">Across 120+ Campuses</div>
              </div>
            </div>

            {/* Floating Metric Pill 2 */}
            <div className="absolute -bottom-6 -right-4 bg-slate-800/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-700 z-20 flex items-center gap-3 animate-float-delayed hidden sm:flex">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">₹54 LPA Top Offer</div>
                <div className="text-[10px] text-slate-400">2026 Batch Record</div>
              </div>
            </div>

          </div>

        </div>

        {/* Hiring Partners Logos Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-6">
            Leading companies hiring from partner campuses through HireLoop
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 grayscale hover:grayscale-0 transition-all">
            {HIRING_PARTNERS.map((company, index) => (
              <span
                key={index}
                className="text-sm sm:text-base font-bold text-slate-300 hover:text-indigo-400 transition-colors cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
