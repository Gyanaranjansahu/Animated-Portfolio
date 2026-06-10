import { motion } from 'framer-motion'
import { aboutHighlights } from '../../data/portfolio'
import { fadeUp, pageTransition, stagger } from '../../utils/motion'
import SectionHeader from '../ui/SectionHeader'

function AboutSection() {
  return (
    <motion.section className="min-h-screen px-4 pb-20 pt-28 sm:pb-24 sm:pt-32" {...pageTransition}>
      <SectionHeader
        eyebrow="About"
        title="A passionate developer building modern, interactive experiences."
        text="Gyanaranjan Sahu enjoys turning ideas into polished digital products with clean code, purposeful animation, and scalable frontend thinking."
      />
      <motion.div
        className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} className="glass relative overflow-hidden rounded-[8px] p-5 sm:p-8">
          <motion.div
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ffda75]/16 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative">
            <p className="text-[clamp(2rem,10vw,3.75rem)] font-black leading-tight text-white">
              Details make the interface feel alive.
            </p>
            <p className="mt-5 text-[0.95rem] leading-7 text-white/64 sm:mt-6 sm:text-lg sm:leading-9">
              I focus on problem solving, responsive systems, API-driven interfaces,
              and animation that improves the user experience instead of decorating it.
            </p>
          </div>
          <div className="relative mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-10">
            {['Scalable apps', 'Clean UI', 'Fast feedback', 'Always learning'].map((item) => (
              <motion.div
                key={item}
                className="rounded-[8px] border border-[#b8ff3d]/25 bg-black/24 p-4 text-sm font-bold text-white/72"
                whileHover={{ y: -6, color: '#ffffff' }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="relative space-y-4">
          <div className="absolute bottom-6 left-6 top-6 hidden w-px bg-gradient-to-b from-[#ffda75] via-[#50dcb7] to-transparent md:block" />
          {aboutHighlights.map((item, index) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="glass group relative flex gap-4 rounded-[8px] p-4 sm:gap-5 sm:p-5 md:ml-12"
              whileHover={{ x: 10, scale: 1.01, boxShadow: '0 0 44px rgba(80,220,183,0.14)' }}
            >
              <span className="absolute -left-[3.35rem] top-5 hidden h-4 w-4 rounded-full border border-[#b8ff3d] bg-[#050606] shadow-[0_0_20px_rgba(184,255,61,0.4)] md:block" />
              <span className="text-xl font-black text-[#ffda75] sm:text-2xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-base font-semibold leading-7 text-white/76 group-hover:text-white sm:text-lg sm:leading-8">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default AboutSection
