import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, MapPin, IndianRupee, Clock, Search, Filter, 
  Sparkles, CheckCircle2, ArrowRight, Bookmark, Users 
} from 'lucide-react';
import toast from 'react-hot-toast';
import { FEATURED_JOBS } from '../../data/mockData';
import useAuthStore from '../../store/authStore';

const FeaturedJobsSection = () => {
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { isAuthenticated, user, loginAsDemo } = useAuthStore();
  const navigate = useNavigate();

  const branches = ['All', 'CSE', 'IT', 'ECE', 'AI & DS', 'Mechanical'];

  const filteredJobs = FEATURED_JOBS.filter((job) => {
    const matchesBranch =
      selectedBranch === 'All' ||
      job.eligibleBranches.includes(selectedBranch) ||
      job.eligibleBranches.includes('All Engineering Branches');
    
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesBranch && matchesSearch;
  });

  const handleApply = (job) => {
    if (!isAuthenticated) {
      toast.success(`Redirecting to student login to apply for ${job.company}...`);
      loginAsDemo('student');
      navigate('/student/dashboard');
    } else {
      toast.success(`Application submitted to ${job.company} for ${job.title}!`);
    }
  };

  return (
    <section id="drives" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Campus Recruitment Season 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Campus Placement Drives
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Verified campus openings with high packages, clear CGPA thresholds, and immediate scheduling.
            </p>
          </div>

          <Link
            to="/student/dashboard"
            onClick={() => {
              if (!isAuthenticated) loginAsDemo('student');
            }}
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold text-sm transition-colors group self-start md:self-auto"
          >
            <span>View All Campus Drives</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Search & Filter Controls */}
        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-700/80 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role, company, or skill (e.g. React, Python)..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Branch Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <span className="text-xs font-semibold text-slate-400 mr-1 hidden lg:inline">Branch:</span>
            {branches.map((branch) => (
              <button
                key={branch}
                onClick={() => setSelectedBranch(branch)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedBranch === branch
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {branch}
              </button>
            ))}
          </div>

        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between relative group shadow-lg shadow-black/20"
            >
              <div>
                {/* Top Badge & Company Logo */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${job.logoBg} text-white flex items-center justify-center font-black text-sm shadow-md`}>
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white group-hover:text-indigo-400 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-300">{job.company}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 whitespace-nowrap">
                    {job.badge}
                  </span>
                </div>

                {/* Salary Package Highlight */}
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between mb-4">
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Package / CTC</div>
                    <div className="text-sm font-extrabold text-emerald-400">{job.salary}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 font-medium">Location</div>
                    <div className="text-xs font-semibold text-slate-200">{job.location}</div>
                  </div>
                </div>

                {/* Eligibility Badges */}
                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Min. CGPA Threshold:</span>
                    <span className="font-bold text-amber-400">&ge; {job.minCgpa} CGPA</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Application Deadline:</span>
                    <span className="font-semibold text-slate-200 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-indigo-400" />
                      {job.deadline}
                    </span>
                  </div>
                </div>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Apply & Stats Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Users className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{job.applicantsCount} applied</span>
                </div>

                <button
                  onClick={() => handleApply(job)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 hover:scale-105 transition-all"
                >
                  Apply Now
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No campus drives matching your search criteria.</p>
            <button
              onClick={() => {
                setSelectedBranch('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-indigo-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedJobsSection;
