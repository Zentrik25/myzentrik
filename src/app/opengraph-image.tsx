import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Zentrik Solutions — Software, Chatbots & AI Agents'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#05050A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Grid bg */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Glow */}
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(139,92,246,0.3) 0%,transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

        {/* Logo icon */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: 20, background: 'linear-gradient(135deg,#7c3aed,#2563eb)', marginBottom: 28 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <span style={{ fontSize: 42, fontWeight: 900, color: 'white', letterSpacing: '-1px' }}>Zentrik</span>
          <span style={{ fontSize: 42, fontWeight: 900, color: '#a78bfa', letterSpacing: '-1px' }}>Solutions</span>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 22, color: '#9ca3af', textAlign: 'center', maxWidth: 700, lineHeight: 1.4, marginBottom: 40 }}>
          Custom Software · WhatsApp Chatbots · AI Agents
        </div>

        {/* Pill tags */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['🇿🇼 Zimbabwe', '🌍 Serving Globally', '⚡ Free Quote in 24hrs'].map((tag) => (
            <div key={tag} style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: 100, padding: '8px 20px', color: '#c4b5fd', fontSize: 16, fontWeight: 600 }}>
              {tag}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{ position: 'absolute', bottom: 32, color: '#4b5563', fontSize: 16 }}>
          www.zentriksolutions.com
        </div>
      </div>
    ),
    { ...size }
  )
}
