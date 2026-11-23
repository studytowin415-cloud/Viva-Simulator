import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cta" style={{
      padding: '140px 32px',
      background: '#0D0D0D',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-30%,-60%)',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,74,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div ref={ref} style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.5 }}
          style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginBottom:20 }}
        >Get Started</motion.p>

        <motion.h2
          initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.65, delay:0.1 }}
          style={{
            fontSize:'clamp(2.2rem,5vw,4rem)', fontWeight:900,
            letterSpacing:'-0.04em', lineHeight:1.06, marginBottom:20,
          }}
        >
          <span style={{ color:'white' }}>Your Next Viva</span><br/>
          <span style={{ background:'linear-gradient(135deg,#2563EB 20%,#FF6B4A 80%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
            Starts Here.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, delay:0.2 }}
          style={{ fontSize:'1.05rem', color:'rgba(255,255,255,0.45)', lineHeight:1.72, marginBottom:40, maxWidth:480, margin:'0 auto 40px' }}
        >
          Understand every concept. Practise every answer.<br/>
          Walk into your viva with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, delay:0.3 }}
          style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, boxShadow: '0 20px 60px rgba(255,107,74,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'linear-gradient(135deg,#2563EB 0%,#FF6B4A 100%)',
              color:'white', padding:'16px 36px', borderRadius:999,
              fontWeight:800, fontSize:'1rem', textDecoration:'none',
              boxShadow:'0 8px 32px rgba(255,107,74,0.35)',
              letterSpacing:'-0.01em',
            }}
          >Start Your Viva Practice →</motion.a>

          <motion.a
            href="#features"
            whileHover={{ scale: 1.02 }}
            style={{
              display:'inline-flex', alignItems:'center',
              border:'1px solid rgba(255,255,255,0.15)',
              color:'rgba(255,255,255,0.7)', padding:'16px 36px', borderRadius:999,
              fontWeight:600, fontSize:'1rem', textDecoration:'none',
              transition:'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.4)'; e.currentTarget.style.color='white' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.15)'; e.currentTarget.style.color='rgba(255,255,255,0.7)' }}
          >Explore Features</motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity:0 }} animate={inView?{opacity:1}:{}}
          transition={{ duration:0.6, delay:0.5 }}
          style={{ marginTop:48, display:'flex', gap:32, justifyContent:'center', flexWrap:'wrap' }}
        >
          {['RAG-Powered AI', 'Project-Aware', 'Adaptive Learning', 'Instant Feedback'].map(t => (
            <div key={t} style={{ display:'flex', alignItems:'center', gap:8 }}>
              <div style={{ width:6, height:6, borderRadius:'50%', background:'rgba(255,255,255,0.3)' }} />
              <span style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.3)', fontWeight:500 }}>{t}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
