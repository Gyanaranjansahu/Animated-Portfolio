import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/motion'

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-90px' }}
      className="mx-auto mb-9 max-w-3xl px-1 text-center md:mb-14"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#50dcb7] sm:text-xs sm:tracking-[0.32em]">
        {eyebrow}
      </p>
      <h2 className="text-balance mt-4 text-[clamp(2rem,9vw,3rem)] font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-7 text-white/64 sm:mt-5 sm:text-base sm:leading-8">
        {text}
      </p>
    </motion.div>
  )
}

export default SectionHeader
