'use client'

import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  words: string[]
  className?: string
  style?: React.CSSProperties
  loop?: boolean
}

export function TypewriterText({ words, className, style, loop = true }: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing')

  useEffect(() => {
    const current = words[wordIndex]

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90)
        return () => clearTimeout(t)
      } else {
        if (!loop) return // stay here — done
        const t = setTimeout(() => setPhase('pause'), 2200)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pause') {
      const t = setTimeout(() => setPhase('deleting'), 200)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
        return () => clearTimeout(t)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }
  }, [displayed, phase, wordIndex, words, loop])

  const done = !loop && displayed === words[0]

  return (
    <span className={className} style={style}>
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '0.85em',
          background: '#2997ff',
          marginLeft: '2px',
          verticalAlign: 'middle',
          animation: done ? 'cursor-blink 1s step-end infinite' : 'cursor-blink 0.7s step-end infinite',
        }}
      />
      <style>{`@keyframes cursor-blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  )
}
