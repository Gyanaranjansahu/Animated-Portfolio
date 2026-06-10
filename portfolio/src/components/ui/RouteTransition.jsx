import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function RouteTransition() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="pointer-events-none fixed inset-0 z-[55]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.42, ease: 'easeOut' }}
      >
        <motion.div
          className="absolute inset-0 bg-[#050606]/28 backdrop-blur-[6px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-[#ffda75] via-[#50dcb7] to-[#8eb8ff]"
          initial={{ width: '0%' }}
          animate={{ width: '100%', opacity: [1, 1, 0] }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default RouteTransition
