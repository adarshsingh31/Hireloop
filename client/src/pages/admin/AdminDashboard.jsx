import React, { useState } from 'react';
import { 
  Users, Building, TrendingUp, Download, CheckCircle, 
  Sparkles, Award, ShieldCheck, FileSpreadsheet, ArrowUpRight, BarChart3, ChevronRight 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';
import { SALARY_DISTRIBUTION_DATA, TOP_RECRUITERS_DATA } from '../../data/mockData';

const AdminDashboard = () => {
  const { user } = useAuthStore();

  const branchData = [
    { branch: 'CSE', placed: 120, seeking: 10, total: 130 },
    { branch: 'IT', placed: 95, seeking: 13, total: 108 },
    { branch: 'AI & DS', placed: 58, seeking: 6, total: 64 },
    { branch: 'ECE', placed: 80, seeking: 25, total: 105 },
    { branch: 'Mechanical', placed: 45, seeking: 35, total: 80 },
  ];

  const handleExportReport = () => {
    toast.success('Generating official NAAC & NIRF Placement Audit Report (PDF / Excel)...');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Institutional Header Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-indigo-950/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Accreditation Ready • NAAC A++ / NIRF Compliant</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {user?.college || 'Apex Institute of Technology'} Placement Directorate
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Logged in as <strong className="text-white">{user?.name || 'Prof. Suresh Mathur'}</strong> ({user?.department || 'Director of Placements'}). Real-time institutional drive analytics for Batch 2026.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportReport}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Export Audit Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Top Placement Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold">Total Registered</div>
            <div className="text-2xl font-black text-white mt-0.5">487 Students</div>
            <div className="text-[10px] text-emerald-400 font-bold">398 (81.7%) Placed</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
            <Building className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold">Recruiting Companies</div>
            <div className="text-2xl font-black text-white mt-0.5">48 Onboarded</div>
            <div className="text-[10px] text-amber-300">2 Pending Approvals</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold">Highest Campus Offer</div>
            <div className="text-2xl font-black text-emerald-400 mt-0.5">₹54 LPA</div>
            <div className="text-[10px] text-indigo-300">CognitiveScale Systems</div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-semibold">Average CTC Package</div>
            <div className="text-2xl font-black text-blue-400 mt-0.5">₹14.8 LPA</div>
            <div className="text-[10px] text-emerald-400">+12% vs Batch 2025</div>
          </div>
        </div>

      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Chart 1: Branch-wise Placement Breakdown */}
        <div className="lg:col-span-7 glass-card rounded-3xl border border-slate-800 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-base font-bold text-white">Branch-Wise Placement Performance</h2>
              <p className="text-xs text-slate-400">Total placed vs actively seeking student distribution.</p>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              Batch 2026
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={branchData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="branch" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '0.75rem', color: '#fff', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '11px' }} />
                <Bar dataKey="placed" name="Students Placed" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="seeking" name="Seeking Opportunities" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Salary Package Distribution */}
        <div className="lg:col-span-5 glass-card rounded-3xl border border-slate-800 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-base font-bold text-white">CTC Package Distribution</h2>
              <p className="text-xs text-slate-400">Student count across salary brackets.</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {SALARY_DISTRIBUTION_DATA.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{item.range}</span>
                  <span className="text-emerald-400 font-bold">{item.students} Offers</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all" 
                    style={{ 
                      width: `${(item.students / 145) * 100}%`,
                      backgroundColor: item.fill 
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Top Recruiting Partners Table */}
      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-800 bg-slate-950/40 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Top Campus Recruiters Leaderboard</h2>
            <p className="text-xs text-slate-400 mt-0.5">Companies with highest campus intake and average CTC.</p>
          </div>
          <Link
            to="/admin/companies"
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
          >
            <span>Manage All Companies</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950/60 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4">Recruiting Enterprise</th>
                <th className="p-4">Total Offers Extended</th>
                <th className="p-4">Average Package</th>
                <th className="p-4">Drive Status</th>
                <th className="p-4 text-right">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {TOP_RECRUITERS_DATA.map((rec, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-bold text-white flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs border border-indigo-500/30">
                      {rec.company.slice(0, 2).toUpperCase()}
                    </div>
                    <span>{rec.company}</span>
                  </td>
                  <td className="p-4 font-bold text-emerald-400">{rec.offers} Students</td>
                  <td className="p-4 font-semibold text-slate-200">{rec.avgPackage}</td>
                  <td className="p-4">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      Drive Completed
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-[11px] text-emerald-400 font-semibold flex items-center justify-end gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
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

export default AdminDashboard;
