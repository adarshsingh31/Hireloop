import React from 'react';
import { Award, Building2, TrendingUp, Bot, ArrowUpRight } from 'lucide-react';
import { PLATFORM_STATS } from '../../data/mockData';

const iconMap = {
  Award,
  Building2,
  TrendingUp,
  Bot
};

const StatsSection = () => {
  return (
    <section id="stats" className="py-20 relative bg-slate-950/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
            <span>Verified Campus Recruitment Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Numbers That Empower Campus Placements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Real impact delivered to students, top-tier recruiters, and university placement directorates.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORM_STATS.map((stat) => {
            const IconComponent = iconMap[stat.icon] || TrendingUp;

            return (
              <div
                key={stat.id}
                className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-bl-full pointer-events-none group-hover:bg-indigo-500/20 transition-all" />

                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.trend}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
