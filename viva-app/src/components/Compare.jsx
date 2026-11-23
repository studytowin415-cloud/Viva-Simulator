import React from 'react';
import { Check, X, Shield, Cpu, Compass, Layers, Award } from 'lucide-react';

export default function Compare() {
  const rows = [
    { feature: "Grounding in Your Actual Project", trad: "Generic generic textbook questions", vs: "100% RAG-retrieved from your code & doc" },
    { feature: "Feedback Speed", trad: "Days later (or never before actual exam)", vs: "Instantaneous with line-item critique" },
    { feature: "Examiner Adaptation", trad: "Rigid memorization checklist", vs: "Adapts dynamically to student depth" },
    { feature: "Knowledge Gap Diagnostics", trad: "Vague 'needs improvement' comments", vs: "Explicit conceptual gap categorization" },
    { feature: "Re-examination of Weak Spots", trad: "Rarely done before final defense", vs: "Automated continuous re-viva drills" },
    { feature: "Availability & Stress Level", trad: "High anxiety mock once a semester", vs: "Unlimited low-pressure practice anytime" }
  ];

  const pillars = [
    { name: "Intelligence", sub: "Learns and adapts", num: "01" },
    { name: "Trust", sub: "Reliable and transparent", num: "02" },
    { name: "Innovation", sub: "Built for the future", num: "03" },
    { name: "Simplicity", sub: "Easy to use", num: "04" },
    { name: "Impact", sub: "Better learners, stronger tomorrow", num: "05" }
  ];

  return (
    <section id="comparison" className="py-28 bg-[#090A0D] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181C24] border border-white/10 text-sand-300 text-xs font-mono mb-4 uppercase tracking-widest">
            <span>Evaluation Comparison</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-sand-50 tracking-tight mb-4">
            TRADITIONAL PREP VS. AI DEFENSE
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="charcoal-panel rounded-2xl overflow-hidden border border-white/15 mb-24">
          <div className="grid grid-cols-12 bg-[#141720] p-5 border-b border-white/10 font-mono text-xs uppercase tracking-wider text-sand-muted font-bold">
            <div className="col-span-5 sm:col-span-4">Evaluation Metric</div>
            <div className="col-span-3 sm:col-span-4">Traditional Method</div>
            <div className="col-span-4 text-electric-light">Viva Simulator</div>
          </div>

          {rows.map((r, i) => (
            <div 
              key={i}
              className={`grid grid-cols-12 p-5 items-center text-xs sm:text-sm border-b border-white/5 hover:bg-white/[0.02] transition-colors ${
                i % 2 === 0 ? 'bg-transparent' : 'bg-[#0E1015]/60'
              }`}
            >
              <div className="col-span-5 sm:col-span-4 font-bold text-sand-100 pr-2">
                {r.feature}
              </div>
              <div className="col-span-3 sm:col-span-4 text-sand-muted pr-2 flex items-center gap-2">
                <span className="text-sand-muted font-mono font-bold">•</span>
                <span className="text-xs">{r.trad}</span>
              </div>
              <div className="col-span-4 text-sand-200 font-semibold flex items-center gap-2 text-xs">
                <Check className="w-4 h-4 text-electric-light shrink-0" />
                <span>{r.vs}</span>
              </div>
            </div>
          ))}
        </div>

        {/* PPT Triad: Goal, Solution, Vision */}
        <div id="vision" className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          <div className="charcoal-panel p-7 rounded-2xl border-t-4 border-t-sand-300">
            <span className="text-xs font-mono text-sand-muted uppercase tracking-widest block mb-3 font-semibold">01 // Purpose</span>
            <h3 className="font-display font-black text-xl text-sand-100 mb-3">The Goal</h3>
            <p className="text-sm text-sand-muted leading-relaxed font-normal">
              Bridge the gap between building a project and confidently explaining it during high-stakes university and enterprise defenses.
            </p>
          </div>

          <div className="charcoal-panel p-7 rounded-2xl border-t-4 border-t-electric-blue">
            <span className="text-xs font-mono text-electric-light uppercase tracking-widest block mb-3 font-semibold">02 // Mechanism</span>
            <h3 className="font-display font-black text-xl text-sand-100 mb-3">The Solution</h3>
            <p className="text-sm text-sand-muted leading-relaxed font-normal">
              A continuous, AI-powered feedback loop that understands your project, identifies knowledge gaps, teaches and adapts until you're ready.
            </p>
          </div>

          <div className="charcoal-panel p-7 rounded-2xl border-t-4 border-t-sand-400">
            <span className="text-xs font-mono text-sand-muted uppercase tracking-widest block mb-3 font-semibold">03 // Long-term</span>
            <h3 className="font-display font-black text-xl text-sand-100 mb-3">Our Vision</h3>
            <p className="text-sm text-sand-muted leading-relaxed font-normal">
              Empower students to become confident, technically strong, and independent learners capable of standing behind their work.
            </p>
          </div>
        </div>

        {/* 5 Outcome Pillars from PPT */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181C24] border border-white/10 text-sand-300 text-xs font-mono mb-4 uppercase tracking-widest">
            <span>Core Values</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-4xl text-sand-50 tracking-tight">
            THE FIVE OUTCOME PILLARS
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {pillars.map((p) => (
            <div
              key={p.name}
              className="charcoal-panel p-6 rounded-2xl text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform"
            >
              <span className="text-xs font-mono font-black text-electric-light mb-1.5">{p.num}</span>
              <h4 className="font-display font-bold text-sm text-sand-100">{p.name}</h4>
              <p className="text-[11px] text-sand-muted mt-1 leading-snug">{p.sub}</p>
            </div>
          ))}
        </div>

        {/* Editorial Quote */}
        <div className="text-center">
          <div className="inline-block p-6 rounded-2xl charcoal-panel border border-white/15 max-w-xl">
            <p className="text-base sm:text-lg italic text-sand-200 font-normal">
              "Not just a tool, but a step towards <span className="text-sand-50 font-bold not-italic">confident learners</span>."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
