import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const FEATURES = [
  { n:'01', cat:'Upload', title:'Project Upload & Analysis', desc:'Upload your project report, documentation, or code. The system parses and indexes your content into a knowledge base ready for assessment.' },
  { n:'02', cat:'Generate', title:'AI-Powered Viva Questions', desc:'Questions are generated directly from your project using a RAG pipeline — not textbooks. Every question is relevant to what you built.' },
  { n:'03', cat:'Practise', title:'Interactive Mock Viva', desc:'Simulate a real viva. Answer questions, navigate difficulty levels, and practise responding under realistic exam conditions.' },
  { n:'04', cat:'Evaluate', title:'Answer Evaluation', desc:'Each answer is evaluated for accuracy, depth and clarity. Get structured feedback showing exactly where your explanation fell short.' },
  { n:'05', cat:'Track', title:'Performance Tracking', desc:'View scores across sessions. See which concepts are mastered and which need attention — topic by topic, session by session.' },
  { n:'06', cat:'Adapt', title:'Personalised Practice', desc:'The system identifies your knowledge gaps and re-focuses your sessions on weak areas, adapting difficulty as your mastery grows.' },
]

function FeatureCard({ n, cat, title, desc, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16, padding: '28px 24px',
        cursor: 'default', transition: 'border-color 0.3s, box-shadow 0.3s',
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.35)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(37,99,235,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top glow accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.5), rgba(255,107,74,0.5), transparent)',
        opacity: 0,
        transition: 'opacity 0.3s',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div style={{
          fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
        }}>{n} — {cat}</div>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(255,107,74,0.2))',
          border: '1px solid rgba(255,255,255,0.08)',
        }} />
      </div>
      <div style={{ fontWeight: 700, fontSize: '1rem', color: 'white', marginBottom: 10, lineHeight: 1.3 }}>{title}</div>
      <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.68 }}>{desc}</div>
    </motion.div>
  )
}

export default function Features() {
  const hRef = useRef(null)
  const hInView = useInView(hRef, { once: true, margin: '-80px' })

  return (
    <section id="features" style={{
      padding: '120px 32px',
      background: 'linear-gradient(180deg, #111117 0%, #0D0D0D 100%)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <div ref={hRef} style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.p
            initial={{ opacity:0, y:16 }} animate={hInView?{opacity:1,y:0}:{}}
            transition={{ duration:0.5 }}
            style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginBottom:16 }}
          >Core Features</motion.p>
          <motion.h2
            initial={{ opacity:0, y:24 }} animate={hInView?{opacity:1,y:0}:{}}
            transition={{ duration:0.6, delay:0.1 }}
            style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, letterSpacing:'-0.03em', color:'white', marginBottom:16 }}
          >Everything you need to prepare<br/>for your next viva.</motion.h2>
          <motion.p
            initial={{ opacity:0, y:20 }} animate={hInView?{opacity:1,y:0}:{}}
            transition={{ duration:0.6, delay:0.2 }}
            style={{ fontSize:'1rem', color:'rgba(255,255,255,0.4)', lineHeight:1.7, maxWidth:480, margin:'0 auto' }}
          >Six focused capabilities, built specifically for project-based viva examinations.</motion.p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.n} {...f} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
