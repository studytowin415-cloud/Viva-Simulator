import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#07080B] border-t border-white/[0.08] text-sand-muted text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#181C24] border border-white/10 flex items-center justify-center font-mono font-bold text-sand-100 text-xs">
            VS
          </div>
          <div>
            <div className="font-display font-bold text-sand-200 text-sm tracking-tight">Viva Simulator</div>
            <div className="text-[10px] text-sand-muted font-mono uppercase tracking-wider">Practice • Improve • Ready</div>
          </div>
        </div>

        <div className="flex gap-6 text-xs font-semibold uppercase tracking-wider text-sand-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#loop" className="hover:text-white transition-colors">Feedback Loop</a>
          <a href="#simulator" className="hover:text-white transition-colors">Simulator</a>
          <a href="#features" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#comparison" className="hover:text-white transition-colors">Evaluation</a>
        </div>

        <div className="font-mono text-[11px] text-sand-muted/80">
          © 2026 Viva Simulator. Built for confident technical defense.
        </div>
      </div>
    </footer>
  );
}
