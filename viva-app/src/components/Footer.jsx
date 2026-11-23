export default function Footer() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how' },
    { label: 'Why Us', href: '#compare' },
    { label: 'Get Started', href: '#cta' },
  ]

  return (
    <footer style={{
      padding: '28px 32px',
      background: '#0D0D0D',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <a href="#" style={{ display:'flex', alignItems:'center', gap:9, textDecoration:'none' }}>
          <div style={{
            width:26, height:26, borderRadius:7,
            background:'linear-gradient(135deg,#2563EB,#FF6B4A)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontWeight:900, fontSize:12, color:'white',
          }}>V</div>
          <span style={{ fontWeight:700, fontSize:'0.875rem', color:'rgba(255,255,255,0.6)' }}>Viva Simulator</span>
        </a>

        <nav style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize:'0.82rem', color:'rgba(255,255,255,0.3)', textDecoration:'none',
              fontWeight:500, transition:'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color='rgba(255,255,255,0.7)'}
            onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.3)'}
            >{l.label}</a>
          ))}
        </nav>

        <span style={{ fontSize:'0.78rem', color:'rgba(255,255,255,0.2)' }}>
          © 2026 Viva Simulator · Practice. Improve. Be Ready.
        </span>
      </div>
    </footer>
  )
}
