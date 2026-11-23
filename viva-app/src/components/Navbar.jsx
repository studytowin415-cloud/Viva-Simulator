import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about',    label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#how',      label: 'How it Works' },
    { href: '#compare',  label: 'Why Us' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        padding: '0 32px',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(13,13,13,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Brand */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10,
          background: 'linear-gradient(135deg, #2563EB, #FF6B4A)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 16, color: 'white',
        }}>V</div>
        <span style={{ fontWeight: 800, fontSize: '1rem', color: 'white', letterSpacing: '-0.01em' }}>
          Viva Simulator
        </span>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: 36, listStyle: 'none' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', fontWeight: 500,
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
          >{l.label}</a>
        ))}
      </nav>

      {/* CTA */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a href="#features" style={{
          padding: '8px 20px', borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 600,
          textDecoration: 'none', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.4)'; e.currentTarget.style.color='white' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.15)'; e.currentTarget.style.color='rgba(255,255,255,0.75)' }}
        >Explore</a>
        <a href="#cta" style={{
          padding: '8px 20px', borderRadius: 999,
          background: 'linear-gradient(135deg, #2563EB, #FF6B4A)',
          color: 'white', fontSize: '0.85rem', fontWeight: 700,
          textDecoration: 'none', transition: 'all 0.2s',
          boxShadow: '0 4px 20px rgba(255,107,74,0.3)',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 8px 30px rgba(255,107,74,0.5)' }}
        onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(255,107,74,0.3)' }}
        >Start Practising</a>
      </div>
    </motion.header>
  )
}
