import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  size: 2 + (index % 5),
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: (index % 8) * 0.35,
  duration: 8 + (index % 7),
}))

const shapes = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 13) % 84)}%`,
  top: `${10 + ((index * 17) % 74)}%`,
  rotate: index * 32,
}))

function AnimatedBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 30 })
  const orbX = useTransform(smoothX, [0, 1], [-80, 80])
  const orbY = useTransform(smoothY, [0, 1], [-70, 70])
  const reverseOrbX = useTransform(orbX, (value) => value * -0.7)
  const reverseOrbY = useTransform(orbY, (value) => value * -0.6)

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX / window.innerWidth)
      mouseY.set(event.clientY / window.innerHeight)
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#040505]">
      <motion.div
        className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-[#50dcb7]/18 blur-3xl"
        style={{ x: orbX, y: orbY }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 bottom-4 h-[34rem] w-[34rem] rounded-full bg-[#ffda75]/14 blur-3xl"
        style={{ x: reverseOrbX, y: reverseOrbY }}
        animate={{ scale: [1.1, 0.92, 1.1], opacity: [0.28, 0.54, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 opacity-35"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          background:
            'linear-gradient(120deg, rgba(255,218,117,0.10), rgba(80,220,183,0.10), rgba(142,184,255,0.08), rgba(255,122,144,0.08))',
          backgroundSize: '300% 300%',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12]"
        animate={{ backgroundPosition: ['0px 0px', '64px 64px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-60 opacity-25"
        animate={{ y: [20, -18, 20] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(80,220,183,0.34), transparent 62%)',
        }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow: '0 0 18px rgba(255,255,255,0.75)',
          }}
          animate={{
            y: [-22, 24, -22],
            x: [-12, 16, -12],
            opacity: [0.12, 0.75, 0.12],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {shapes.map((shape) => (
        <motion.span
          key={shape.id}
          className="absolute h-12 w-12 border border-[#b8ff3d]/25"
          style={{ left: shape.left, top: shape.top, rotate: shape.rotate }}
          animate={{
            y: [0, -30, 0],
            rotate: [shape.rotate, shape.rotate + 120, shape.rotate],
            borderRadius: ['12%', '50%', '12%'],
            opacity: [0.12, 0.34, 0.12],
          }}
          transition={{
            duration: 10 + shape.id,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
