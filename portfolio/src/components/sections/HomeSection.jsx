import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { pageTransition, fadeUp, stagger } from '../../utils/motion'
import resumeFront from '../../assets/front.jpg'
import AnimatedLogo from '../ui/AnimatedLogo'
import MagneticButton from '../ui/MagneticButton'
import TypingRoles from '../ui/TypingRoles'

const logoParticles = [
  { left: '14%', top: '18%', size: 'h-1.5 w-1.5', color: '#ffda75', delay: 0 },
  { left: '78%', top: '20%', size: 'h-2 w-2', color: '#50dcb7', delay: 0.35 },
  { left: '86%', top: '58%', size: 'h-1.5 w-1.5', color: '#8eb8ff', delay: 0.7 },
  { left: '18%', top: '72%', size: 'h-2 w-2', color: '#b8ff3d', delay: 1.05 },
  { left: '48%', top: '12%', size: 'h-1 w-1', color: '#ffffff', delay: 1.4 },
  { left: '62%', top: '82%', size: 'h-1.5 w-1.5', color: '#50dcb7', delay: 1.75 },
]

function HomeSection() {
  const [resumeStatus, setResumeStatus] = useState('idle')
  const navigate = useNavigate()

  const handleResume = () => {
    setResumeStatus('loading')
    window.setTimeout(() => setResumeStatus('success'), 900)
    window.setTimeout(() => setResumeStatus('idle'), 2600)
  }

  return (
    <motion.section
      className="relative flex min-h-screen items-center px-4 pb-14 pt-24 sm:pb-20 sm:pt-32 lg:pt-28"
      {...pageTransition}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.02fr_0.98fr] xl:gap-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#b8ff3d]/25 bg-white/[0.055] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white/60 backdrop-blur-xl sm:mb-6 sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.22em]"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#b8ff3d] shadow-[0_0_18px_rgba(184,255,61,0.75)]" />
            <span className="truncate">Available for creative frontend work</span>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.28em] text-[#50dcb7] sm:text-sm sm:tracking-[0.32em]"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-balance mx-auto mt-4 max-w-4xl text-[clamp(2.45rem,14vw,6.7rem)] font-black leading-[0.94] text-white lg:mx-0 lg:leading-[0.92]"
          >
            Gyanaranjan Sahu
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="mt-5 text-lg font-bold text-white/82 sm:text-2xl md:text-4xl"
          >
            <TypingRoles />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-7 text-white/66 sm:mt-6 sm:text-lg sm:leading-9 lg:mx-0"
          >
            I craft cinematic, responsive web experiences with React, Tailwind CSS,
            Framer Motion, and the MERN stack, balancing creative detail with
            production-ready architecture.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-7 grid max-w-2xl grid-cols-1 gap-3 min-[420px]:grid-cols-3 lg:mx-0"
          >
            {[
              ['15+', 'Animated UI blocks'],
              ['4', 'Live projects'],
              ['MERN', 'Stack focus'],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                className="glass rounded-[8px] p-3 sm:p-4"
                whileHover={{ y: -6, boxShadow: '0 0 28px rgba(184,255,61,0.14)' }}
              >
                <p className="text-2xl font-black text-white md:text-3xl">{value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/42 sm:text-[11px] sm:tracking-[0.12em]">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row lg:mx-0 lg:max-w-none"
          >
            <MagneticButton
              onClick={() => navigate('/projects')}
              className="w-full bg-[#b8ff3d] text-[#11100b] shadow-[0_0_44px_rgba(184,255,61,0.24)] sm:w-auto"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href={resumeFront}
              download="Gyanaranjan-Sahu-Resume.jpg"
              onClick={handleResume}
              className="glass w-full text-white sm:w-auto"
            >
              {resumeStatus === 'loading' && 'Preparing resume...'}
              {resumeStatus === 'success' && 'Resume downloaded'}
              {resumeStatus === 'idle' && 'Download Resume'}
            </MagneticButton>
          </motion.div>
          <AnimatePresence>
            {resumeStatus !== 'idle' && (
              <motion.div
                className="mx-auto mt-5 w-full max-w-sm overflow-hidden rounded-full border border-[#b8ff3d]/25 bg-white/8 lg:mx-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-[#ffda75] to-[#50dcb7]"
                  initial={{ width: '12%' }}
                  animate={{ width: resumeStatus === 'success' ? '100%' : '72%' }}
                />
                {resumeStatus === 'success' && (
                  <motion.p
                    className="px-4 py-2 text-sm font-semibold text-[#baf9e8]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Success. Your PDF download has started.
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="relative isolate mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center overflow-hidden sm:max-w-[440px] lg:aspect-auto lg:min-h-[520px] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(18px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(184,255,61,0.16),transparent_62%)] blur-2xl sm:inset-10"
            animate={{ scale: [0.86, 1.12, 0.9], opacity: [0.32, 0.72, 0.38] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-[8px] border border-[#b8ff3d]/30 bg-white/[0.035] backdrop-blur-xl"
            animate={{ scale: [1, 1.012, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.13)_42%,transparent_58%)]"
            animate={{ x: ['-130%', '130%'] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
          <motion.div
            className="absolute inset-x-0 top-1/2 h-16 -translate-y-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(80,220,183,0.08),transparent)]"
            animate={{ y: ['-170%', '170%'], opacity: [0, 1, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute left-0 top-0 h-[2px] w-2/3 rounded-full bg-[#b8ff3d] shadow-[0_0_22px_rgba(184,255,61,0.75)]"
            animate={{ x: ['-110%', '170%'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.span
            className="absolute bottom-0 right-0 h-[2px] w-2/3 rounded-full bg-[#50dcb7] shadow-[0_0_22px_rgba(80,220,183,0.75)]"
            animate={{ x: ['110%', '-170%'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.45 }}
          />
          <motion.span
            className="absolute right-0 top-0 h-2/3 w-[2px] rounded-full bg-[#b8ff3d] shadow-[0_0_22px_rgba(184,255,61,0.75)]"
            animate={{ y: ['-110%', '170%'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          />
          <motion.span
            className="absolute bottom-0 left-0 h-2/3 w-[2px] rounded-full bg-[#50dcb7] shadow-[0_0_22px_rgba(80,220,183,0.75)]"
            animate={{ y: ['110%', '-170%'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.35 }}
          />
          <motion.div
            className="absolute h-52 w-52 rounded-full border border-[#b8ff3d]/25 min-[420px]:h-64 min-[420px]:w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute h-36 w-36 rounded-full border border-[#b8ff3d]/25 min-[420px]:h-44 min-[420px]:w-44 sm:h-56 sm:w-56 lg:h-60 lg:w-60"
            animate={{ rotate: -360, scale: [1, 1.08, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute h-28 w-72 rounded-full border border-dashed border-[#b8ff3d]/25 min-[420px]:h-36 min-[420px]:w-80 sm:h-44 sm:w-[26rem]"
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute h-72 w-28 rounded-full border border-dashed border-[#b8ff3d]/20 min-[420px]:h-80 min-[420px]:w-36 sm:h-[26rem] sm:w-44"
            animate={{ rotate: -360, scale: [1.02, 0.98, 1.02] }}
            transition={{ duration: 17, repeat: Infinity, ease: 'linear' }}
          />
          <motion.svg
            viewBox="0 0 420 180"
            className="absolute h-36 w-[92%] opacity-60 sm:h-44"
            aria-hidden="true"
          >
            <motion.path
              d="M12 92 C50 24 82 156 122 92 S196 28 236 92 312 154 350 92 392 52 408 92"
              fill="none"
              stroke="rgba(80,220,183,0.55)"
              strokeLinecap="round"
              strokeWidth="2"
              strokeDasharray="10 14"
              animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.25, 0.85, 0.25] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
              d="M24 108 C62 68 96 132 136 108 S208 70 250 108 326 138 396 88"
              fill="none"
              stroke="rgba(255,218,117,0.42)"
              strokeLinecap="round"
              strokeWidth="1.5"
              animate={{ pathLength: [1, 0.25, 1], opacity: [0.2, 0.75, 0.2] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          </motion.svg>
          {logoParticles.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              className={`absolute rounded-full ${particle.size}`}
              style={{
                left: particle.left,
                top: particle.top,
                backgroundColor: particle.color,
                boxShadow: `0 0 18px ${particle.color}`,
              }}
              animate={{
                x: [0, 18, -12, 0],
                y: [0, -20, 14, 0],
                opacity: [0.28, 1, 0.4, 0.28],
                scale: [0.8, 1.4, 0.95, 0.8],
              }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: particle.delay,
              }}
            />
          ))}
          <motion.div
            className="glass absolute left-3 top-5 hidden rounded-[8px] px-3 py-2 text-xs font-semibold text-white/78 sm:left-5 sm:top-10 sm:block sm:px-4 sm:py-3 sm:text-sm"
            animate={{ y: [0, -14, 0], x: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            React + Motion
          </motion.div>
          <motion.div
            className="glass absolute bottom-16 right-3 hidden rounded-[8px] px-3 py-2 text-xs font-semibold text-white/78 sm:bottom-20 sm:right-5 sm:block sm:px-4 sm:py-3 sm:text-sm"
            animate={{ y: [0, 14, 0], x: [0, -4, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            MERN Stack
          </motion.div>
          <motion.div
            className="relative z-10 grid place-items-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <AnimatedLogo large interactive />
          </motion.div>
          <motion.div
            className="glass absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 rounded-[8px] p-2 text-center sm:bottom-5 sm:left-8 sm:right-8 sm:gap-3 sm:p-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {['React', 'Motion', 'MERN'].map((item) => (
              <div key={item} className="truncate rounded-[6px] bg-white/[0.055] px-1.5 py-2 text-[10px] font-black text-white/78 sm:px-3 sm:text-xs">
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HomeSection
