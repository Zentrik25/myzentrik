'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  className?: string
  style?: React.CSSProperties
}

function parse(value: string): { num: number; suffix: string } | null {
  const m = value.match(/^(\d+)(\D*)$/)
  if (!m) return null
  return { num: parseInt(m[1]), suffix: m[2] }
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function CountUp({ value, className, style }: CountUpProps) {
  const parsed = parse(value)
  const [display, setDisplay] = useState(parsed ? '0' : value)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!parsed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const duration = 1600
        const start = performance.now()
        const target = parsed.num

        function tick(now: number) {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const current = Math.round(easeOut(progress) * target)
          setDisplay(String(current))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!parsed) return <span ref={ref} className={className} style={style}>{value}</span>

  return (
    <span ref={ref} className={className} style={style}>
      {display}{parsed.suffix}
    </span>
  )
}
