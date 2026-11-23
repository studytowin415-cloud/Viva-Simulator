import React, { useState, useEffect } from 'react';
import { Terminal, Shield, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#090A0D]/90 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-2xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#181C24] border border-white/15 flex items-center justify-center font-mono font-bold text-xs text-sand-100 group-hover:border-electric-blue transition-colors">
            VS
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg text-sand-50 tracking-tight flex items-center gap-2">
              VIVA SIMULATOR
              <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
            </span>
            <span className="text-[10px] text-sand-muted font-mono tracking-widest uppercase">
              Defense Engine
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-xs font-semibold uppercase tracking-wider text-sand-300 hover:text-white transition-colors">About</a>
          <a href="#loop" className="text-xs font-semibold uppercase tracking-wider text-sand-300 hover:text-white transition-colors">Feedback Loop</a>
          <a href="#simulator" className="text-xs font-semibold uppercase tracking-wider text-sand-300 hover:text-white transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span>
            Simulator
          </a>
          <a href="#features" className="text-xs font-semibold uppercase tracking-wider text-sand-300 hover:text-white transition-colors">Capabilities</a>
          <a href="#comparison" className="text-xs font-semibold uppercase tracking-wider text-sand-300 hover:text-white transition-colors">Why Us</a>
          <a href="#vision" className="text-xs font-semibold uppercase tracking-wider text-sand-300 hover:text-white transition-colors">Vision</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#simulator" 
            className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-electric-blue hover:bg-electric-blue-hover transition-all duration-200 shadow-md shadow-electric-blue/30 active:translate-y-0.5"
          >
            Launch Mock Viva
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-sand-300 hover:text-white p-2"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1116] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-sand-200">About</a>
          <a href="#loop" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-sand-200">Feedback Loop</a>
          <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-electric-light">Interactive Simulator</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-sand-200">Capabilities</a>
          <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-sand-200">Why Us</a>
          <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 rounded-lg bg-electric-blue font-bold text-xs uppercase tracking-wider text-white">
            Launch Mock Viva
          </a>
        </div>
      )}
    </header>
  );
}
