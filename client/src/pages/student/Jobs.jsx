import React, { useState } from 'react';
import { Search, Filter, Briefcase, MapPin, IndianRupee, Clock, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import toast from 'react-hot-toast';
import JobCard from '../../components/cards/JobCard';
import { FEATURED_JOBS } from '../../data/mockData';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [jobList, setJobList] = useState(FEATURED_JOBS);

  const branches = ['All', 'CSE', 'IT', 'ECE', 'AI & DS', 'Mechanical'];

  const filteredJobs = jobList.filter((job) => {
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

  const handleApply = (jobId) => {
    toast.success(`Application submitted successfully! Your verified CGPA profile is sent to the recruiter.`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
          <Briefcase className="w-7 h-7 text-indigo-400" />
          <span>Campus Recruitment Drive Board</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Explore corporate opportunities verified and authorized by your College Placement Cell.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search drives, skills, companies..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          <span className="text-xs text-slate-400 font-semibold mr-1">Filter Branch:</span>
          {branches.map((branch) => (
            <button
              key={branch}
              onClick={() => setSelectedBranch(branch)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedBranch === branch
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {branch}
            </button>
          ))}
        </div>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={() => handleApply(job.id)} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="glass-card rounded-2xl p-12 text-center border border-slate-800">
          <p className="text-slate-400 text-sm">No drives matched your filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Jobs;
