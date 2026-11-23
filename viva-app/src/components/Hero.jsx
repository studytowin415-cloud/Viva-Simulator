import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

/* ── Animated floating orbs background ── */
function Orbs() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Blue orb */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '15%', left: '10%',
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Coral orb */}
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute', top: '20%', right: '8%',
          width: 420, height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,74,0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Purple accent */}
      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, 50, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        style={{
          position: 'absolute', bottom: '15%', left: '30%',
          width: 300, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
    </div>
  )
}

/* ── Typewriter effect ── */
function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  useEffect(() => {
    const word = words[index]
    let timeout

    if (phase === 'typing') {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1800)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 400)
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setIndex((index + 1) % words.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, phase, index, words])

  return (
    <span style={{ color: '#FF6B4A' }}>
      {displayed}
      <span style={{
        display: 'inline-block', width: 3, height: '0.9em',
        background: '#FF6B4A', marginLeft: 2, verticalAlign: 'middle',
        animation: 'blink 1s step-start infinite',
      }} />
    </span>
  )
}

/* ── Mock Viva Window ── */
function MockWindow() {
  const questions = [
    'Explain how your RAG pipeline retrieves context from project documents.',
    'What is the role of vector embeddings in your system architecture?',
    'How does your model evaluate answer quality and assign scores?',
  ]
  const [qIdx, setQIdx] = useState(0)
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!answer.trim()) return
    setLoading(true)
    setTimeout(() => {
      setScore(Math.floor(Math.random() * 25) + 70)
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const handleNext = () => {
    setQIdx((qIdx + 1) % questions.length)
    setAnswer('')
    setScore(null)
    setSubmitted(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 20,
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
      }}>
        {/* Title bar */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '12px 16px',
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ display: 'flex', gap: 7 }}>
            {['#FF5F57','#FEBC2E','#28C840'].map((c,i) => (
              <div key={i} style={{ width:12, height:12, borderRadius:'50%', background:c }} />
            ))}
          </div>
          <div style={{
            flex:1, background:'rgba(255,255,255,0.06)', borderRadius:6,
            padding:'4px 12px', fontSize:'0.72rem', color:'rgba(255,255,255,0.4)',
            fontFamily:'monospace',
          }}>
            vivasimulator.app / mock-viva
          </div>
          <div style={{
            background:'rgba(34,197,94,0.15)', border:'1px solid rgba(34,197,94,0.3)',
            color:'#4ADE80', fontSize:'0.65rem', fontWeight:700,
            padding:'3px 10px', borderRadius:999,
          }}>● Live</div>
        </div>

        {/* Body */}
        <div style={{ padding: '24px' }}>
          {/* Progress */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
            <span style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.4)', fontWeight:600 }}>
              Question {qIdx + 1} of {questions.length}
            </span>
            <div style={{ display:'flex', gap:6 }}>
              {questions.map((_,i) => (
                <div key={i} style={{
                  height:3, width:28, borderRadius:999,
                  background: i <= qIdx ? 'linear-gradient(90deg,#2563EB,#FF6B4A)' : 'rgba(255,255,255,0.1)',
                  transition:'background 0.3s',
                }} />
              ))}
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={qIdx}
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-10 }}
              transition={{ duration:0.3 }}
              style={{
                background:'rgba(37,99,235,0.1)', border:'1px solid rgba(37,99,235,0.2)',
                borderRadius:12, padding:'18px 20px', marginBottom:16,
              }}
            >
              <div style={{ fontSize:'0.65rem', textTransform:'uppercase', letterSpacing:'0.1em', color:'#60A5FA', fontWeight:700, marginBottom:8 }}>
                AI Question
              </div>
              <div style={{ fontSize:'0.9rem', fontWeight:600, color:'rgba(255,255,255,0.9)', lineHeight:1.5 }}>
                {questions[qIdx]}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Answer area */}
          {!submitted ? (
            <textarea
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              rows={4}
              style={{
                width:'100%', background:'rgba(255,255,255,0.05)',
                border:'1px solid rgba(255,255,255,0.1)', borderRadius:10,
                padding:'14px 16px', fontSize:'0.84rem', color:'rgba(255,255,255,0.8)',
                fontFamily:'inherit', resize:'none', outline:'none', marginBottom:16,
                transition:'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor='rgba(37,99,235,0.5)'}
              onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.1)'}
            />
          ) : (
            <motion.div
              initial={{ opacity:0, scale:0.95 }}
              animate={{ opacity:1, scale:1 }}
              style={{
                background:'rgba(255,107,74,0.1)', border:'1px solid rgba(255,107,74,0.25)',
                borderRadius:10, padding:'16px', marginBottom:16,
              }}
            >
              <div style={{ fontSize:'0.72rem', color:'#FF8A70', fontWeight:700, marginBottom:6 }}>AI Feedback</div>
              <div style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.7)', lineHeight:1.6 }}>
                Good attempt. Your explanation covers the retrieval mechanism but lacks detail on chunking strategy and re-ranking.
              </div>
            </motion.div>
          )}

          {/* Footer row */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ display:'flex', gap:10 }}>
              <div style={{
                background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)',
                borderRadius:8, padding:'6px 14px', fontSize:'0.72rem', fontWeight:700,
                color: score ? '#FF8A70' : 'rgba(255,255,255,0.4)',
              }}>
                {score ? `Score: ${score}%` : 'Score: —'}
              </div>
              <div style={{
                background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)',
                borderRadius:8, padding:'6px 14px', fontSize:'0.72rem', fontWeight:700,
                color:'rgba(255,255,255,0.4)',
              }}>Gaps: 2</div>
            </div>

            {!submitted ? (
              <button onClick={handleSubmit} disabled={loading || !answer.trim()} style={{
                background: 'linear-gradient(135deg,#2563EB,#FF6B4A)',
                border:'none', borderRadius:999, padding:'8px 20px',
                fontSize:'0.8rem', fontWeight:700, color:'white', cursor:'pointer',
                opacity: (!answer.trim() || loading) ? 0.5 : 1,
                transition:'all 0.2s',
              }}>
                {loading ? 'Evaluating...' : 'Submit →'}
              </button>
            ) : (
              <button onClick={handleNext} style={{
                background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.15)',
                borderRadius:999, padding:'8px 20px', fontSize:'0.8rem', fontWeight:700,
                color:'white', cursor:'pointer', transition:'all 0.2s',
              }}>
                Next Question →
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', paddingTop:80, overflow:'hidden' }}>
      <style>{`@keyframes blink { 50% { opacity:0; } }`}</style>
      <Orbs />

      <div style={{ maxWidth:1180, margin:'0 auto', padding:'60px 32px', width:'100%', position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6 }}
            >
              <div style={{
                display:'inline-flex', alignItems:'center', gap:8,
                border:'1px solid rgba(255,107,74,0.35)',
                background:'rgba(255,107,74,0.08)',
                borderRadius:999, padding:'6px 16px', marginBottom:28,
              }}>
                <div style={{ width:7, height:7, borderRadius:'50%', background:'#FF6B4A', animation:'blink 1.8s step-start infinite' }} />
                <span style={{ fontSize:'0.72rem', fontWeight:700, color:'#FF8A70', letterSpacing:'0.08em', textTransform:'uppercase' }}>
                  AI-Powered Viva Preparation
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.1 }}
              style={{
                fontSize:'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight:900, lineHeight:1.06, letterSpacing:'-0.035em',
                color:'white', marginBottom:12,
              }}
            >
              Prepare Smarter.
            </motion.h1>

            <motion.h1
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.2 }}
              style={{
                fontSize:'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight:900, lineHeight:1.06, letterSpacing:'-0.035em',
                marginBottom:28, minHeight:'1.1em',
              }}
            >
              <Typewriter words={['Present With Confidence.', 'Master Every Concept.', 'Ace Your Viva.']} />
            </motion.h1>

            <motion.p
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.3 }}
              style={{
                fontSize:'1.05rem', lineHeight:1.75, color:'rgba(255,255,255,0.55)',
                maxWidth:460, marginBottom:40,
              }}
            >
              An AI-powered platform that reads your project, generates targeted viva questions,
              evaluates your answers, and trains you until you can explain every concept with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.7, delay:0.4 }}
              style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:40 }}
            >
              <a href="#cta" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                background:'linear-gradient(135deg,#2563EB 0%,#FF6B4A 100%)',
                color:'white', padding:'13px 30px', borderRadius:999,
                fontWeight:700, fontSize:'0.95rem', textDecoration:'none',
                boxShadow:'0 8px 32px rgba(255,107,74,0.35)',
                transition:'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(255,107,74,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 32px rgba(255,107,74,0.35)' }}
              >Start Practising →</a>

              <a href="#features" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                border:'1px solid rgba(255,255,255,0.15)',
                color:'rgba(255,255,255,0.8)', padding:'13px 30px', borderRadius:999,
                fontWeight:600, fontSize:'0.95rem', textDecoration:'none',
                transition:'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.4)'; e.currentTarget.style.color='white' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.15)'; e.currentTarget.style.color='rgba(255,255,255,0.8)' }}
              >Explore Features</a>
            </motion.div>

            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ duration:0.7, delay:0.6 }}
              style={{ display:'flex', alignItems:'center', gap:24 }}
            >
              {[['RAG-Powered', '#2563EB'], ['Adaptive AI', '#FF6B4A'], ['Project-Aware', '#6366F1']].map(([t,c]) => (
                <div key={t} style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <div style={{ width:7, height:7, borderRadius:'50%', background:c }} />
                  <span style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.4)', fontWeight:500 }}>{t}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Interactive mock window */}
          <div>
            <MockWindow />
          </div>
        </div>
      </div>
    </section>
  )
}
