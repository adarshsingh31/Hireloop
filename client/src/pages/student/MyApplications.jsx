import React, { useState } from 'react';
import { 
  Building2, Calendar, MapPin, IndianRupee, Clock, CheckCircle2, 
  Sparkles, ArrowRight, AlertCircle, FileText, ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_STUDENT_APPLICATIONS } from '../../data/mockData';

const MyApplications = () => {
  const [applications] = useState(MOCK_STUDENT_APPLICATIONS);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Shortlisted':
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
      case 'Interview Scheduled':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Applied':
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
          <FileText className="w-7 h-7 text-indigo-400" />
          <span>My Campus Applications & Interview Schedule</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Track the real-time stage of your corporate drive submissions and interview calls.
        </p>
      </div>

      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 relative overflow-hidden"
          >
            {/* Top Row: Title, Company, Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-sm">
                  {app.company.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{app.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                    <span className="font-semibold text-slate-300">{app.company}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-bold">{app.package}</span>
                    <span>•</span>
                    <span>Applied on {app.appliedDate}</span>
                  </div>
                </div>
              </div>

              <span className={`text-xs font-bold px-3 py-1 rounded-full border self-start sm:self-auto ${getStatusBadge(app.status)}`}>
                {app.status}
              </span>
            </div>

            {/* Application Pipeline Timeline Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              
              {/* Step 1: Application Submitted */}
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>1. Submitted</span>
                </div>
                <p className="text-[10px] text-slate-400">Verified CGPA sent</p>
              </div>

              {/* Step 2: Resume Screening */}
              <div className={`p-3.5 rounded-2xl border space-y-1 ${
                app.statusStep >= 2 ? 'bg-slate-900 border-indigo-500/40 text-indigo-300' : 'bg-slate-950/40 border-slate-800/60 text-slate-500'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>2. Screening</span>
                </div>
                <p className="text-[10px] text-slate-400">ATS Match Passed</p>
              </div>

              {/* Step 3: Technical Interview */}
              <div className={`p-3.5 rounded-2xl border space-y-1 ${
                app.statusStep >= 3 ? 'bg-indigo-950/40 border-indigo-500 text-indigo-300' : 'bg-slate-950/40 border-slate-800/60 text-slate-500'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  <Calendar className="w-4 h-4" />
                  <span>3. Interview</span>
                </div>
                <p className="text-[10px] text-slate-400">Coding / Tech Panel</p>
              </div>

              {/* Step 4: Final Offer */}
              <div className={`p-3.5 rounded-2xl border space-y-1 ${
                app.statusStep >= 4 ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300' : 'bg-slate-950/40 border-slate-800/60 text-slate-500'
              }`}>
                <div className="flex items-center gap-2 font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>4. Placement Offer</span>
                </div>
                <p className="text-[10px] text-slate-400">Official Letter</p>
              </div>

            </div>

            {/* Next Action Box */}
            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-indigo-300">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span><strong>Next Stage:</strong> {app.nextRound}</span>
              </div>

              <Link
                to="/student/interview"
                className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 self-end sm:self-auto"
              >
                <span>Practice AI Mock Round</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
