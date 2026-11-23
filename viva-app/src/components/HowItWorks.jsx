import React, { useState } from 'react';
import { ArrowRight, Layers, HelpCircle, Target, TrendingUp, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: "01",
      title: "Project Understanding",
      desc: "Process project materials (reports, architecture, documentation) into a searchable knowledge base using vector embeddings.",
      details: "Extracts architectural constraints, component interactions, and library choices to establish project-specific context.",
      icon: Layers
    },
    {
      num: "02",
      title: "Assessment & Question Generation",
      desc: "Generate project-specific viva questions, evaluate student answers in real-time, and adapt difficulty based on response strength.",
      details: "Simulates varied examiner scrutiny: architectural validity, failure modes, and performance trade-offs.",
      icon: HelpCircle
    },
    {
      num: "03",
      title: "Knowledge Gaps & Training",
      desc: "Identify weak concepts, imprecise assumptions, and provide structured explanations and targeted practice drills.",
      details: "Categorizes conceptual deficiencies: missing trade-off justification, error handling ambiguity, or weak boundary analysis.",
      icon: Target
    },
    {
      num: "04",
      title: "Reassessment & Progress Tracking",
      desc: "Re-viva weak concepts, compare performance trends, and track mastery curves across topics until exam readiness is achieved.",
      details: "Executes follow-up verification drills on previously flagged concepts to ensure comprehensive comprehension.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="loop" className="py-28 bg-[#0D0F14] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181C24] border border-white/10 text-sand-300 text-xs font-mono mb-4 uppercase tracking-widest">
            <RefreshCw className="w-3.5 h-3.5 text-electric-light animate-spin-slow" />
            <span>Continuous Feedback Loop</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-sand-50 tracking-tight mb-4">
            FROM CODE REPOSITORY TO VIVA READY.
          </h2>
          <p className="text-sand-muted text-base sm:text-lg leading-relaxed font-normal">
            An adaptive feedback cycle that dynamically calibrates questioning depth based on your demonstrated technical mastery.
          </p>
        </div>

        {/* 4-Column Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                onClick={() => setActiveStep(idx + 1)}
                className={`charcoal-panel p-6 rounded-2xl cursor-pointer transition-all duration-200 relative ${
                  activeStep === idx + 1
                    ? 'border-sand-200 ring-2 ring-sand-200/30 bg-[#161922] -translate-y-1.5 shadow-2xl'
                    : 'hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono font-black text-2xl text-electric-light">
                    {s.num}
                  </span>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                    <Icon className="w-4 h-4 text-sand-200" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-sand-100 mb-2 leading-snug">
                  {s.title}
                </h3>
                
                <p className="text-xs text-sand-muted leading-relaxed mb-4 font-normal">
                  {s.desc}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-sand-muted font-mono">
                  <span>Stage details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sand-200" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Stage Inspector */}
        <div className="mt-8 charcoal-panel rounded-2xl p-7 border border-white/15 bg-[#141720]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <div className="text-xs font-mono font-bold text-electric-light uppercase tracking-widest mb-1.5">
                ACTIVE STAGE INSPECTOR // STEP {steps[activeStep - 1].num}
              </div>
              <h4 className="font-display font-extrabold text-2xl text-sand-100">
                {steps[activeStep - 1].title}
              </h4>
              <p className="text-sm text-sand-muted mt-2 max-w-2xl leading-relaxed">
                {steps[activeStep - 1].details}
              </p>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-sand-200 font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
              Live Architecture Hook
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
