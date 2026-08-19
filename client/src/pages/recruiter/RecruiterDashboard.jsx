import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Briefcase, Users, PlusCircle, ArrowRight, CheckCircle2, 
  Calendar, Sparkles, Filter, Download, Clock, ChevronRight, Award 
} from 'lucide-react';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';
import { MOCK_RECRUITER_APPLICANTS } from '../../data/mockData';

const RecruiterDashboard = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [applicants] = useState(MOCK_RECRUITER_APPLICANTS);

  const activeDrives = [
    { 
      id: 1, 
      title: 'Software Development Engineer - I', 
      package: '₹16 - ₹20 LPA', 
      deadline: '2026-09-15',
      applicantsCount: 142, 
      shortlisted: 24, 
      interviewScheduled: 8,
      status: 'Active' 
    },
    { 
      id: 2, 
      title: 'AI / Machine Learning Engineer', 
      package: '₹22 - ₹28 LPA', 
      deadline: '2026-09-20',
      applicantsCount: 98, 
      shortlisted: 12, 
      interviewScheduled: 4,
      status: 'Active' 
    },
    { 
      id: 3, 
      title: 'Associate Cloud Solutions Architect', 
      package: '₹14 - ₹18 LPA', 
      deadline: '2026-09-28',
      applicantsCount: 215, 
      shortlisted: 18, 
      interviewScheduled: 6,
      status: 'Active' 
    }
  ];

  const totalApplicants = 455;
  const totalShortlisted = 54;
  const totalInterviews = 18;
  const totalOffers = 6;

  const handleAutoShortlist = () => {
    toast.success('AI Auto-Shortlist applied: 18 candidates with Match Score > 90% and CGPA > 8.5 moved to Shortlisted!');
  };

  const handleExportCSV = () => {
    toast.success('Exporting verified student candidate dossier (CSV / Excel)...');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Top Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold mb-3 border border-purple-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Campus Season 2026 Hiring Hub</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {user?.company || 'Nexus Cloud Technologies'} Talent Portal
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Welcome back, <strong className="text-white">{user?.name || 'Pooja Nair'}</strong> ({user?.designation || 'Lead Campus Recruiter'}). You have 3 active campus recruitment drives.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/recruiter/post-job"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-500/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post New Campus Opening</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Pipeline Stat Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold">Total Applicants</div>
            <div className="text-2xl font-black text-white mt-0.5">{totalApplicants}</div>
            <div className="text-[10px] text-indigo-300">Across 3 college drives</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold">Shortlisted (ATS)</div>
            <div className="text-2xl font-black text-purple-400 mt-0.5">{totalShortlisted}</div>
            <div className="text-[10px] text-emerald-400">Match score &ge; 85%</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold">Interviews Slotted</div>
            <div className="text-2xl font-black text-amber-400 mt-0.5">{totalInterviews}</div>
            <div className="text-[10px] text-slate-400">Next: Tomorrow 10 AM</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold">Offers Extended</div>
            <div className="text-2xl font-black text-emerald-400 mt-0.5">{totalOffers}</div>
            <div className="text-[10px] text-emerald-300">100% Acceptance rate</div>
          </div>
        </div>

      </div>

      {/* AI Precision Actions Bar */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center border border-purple-500/30 font-bold">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">AI Instant Candidate Screening</div>
            <div className="text-[11px] text-slate-400">Rank candidates using verified college CGPA + AI Mock Interview score.</div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleAutoShortlist}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI Auto-Shortlist (&gt;90%)</span>
          </button>
          
          <button
            onClick={handleExportCSV}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Active Campus Drives Table */}
      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-800 bg-slate-950/40 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Active Campus Placement Drives</h2>
            <p className="text-xs text-slate-400 mt-0.5">Live applications syncing directly with college placement cells.</p>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            3 Drives Live
          </span>
        </div>

        <div className="divide-y divide-slate-800">
          {activeDrives.map((drive) => (
            <div
              key={drive.id}
              className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-800/40 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-bold text-white">{drive.title}</h3>
                  <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] px-2.5 py-0.5 rounded-full font-bold">
                    {drive.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="font-bold text-emerald-400">{drive.package}</span>
                  <span>•</span>
                  <span>Deadline: <strong className="text-slate-200">{drive.deadline}</strong></span>
                  <span>•</span>
                  <span className="text-indigo-300"><strong>{drive.applicantsCount}</strong> Applied</span>
                  <span>•</span>
                  <span className="text-purple-300"><strong>{drive.shortlisted}</strong> Shortlisted</span>
                  <span>•</span>
                  <span className="text-amber-300"><strong>{drive.interviewScheduled}</strong> Interviews</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/recruiter/applicants"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 hover:text-white text-indigo-300 border border-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <span>Review Applicants ({drive.applicantsCount})</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default RecruiterDashboard;
