import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, UserCircle, Bell, Sparkles, Home } from 'lucide-react';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Signed out successfully');
    navigate('/login');
  };

  const getRoleBadgeStyle = (role) => {
    switch (role) {
      case 'student':
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
      case 'recruiter':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'admin':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 h-16 flex items-center justify-between px-6 sticky top-0 z-40">
      {/* Mobile Branding / Breadcrumb */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 lg:hidden">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white">HireLoop</span>
        </Link>
        
        <Link
          to="/"
          className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-400 transition-colors px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* User Controls */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button
          onClick={() => toast('No new notifications', { icon: '🔔' })}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors relative"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
        </button>

        {/* User Profile Pill */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
            {user?.name ? user.name.slice(0, 2).toUpperCase() : 'U'}
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-bold text-white leading-tight">{user?.name || 'Guest User'}</div>
            <div className="text-[10px] text-slate-400 capitalize">{user?.role || 'Visitor'}</div>
          </div>
          <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${getRoleBadgeStyle(user?.role)}`}>
            {user?.role}
          </span>
        </div>
        
        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-red-400 px-3 py-1.5 rounded-lg hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
