import React, { useState } from 'react';
import { 
  Users, Search, Filter, Download, CheckCircle2, 
  XCircle, ShieldCheck, Award, GraduationCap, AlertCircle 
} from 'lucide-react';
import toast from 'react-hot-toast';
import { MOCK_ADMIN_STUDENTS } from '../../data/mockData';

const StudentDirectory = () => {
  const [students, setStudents] = useState(MOCK_ADMIN_STUDENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const branches = ['All', 'CSE', 'IT', 'AI & DS', 'ECE', 'Mechanical'];
  const statuses = ['All', 'Placed', 'Seeking', 'Shortlisted', 'Interview Scheduled'];

  const filteredStudents = students.filter((stu) => {
    const matchesBranch = selectedBranch === 'All' || stu.branch === selectedBranch;
    const matchesStatus = selectedStatus === 'All' || stu.status.includes(selectedStatus);
    const matchesSearch =
      stu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stu.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stu.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesBranch && matchesStatus && matchesSearch;
  });

  const toggleEligibility = (rollNo) => {
    setStudents(students.map((s) => {
      if (s.rollNo === rollNo) {
        const newEligibility = !s.isEligible;
        toast.success(`Placement drive eligibility for ${s.name} (${s.rollNo}) set to ${newEligibility ? 'ELIGIBLE' : 'RESTRICTED'}`);
        return { ...s, isEligible: newEligibility };
      }
      return s;
    }));
  };

  const handleExportCSV = () => {
    toast.success('Exporting official student placement directory (CSV / Excel)...');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <GraduationCap className="w-7 h-7 text-emerald-400" />
            <span>Student Master Directory & Eligibility Registry</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Official academic records, backlog verification, and placement offer tracking for Batch 2026.
          </p>
        </div>

        <button
          onClick={handleExportCSV}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all shadow-md self-start sm:self-auto"
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>Export Master Registry (CSV)</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Roll No, Name, or Email..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
            />
          </div>

          {/* Branch Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <span className="text-xs text-slate-400 font-semibold mr-1">Branch:</span>
            {branches.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBranch(b)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedBranch === b
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Student Master Table */}
      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950/60 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4">Roll No & Name</th>
                <th className="p-4">Branch</th>
                <th className="p-4">Verified CGPA</th>
                <th className="p-4">Backlogs</th>
                <th className="p-4">Placement Status</th>
                <th className="p-4">Package / Company</th>
                <th className="p-4 text-right">Eligibility Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredStudents.map((s) => (
                <tr key={s.rollNo} className="hover:bg-slate-800/40 transition-colors">
                  
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                        {s.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{s.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{s.rollNo} • {s.email}</div>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 font-semibold text-slate-200">{s.branch}</td>

                  <td className="p-4 font-black text-amber-400 text-sm">{s.cgpa}</td>

                  <td className="p-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      s.backlogs === 0 ? 'text-emerald-400 bg-emerald-500/10' : 'text-red-400 bg-red-500/10'
                    }`}>
                      {s.backlogs} Active
                    </span>
                  </td>

                  <td className="p-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                      s.status === 'Placed' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                      s.status.includes('Shortlisted') ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' :
                      s.status.includes('Interview') ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                      'bg-slate-800 text-slate-300 border-slate-700'
                    }`}>
                      {s.status}
                    </span>
                  </td>

                  <td className="p-4">
                    {s.placedCompany ? (
                      <div>
                        <div className="font-bold text-white">{s.placedCompany}</div>
                        <div className="text-[10px] text-emerald-400 font-bold">{s.package}</div>
                      </div>
                    ) : (
                      <span className="text-slate-500 text-[11px] italic">In Pipeline</span>
                    )}
                  </td>

                  <td className="p-4 text-right">
                    <button
                      onClick={() => toggleEligibility(s.rollNo)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all border ${
                        s.isEligible
                          ? 'bg-emerald-500/15 text-emerald-300 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/30 border-emerald-500/30'
                          : 'bg-red-500/15 text-red-300 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 border-red-500/30'
                      }`}
                    >
                      {s.isEligible ? 'Verified Eligible' : 'Restricted'}
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default StudentDirectory;
