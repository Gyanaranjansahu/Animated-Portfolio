import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function AnimatedLogo({ large = false, interactive = false }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-40, 40], [12, -12])
  const rotateY = useTransform(x, [-40, 40], [-12, 12])
  const smoothX = useSpring(x, { stiffness: 180, damping: 18 })
  const smoothY = useSpring(y, { stiffness: 180, damping: 18 })

  const handleMove = (event) => {
    if (!interactive) return
    const bounds = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - bounds.left - bounds.width / 2)
    y.set(event.clientY - bounds.top - bounds.height / 2)
  }

  return (
    <motion.svg
      aria-label="Gyanaranjan Sahu developer identity logo"
      viewBox="0 0 180 180"
      className={
        large
          ? 'h-[clamp(11rem,62vw,18rem)] w-[clamp(11rem,62vw,18rem)] sm:h-[clamp(18rem,38vw,24rem)] sm:w-[clamp(18rem,38vw,24rem)]'
          : 'h-10 w-10 sm:h-12 sm:w-12'
      }
      initial="hidden"
      animate="visible"
      whileHover={{ scale: interactive ? 1.05 : 1 }}
      onPointerMove={handleMove}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY, x: smoothX, y: smoothY, transformStyle: 'preserve-3d' }}
    >
      <defs>
        <filter id="logoGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="logoGradient" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#ffda75" />
          <stop offset="0.55" stopColor="#50dcb7" />
          <stop offset="1" stopColor="#8eb8ff" />
        </linearGradient>
        <radialGradient id="logoCore" cx="50%" cy="42%" r="62%">
          <stop stopColor="rgba(255,255,255,0.18)" />
          <stop offset="0.55" stopColor="rgba(80,220,183,0.08)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.02)" />
        </radialGradient>
      </defs>
      <motion.circle
        cx="90"
        cy="90"
        r="78"
        fill="url(#logoCore)"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: [1, 1.035, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="90"
        cy="90"
        r="72"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="1.8"
        filter="url(#logoGlow)"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.4, ease: 'easeInOut' },
          },
        }}
      />
      <motion.path
        d="M119 54c-8.4-8.6-19.8-13.4-33.2-13.4-28.6 0-49.2 20.4-49.2 49.4 0 29.4 20.8 49.4 51.8 49.4 17.6 0 32.8-7.2 42.6-19.8V92.2H92"
        fill="none"
        stroke="url(#logoGradient)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8.5"
        filter="url(#logoGlow)"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.6, delay: 0.2, ease: 'easeInOut' },
          },
        }}
      />
      <motion.path
        d="M56 124c12.5 10.8 48.5 14.4 48.5-7.2 0-26.2-48.5-11.6-48.5-39.1 0-21.2 34.4-24.4 50.2-8.5"
        fill="none"
        stroke="#fff7df"
        strokeLinecap="round"
        strokeWidth="7.2"
        filter="url(#logoGlow)"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.45, delay: 0.55, ease: 'easeInOut' },
          },
        }}
      />
      <motion.path
        d="M40 74 24 90l16 16M140 74l16 16-16 16"
        fill="none"
        stroke="#50dcb7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        filter="url(#logoGlow)"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{
          opacity: [0.45, 1, 0.45],
          pathLength: 1,
          x: [-2, 2, -2],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M75 150 105 30"
        fill="none"
        stroke="#ffda75"
        strokeLinecap="round"
        strokeWidth="4"
        filter="url(#logoGlow)"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 0.78, pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: 'easeInOut' }}
      />
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '90px 90px' }}
      >
        <motion.circle cx="90" cy="14" r="4.8" fill="#ffda75" filter="url(#logoGlow)" />
        <motion.circle cx="166" cy="90" r="4" fill="#50dcb7" filter="url(#logoGlow)" />
        <motion.circle cx="90" cy="166" r="4.8" fill="#8eb8ff" filter="url(#logoGlow)" />
      </motion.g>
      <motion.circle
        cx="90"
        cy="90"
        r="50"
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeDasharray="5 10"
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '90px 90px' }}
      />
    </motion.svg>
  )
}

export default AnimatedLogo
