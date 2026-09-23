import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 420, damping: 32 })
  const springY = useSpring(y, { stiffness: 420, damping: 32 })

  useEffect(() => {
    const handleMove = (event) => {
      x.set(event.clientX - 16)
      y.set(event.clientY - 16)
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [x, y])

  return (
    <motion.div
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[60] hidden h-8 w-8 rounded-full border border-[#b8ff3d]/80 md:block"
      style={{ x: springX, y: springY }}
    />
  )
}

export default Cursor
