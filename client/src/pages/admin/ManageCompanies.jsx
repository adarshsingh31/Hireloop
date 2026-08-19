import React, { useState } from 'react';
import { 
  CheckCircle, XCircle, Search, AlertCircle, Building2, 
  ShieldCheck, Filter, Download, ExternalLink, Mail, Phone, Clock 
} from 'lucide-react';
import toast from 'react-hot-toast';

const ManageCompanies = () => {
  const [companies, setCompanies] = useState([
    { 
      id: 1, 
      name: 'Nexus Cloud Technologies', 
      industry: 'Cloud & SaaS', 
      contactPerson: 'Pooja Nair (HR Head)',
      email: 'pooja.nair@nexuscloud.tech',
      ctcRange: '₹16 - ₹20 LPA',
      requestedOn: '2026-08-15', 
      status: 'Approved',
      mouSigned: true
    },
    { 
      id: 2, 
      name: 'CognitiveScale AI Labs', 
      industry: 'Artificial Intelligence', 
      contactPerson: 'Sneha Kulkarni (Talent Partner)',
      email: 'sneha@cognitivescale.ai',
      ctcRange: '₹22 - ₹28 LPA',
      requestedOn: '2026-08-16', 
      status: 'Approved',
      mouSigned: true
    },
    { 
      id: 3, 
      name: 'HyperScale Fintech', 
      industry: 'Banking Tech', 
      contactPerson: 'Vikram Mehta (VP Talent)',
      email: 'vikram@hyperscalefintech.io',
      ctcRange: '₹18 LPA',
      requestedOn: '2026-08-17', 
      status: 'Pending',
      mouSigned: false
    },
    { 
      id: 4, 
      name: 'AeroDynamics Automations', 
      industry: 'IoT & Embedded', 
      contactPerson: 'Karthik Raja (Lead Recruiter)',
      email: 'karthik@aerodynamics.tech',
      ctcRange: '₹12 - ₹15 LPA',
      requestedOn: '2026-08-18', 
      status: 'Pending',
      mouSigned: false
    },
    { 
      id: 5, 
      name: 'Sketchy Agency LLC', 
      industry: 'Consulting', 
      contactPerson: 'Unknown',
      email: 'recruiting@unverified.org',
      ctcRange: '₹3 - ₹4 LPA',
      requestedOn: '2026-08-14', 
      status: 'Rejected',
      mouSigned: false
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredCompanies = companies.filter((c) => {
    const matchesStatus = selectedStatus === 'All' || c.status === selectedStatus;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.contactPerson.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const updateStatus = (id, newStatus) => {
    setCompanies(companies.map(c => c.id === id ? { ...c, status: newStatus } : c));
    toast.success(`Company access status for ${companies.find(c => c.id === id)?.name} updated to "${newStatus}"`);
  };

  const pendingCount = companies.filter(c => c.status === 'Pending').length;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <Building2 className="w-7 h-7 text-emerald-400" />
            <span>Recruiting Company Authorization & Approvals</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Verify corporate identity, package compliance, and campus recruitment policies before drives go live.
          </p>
        </div>

        {pendingCount > 0 && (
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/10 px-3.5 py-2 rounded-xl border border-amber-500/30">
            <AlertCircle className="w-4 h-4" />
            <span>{pendingCount} Recruiter Authorization Requests Pending</span>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search company name, industry, HR..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          <span className="text-xs text-slate-400 font-semibold mr-1">Status:</span>
          {['All', 'Pending', 'Approved', 'Rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedStatus === status
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Companies Table */}
      <div className="glass-card rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-950/60 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="p-4">Enterprise Details</th>
                <th className="p-4">Industry Sector</th>
                <th className="p-4">HR / Talent Contact</th>
                <th className="p-4">Package Offered</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Placement Cell Decision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredCompanies.map((c) => (
                <tr key={c.id} className="hover:bg-slate-800/40 transition-colors">
                  
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs border border-emerald-500/30">
                        {c.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{c.name}</div>
                        <div className="text-[10px] text-slate-400">Req: {c.requestedOn}</div>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-slate-300 font-medium">{c.industry}</td>

                  <td className="p-4">
                    <div className="text-white font-semibold">{c.contactPerson}</div>
                    <div className="text-[10px] text-slate-400">{c.email}</div>
                  </td>

                  <td className="p-4 font-bold text-emerald-400">{c.ctcRange}</td>

                  <td className="p-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                      c.status === 'Approved' ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' :
                      c.status === 'Rejected' ? 'bg-red-500/15 text-red-300 border-red-500/30' :
                      'bg-amber-500/15 text-amber-300 border-amber-500/30'
                    }`}>
                      {c.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      {c.status === 'Pending' ? (
                        <>
                          <button
                            onClick={() => updateStatus(c.id, 'Approved')}
                            className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500 hover:text-white border border-emerald-500/40 text-xs font-bold transition-all flex items-center gap-1"
                          >
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>Approve</span>
                          </button>
                          <button
                            onClick={() => updateStatus(c.id, 'Rejected')}
                            className="px-3 py-1.5 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white border border-red-500/40 text-xs font-bold transition-all flex items-center gap-1"
                          >
                            <XCircle className="w-3.5 h-3.5" />
                            <span>Reject</span>
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => updateStatus(c.id, c.status === 'Approved' ? 'Rejected' : 'Approved')}
                          className="text-[11px] text-slate-400 hover:text-indigo-400 underline transition-colors"
                        >
                          Change Status
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

    </div>
  );
};

export default ManageCompanies;
