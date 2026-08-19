import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Briefcase, Send, CheckCircle2, ArrowRight, ArrowLeft, 
  Sparkles, ShieldCheck, Clock, Building2, MapPin, IndianRupee 
} from 'lucide-react';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';

const PostJob = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      title: 'Associate Software Engineer - Frontend',
      department: 'Engineering & Product',
      jobType: 'Full-Time',
      salary: '₹14 - ₹18 LPA',
      location: 'Bangalore / Hybrid',
      openings: 15,
      deadline: '2026-09-30',
      minCgpa: 7.5,
      batch: 2026,
      branches: ['CSE', 'IT', 'ECE', 'AI & DS'],
      backlogsAllowed: '0 Backlogs Only',
      skills: 'React 19, TypeScript, TailwindCSS, State Management, REST APIs',
      description: 'We are hiring high-caliber campus engineering graduates to join our Core Product Engineering team. You will build highly responsive, performant user interfaces, collaborate with backend cloud services, and participate in design reviews.'
    }
  });

  const formData = watch();

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(3, prev + 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const onSubmit = (data) => {
    toast.success(`🎉 Campus Drive for "${data.title}" successfully published & broadcasted to college placement cells!`);
    navigate('/recruiter/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <Briefcase className="w-7 h-7 text-purple-400" />
            <span>Publish Campus Placement Opening</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Create verified campus drive specifications with automated CGPA eligibility rules.
          </p>
        </div>

        <Link
          to="/recruiter/dashboard"
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      {/* 3 Step Wizard Progress Bar */}
      <div className="glass-card rounded-2xl p-4 border border-slate-800 flex items-center justify-between shadow-xl">
        <div className={`flex items-center gap-2 text-xs font-bold ${currentStep >= 1 ? 'text-purple-400' : 'text-slate-500'}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${currentStep >= 1 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
            1
          </div>
          <span>Role Specifications</span>
        </div>

        <div className={`h-0.5 flex-1 mx-4 ${currentStep >= 2 ? 'bg-purple-600' : 'bg-slate-800'}`} />

        <div className={`flex items-center gap-2 text-xs font-bold ${currentStep >= 2 ? 'text-purple-400' : 'text-slate-500'}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${currentStep >= 2 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
            2
          </div>
          <span>Eligibility Rules</span>
        </div>

        <div className={`h-0.5 flex-1 mx-4 ${currentStep >= 3 ? 'bg-purple-600' : 'bg-slate-800'}`} />

        <div className={`flex items-center gap-2 text-xs font-bold ${currentStep === 3 ? 'text-purple-400' : 'text-slate-500'}`}>
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${currentStep === 3 ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
            3
          </div>
          <span>Review & Publish</span>
        </div>
      </div>

      {/* Form Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* STEP 1: Basic Role Specifications */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2">
                1. Role Details & Compensation
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="sm:col-span-2">
                  <label className="block text-slate-300 font-semibold mb-1">Job Title / Designation *</label>
                  <input
                    {...register('title', { required: true })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none text-xs sm:text-sm"
                  />
                  {errors.title && <span className="text-red-400 text-[10px]">Title is required</span>}
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Department</label>
                  <input
                    {...register('department')}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Employment Type</label>
                  <select
                    {...register('jobType')}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none"
                  >
                    <option value="Full-Time">Full-Time (Direct FTE)</option>
                    <option value="Internship + PPO">Internship + PPO</option>
                    <option value="Summer Internship">Summer Internship (2026)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Annual CTC Package (LPA) *</label>
                  <input
                    {...register('salary', { required: true })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none font-bold text-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Location & Work Mode</label>
                  <input
                    {...register('location')}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Total Target Openings</label>
                  <input
                    type="number"
                    {...register('openings')}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Application Deadline Date *</label>
                  <input
                    type="date"
                    {...register('deadline', { required: true })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-300 font-semibold mb-1">Required Tech Stack & Skills</label>
                  <input
                    {...register('skills')}
                    placeholder="e.g. React, TypeScript, Node.js, SQL"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-300 font-semibold mb-1">Job Description & Responsibilities</label>
                  <textarea
                    rows="3"
                    {...register('description')}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Campus Eligibility Rules */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2">
                2. Academic Eligibility & Filtering Thresholds
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Minimum Cumulative CGPA Cut-off *</label>
                  <input
                    type="number"
                    step="0.1"
                    {...register('minCgpa', { required: true })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none font-bold text-amber-400 text-sm"
                  />
                  <span className="text-[10px] text-slate-400">Students below this CGPA cannot 1-click apply.</span>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Target Passing Out Batch *</label>
                  <input
                    type="number"
                    {...register('batch', { required: true })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:border-purple-500 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Eligible Engineering Branches</label>
                  <input
                    {...register('branches')}
                    placeholder="e.g. CSE, IT, ECE, AI & DS"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Backlog Policy</label>
                  <select
                    {...register('backlogsAllowed')}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-purple-500 outline-none"
                  >
                    <option value="0 Backlogs Only">0 Active Backlogs (Strict)</option>
                    <option value="Max 1 Active Backlog">Max 1 Active Backlog Permitted</option>
                    <option value="All Eligible">No Backlog Restriction</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>
                  <strong>Placement Cell Guarantee:</strong> HireLoop automatically filters students based on official university records. No unverified applications will reach your pipeline.
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: Summary Preview & Confirmation */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2">
                3. Final Drive Summary & Broadcast Review
              </h2>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4 text-xs">
                <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{formData.title}</h3>
                    <p className="text-slate-400">{user?.company || 'Nexus Cloud Technologies'} • {formData.location}</p>
                  </div>
                  <span className="text-sm font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                    {formData.salary}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
                  <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-slate-500">Min. CGPA</div>
                    <div className="font-bold text-amber-400 mt-0.5">&ge; {formData.minCgpa} CGPA</div>
                  </div>
                  <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-slate-500">Batch</div>
                    <div className="font-bold text-white mt-0.5">{formData.batch} Passing</div>
                  </div>
                  <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-slate-500">Openings</div>
                    <div className="font-bold text-indigo-400 mt-0.5">{formData.openings} Positions</div>
                  </div>
                  <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-slate-500">Deadline</div>
                    <div className="font-bold text-white mt-0.5">{formData.deadline}</div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed pt-2">
                  {formData.description}
                </p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Step</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-black text-xs sm:text-sm shadow-xl shadow-purple-500/25 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm & Publish Campus Drive</span>
              </button>
            )}
          </div>

        </form>
      </div>

    </div>
  );
};

export default PostJob;
