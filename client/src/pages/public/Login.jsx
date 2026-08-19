import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, UserCheck, Briefcase, ShieldCheck, Lock, Mail, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'student' });
  const navigate = useNavigate();
  const { login, loginAsDemo } = useAuthStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuickDemo = (role) => {
    const user = loginAsDemo(role);
    toast.success(`Logged in as ${user.name} (${user.role.toUpperCase()})`);
    if (role === 'student') navigate('/student/dashboard');
    else if (role === 'recruiter') navigate('/recruiter/dashboard');
    else if (role === 'admin') navigate('/admin/dashboard');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mockUser = {
      id: 'usr-custom-1',
      name: formData.email.split('@')[0] || 'Campus User',
      email: formData.email,
      role: formData.role,
    };
    const mockToken = 'mock-jwt-token-custom';

    login(mockUser, mockToken);
    toast.success(`Welcome back, ${mockUser.name}!`);

    if (formData.role === 'student') navigate('/student/dashboard');
    else if (formData.role === 'recruiter') navigate('/recruiter/dashboard');
    else if (formData.role === 'admin') navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center gap-2.5 mb-6 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-white">
            Hire<span className="text-indigo-400">Loop</span>
          </span>
        </Link>
        
        <h2 className="text-2xl sm:text-3xl font-black text-white">Sign in to your account</h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Or{' '}
          <Link to="/register" className="font-semibold text-indigo-400 hover:text-indigo-300">
            register for a new campus account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        
        {/* Quick 1-Click Demo Login Box */}
        <div className="glass-card rounded-2xl p-4 border border-indigo-500/30 mb-6 shadow-xl space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Instant 1-Click Demo Logins:
            </span>
            <span className="text-[10px] text-slate-400">No password needed</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleQuickDemo('student')}
              className="flex flex-col items-center p-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold transition-all hover:scale-105"
            >
              <UserCheck className="w-4 h-4 mb-1" />
              <span>Student</span>
            </button>

            <button
              onClick={() => handleQuickDemo('recruiter')}
              className="flex flex-col items-center p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold transition-all hover:scale-105"
            >
              <Briefcase className="w-4 h-4 mb-1" />
              <span>Recruiter</span>
            </button>

            <button
              onClick={() => handleQuickDemo('admin')}
              className="flex flex-col items-center p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold transition-all hover:scale-105"
            >
              <ShieldCheck className="w-4 h-4 mb-1" />
              <span>Admin</span>
            </button>
          </div>
        </div>

        {/* Standard Form */}
        <div className="glass-card py-8 px-6 sm:px-10 rounded-2xl border border-slate-800 shadow-2xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Role / Account Type</label>
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:border-indigo-500 outline-none"
              >
                <option value="student">Student / Job Seeker</option>
                <option value="recruiter">Recruiter / Hiring Partner</option>
                <option value="admin">Placement Cell / University Admin</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Campus / Work Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  name="email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="student@campus.edu"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-indigo-500 outline-none" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  name="password" 
                  type="password" 
                  required 
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-indigo-500 outline-none" 
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Sign In with Credentials</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
            ← Return to HireLoop Landing Page
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
