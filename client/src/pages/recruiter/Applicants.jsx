import React, { useState } from 'react';
import { 
  Download, CheckCircle, XCircle, Calendar, Bot, Search, 
  Sparkles, Filter, User, Eye, X, Award, MapPin, Phone, Mail, FileText, ChevronRight 
} from 'lucide-react';
import toast from 'react-hot-toast';
import { MOCK_RECRUITER_APPLICANTS } from '../../data/mockData';

const Applicants = () => {
  const [applicants, setApplicants] = useState(MOCK_RECRUITER_APPLICANTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [minCgpaFilter, setMinCgpaFilter] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const statuses = ['All', 'Applied', 'Shortlisted', 'Interview Scheduled', 'Offered', 'Rejected'];

  const filteredApplicants = applicants.filter((app) => {
    const matchesStatus = selectedStatus === 'All' || app.status === selectedStatus;
    const matchesCgpa = app.cgpa >= minCgpaFilter;
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesStatus && matchesCgpa && matchesSearch;
  });

  const updateCandidateStatus = (id, newStatus) => {
    setApplicants((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
    if (selectedCandidate && selectedCandidate.id === id) {
      setSelectedCandidate((prev) => ({ ...prev, status: newStatus }));
    }
    toast.success(`Candidate status transitioned to "${newStatus}"`);
  };

  const handleBulkShortlist = () => {
    setApplicants((prev) =>
      prev.map((app) => (app.aiMatchScore >= 90 && app.status === 'Applied' ? { ...app, status: 'Shortlisted' } : app))
    );
    toast.success('✨ Auto-shortlisted all candidates with AI Match Score >= 90%!');
  };

  const handleExportCSV = () => {
    toast.success('Exporting verified applicant records (CSV / Excel)...');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <Users className="w-7 h-7 text-purple-400" />
            <span>Applicant Tracking & AI Shortlisting</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Review pre-screened student candidates filtered by college placement verification.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleBulkShortlist}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/25"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Auto-Shortlist (&gt;90%)</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search candidate name, branch, skills..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500"
            />
          </div>

          {/* CGPA Threshold Quick Filter */}
          <div className="flex items-center gap-2 text-xs text-slate-300 w-full sm:w-auto">
            <span className="text-slate-400 font-semibold">Min. CGPA:</span>
            <button
              onClick={() => setMinCgpaFilter(0)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold ${minCgpaFilter === 0 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}
            >
              All
            </button>
            <button
              onClick={() => setMinCgpaFilter(7.5)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold ${minCgpaFilter === 7.5 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}
            >
              &ge; 7.5
            </button>
            <button
              onClick={() => setMinCgpaFilter(8.5)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold ${minCgpaFilter === 8.5 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'}`}
            >
              &ge; 8.5 (Tier-1)
            </button>
          </div>
        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
          <span className="text-xs text-slate-400 font-semibold mr-1">Stage:</span>
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedStatus === status
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Applicants Table */}
      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/60 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4">Candidate Details</th>
                <th className="p-4">Branch & Batch</th>
                <th className="p-4">Verified CGPA</th>
                <th className="p-4">AI Match</th>
                <th className="p-4">Pipeline Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {filteredApplicants.map((app) => (
                <tr key={app.id} className="hover:bg-slate-800/40 transition-colors">
                  
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs border border-purple-500/30">
                        {app.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-white hover:text-purple-300 cursor-pointer" onClick={() => setSelectedCandidate(app)}>
                          {app.name}
                        </div>
                        <div className="text-[10px] text-slate-400">{app.email}</div>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <div className="text-slate-200 font-medium">{app.branch}</div>
                    <div className="text-[10px] text-slate-500">Batch {app.batch}</div>
                  </td>

                  <td className="p-4">
                    <span className="font-extrabold text-amber-400 text-sm">{app.cgpa}</span>
                  </td>

                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      {app.aiMatchScore}%
                    </span>
                  </td>

                  <td className="p-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                      app.status === 'Shortlisted' ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' :
                      app.status === 'Interview Scheduled' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                      app.status === 'Offered' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                      app.status === 'Rejected' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                      'bg-slate-800 text-slate-300 border-slate-700'
                    }`}>
                      {app.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setSelectedCandidate(app)}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] font-semibold transition-colors flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5 text-purple-400" />
                        <span>Dossier</span>
                      </button>

                      {app.status === 'Applied' && (
                        <button
                          onClick={() => updateCandidateStatus(app.id, 'Shortlisted')}
                          className="p-1.5 rounded-lg bg-indigo-500/15 text-indigo-400 hover:bg-indigo-500/25 border border-indigo-500/30"
                          title="Shortlist"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      )}

                      {app.status === 'Shortlisted' && (
                        <button
                          onClick={() => updateCandidateStatus(app.id, 'Interview Scheduled')}
                          className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400 hover:bg-amber-500/25 border border-amber-500/30"
                          title="Schedule Interview"
                        >
                          <Calendar className="w-4 h-4" />
                        </button>
                      )}

                      {app.status === 'Interview Scheduled' && (
                        <button
                          onClick={() => updateCandidateStatus(app.id, 'Offered')}
                          className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 border border-emerald-500/30"
                          title="Extend Offer"
                        >
                          <Award className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Candidate Dossier Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card bg-slate-900 text-slate-100 rounded-3xl max-w-2xl w-full border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 animate-fadeIn max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center font-black text-base">
                  {selectedCandidate.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedCandidate.name}</h3>
                  <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                    <span>{selectedCandidate.branch}</span>
                    <span>•</span>
                    <span>{selectedCandidate.college}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCandidate(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Academic & AI Score Highlights */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold">Verified CGPA</div>
                <div className="text-xl font-black text-amber-400 mt-0.5">{selectedCandidate.cgpa}</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold">AI Match Score</div>
                <div className="text-xl font-black text-emerald-400 mt-0.5">{selectedCandidate.aiMatchScore}%</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                <div className="text-[10px] text-slate-400 font-semibold">AI Readiness</div>
                <div className="text-xl font-black text-indigo-400 mt-0.5">{selectedCandidate.aiReadiness}%</div>
              </div>
            </div>

            {/* Candidate Summary */}
            <div className="space-y-1.5 text-xs">
              <h4 className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">Evaluation Summary</h4>
              <p className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-slate-300 leading-relaxed">
                {selectedCandidate.summary}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-1.5 text-xs">
              <h4 className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">Verified Technical Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedCandidate.skills.map((skill, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-indigo-300 border border-slate-700 text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-1.5 text-xs">
              <h4 className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">Featured Projects</h4>
              <p className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 text-slate-300">
                {selectedCandidate.projects}
              </p>
            </div>

            {/* Status Change Controls */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-400">Change Pipeline Stage:</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => updateCandidateStatus(selectedCandidate.id, 'Shortlisted')}
                  className="py-2 px-3 rounded-xl bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/40 text-xs font-bold transition-all"
                >
                  Shortlist
                </button>
                <button
                  onClick={() => updateCandidateStatus(selectedCandidate.id, 'Interview Scheduled')}
                  className="py-2 px-3 rounded-xl bg-amber-600/30 hover:bg-amber-600 text-amber-200 hover:text-white border border-amber-500/40 text-xs font-bold transition-all"
                >
                  Schedule Interview
                </button>
                <button
                  onClick={() => updateCandidateStatus(selectedCandidate.id, 'Offered')}
                  className="py-2 px-3 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white border border-emerald-500/40 text-xs font-bold transition-all"
                >
                  Extend Offer
                </button>
                <button
                  onClick={() => updateCandidateStatus(selectedCandidate.id, 'Rejected')}
                  className="py-2 px-3 rounded-xl bg-red-600/30 hover:bg-red-600 text-red-200 hover:text-white border border-red-500/40 text-xs font-bold transition-all"
                >
                  Reject
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Applicants;
