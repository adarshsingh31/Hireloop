import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, FileText, Briefcase, Users, Settings, 
  Mic, Zap, Sparkles, Building, BarChart3, PlusCircle, ShieldCheck, ArrowLeft, CheckCircle2, FileSpreadsheet, GraduationCap 
} from 'lucide-react';
import useAuthStore from '../../store/authStore';

const Sidebar = () => {
  const { user } = useAuthStore();
  const location = useLocation();

  const roleLinks = {
    student: [
      { name: 'Dashboard Overview', path: '/student/dashboard', icon: LayoutDashboard },
      { name: 'AI Mock Interview', path: '/student/interview', icon: Mic, badge: 'AI' },
      { name: 'ATS Resume Builder', path: '/student/resume-builder', icon: FileText },
      { name: 'Campus Job Board', path: '/student/jobs', icon: Briefcase },
      { name: 'My Applications', path: '/student/applications', icon: CheckCircle2, badge: '3' },
      { name: 'Upgrade Pro', path: '/student/premium', icon: Zap, highlight: true },
    ],
    recruiter: [
      { name: 'Recruiter Dashboard', path: '/recruiter/dashboard', icon: LayoutDashboard },
      { name: 'Post Campus Drive', path: '/recruiter/post-job', icon: PlusCircle },
      { name: 'Applicant Tracking (ATS)', path: '/recruiter/applicants', icon: Users, badge: '357' },
      { name: 'Manage Openings', path: '/recruiter/drives', icon: Briefcase },
    ],
    admin: [
      { name: 'Placement Analytics', path: '/admin/dashboard', icon: BarChart3 },
      { name: 'Authorize Recruiters', path: '/admin/companies', icon: Building, badge: '2' },
      { name: 'Student Registry', path: '/admin/students', icon: GraduationCap },
      { name: 'Accreditation Reports', path: '/admin/reports', icon: FileSpreadsheet },
    ]
  };

  const links = user?.role ? roleLinks[user.role] || [] : [];

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 text-slate-300 hidden lg:flex flex-col justify-between shrink-0">
      <div>
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              Hire<span className="text-indigo-400">Loop</span>
            </span>
          </Link>
          <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
            {user?.role}
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-1.5">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
            Navigation Menu
          </div>
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                } ${link.highlight && !isActive ? 'text-amber-300 hover:text-amber-200 bg-amber-500/5 border border-amber-500/20' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                    link.badge === 'AI' 
                      ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          to="/"
          className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit to Public Portal</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
