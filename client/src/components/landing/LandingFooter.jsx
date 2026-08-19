import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Globe, Mail, ArrowUp, Share2, MessageSquare } from 'lucide-react';

const LandingFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-md shadow-indigo-500/20">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Hire<span className="text-indigo-400">Loop</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                AI
              </span>
            </Link>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Next-generation AI Campus Recruitment Portal connecting university students, top corporate recruiters, and college placement directorates through intelligent automation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white flex items-center justify-center border border-slate-800 transition-colors" title="Global Web Portal">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white flex items-center justify-center border border-slate-800 transition-colors" title="Campus Network">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white flex items-center justify-center border border-slate-800 transition-colors" title="Placement Helpdesk">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-indigo-600 hover:text-white flex items-center justify-center border border-slate-800 transition-colors" title="Email Inquiries">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: For Students */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">For Students</h4>
            <ul className="space-y-2">
              <li><Link to="/student/dashboard" className="hover:text-indigo-400 transition-colors">Student Dashboard</Link></li>
              <li><Link to="/student/interview" className="hover:text-indigo-400 transition-colors">AI Mock Interview</Link></li>
              <li><Link to="/student/resume-builder" className="hover:text-indigo-400 transition-colors">ATS Resume Builder</Link></li>
              <li><Link to="/student/premium" className="hover:text-indigo-400 transition-colors">Premium Upgrade</Link></li>
              <li><a href="#drives" className="hover:text-indigo-400 transition-colors">Campus Placement Drives</a></li>
            </ul>
          </div>

          {/* Col 4: For Recruiters */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">For Recruiters</h4>
            <ul className="space-y-2">
              <li><Link to="/recruiter/dashboard" className="hover:text-indigo-400 transition-colors">Recruiter Hub</Link></li>
              <li><Link to="/recruiter/post-job" className="hover:text-indigo-400 transition-colors">Post Campus Drive</Link></li>
              <li><Link to="/recruiter/applicants" className="hover:text-indigo-400 transition-colors">Applicant Tracker (ATS)</Link></li>
              <li><a href="#roles" className="hover:text-indigo-400 transition-colors">Multi-College Drives</a></li>
              <li><a href="#ai-tools" className="hover:text-indigo-400 transition-colors">AI Candidate Screening</a></li>
            </ul>
          </div>

          {/* Col 5: For Placement Cell */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Placement Cells</h4>
            <ul className="space-y-2">
              <li><Link to="/admin/dashboard" className="hover:text-indigo-400 transition-colors">T&P Directorate</Link></li>
              <li><Link to="/admin/companies" className="hover:text-indigo-400 transition-colors">Verify Companies</Link></li>
              <li><a href="#stats" className="hover:text-indigo-400 transition-colors">Placement Analytics</a></li>
              <li><a href="#faqs" className="hover:text-indigo-400 transition-colors">Institutional Accreditation</a></li>
              <li><a href="#faqs" className="hover:text-indigo-400 transition-colors">Support & Integration</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p className="flex items-center gap-1">
            © 2026 HireLoop AI. Crafted for campus recruitment excellence.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <span className="text-slate-800">•</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <span className="text-slate-800">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default LandingFooter;
