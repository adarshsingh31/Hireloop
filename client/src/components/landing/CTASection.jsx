import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, GraduationCap, Building2, ShieldCheck, CheckCircle } from 'lucide-react';
import useAuthStore from '../../store/authStore';

const CTASection = () => {
  const { loginAsDemo } = useAuthStore();
  const navigate = useNavigate();

  const handleRoleQuickStart = (role) => {
    loginAsDemo(role);
    if (role === 'student') navigate('/student/dashboard');
    else if (role === 'recruiter') navigate('/recruiter/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/30 to-slate-950 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/80 via-slate-900 to-purple-900/80 border border-indigo-500/30 p-8 sm:p-14 shadow-2xl overflow-hidden text-center">
          
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Join 120+ Universities on HireLoop</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Transform Your Campus Placements?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Whether you are a student aiming for top packages, a recruiter seeking pre-screened talent, or a placement officer automating campus drives — HireLoop is built for you.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-sm shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Create Free Account</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/login"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm transition-all"
              >
                <span>Sign In with Campus ID</span>
              </Link>
            </div>

            {/* 3 Quick Role Demo Pill Buttons */}
            <div className="pt-6 border-t border-slate-800/80 mt-8">
              <p className="text-xs text-slate-400 font-semibold mb-3">
                Try the interactive role experience instantly:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => handleRoleQuickStart('student')}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 border border-indigo-500/30 text-indigo-300 text-xs font-semibold transition-all"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Student Portal Demo</span>
                </button>
                <button
                  onClick={() => handleRoleQuickStart('recruiter')}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Recruiter Hub Demo</span>
                </button>
                <button
                  onClick={() => handleRoleQuickStart('admin')}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Placement Cell Demo</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
