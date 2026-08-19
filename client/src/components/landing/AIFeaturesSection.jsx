import React, { useState } from 'react';
import { Bot, FileCheck, Sparkles, BarChart3, Mic, CheckCircle2, ArrowRight, Play, Cpu } from 'lucide-react';
import { AI_FEATURES } from '../../data/mockData';

const iconMap = {
  Mic,
  FileCheck,
  Sparkles,
  BarChart3
};

const AIFeaturesSection = () => {
  const [selectedAI, setSelectedAI] = useState(AI_FEATURES[0]);
  const [demoInput, setDemoInput] = useState('');
  const [demoResponse, setDemoResponse] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = (e) => {
    e.preventDefault();
    if (!demoInput.trim()) return;

    setIsSimulating(true);
    setDemoResponse(null);

    setTimeout(() => {
      setIsSimulating(false);
      if (selectedAI.id === 'interview-ai') {
        setDemoResponse({
          score: 93,
          verdict: 'Strong Answer',
          feedback: 'Accurate technical answer! You clearly explained State vs Props. Tip: Mention React 19 Actions for extra credit.'
        });
      } else if (selectedAI.id === 'resume-ai') {
        setDemoResponse({
          score: 88,
          verdict: 'High ATS Compatibility',
          feedback: 'Matched 9/10 core keywords: React, TypeScript, Tailwind, REST API. Added recommended phrase: "Architected reusable components".'
        });
      } else {
        setDemoResponse({
          score: 95,
          verdict: 'Optimal Candidate Fit',
          feedback: 'Candidate meets all CGPA (>7.5) and core skill requirements with top 5% coding assessment rank.'
        });
      }
    }, 1200);
  };

  return (
    <section id="ai-tools" className="py-24 relative bg-slate-950/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Proprietary Neural Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The AI Engine Supercharging Placements
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Explore our state-of-the-art AI tools built specifically for university engineering and management campus recruitments.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AI_FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            const isSelected = selectedAI.id === feature.id;

            return (
              <div
                key={feature.id}
                onClick={() => {
                  setSelectedAI(feature);
                  setDemoResponse(null);
                }}
                className={`cursor-pointer rounded-2xl p-6 transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-indigo-900/60 to-slate-900 border-2 border-indigo-500 shadow-xl shadow-indigo-500/10'
                    : 'glass-card glass-card-hover border border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-indigo-400'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-slate-400">{feature.stats}</span>
                  <span className="text-indigo-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {isSelected ? 'Active Demo' : 'Try Demo'} →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive AI Sandbox Test Bench */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-700/70 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-lg font-bold text-white">
                    Live Simulator: <span className="text-indigo-400">{selectedAI.title}</span>
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">{selectedAI.highlight}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Interactive Test Environment
              </span>
            </div>

            {/* Sandbox Input Form */}
            <form onSubmit={handleSimulate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  {selectedAI.id === 'interview-ai'
                    ? 'Sample Interview Question: "Explain the difference between useEffect and useLayoutEffect in React."'
                    : selectedAI.id === 'resume-ai'
                    ? 'Sample Resume Bullet: "Built responsive frontend web application using React and Tailwind CSS."'
                    : 'Sample Criteria / Candidate Query: "Find CSE students with CGPA > 8.0 with React and Node skills."'}
                </label>
                
                <div className="relative">
                  <input
                    type="text"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    placeholder={
                      selectedAI.id === 'interview-ai'
                        ? 'Type or paste candidate response here...'
                        : selectedAI.id === 'resume-ai'
                        ? 'Type resume description bullet point...'
                        : 'Enter candidate search or screening filter...'
                    }
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    disabled={isSimulating}
                    className="absolute right-2 top-2 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all disabled:opacity-50 flex items-center gap-1.5"
                  >
                    {isSimulating ? (
                      <span className="animate-spin">🌀</span>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Run AI Evaluation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Quick Fill Suggestions */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400">Quick fill sample:</span>
                <button
                  type="button"
                  onClick={() => setDemoInput("useEffect runs asynchronously after DOM paint, while useLayoutEffect runs synchronously before paint.")}
                  className="px-2.5 py-1 rounded bg-slate-800 text-indigo-300 hover:bg-slate-700 transition-colors"
                >
                  "React effect hook differences"
                </button>
                <button
                  type="button"
                  onClick={() => setDemoInput("Designed real-time collaborative code editor with WebSocket and operational transformation.")}
                  className="px-2.5 py-1 rounded bg-slate-800 text-indigo-300 hover:bg-slate-700 transition-colors"
                >
                  "Real-time WebSocket project"
                </button>
              </div>
            </form>

            {/* AI Result Simulation Box */}
            {demoResponse && (
              <div className="mt-4 p-5 rounded-2xl bg-indigo-950/40 border border-indigo-600/40 animate-fadeIn space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">AI Evaluation Result</span>
                  </div>
                  <span className="text-xs font-black text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    Match Score: {demoResponse.score} / 100
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{demoResponse.verdict}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  {demoResponse.feedback}
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default AIFeaturesSection;
