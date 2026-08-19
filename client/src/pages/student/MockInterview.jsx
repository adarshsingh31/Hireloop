import React, { useState, useEffect } from 'react';
import { 
  Bot, Mic, Send, Sparkles, Volume2, ArrowLeft, Clock, CheckCircle2, 
  AlertCircle, RotateCcw, Award, ChevronRight, HelpCircle, Download, FileCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { INTERVIEW_QUESTION_BANKS } from '../../data/mockData';

const MockInterview = () => {
  const [selectedRole, setSelectedRole] = useState('Frontend Developer');
  const [difficulty, setDifficulty] = useState('Standard (Campus Level)');
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(120);
  const [isRecording, setIsRecording] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Stored responses and evaluation
  const [sessionResponses, setSessionResponses] = useState([]);
  const [finalScore, setFinalScore] = useState(null);

  const questions = INTERVIEW_QUESTION_BANKS[selectedRole] || INTERVIEW_QUESTION_BANKS['Frontend Developer'];
  const activeQuestion = questions[currentQuestionIndex] || questions[0];

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (isInterviewStarted && !isCompleted && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isInterviewStarted, isCompleted, timerSeconds]);

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsInterviewStarted(true);
    setIsCompleted(false);
    setCurrentQuestionIndex(0);
    setTimerSeconds(120);
    setSessionResponses([]);
    setCurrentAnswer('');
    setShowHint(false);
    toast.success(`Starting AI Mock Interview for ${selectedRole}`);
  };

  const toggleMic = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast('Speech-to-text recording started...', { icon: '🎙️' });
      // Simulate live voice recognition typing
      setTimeout(() => {
        const sampleText = activeQuestion.hint 
          ? `In my understanding, ${activeQuestion.hint.toLowerCase()} This enables high performance and scalable state management.`
          : 'Virtual DOM enables efficient reconciliation by maintaining an in-memory tree and calculating minimum atomic DOM operations.';
        setCurrentAnswer((prev) => (prev ? prev + ' ' + sampleText : sampleText));
      }, 1200);
    } else {
      toast('Microphone paused');
    }
  };

  const handleNextQuestion = () => {
    if (!currentAnswer.trim()) {
      toast.error('Please provide an answer before moving to the next question.');
      return;
    }

    setIsSubmitting(true);

    const questionScore = Math.floor(Math.random() * 15) + 85; // 85-99%
    const newResponse = {
      question: activeQuestion.question,
      category: activeQuestion.category,
      userAnswer: currentAnswer,
      score: questionScore,
      feedback: `Strong answer! Covered key concepts for ${activeQuestion.category}. Accurate technical terminology used.`
    };

    const updatedResponses = [...sessionResponses, newResponse];
    setSessionResponses(updatedResponses);
    setCurrentAnswer('');
    setShowHint(false);
    setTimerSeconds(120);
    setIsRecording(false);
    setIsSubmitting(false);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      toast.success('Answer recorded! Next question loaded.');
    } else {
      // Calculate final score
      const avgScore = Math.round(
        updatedResponses.reduce((acc, curr) => acc + curr.score, 0) / updatedResponses.length
      );
      setFinalScore({
        overall: avgScore,
        technicalAccuracy: Math.min(100, avgScore + 2),
        communication: Math.min(100, avgScore - 3),
        problemSolving: Math.min(100, avgScore + 1),
        speed: 92
      });
      setIsCompleted(true);
      toast.success('🎉 Interview Completed! Generating AI evaluation report...');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* View 1: Setup Screen */}
      {!isInterviewStarted && !isCompleted && (
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl text-center max-w-2xl mx-auto space-y-8">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/30">
            <Bot className="w-8 h-8" />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold mb-3 border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Adaptive Conversational Assessment</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">AI Technical Mock Interview</h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto">
              Simulate high-pressure campus placement technical rounds with real-time speech evaluation and instant feedback scoring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Target Profile Track</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-white outline-none focus:border-indigo-500"
              >
                <option value="Frontend Developer">Frontend Developer (React, JS, CSS)</option>
                <option value="Backend Developer">Backend Developer (Node, SQL, System Design)</option>
                <option value="AI / ML Engineer">AI & Machine Learning (PyTorch, LLMs, RAG)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Evaluation Depth</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs sm:text-sm text-white outline-none focus:border-indigo-500"
              >
                <option value="Standard (Campus Level)">Standard Campus Level</option>
                <option value="Tier-1 Product Company">Tier-1 Product Company (High Bar)</option>
                <option value="Startup Hustle">High Velocity Startup Track</option>
              </select>
            </div>
          </div>

          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-center justify-around text-center">
            <div>
              <div className="font-bold text-white text-sm">{questions.length} Questions</div>
              <div className="text-slate-500 text-[10px]">Technical + System</div>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <div className="font-bold text-white text-sm">~10 Minutes</div>
              <div className="text-slate-500 text-[10px]">Average Duration</div>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <div className="font-bold text-emerald-400 text-sm">Instant</div>
              <div className="text-slate-500 text-[10px]">AI Scorecard Report</div>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <span>Begin Technical Assessment</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* View 2: Active Interview Question Interface */}
      {isInterviewStarted && !isCompleted && (
        <div className="space-y-4 animate-fadeIn">
          
          {/* Header Bar */}
          <div className="glass-card rounded-2xl px-6 py-4 border border-slate-800 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {selectedRole}
              </span>
              <span className="text-xs text-slate-400">
                Question <strong className="text-white">{currentQuestionIndex + 1}</strong> of {questions.length}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-xl border ${
                timerSeconds < 30 ? 'bg-red-500/10 text-red-400 border-red-500/30 animate-pulse' : 'bg-slate-800 text-slate-200 border-slate-700'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTimer(timerSeconds)}</span>
              </div>

              <button
                onClick={() => {
                  if (window.confirm('Are you sure you want to end this interview session?')) {
                    setIsInterviewStarted(false);
                  }
                }}
                className="text-xs text-slate-400 hover:text-red-400 transition-colors"
              >
                Quit
              </button>
            </div>
          </div>

          {/* Question Box */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
            
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                    {activeQuestion.category}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {activeQuestion.question}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 hover:text-amber-300 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center gap-1 shrink-0"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHint ? 'Hide Hint' : 'AI Hint'}</span>
              </button>
            </div>

            {/* Hint Accordion */}
            {showHint && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-center gap-2 animate-fadeIn">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span><strong>AI Nudge:</strong> {activeQuestion.hint}</span>
              </div>
            )}

            {/* Answer Input Area */}
            <div className="space-y-3 pt-2">
              <div className="relative">
                <textarea
                  rows="6"
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  placeholder="Type your technical explanation here, or click the mic button below to simulate voice answering..."
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-2xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
                />

                {/* Voice waveform simulator indicator */}
                {isRecording && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-500/20 text-red-400 px-2.5 py-1 rounded-full border border-red-500/30 text-[10px] font-bold animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span>Listening...</span>
                  </div>
                )}
              </div>

              {/* Bottom Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={toggleMic}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isRecording
                        ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                    }`}
                  >
                    <Mic className={`w-4 h-4 ${isRecording ? 'animate-bounce' : ''}`} />
                    <span>{isRecording ? 'Pause Recording' : 'Voice Input (Sim)'}</span>
                  </button>
                  <span className="text-[11px] text-slate-400">
                    {currentAnswer.trim().split(/\s+/).filter(Boolean).length} words
                  </span>
                </div>

                <button
                  onClick={handleNextQuestion}
                  disabled={isSubmitting || !currentAnswer.trim()}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>{currentQuestionIndex + 1 === questions.length ? 'Finish & Generate Scorecard' : 'Next Question'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* View 3: Final Assessment Report & Scorecard Modal */}
      {isCompleted && finalScore && (
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8 animate-fadeIn">
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">AI Placement Readiness Assessment</h2>
            <p className="text-xs text-slate-400">Evaluated on {selectedRole} Track ({difficulty})</p>
          </div>

          {/* Scorecard Radial Hero */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/40 border border-indigo-500/30 text-center relative overflow-hidden">
            <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">Overall Placement Readiness</div>
            <div className="text-5xl sm:text-6xl font-black text-emerald-400 my-2">
              {finalScore.overall}%
            </div>
            <p className="text-xs text-emerald-300 font-semibold">
              ✓ High Probability of clearing Technical Round-1 for Tier-1 Companies
            </p>
          </div>

          {/* Metric Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="text-[11px] text-slate-400 font-semibold">Concept Depth</div>
              <div className="text-xl font-bold text-indigo-400 mt-1">{finalScore.technicalAccuracy}%</div>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="text-[11px] text-slate-400 font-semibold">Communication</div>
              <div className="text-xl font-bold text-purple-400 mt-1">{finalScore.communication}%</div>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="text-[11px] text-slate-400 font-semibold">Problem Solving</div>
              <div className="text-xl font-bold text-amber-400 mt-1">{finalScore.problemSolving}%</div>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div className="text-[11px] text-slate-400 font-semibold">Speed & Fluency</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">{finalScore.speed}%</div>
            </div>
          </div>

          {/* Question-by-Question Breakdown */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Question-by-Question Performance
            </h3>

            <div className="space-y-3">
              {sessionResponses.map((res, idx) => (
                <div key={idx} className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold text-indigo-400">Q{idx + 1} ({res.category})</span>
                      <h4 className="text-xs font-bold text-white">{res.question}</h4>
                    </div>
                    <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                      {res.score}%
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 bg-slate-900 p-2.5 rounded-xl border border-slate-800/80">
                    <span className="text-slate-500 text-[10px] block font-semibold">Your Answer:</span>
                    {res.userAnswer}
                  </div>

                  <p className="text-[11px] text-indigo-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{res.feedback}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={handleStart}
              className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Interview</span>
            </button>
            <Link
              to="/student/dashboard"
              className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs text-center transition-colors"
            >
              Return to Student Dashboard
            </Link>
          </div>

        </div>
      )}

    </div>
  );
};

export default MockInterview;
