import { motion } from 'framer-motion'

function SkeletonCard({ delay = 0 }) {
  return (
    <motion.div
      className="glass h-full rounded-[8px] p-5"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="h-32 rounded-[6px] bg-gradient-to-r from-white/7 via-white/16 to-white/7"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        style={{ backgroundSize: '220% 100%' }}
      />
      <div className="mt-5 h-3 w-2/3 rounded-full bg-white/12" />
      <div className="mt-3 h-3 w-full rounded-full bg-white/8" />
      <div className="mt-3 h-3 w-4/5 rounded-full bg-white/8" />
    </motion.div>
  )
}

export default SkeletonCard
