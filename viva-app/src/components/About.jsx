import React, { useState } from 'react';
import { Shield, Cpu, Database, Check, AlertTriangle, ArrowRight } from 'lucide-react';

export default function About() {
  const [projectType, setProjectType] = useState("ai");
  const [difficulty, setDifficulty] = useState("External");
  const [customAnswer, setCustomAnswer] = useState("");
  const [isGrading, setIsGrading] = useState(false);
  const [result, setResult] = useState(null);

  const projects = {
    ai: {
      title: "Autonomous Drone Navigation with Computer Vision",
      stack: "PyTorch • YOLOv8 • ROS2 • TensorRT",
      q: "Why did you choose YOLOv8 nano over Faster R-CNN given the strict battery & compute constraints on your UAV payload?",
      goodAnswer: "YOLOv8n runs at ~85 FPS on Jetson Nano with TensorRT FP16 quantization under a 7-watt power envelope, whereas Faster R-CNN's two-stage regional proposal network requires >200ms latency, causing obstacle collision at velocities >3 m/s."
    },
    cloud: {
      title: "Distributed Microservices Banking Gateway",
      stack: "Go • Apache Kafka • Redis • gRPC",
      q: "How does your transaction ledger prevent double-spending when a network partition separates two Kafka broker clusters?",
      goodAnswer: "We enforce the Raft consensus algorithm inside Kafka Kraft mode with acks=all and idempotent producers. When a partition isolates a broker without a quorum majority, writes are rejected immediately with backoff."
    },
    health: {
      title: "Privacy-Preserving EHR System via Zero-Knowledge",
      stack: "Rust • SnarkJS • Ethereum • IPFS",
      q: "What prevents a malicious hospital worker from inferring patient diagnosis through differential metadata leakages in your zero-knowledge circuit?",
      goodAnswer: "The circom circuit only exposes blinded zk-SNARK commitments (Poseidon hash hashes). Public inputs strictly contain Pedersen blinding salts, leaving diagnoses zero-knowledge verified without patient identity leakage."
    }
  };

  const curr = projects[projectType];

  const runGrading = () => {
    if (!customAnswer.trim()) return;
    setIsGrading(true);
    setTimeout(() => {
      setIsGrading(false);
      const isModel = customAnswer.length > 100;
      setResult({
        overall: isModel ? 94 : 72,
        metrics: {
          clarity: isModel ? 95 : 74,
          examinerImpression: isModel ? "Authoritative Defense" : "Requires Follow-up"
        },
        strengths: isModel 
          ? ["Quantitative metrics cited directly", "Hardware constraints justified", "Trade-offs articulated"]
          : ["Understands core problem domain", "Sound fundamental intuition"],
        blindspots: isModel
          ? ["Zero critical deficiencies. Ready for examination."]
          : ["Lacks concrete latency benchmark figures", "Omitted failure domain degradation strategy"]
      });
    }, 1100);
  };

  return (
    <section id="simulator" className="py-28 relative overflow-hidden bg-[#090A0D]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#181C24] border border-white/10 text-sand-300 text-xs font-mono mb-4 uppercase tracking-widest">
            <span>Interactive Simulator Sandbox</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-sand-50 tracking-tight mb-4">
            SIMULATE A VIVA IN 60 SECONDS
          </h2>
          <p className="text-sand-muted text-base leading-relaxed">
            Select an engineering domain and test your defense against realistic examiner scrutiny.
          </p>
        </div>

        {/* Sandbox Shell */}
        <div className="charcoal-panel rounded-2xl p-6 sm:p-10 border border-white/15 bg-[#12141C]">
          
          {/* Project Picker & Configuration */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
            <div>
              <label className="text-xs font-mono text-sand-muted uppercase tracking-wider font-semibold block mb-3">
                1. Select Simulated Project:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { key: 'ai', label: 'Drone Vision (Edge AI)' },
                  { key: 'cloud', label: 'FinTech Gateway (Distributed)' },
                  { key: 'health', label: 'ZK-EHR System (Cryptography)' },
                ].map(p => (
                  <button
                    key={p.key}
                    onClick={() => {
                      setProjectType(p.key);
                      setCustomAnswer("");
                      setResult(null);
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                      projectType === p.key
                        ? 'bg-sand-200 text-black shadow-md'
                        : 'bg-[#181C24] text-sand-muted hover:text-sand-200 border border-white/10'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-sand-muted uppercase tracking-wider font-semibold block mb-3">
                2. Examiner Tone:
              </label>
              <div className="flex gap-2">
                {['Advisory Guide', 'External Examiner', 'Strict Professor'].map(d => (
                  <button
                    key={d}
                    onClick={() => setDifficulty(d)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      difficulty === d
                        ? 'bg-electric-blue text-white shadow-md'
                        : 'bg-[#181C24] text-sand-muted hover:text-sand-200 border border-white/10'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Question Box */}
          <div className="bg-[#0A0C10] rounded-xl p-6 border border-white/10 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="font-display font-extrabold text-xl text-sand-100">{curr.title}</h3>
              <span className="text-xs font-mono text-sand-muted bg-[#161922] px-3 py-1 rounded border border-white/5">{curr.stack}</span>
            </div>
            
            <div className="mt-4 p-4 rounded-lg bg-[#141722] border border-white/10">
              <span className="text-[11px] font-mono text-electric-light uppercase tracking-widest font-bold block mb-1.5">
                {difficulty} Question:
              </span>
              <p className="text-base text-sand-100 font-medium leading-relaxed">
                "{curr.q}"
              </p>
            </div>
          </div>

          {/* Answer Input */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono text-sand-muted uppercase tracking-wider font-semibold">
                Defend Your Architectural Decision:
              </label>
              <button
                onClick={() => setCustomAnswer(curr.goodAnswer)}
                className="text-xs text-sand-200 hover:text-white underline font-mono font-bold"
              >
                Paste Model Defense
              </button>
            </div>

            <textarea
              rows={4}
              value={customAnswer}
              onChange={(e) => setCustomAnswer(e.target.value)}
              placeholder="Explain why this approach satisfies both performance and constraints..."
              className="w-full bg-[#0A0C10] border border-white/10 rounded-xl p-4 text-sm text-sand-100 placeholder:text-sand-muted/50 focus:outline-none focus:border-sand-300 transition-all font-sans"
            />
          </div>

          {/* Evaluate Button */}
          <div className="flex items-center justify-end">
            <button
              onClick={runGrading}
              disabled={isGrading || !customAnswer.trim()}
              className={`px-7 py-3 rounded-xl font-bold uppercase tracking-wider text-xs text-white transition-all flex items-center gap-2 ${
                !customAnswer.trim()
                  ? 'bg-[#181C24] text-sand-muted/40 cursor-not-allowed'
                  : 'bg-electric-blue hover:bg-electric-blue-hover shadow-lg shadow-electric-blue/30 active:translate-y-0.5'
              }`}
            >
              {isGrading ? (
                <span>Evaluating Defense...</span>
              ) : (
                <span>Submit for Viva Evaluation →</span>
              )}
            </button>
          </div>

          {/* Detailed Scorecard */}
          {result && (
            <div className="mt-8 pt-8 border-t border-white/10 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Score */}
                <div className="md:col-span-4 bg-[#0A0C10] rounded-xl p-6 border border-white/10 text-center flex flex-col items-center justify-center">
                  <div className="text-xs text-sand-muted font-mono uppercase mb-2">Confidence Rating</div>
                  <div className="text-5xl font-mono font-black text-sand-100">
                    {result.overall}%
                  </div>
                  <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-mono font-bold text-sand-200 bg-[#161922] border border-white/15">
                    {result.metrics.examinerImpression}
                  </span>
                </div>

                {/* Feedback Breakdown */}
                <div className="md:col-span-8 space-y-4">
                  <div>
                    <div className="text-xs font-mono text-sand-200 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                      <Check className="w-4 h-4 text-electric-light" />
                      <span>Technical Strengths:</span>
                    </div>
                    <ul className="text-xs text-sand-muted space-y-1.5 font-normal">
                      {result.strengths.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-electric-light font-bold">✓</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-sand-200 uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-sand-400" />
                      <span>Flagged Blindspots:</span>
                    </div>
                    <ul className="text-xs text-sand-muted space-y-1.5 font-normal">
                      {result.blindspots.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-sand-400 font-bold">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
