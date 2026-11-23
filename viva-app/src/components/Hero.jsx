import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Hero() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);

  const sampleQuestions = [
    {
      id: 1,
      topic: "RAG Pipeline & Embeddings",
      question: "How does your system prevent hallucination during knowledge retrieval from student project documentation?",
      sampleGood: "We implement cross-encoder reranking after dense vector retrieval, combined with strict context window grounding and temperature=0.1."
    },
    {
      id: 2,
      topic: "Scalability & Vector DB",
      question: "Why did you choose your specific indexing scheme over traditional relational full-text search?",
      sampleGood: "Traditional BM25 matches exact lexical tokens but fails on conceptual synonyms like 'latency' vs 'response delay'. Vector embeddings preserve semantic intent."
    },
    {
      id: 3,
      topic: "Adaptive Difficulty Engine",
      question: "If a student answers poorly across initial questions, how does the system adjust the viva path?",
      sampleGood: "The state machine steps back from synthesis/evaluation questions to foundational comprehension, flagging that node in the knowledge gap ledger."
    }
  ];

  const currentQ = sampleQuestions[activeQuestionIndex];

  const handleEvaluate = () => {
    if (!userAnswer.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      const wordCount = userAnswer.trim().split(/\s+/).length;
      const score = Math.min(96, Math.max(70, Math.floor(75 + (wordCount * 0.75))));
      setEvaluationResult({
        score: score,
        clarity: score > 85 ? "Authoritative Defense" : "Satisfactory",
        feedback: score > 85 
          ? "Crisp, concise technical articulation. Examiner confidence rating: 9.4/10."
          : "Valid conceptual foundation. Recommendation: Bolster exact latency and hardware trade-offs.",
        detectedGaps: score > 85 ? [] : ["Quantitative boundary metrics", "Failure domain recovery plan"]
      });
    }, 1100);
  };

  const handleInsertSample = () => {
    setUserAnswer(currentQ.sampleGood);
  };

  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Bold Editorial Headlines */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#161922] border border-white/15 text-sand-200 text-xs font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
              <span className="uppercase tracking-widest font-semibold text-[11px]">AI-Powered Viva Preparation Platform</span>
            </div>

            {/* Huge Bold Title */}
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-sand-50 tracking-tighter leading-[1.04] mb-8">
              BRIDGE THE GAP BETWEEN <br/>
              <span className="text-sand-300 border-b-2 border-sand-400/40 pb-1">
                BUILDING A PROJECT
              </span> <br/>
              AND DEFENDING IT.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-sand-muted leading-relaxed max-w-xl mb-10 font-normal">
              An intelligent, adaptive feedback loop that indexes your project documentation, anticipates tough examiner scrutiny, and trains you to defend every architectural choice with authority.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <a 
                href="#simulator" 
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-electric-blue hover:bg-electric-blue-hover transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-electric-blue/30 active:translate-y-0.5 hover:-translate-y-0.5"
              >
                <span>Launch Interactive Viva</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#loop" 
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-sand-200 hover:text-white bg-[#161922] hover:bg-[#1E222D] border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                <span>The Feedback Loop</span>
              </a>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="font-mono font-black text-3xl text-sand-100">100%</div>
                <div className="text-xs text-sand-muted font-mono uppercase tracking-wider mt-1">Project Grounded</div>
              </div>
              <div>
                <div className="font-mono font-black text-3xl text-electric-light">RAG</div>
                <div className="text-xs text-sand-muted font-mono uppercase tracking-wider mt-1">Context Engine</div>
              </div>
              <div>
                <div className="font-mono font-black text-3xl text-sand-300">Adaptive</div>
                <div className="text-xs text-sand-muted font-mono uppercase tracking-wider mt-1">Examiner Loop</div>
              </div>
            </div>

          </div>

          {/* Right: Bold Terminal Window */}
          <div className="lg:col-span-5 relative">
            <div className="charcoal-panel rounded-2xl p-6 border border-white/15 shadow-2xl">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#2A2E39] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#2A2E39] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#2A2E39] inline-block"></span>
                  <span className="text-xs font-mono text-sand-muted ml-2">Session_RAG#084</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
                  <span className="text-[11px] font-mono text-sand-300 uppercase tracking-widest font-semibold">Active Session</span>
                </div>
              </div>

              {/* Question Box */}
              <div className="bg-[#0C0E12] border border-white/10 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between text-xs text-electric-light font-mono mb-2">
                  <span className="font-bold">QUESTION {activeQuestionIndex + 1} OF 3</span>
                  <span className="text-sand-muted uppercase text-[10px]">{currentQ.topic}</span>
                </div>
                <p className="text-sm text-sand-100 font-medium leading-relaxed">
                  "{currentQ.question}"
                </p>
              </div>

              {/* Defense Input */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] text-sand-muted font-mono uppercase tracking-wider font-semibold">Student Defense:</label>
                  <button 
                    onClick={handleInsertSample}
                    className="text-xs text-sand-200 hover:text-white underline font-mono"
                  >
                    Insert Model Defense
                  </button>
                </div>
                <textarea
                  rows={3}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="State your technical justification with boundary constraints..."
                  className="w-full bg-[#0C0E12] border border-white/10 rounded-xl p-3.5 text-xs text-sand-100 placeholder:text-sand-muted/50 focus:outline-none focus:border-sand-300 transition-all font-sans"
                />
              </div>

              {/* Question Switcher & Submit */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  {sampleQuestions.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => {
                        setActiveQuestionIndex(idx);
                        setUserAnswer("");
                        setEvaluationResult(null);
                      }}
                      className={`w-7 h-7 rounded text-xs font-mono font-bold transition-all ${
                        activeQuestionIndex === idx
                          ? 'bg-sand-200 text-black font-extrabold'
                          : 'bg-[#181C24] text-sand-muted hover:text-sand-200'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleEvaluate}
                  disabled={isAnalyzing || !userAnswer.trim()}
                  className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    !userAnswer.trim()
                      ? 'bg-[#181C24] text-sand-muted/40 cursor-not-allowed'
                      : 'bg-electric-blue hover:bg-electric-blue-hover text-white shadow-md shadow-electric-blue/30'
                  }`}
                >
                  {isAnalyzing ? (
                    <span>Evaluating...</span>
                  ) : (
                    <span>Evaluate Defense →</span>
                  )}
                </button>
              </div>

              {/* Evaluation Output Drawer */}
              {evaluationResult && (
                <div className="mt-5 pt-4 border-t border-white/10 animate-fadeIn">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-sand-200 uppercase tracking-widest font-bold">Examiner Scorecard</span>
                    <span className="text-sm font-mono font-black text-electric-light">
                      {evaluationResult.score} / 100
                    </span>
                  </div>
                  <p className="text-xs text-sand-300 leading-relaxed mb-3">
                    {evaluationResult.feedback}
                  </p>
                  {evaluationResult.detectedGaps.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] text-sand-muted font-mono uppercase font-semibold">Flagged:</span>
                      {evaluationResult.detectedGaps.map((gap, i) => (
                        <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0C0E12] border border-white/10 text-sand-300">
                          {gap}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
