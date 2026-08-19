import React, { useState } from 'react';
import { 
  FileText, Sparkles, Save, Download, Eye, CheckCircle2, 
  AlertCircle, Briefcase, GraduationCap, Code, User, Mail, Phone, Globe 
} from 'lucide-react';
import toast from 'react-hot-toast';
import useAuthStore from '../../store/authStore';

const ResumeBuilder = () => {
  const { user } = useAuthStore();

  const [resumeData, setResumeData] = useState({
    fullName: user?.name || 'Rohan Sharma',
    email: user?.email || 'rohan.sharma@campus.edu',
    phone: '+91 98765 43210',
    location: 'Bangalore, India',
    linkedin: 'linkedin.com/in/rohansharma',
    github: 'github.com/rohansharma',
    targetRole: 'Frontend Developer',
    summary: 'Proactive Computer Science engineering student with deep expertise in React 19, TypeScript, and modern responsive frontend architecture. Strong foundation in Data Structures, Algorithms, and high-performance web systems.',
    university: user?.college || 'Apex Institute of Technology',
    degree: 'B.Tech in Computer Science & Engineering',
    cgpa: user?.cgpa || '8.85',
    graduationYear: '2026',
    skills: 'React, TypeScript, Next.js, TailwindCSS, Node.js, PostgreSQL, Redux Toolkit, Docker, Git, REST APIs',
    project1Title: 'HireLoop AI Campus Recruitment Platform',
    project1Desc: 'Architected scalable frontend using React 19, Tailwind CSS v4, and Zustand. Integrated real-time conversational AI mock interviews and dynamic ATS resume scoring.',
    project2Title: 'Collaborative Code Editor & Sandbox',
    project2Desc: 'Developed real-time multi-user code playground using WebSockets, Node.js, and Monaco Editor with sub-50ms synchronization latency.'
  });

  const [activeTab, setActiveTab] = useState('edit'); // 'edit' or 'preview' (on mobile)

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  // Calculate simulated ATS score based on skills & target role
  const calculateATS = () => {
    let score = 70;
    if (resumeData.skills.includes('React')) score += 8;
    if (resumeData.skills.includes('TypeScript')) score += 7;
    if (resumeData.skills.includes('Tailwind')) score += 5;
    if (resumeData.summary.length > 50) score += 5;
    return Math.min(98, score);
  };

  const atsScore = calculateATS();

  const handleSave = (e) => {
    e.preventDefault();
    toast.success('Resume details saved & ATS profile synced with Placement Cell!');
  };

  const handleDownloadPDF = () => {
    toast.success('Compiling and generating your verified Campus Resume PDF...');
    setTimeout(() => {
      window.print();
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2.5">
            <FileText className="w-7 h-7 text-indigo-400" />
            <span>Interactive ATS Resume Builder</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Build industry-standard, ATS-optimized resumes verified by college placement directorates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all shadow-md"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Export PDF</span>
          </button>
          
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/25"
          >
            <Save className="w-4 h-4" />
            <span>Save & Sync</span>
          </button>
        </div>
      </div>

      {/* Real-Time ATS Score Bar */}
      <div className="glass-card rounded-2xl p-4 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-black text-sm border border-indigo-500/30">
            <Sparkles className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">ATS Match Rating</span>
              <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {atsScore} / 100
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">Optimized for {resumeData.targetRole} campus drives.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 text-[11px]">Recommended keywords:</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700 text-[10px]">+ Docker</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700 text-[10px]">+ Jest</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 border border-slate-700 text-[10px]">+ CI/CD</span>
        </div>
      </div>

      {/* Main Content Layout: Editor on Left, Live Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form Editor */}
        <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <form onSubmit={handleSave} className="space-y-6">
            
            {/* 1. Personal Details */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>1. Personal & Contact Information</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Full Name</label>
                  <input
                    name="fullName"
                    value={resumeData.fullName}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Target Job Role</label>
                  <input
                    name="targetRole"
                    value={resumeData.targetRole}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Email</label>
                  <input
                    name="email"
                    value={resumeData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Phone</label>
                  <input
                    name="phone"
                    value={resumeData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">LinkedIn Profile</label>
                  <input
                    name="linkedin"
                    value={resumeData.linkedin}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">GitHub Profile</label>
                  <input
                    name="github"
                    value={resumeData.github}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 font-semibold mb-1 text-xs">Professional Summary</label>
                <textarea
                  name="summary"
                  rows="3"
                  value={resumeData.summary}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* 2. Education */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>2. Academic Background</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="sm:col-span-2">
                  <label className="block text-slate-400 font-semibold mb-1">College / University</label>
                  <input
                    name="university"
                    value={resumeData.university}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Degree & Major</label>
                  <input
                    name="degree"
                    value={resumeData.degree}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Verified CGPA</label>
                  <input
                    name="cgpa"
                    value={resumeData.cgpa}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none font-bold text-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* 3. Technical Skills */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>3. Technical Skills & Tools</span>
              </h2>

              <div>
                <input
                  name="skills"
                  value={resumeData.skills}
                  onChange={handleChange}
                  placeholder="e.g. React, TypeScript, Node.js, SQL..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:border-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* 4. Projects */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>4. Featured Projects</span>
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Project 1 Title</label>
                  <input
                    name="project1Title"
                    value={resumeData.project1Title}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                  <textarea
                    name="project1Desc"
                    rows="2"
                    value={resumeData.project1Desc}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none mt-1.5"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-semibold mb-1">Project 2 Title</label>
                  <input
                    name="project2Title"
                    value={resumeData.project2Title}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none"
                  />
                  <textarea
                    name="project2Desc"
                    rows="2"
                    value={resumeData.project2Desc}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-white focus:border-indigo-500 outline-none mt-1.5"
                  />
                </div>
              </div>
            </div>

          </form>
        </div>

        {/* Right Live Preview Canvas */}
        <div className="lg:col-span-6 sticky top-20">
          <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200 font-sans text-xs space-y-5 leading-relaxed min-h-[600px]">
            
            {/* Header */}
            <div className="border-b border-slate-300 pb-4 text-center">
              <h1 className="text-2xl font-black tracking-tight text-slate-900 uppercase">
                {resumeData.fullName}
              </h1>
              <p className="text-xs font-bold text-indigo-700 mt-0.5 tracking-wide">
                {resumeData.targetRole}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-600 mt-2 font-medium">
                <span>{resumeData.email}</span>
                <span>•</span>
                <span>{resumeData.phone}</span>
                <span>•</span>
                <span>{resumeData.location}</span>
                <span>•</span>
                <span className="text-indigo-600 font-semibold">{resumeData.linkedin}</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5">
                Executive Summary
              </h3>
              <p className="text-[11px] text-slate-700 leading-normal">
                {resumeData.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5">
                Education
              </h3>
              <div className="flex justify-between items-start text-[11px]">
                <div>
                  <strong className="text-slate-900 font-bold">{resumeData.university}</strong>
                  <div className="text-slate-600">{resumeData.degree}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-indigo-800">CGPA: {resumeData.cgpa}</div>
                  <div className="text-slate-500 text-[10px]">Batch of {resumeData.graduationYear}</div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5">
                Technical Stack & Skills
              </h3>
              <p className="text-[11px] text-slate-700">
                {resumeData.skills}
              </p>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5">
                Key Technical Projects
              </h3>
              <div className="space-y-3 text-[11px]">
                <div>
                  <strong className="text-slate-900 font-bold">{resumeData.project1Title}</strong>
                  <p className="text-slate-700 leading-normal mt-0.5">{resumeData.project1Desc}</p>
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">{resumeData.project2Title}</strong>
                  <p className="text-slate-700 leading-normal mt-0.5">{resumeData.project2Desc}</p>
                </div>
              </div>
            </div>

            {/* Verification Stamp */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[9px] text-slate-400">
              <span>Verified by College T&P Directorate (HireLoop Verified)</span>
              <span>Ref ID: #STU-2026-RS</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeBuilder;
