import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const STEPS = [
  { n:'01', title:'Upload Your Project', desc:'Share your project report, code, or documentation with the platform.', color:'#2563EB' },
  { n:'02', title:'AI Understands Your Work', desc:'The system processes your materials and builds a knowledge base tailored to your project.', color:'#6366F1' },
  { n:'03', title:'Start Your Mock Viva', desc:'Answer AI-generated questions specific to your project. Get instant, structured feedback.', color:'#EC4899' },
  { n:'04', title:'Review & Improve', desc:'Track knowledge gaps, revisit weak concepts, and repeat until you\'re fully confident.', color:'#FF6B4A' },
]

export default function HowItWorks() {
  const hRef = useRef(null)
  const hInView = useInView(hRef, { once: true, margin: '-80px' })

  return (
    <section id="how" style={{
      padding: '120px 32px',
      background: '#0D0D0D',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        <div ref={hRef} style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.p
            initial={{ opacity:0, y:16 }} animate={hInView?{opacity:1,y:0}:{}}
            transition={{ duration:0.5 }}
            style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginBottom:16 }}
          >How It Works</motion.p>
          <motion.h2
            initial={{ opacity:0, y:24 }} animate={hInView?{opacity:1,y:0}:{}}
            transition={{ duration:0.6, delay:0.1 }}
            style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, letterSpacing:'-0.03em', color:'white', marginBottom:16 }}
          >From Project to Viva Ready.</motion.h2>
          <motion.p
            initial={{ opacity:0, y:20 }} animate={hInView?{opacity:1,y:0}:{}}
            transition={{ duration:0.6, delay:0.2 }}
            style={{ fontSize:'1rem', color:'rgba(255,255,255,0.4)', lineHeight:1.7 }}
          >Four steps. One continuous feedback loop.</motion.p>
        </div>

        {/* Steps */}
        <div style={{ position:'relative' }}>
          {/* Connecting line */}
          <div style={{
            position:'absolute', top:28, left:'calc(12.5% - 0px)', right:'calc(12.5% - 0px)',
            height:1, background:'linear-gradient(90deg, #2563EB, #6366F1, #EC4899, #FF6B4A)',
            opacity:0.3, zIndex:0,
          }} />

          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, position:'relative', zIndex:1 }}>
            {STEPS.map((s, i) => {
              const ref = useRef(null)
              const inView = useInView(ref, { once: true, margin: '-60px' })
              return (
                <motion.div
                  key={s.n} ref={ref}
                  initial={{ opacity:0, y:40 }}
                  animate={inView ? { opacity:1, y:0 } : {}}
                  transition={{ duration:0.6, delay:i*0.12, ease:[0.22,1,0.36,1] }}
                  style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', padding:'0 16px' }}
                >
                  {/* Circle */}
                  <motion.div
                    whileHover={{ scale:1.1 }}
                    style={{
                      width:56, height:56, borderRadius:'50%',
                      background:`radial-gradient(circle, ${s.color}30, transparent)`,
                      border:`1px solid ${s.color}50`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      marginBottom:28, boxShadow:`0 0 24px ${s.color}20`,
                      fontSize:'0.85rem', fontWeight:800, color:'white',
                    }}
                  >{s.n}</motion.div>
                  <div style={{ fontWeight:700, fontSize:'0.95rem', color:'white', marginBottom:10, lineHeight:1.3 }}>{s.title}</div>
                  <div style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.4)', lineHeight:1.65 }}>{s.desc}</div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Loop note */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-60px' }}
          transition={{ duration:0.6, delay:0.5 }}
          style={{ marginTop:60, display:'flex', justifyContent:'center' }}
        >
          <div style={{
            display:'inline-flex', alignItems:'center', gap:12,
            background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)',
            borderRadius:999, padding:'13px 28px',
            fontSize:'0.84rem', fontWeight:600, color:'rgba(255,255,255,0.6)',
          }}>
            <span style={{ fontSize:'1rem' }}>↻</span>
            Continuous feedback loop — adapts to your mastery in real time
          </div>
        </motion.div>
      </div>
    </section>
  )
}
