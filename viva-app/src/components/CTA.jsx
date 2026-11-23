import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#0A0B0F] border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181C24] border border-white/10 text-sand-300 text-xs font-mono mb-6 uppercase tracking-widest">
          <span>Get Started Today</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl text-sand-50 tracking-tighter mb-6 leading-tight">
          YOUR NEXT VIVA STARTS HERE.
        </h2>

        <p className="text-base sm:text-lg text-sand-muted max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Understand every concept. Practise every answer. Defend every architectural trade-off before stepping into the examination.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#simulator"
            className="px-8 py-4 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-electric-blue hover:bg-electric-blue-hover transition-all shadow-xl shadow-electric-blue/30 active:translate-y-0.5 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Start Practicing Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#loop"
            className="px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-sand-200 hover:text-white bg-[#181C24] hover:bg-[#202530] border border-white/10 transition-all"
          >
            Workflow Details
          </a>
        </div>
      </div>
    </section>
  );
}
