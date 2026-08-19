import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, PlusCircle, Clock, Users, CheckCircle2, ChevronRight, Edit3, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ManageJobs = () => {
  const [drives, setDrives] = useState([
    { 
      id: 1, 
      title: 'Software Development Engineer - I', 
      package: '₹16 - ₹20 LPA', 
      deadline: '2026-09-15',
      openings: 15,
      applicantsCount: 142, 
      shortlisted: 24, 
      status: 'Active' 
    },
    { 
      id: 2, 
      title: 'AI / Machine Learning Engineer', 
      package: '₹22 - ₹28 LPA', 
      deadline: '2026-09-20',
      openings: 5,
      applicantsCount: 98, 
      shortlisted: 12, 
      status: 'Active' 
    },
    { 
      id: 3, 
      title: 'Associate Cloud Solutions Architect', 
      package: '₹14 - ₹18 LPA', 
      deadline: '2026-09-28',
      openings: 20,
      applicantsCount: 215, 
      shortlisted: 18, 
      status: 'Active' 
    },
    { 
      id: 4, 
      title: 'QA Automation Engineer (Batch 2025)', 
      package: '₹10 - ₹12 LPA', 
      deadline: '2026-07-30',
      openings: 8,
      applicantsCount: 88, 
      shortlisted: 8, 
      status: 'Closed' 
    }
  ]);

  const toggleStatus = (id) => {
    setDrives(drives.map(d => {
      if (d.id === id) {
        const newStatus = d.status === 'Active' ? 'Closed' : 'Active';
        toast.success(`Drive status updated to "${newStatus}"`);
        return { ...d, status: newStatus };
      }
      return d;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <Briefcase className="w-7 h-7 text-purple-400" />
            <span>Manage Campus Recruitment Drives</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Track active drives, adjust candidate eligibility deadlines, and manage openings.
          </p>
        </div>

        <Link
          to="/recruiter/post-job"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/25 self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Post New Opening</span>
        </Link>
      </div>

      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="divide-y divide-slate-800">
          {drives.map((drive) => (
            <div
              key={drive.id}
              className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-800/40 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-bold text-white">{drive.title}</h3>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold border ${
                    drive.status === 'Active'
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {drive.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="font-bold text-emerald-400">{drive.package}</span>
                  <span>•</span>
                  <span><strong>{drive.openings}</strong> Openings</span>
                  <span>•</span>
                  <span>Deadline: <strong className="text-slate-200">{drive.deadline}</strong></span>
                  <span>•</span>
                  <span className="text-indigo-300"><strong>{drive.applicantsCount}</strong> Applicants</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to="/recruiter/applicants"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>View Applicants ({drive.applicantsCount})</span>
                </Link>

                <button
                  onClick={() => toggleStatus(drive.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    drive.status === 'Active'
                      ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30'
                  }`}
                >
                  {drive.status === 'Active' ? 'Close Drive' : 'Reactivate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
