import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'

function MagneticButton({ children, className = '', onClick, href, download, target }) {
  const ref = useRef(null)
  const [ripples, setRipples] = useState([])
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 18 })
  const springY = useSpring(y, { stiffness: 250, damping: 18 })
  const Component = href ? motion.a : motion.button

  const handleMove = (event) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return

    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.22)
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.22)
  }

  const handleClick = (event) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (bounds) {
      const id = Date.now()
      setRipples((current) => [
        ...current,
        { id, x: event.clientX - bounds.left, y: event.clientY - bounds.top },
      ])
      window.setTimeout(() => {
        setRipples((current) => current.filter((ripple) => ripple.id !== id))
      }, 650)
    }

    onClick?.(event)
  }

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      download={download}
      onClick={handleClick}
      onPointerMove={handleMove}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      style={{ x: springX, y: springY }}
      className={`group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-5 text-center text-sm font-semibold leading-tight transition-colors sm:px-6 ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute h-8 w-8 rounded-full bg-white/35"
            style={{ left: ripple.x - 16, top: ripple.y - 16 }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
      <span className="relative z-10">{children}</span>
    </Component>
  )
}

export default MagneticButton
