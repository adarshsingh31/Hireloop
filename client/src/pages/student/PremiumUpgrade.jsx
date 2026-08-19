import React, { useState } from 'react';
import { Check, Zap, CreditCard, Loader2, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

const PremiumUpgrade = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('🎉 Upgrade successful! You now have Unlimited AI Mock Interviews.');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>HireLoop Pro Access</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">Accelerate Your Placement Prep</h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
          Upgrade to Premium for unlimited conversational AI interviews, custom company question patterns, and priority drive rankings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
        
        {/* Basic Tier */}
        <div className="glass-card rounded-3xl border border-slate-800 p-8 flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Standard Campus Plan</h3>
            <div className="text-3xl font-black text-slate-200 mb-6">Free</div>
            
            <ul className="space-y-3.5 mb-8 text-xs text-slate-300">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Apply to all college-approved campus drives</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standard ATS Resume builder</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Basic AI mock interview (3 sessions/month)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 line-through">
                <Check className="w-4 h-4 opacity-40 shrink-0" />
                <span>Company-specific AI interview simulation</span>
              </li>
            </ul>
          </div>
          
          <button disabled className="w-full py-3 rounded-xl font-bold bg-slate-800 text-slate-400 text-xs cursor-not-allowed border border-slate-700">
            Currently Active
          </button>
        </div>

        {/* Premium Tier */}
        <div className="relative rounded-3xl bg-gradient-to-b from-indigo-900/90 to-slate-900 border-2 border-indigo-500 p-8 flex flex-col justify-between shadow-2xl shadow-indigo-500/20">
          <div className="absolute top-0 right-6 -translate-y-1/2">
            <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Zap className="w-3 h-3 fill-current" /> Recommended
            </span>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-1">HireLoop Pro Candidate</h3>
            <div className="text-3xl font-black text-white mb-6">
              ₹499 <span className="text-xs font-normal text-indigo-300">/ placement season</span>
            </div>
            
            <ul className="space-y-3.5 mb-8 text-xs text-indigo-100">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Everything in Free Campus plan</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-amber-300 shrink-0" />
                <span><strong>Unlimited</strong> AI Mock Interviews (All Tracks)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Company-specific question bank (Google, Amazon, TCS)</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Detailed Speech & Code Syntax Diagnostics</span>
              </li>
            </ul>
          </div>
          
          <button 
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full py-3.5 rounded-xl font-bold bg-white hover:bg-slate-100 text-slate-950 text-xs transition-all shadow-lg flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> Processing Mock Checkout...</>
            ) : (
              <><CreditCard className="w-4 h-4" /> Upgrade to Pro (₹499)</>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default PremiumUpgrade;
