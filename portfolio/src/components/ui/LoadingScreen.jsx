import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { loadingMessages } from '../../data/portfolio'
import AnimatedLogo from './AnimatedLogo'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  x: (index * 37) % 280,
  y: (index * 61) % 220,
}))

function LoadingScreen() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % loadingMessages.length)
    }, 760)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#030404]"
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(18px)' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#ffda75]"
          style={{ left: `calc(50% - 140px + ${particle.x}px)`, top: `calc(50% - 110px + ${particle.y}px)` }}
          animate={{ y: [-18, 18, -18], opacity: [0.1, 0.8, 0.1], scale: [0.7, 1.25, 0.7] }}
          transition={{ duration: 2.4 + particle.id * 0.08, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <motion.div
        className="absolute h-[28rem] w-[28rem] rounded-full bg-[#50dcb7]/15 blur-3xl"
        animate={{ scale: [0.85, 1.18, 0.85], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10 w-full max-w-md px-5 text-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <AnimatedLogo large />
        </motion.div>
        <motion.p
          key={messageIndex}
          className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/70 sm:mt-7 sm:text-sm sm:tracking-[0.28em]"
          initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0 }}
        >
          {loadingMessages[messageIndex]}
        </motion.p>
        <div className="mx-auto mt-7 h-1 max-w-xs overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#ffda75] via-[#50dcb7] to-[#8eb8ff]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
