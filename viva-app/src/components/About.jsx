import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function useReveal(delay = 0) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView, delay }
}

function InfoCard({ num, title, desc, delay }) {
  const { ref, inView } = useReveal(delay)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 6, transition: { duration: 0.2 } }}
      style={{
        display: 'flex', gap: 20, alignItems: 'flex-start',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16, padding: '24px 24px',
        cursor: 'default', transition: 'border-color 0.25s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,107,74,0.3)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
    >
      <div style={{
        minWidth: 36, height: 36, borderRadius: 10,
        background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(255,107,74,0.3))',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.72rem', fontWeight: 800, color: 'rgba(255,255,255,0.6)',
        letterSpacing: '0.02em',
      }}>{num}</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: 8 }}>{title}</div>
        <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{desc}</div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const leftRef = useRef(null)
  const leftInView = useInView(leftRef, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{
      padding: '120px 32px',
      background: 'linear-gradient(180deg, #0D0D0D 0%, #111117 100%)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

        {/* LEFT */}
        <div ref={leftRef}>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}
          >About Viva Simulator</motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'white', marginBottom: 24 }}
          >
            Understand Your Project.<br />
            <span style={{ background: 'linear-gradient(135deg,#2563EB,#FF6B4A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Master Every Concept.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '0.95rem', lineHeight: 1.78, color: 'rgba(255,255,255,0.45)', marginBottom: 32 }}
          >
            Most students can build a great project — but struggle to explain it under pressure.
            Viva Simulator bridges that gap. It reads your project, generates precise viva questions,
            evaluates your answers, and trains you until you're truly ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex', gap: 32, paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {[['100%', 'Project-Specific'], ['Real-time', 'AI Feedback'], ['Adaptive', 'Difficulty']].map(([val, lab]) => (
              <div key={lab}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>{val}</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500, marginTop: 4 }}>{lab}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: stacked cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <InfoCard num="01" title="Project Understanding" desc="Upload your report or docs. The AI processes and indexes your project into a searchable knowledge base tailored specifically to your work." delay={0} />
          <InfoCard num="02" title="Technical Questioning" desc="Receive targeted, project-aware viva questions generated from your own materials — not generic textbook questions." delay={0.1} />
          <InfoCard num="03" title="Performance Improvement" desc="Get instant feedback on each answer. Track progress, revisit weak concepts, and build confidence session by session." delay={0.2} />
        </div>
      </div>
    </section>
  )
}
