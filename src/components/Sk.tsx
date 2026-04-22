interface SkProps {
  w?: string
  h?: string
  r?: string
  dark?: boolean
  className?: string
}

export function Sk({ w = '100%', h = '16px', r = '6px', dark = false, className }: SkProps) {
  return (
    <div
      className={`${dark ? 'sk-d' : 'sk-l'} ${className ?? ''}`}
      style={{ width: w, height: h, borderRadius: r, flexShrink: 0 }}
    />
  )
}
