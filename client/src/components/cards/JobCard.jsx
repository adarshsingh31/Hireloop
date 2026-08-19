import React from 'react';
import { Building2, MapPin, IndianRupee, Clock, CheckCircle } from 'lucide-react';

const JobCard = ({ job, onApply }) => {
  return (
    <div className="glass-card glass-card-hover rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-lg shadow-black/20">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-500/15 border border-indigo-500/30 rounded-xl flex items-center justify-center text-indigo-400 font-bold text-sm">
              {job.company ? job.company.slice(0, 2).toUpperCase() : 'CO'}
            </div>
            <div>
              <h3 className="font-bold text-base text-white">{job.title}</h3>
              <p className="text-slate-400 text-xs font-medium">{job.company}</p>
            </div>
          </div>
          <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] px-2.5 py-1 rounded-full font-bold">
            Active Drive
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/60 p-2 rounded-lg border border-slate-700/60 font-bold text-emerald-400">
            <IndianRupee className="w-3.5 h-3.5" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-800/60 p-2 rounded-lg border border-slate-700/60 col-span-2 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>Deadline: <strong className="text-slate-200">{job.deadline}</strong></span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {job.skills && job.skills.map((skill, index) => (
            <span key={index} className="bg-slate-800 text-slate-300 border border-slate-700 text-[11px] px-2 py-0.5 rounded-md font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button 
        onClick={() => onApply(job.id || job)}
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-indigo-600/25 hover:scale-[1.02]"
      >
        Apply with Verified Profile
      </button>
    </div>
  );
};

export default JobCard;
