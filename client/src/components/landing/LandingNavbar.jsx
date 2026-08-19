import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, X, ArrowRight, UserCheck, ShieldCheck, Briefcase } from 'lucide-react';
import useAuthStore from '../../store/authStore';

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, loginAsDemo, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuickLogin = (role) => {
    loginAsDemo(role);
    if (role === 'student') navigate('/student/dashboard');
    else if (role === 'recruiter') navigate('/recruiter/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white">
                  Hire<span className="text-indigo-400">Loop</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  AI
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">Campus Recruitment Portal</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Platform</a>
            <a href="#roles" className="hover:text-indigo-400 transition-colors">Portals</a>
            <a href="#ai-tools" className="hover:text-indigo-400 transition-colors">AI Suite</a>
            <a href="#drives" className="hover:text-indigo-400 transition-colors">Live Drives</a>
            <a href="#stats" className="hover:text-indigo-400 transition-colors">Metrics</a>
            <a href="#faqs" className="hover:text-indigo-400 transition-colors">FAQs</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Demo Dropdown / Role Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:border-indigo-500/50 hover:text-white transition-all">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>1-Click Demo Login</span>
              </button>
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-800/95 backdrop-blur-xl border border-slate-700 shadow-2xl p-2 hidden group-hover:block transition-all animate-fadeIn">
                <div className="text-[11px] font-semibold text-slate-400 px-3 py-1 uppercase tracking-wider">
                  Test As:
                </div>
                <button
                  onClick={() => handleQuickLogin('student')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-indigo-600/20 hover:text-indigo-300 rounded-lg transition-colors text-left"
                >
                  <UserCheck className="w-4 h-4 text-indigo-400" />
                  <div>
                    <div className="font-semibold">Student Portal</div>
                    <div className="text-[10px] text-slate-400">Rohan (CSE, 8.85 CGPA)</div>
                  </div>
                </button>
                <button
                  onClick={() => handleQuickLogin('recruiter')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-purple-600/20 hover:text-purple-300 rounded-lg transition-colors text-left"
                >
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="font-semibold">Recruiter Hub</div>
                    <div className="text-[10px] text-slate-400">Nexus Cloud Tech</div>
                  </div>
                </button>
                <button
                  onClick={() => handleQuickLogin('admin')}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-emerald-600/20 hover:text-emerald-300 rounded-lg transition-colors text-left"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="font-semibold">Placement Cell</div>
                    <div className="text-[10px] text-slate-400">Prof. Suresh (Admin)</div>
                  </div>
                </button>
              </div>
            </div>

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to={user?.role === 'student' ? '/student/dashboard' : user?.role === 'recruiter' ? '/recruiter/dashboard' : '/admin/dashboard'}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                >
                  Go to Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-xs text-slate-400 hover:text-red-400 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all hover:scale-[1.02]"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-4 space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
              <a onClick={() => setMobileMenuOpen(false)} href="#features" className="hover:text-indigo-400">Platform Features</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#roles" className="hover:text-indigo-400">Role Portals</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#ai-tools" className="hover:text-indigo-400">AI Tools</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#drives" className="hover:text-indigo-400">Live Campus Drives</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#stats" className="hover:text-indigo-400">Statistics</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#faqs" className="hover:text-indigo-400">FAQs</a>
            </nav>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <div className="text-xs font-semibold text-slate-400">Instant Demo Login:</div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); handleQuickLogin('student'); }}
                  className="px-2 py-2 text-xs font-semibold rounded bg-indigo-900/40 border border-indigo-700/50 text-indigo-300"
                >
                  Student
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleQuickLogin('recruiter'); }}
                  className="px-2 py-2 text-xs font-semibold rounded bg-purple-900/40 border border-purple-700/50 text-purple-300"
                >
                  Recruiter
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); handleQuickLogin('admin'); }}
                  className="px-2 py-2 text-xs font-semibold rounded bg-emerald-900/40 border border-emerald-700/50 text-emerald-300"
                >
                  Admin
                </button>
              </div>

              <div className="flex gap-2 pt-2">
                <Link
                  to="/login"
                  className="flex-1 text-center py-2.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="flex-1 text-center py-2.5 text-xs font-bold rounded-lg bg-indigo-600 text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingNavbar;
