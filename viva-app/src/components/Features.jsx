import React from 'react';
import { Database, Cpu, Target, Mic, BarChart3, Repeat } from 'lucide-react';

export default function Features() {
  const features = [
    {
      num: "01",
      tag: "RAG Pipeline",
      title: "Project-Aware Knowledge Ingestion",
      desc: "Parses PDF project reports, codebases, and architectural blueprints into dedicated vector knowledge spaces. Zero generic textbook trivia.",
      icon: Database
    },
    {
      num: "02",
      tag: "Adaptive Scrutiny",
      title: "Dynamic Examiner Personalities",
      desc: "Simulates diverse academic and industry panel scrutiny: from supportive university guides to rigorous external industry assessors.",
      icon: Cpu
    },
    {
      num: "03",
      tag: "Diagnostic Diagnostics",
      title: "Pinpoint Knowledge Gap Detection",
      desc: "Distinguishes between conceptual misunderstandings, lack of quantitative boundary data, and surface-level articulation.",
      icon: Target
    },
    {
      num: "04",
      tag: "Oral & Written",
      title: "Timed Viva Simulations",
      desc: "Practise under realistic timed examination conditions with instant line-item critique on clarity, brevity, and conviction.",
      icon: Mic
    },
    {
      num: "05",
      tag: "Quantitative Metrics",
      title: "Measurable Progress Tracking",
      desc: "Track mastery curves over sessions with clear competency breakdowns: Architecture, Security, Edge Cases, and Trade-offs.",
      icon: BarChart3
    },
    {
      num: "06",
      tag: "Continuous Loop",
      title: "Targeted Re-Viva Scaffolding",
      desc: "Automatically revisits flagged concepts with follow-up socratic questions until architectural comprehension is locked in.",
      icon: Repeat
    }
  ];

  return (
    <section id="features" className="py-28 bg-[#0D0F14] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181C24] border border-white/10 text-sand-300 text-xs font-mono mb-4 uppercase tracking-widest">
            <span>Capabilities Matrix</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-sand-50 tracking-tight mb-4">
            ENGINEERED FOR COMPLETE VIVA MASTERY
          </h2>
          <p className="text-sand-muted text-base leading-relaxed">
            Everything required to transform students from hesitant developers into authoritative technical presenters.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.num}
                className="charcoal-panel p-7 rounded-2xl relative transition-all duration-200 charcoal-panel-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-black text-electric-light">
                    {f.num}
                  </span>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-black/40 border border-white/10 text-sand-300 font-semibold">
                    {f.tag}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center mb-4 text-sand-200">
                  <Icon className="w-5 h-5 text-sand-100" />
                </div>

                <h3 className="font-display font-bold text-lg text-sand-100 mb-2">
                  {f.title}
                </h3>

                <p className="text-xs text-sand-muted leading-relaxed font-normal">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
