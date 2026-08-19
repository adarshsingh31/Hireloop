import React from 'react';
import { 
  FileSpreadsheet, Download, ShieldCheck, Award, 
  CheckCircle2, FileText, Sparkles, Building2, Users 
} from 'lucide-react';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';

const PlacementReports = () => {
  const { user } = useAuthStore();

  const handleDownload = (reportName, format = 'PDF') => {
    toast.success(`Compiling and exporting ${reportName} (${format})...`);
    setTimeout(() => {
      window.print();
    }, 1000);
  };

  const reports = [
    {
      id: 'REP-01',
      title: 'NAAC Criterion 5.2.1 Placement Audit Report',
      description: 'Official verified compilation of graduating student placements, employer details, and offer letter hashes for NAAC peer team review.',
      tag: 'Accreditation Mandatory',
      stats: '487 Students • 48 Employers',
      updated: 'August 18, 2026'
    },
    {
      id: 'REP-02',
      title: 'NIRF Ranking Placement & Median Salary Sheet',
      description: 'Standardized institutional data format reporting median package (₹14.8 LPA), top quartile packages, and higher education opt-outs.',
      tag: 'NIRF Data Capturing',
      stats: 'Median: ₹14.8 LPA • Top: ₹54 LPA',
      updated: 'August 17, 2026'
    },
    {
      id: 'REP-03',
      title: 'Branch-Wise Recruitment Performance Matrix',
      description: 'Granular breakdown of placement percentage, multiple offers per student, and technical vs core engineering distribution.',
      tag: 'Department Analytics',
      stats: 'CSE: 92% • IT: 88% • AI&DS: 90%',
      updated: 'August 18, 2026'
    },
    {
      id: 'REP-04',
      title: 'Corporate Partnership & On-Campus Drive Summary',
      description: 'Summary of all Tier-1, Tier-2, and startup drives hosted, slot allocations, and selection funnel conversion metrics.',
      tag: 'Executive T&P Summary',
      stats: '48 Active Hiring Partners',
      updated: 'August 16, 2026'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
          <FileSpreadsheet className="w-7 h-7 text-emerald-400" />
          <span>Institutional Accreditation & Placement Reports</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Generate tamper-proof, verified documentation compliant with NAAC, NIRF, and NBA audit criteria.
        </p>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((rep) => (
          <div
            key={rep.id}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  {rep.tag}
                </span>
                <span className="text-[11px] text-slate-500 font-mono">Updated: {rep.updated}</span>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug">{rep.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{rep.description}</p>
              
              <div className="pt-2 text-xs font-semibold text-indigo-300">
                <span>Key Metrics: </span>
                <strong className="text-white">{rep.stats}</strong>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified by T&P Directorate</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownload(rep.title, 'Excel')}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Excel</span>
                </button>

                <button
                  onClick={() => handleDownload(rep.title, 'PDF')}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/25 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export PDF</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default PlacementReports;
