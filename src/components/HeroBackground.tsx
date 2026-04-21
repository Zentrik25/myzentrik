'use client'

export function HeroBackground() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Diagonal gradient lines */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0, opacity: 0.45 }}
      >
        <defs>
          <linearGradient id="line-fade-v" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="30%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-fade-h" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="20%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="vmask">
            <rect width="1440" height="700" fill="url(#line-fade-v)" />
          </mask>
          <mask id="hmask">
            <rect width="1440" height="700" fill="url(#line-fade-h)" />
          </mask>
        </defs>

        {/* Vertical lines fading in/out top & bottom */}
        <g mask="url(#vmask)" stroke="rgba(255,255,255,0.07)" strokeWidth="1">
          {Array.from({ length: 29 }, (_, i) => (
            <line key={i} x1={i * 52} y1="0" x2={i * 52} y2="700" />
          ))}
        </g>

        {/* Horizontal lines fading in/out left & right */}
        <g mask="url(#hmask)" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
          {Array.from({ length: 15 }, (_, i) => (
            <line key={i} x1="0" y1={i * 50} x2="1440" y2={i * 50} />
          ))}
        </g>
      </svg>

      {/* Blue glow — top centre */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '900px',
        height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(0,113,227,0.18) 0%, transparent 70%)',
        filter: 'blur(1px)',
      }} />

      {/* Subtle purple accent — bottom right */}
      <div style={{
        position: 'absolute',
        bottom: '-60px',
        right: '-100px',
        width: '500px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(120,80,255,0.10) 0%, transparent 70%)',
      }} />
    </div>
  )
}
