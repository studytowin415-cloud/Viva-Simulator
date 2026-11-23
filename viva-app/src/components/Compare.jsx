import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ROWS = [
  { label: 'Questions based on your project',       trad: false, vs: true  },
  { label: 'Instant answer feedback',               trad: false, vs: true  },
  { label: 'Identifies knowledge gaps automatically',trad: false, vs: true  },
  { label: 'Adapts difficulty to your progress',    trad: false, vs: true  },
  { label: 'Available any time, any device',        trad: 'Limited', vs: 'Always' },
  { label: 'Performance tracking across sessions',  trad: false, vs: true  },
  { label: 'Personalised practice plan',            trad: false, vs: true  },
]

function Cell({ val, isVs }) {
  if (val === true)  return <span style={{ color: isVs ? '#4ADE80' : '#4ADE80', fontSize:'1.1rem', fontWeight:800 }}>✓</span>
  if (val === false) return <span style={{ color: 'rgba(255,255,255,0.2)', fontSize:'1rem' }}>✕</span>
  return <span style={{ fontSize:'0.8rem', fontWeight:600, color: isVs ? '#FF8A70' : 'rgba(255,255,255,0.3)' }}>{val}</span>
}

export default function Compare() {
  const hRef = useRef(null)
  const hInView = useInView(hRef, { once:true, margin:'-80px' })

  return (
    <section id="compare" style={{
      padding:'120px 32px',
      background:'linear-gradient(180deg,#0D0D0D 0%,#0a0a10 100%)',
      borderTop:'1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth:900, margin:'0 auto' }}>
        <div ref={hRef} style={{ textAlign:'center', marginBottom:56 }}>
          <motion.p
            initial={{ opacity:0, y:16 }} animate={hInView?{opacity:1,y:0}:{}}
            transition={{ duration:0.5 }}
            style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginBottom:16 }}
          >Why Choose Viva Simulator</motion.p>
          <motion.h2
            initial={{ opacity:0, y:24 }} animate={hInView?{opacity:1,y:0}:{}}
            transition={{ duration:0.6, delay:0.1 }}
            style={{ fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:900, letterSpacing:'-0.03em', color:'white', marginBottom:16 }}
          >Traditional prep vs.<br/><span style={{ background:'linear-gradient(135deg,#2563EB,#FF6B4A)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>AI-assisted prep.</span></motion.h2>
        </div>

        <motion.div
          initial={{ opacity:0, y:32 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-60px' }}
          transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
          style={{
            background:'rgba(255,255,255,0.02)',
            border:'1px solid rgba(255,255,255,0.08)',
            borderRadius:20, overflow:'hidden',
          }}
        >
          {/* Header */}
          <div style={{
            display:'grid', gridTemplateColumns:'1.8fr 1fr 1fr',
            padding:'16px 28px', background:'rgba(255,255,255,0.03)',
            borderBottom:'1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{ fontSize:'0.72rem', fontWeight:700, color:'rgba(255,255,255,0.3)', textTransform:'uppercase', letterSpacing:'0.08em' }}>Capability</div>
            <div style={{ fontSize:'0.72rem', fontWeight:700, color:'rgba(255,255,255,0.3)', textTransform:'uppercase', letterSpacing:'0.08em', textAlign:'center' }}>Traditional</div>
            <div style={{
              fontSize:'0.72rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', textAlign:'center',
              background:'linear-gradient(135deg,#2563EB,#FF6B4A)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
            }}>Viva Simulator</div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity:0, x:-20 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true, margin:'-40px' }}
              transition={{ duration:0.5, delay:i*0.06 }}
              style={{
                display:'grid', gridTemplateColumns:'1.8fr 1fr 1fr',
                padding:'16px 28px',
                borderBottom: i < ROWS.length-1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition:'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background='transparent'}
            >
              <span style={{ fontSize:'0.875rem', color:'rgba(255,255,255,0.6)', fontWeight:500, alignSelf:'center' }}>{row.label}</span>
              <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}><Cell val={row.trad} isVs={false} /></div>
              <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}><Cell val={row.vs} isVs={true} /></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
