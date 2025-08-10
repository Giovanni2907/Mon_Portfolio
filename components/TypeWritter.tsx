'use client'

import { useEffect, useState } from 'react'

interface Props {
  text: string
}

export default function TypewriterText({ text }: Props) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed(prev => prev + text.charAt(index))
      setIndex(i => i + 1)
    }, 50)

    if (index >= text.length) clearInterval(interval)

    return () => clearInterval(interval)
  }, [index, text])

  return (
    <p className="absolute bottom-6 left-6 right-6 text-black dark:text-white text-lg font-serif z-40 bg-white/70 dark:bg-black/50 px-4 py-2 rounded-xl shadow-md">
      {displayed}
    </p>
  )
}
