import React, { useState } from 'react';
import { Sparkles, Bot, FileText, Zap, Search, ArrowRight, CheckCircle, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import JobCard from '../../components/cards/JobCard';
import { FEATURED_JOBS } from '../../data/mockData';
import useAuthStore from '../../store/authStore';

const StudentDashboard = () => {
  const { user } = useAuthStore();
  const [jobs, setJobs] = useState(FEATURED_JOBS);

  const handleApply = (jobId) => {
    toast.success(`Application registered for Job #${jobId}! Verification pending.`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Student Welcome Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold mb-3 border border-indigo-500/30">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>Campus Season 2026 Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Welcome back, {user?.name || 'Student'}! 👋
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              {user?.college || 'Apex Institute of Technology'} | {user?.branch || 'Computer Science & Engineering'} (CGPA: {user?.cgpa || '8.85'})
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/student/interview"
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition-all"
            >
              <Bot className="w-4 h-4" />
              <span>Start AI Mock Interview</span>
            </Link>
            <Link
              to="/student/resume-builder"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Update Resume</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card rounded-2xl p-5 border border-slate-800">
          <div className="text-xs font-semibold text-slate-400">AI Readiness Score</div>
          <div className="text-2xl font-black text-indigo-400 mt-1">94%</div>
          <p className="text-[11px] text-emerald-400 mt-1">✓ Ready for Tier-1 Product Companies</p>
        </div>
        <div className="glass-card rounded-2xl p-5 border border-slate-800">
          <div className="text-xs font-semibold text-slate-400">Eligible Campus Drives</div>
          <div className="text-2xl font-black text-emerald-400 mt-1">{jobs.length} Active</div>
          <p className="text-[11px] text-slate-400 mt-1">All criteria (CGPA &gt; 7.5) satisfied</p>
        </div>
        <div className="glass-card rounded-2xl p-5 border border-slate-800">
          <div className="text-xs font-semibold text-slate-400">Applications In-Progress</div>
          <div className="text-2xl font-black text-purple-400 mt-1">2 Pending</div>
          <p className="text-[11px] text-indigo-300 mt-1">Next: Technical Round on Friday</p>
        </div>
      </div>

      {/* Campus Placement Drives */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Eligible Campus Placement Drives</h2>
            <p className="text-xs text-slate-400 mt-0.5">Directly verified by your College Placement Cell.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={() => handleApply(job.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
