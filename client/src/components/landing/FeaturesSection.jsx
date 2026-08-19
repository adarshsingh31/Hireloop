import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, Building2, ShieldCheck, CheckCircle2, ArrowRight, 
  Sparkles, FileText, Users, BarChart3, Bot, Check, Zap, Clock 
} from 'lucide-react';
import { ROLE_BENEFITS } from '../../data/mockData';
import useAuthStore from '../../store/authStore';

const FeaturesSection = () => {
  const [activeRole, setActiveRole] = useState('students');
  const { loginAsDemo } = useAuthStore();
  const navigate = useNavigate();

  const currentRoleData = ROLE_BENEFITS[activeRole];

  const handleLaunchRole = () => {
    const roleKey = activeRole === 'students' ? 'student' : activeRole === 'recruiters' ? 'recruiter' : 'admin';
    loginAsDemo(roleKey);
    navigate(currentRoleData.demoRoute);
  };

  return (
    <section id="roles" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built For Every Campus Stakeholder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            One Intelligent Platform. Three Specialized Portals.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Tailored workflows for students preparing for drives, recruiters seeking verified talent, and placement cells managing institutional drives.
          </p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
            
            <button
              onClick={() => setActiveRole('students')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeRole === 'students'
                  ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>For Students</span>
            </button>

            <button
              onClick={() => setActiveRole('recruiters')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeRole === 'recruiters'
                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Recruiters</span>
            </button>

            <button
              onClick={() => setActiveRole('admin')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeRole === 'admin'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>For Placement Cells</span>
            </button>

          </div>
        </div>

        {/* Role Content Card Grid */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Role Details & Benefits */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-indigo-400 text-xs font-bold border border-slate-700">
                <span>{currentRoleData.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {currentRoleData.title}
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentRoleData.subtitle}
              </p>

              {/* Bulleted Points */}
              <div className="space-y-4 pt-2">
                {currentRoleData.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-500/30">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{point.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-normal">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Portal CTA */}
              <div className="pt-4">
                <button
                  onClick={handleLaunchRole}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  <span>{currentRoleData.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Visual Mock Representation */}
            <div className="lg:col-span-6">
              
              {/* Student View Mockup */}
              {activeRole === 'students' && (
                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                        RS
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Rohan Sharma</div>
                        <div className="text-[10px] text-slate-400">B.Tech CSE | CGPA: 8.85</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Drive Eligible
                    </span>
                  </div>

                  {/* Readiness & ATS Score */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                      <div className="text-[10px] text-slate-400 font-semibold">AI Readiness Score</div>
                      <div className="text-xl font-extrabold text-indigo-400 mt-1">94%</div>
                      <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        <Zap className="w-2.5 h-2.5" /> High Placement Prob.
                      </div>
                    </div>
                    <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                      <div className="text-[10px] text-slate-400 font-semibold">ATS Resume Match</div>
                      <div className="text-xl font-extrabold text-purple-400 mt-1">92/100</div>
                      <div className="text-[10px] text-indigo-300 mt-0.5">Optimized for SDE-1</div>
                    </div>
                  </div>

                  {/* Quick Application Preview */}
                  <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Nexus Cloud Tech</div>
                      <div className="text-[10px] text-slate-400">Software Engineer (₹16 - ₹20 LPA)</div>
                    </div>
                    <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors">
                      Apply (1-Click)
                    </button>
                  </div>
                </div>
              )}

              {/* Recruiter View Mockup */}
              {activeRole === 'recruiters' && (
                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <div className="text-xs font-bold text-white">Nexus Cloud Hiring Pipeline</div>
                      <div className="text-[10px] text-slate-400">Drive ID: #NEXUS-2026-01</div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      142 Applied
                    </span>
                  </div>

                  {/* Pipeline Kanban Mini Columns */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                      <div className="text-[10px] font-bold text-slate-400 mb-1">Applied (142)</div>
                      <div className="bg-slate-900/90 p-2 rounded text-[10px] font-semibold text-slate-200 border border-slate-800">
                        Amit K. (8.2 CGPA)
                      </div>
                    </div>
                    <div className="bg-indigo-950/40 p-2.5 rounded-xl border border-indigo-700/40">
                      <div className="text-[10px] font-bold text-indigo-300 mb-1">Shortlisted (24)</div>
                      <div className="bg-slate-900/90 p-2 rounded text-[10px] font-semibold text-indigo-300 border border-indigo-600/40">
                        Priya P. (9.1 CGPA)
                      </div>
                    </div>
                    <div className="bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-700/40">
                      <div className="text-[10px] font-bold text-emerald-300 mb-1">Offered (8)</div>
                      <div className="bg-slate-900/90 p-2 rounded text-[10px] font-semibold text-emerald-300 border border-emerald-600/40">
                        Rohan S. (20 LPA)
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 flex items-center justify-between text-xs">
                    <span className="text-slate-300">AI Auto-Screen Filter: CGPA &ge; 7.5</span>
                    <span className="font-bold text-emerald-400">118 Eligible</span>
                  </div>
                </div>
              )}

              {/* Admin / Placement Cell View Mockup */}
              {activeRole === 'admin' && (
                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <div className="text-xs font-bold text-white">Placement Directorate Live Feed</div>
                      <div className="text-[10px] text-slate-400">Batch 2026 Analytics</div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      NAAC Compliant
                    </span>
                  </div>

                  {/* Branch Progress Bars */}
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300 font-semibold">Computer Science & Engg</span>
                        <span className="font-bold text-emerald-400">92% Placed (120/130)</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-2 rounded-full w-[92%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300 font-semibold">Information Technology</span>
                        <span className="font-bold text-indigo-400">88% Placed (95/108)</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-400 h-2 rounded-full w-[88%]" />
                      </div>
                    </div>
                  </div>

                  {/* Company Approvals Pending Alert */}
                  <div className="bg-amber-950/40 p-3 rounded-xl border border-amber-700/40 flex items-center justify-between text-xs">
                    <span className="text-amber-200">2 New Recruiters awaiting campus access verification</span>
                    <button className="px-2.5 py-1 text-[11px] font-bold rounded bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors">
                      Review
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
