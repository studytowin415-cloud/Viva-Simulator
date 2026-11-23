import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Features from './components/Features';
import Compare from './components/Compare';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090A0D] text-sand-200">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <About />
        <Features />
        <Compare />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
