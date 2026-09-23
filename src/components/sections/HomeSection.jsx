import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { pageTransition, fadeUp, stagger } from '../../utils/motion'
import resumeFront from '../../assets/front.jpg'
import AnimatedLogo from '../ui/AnimatedLogo'
import MagneticButton from '../ui/MagneticButton'
import TypingRoles from '../ui/TypingRoles'
import{ Handshake} from "lucide-react"
import Resume from "../../assets/GYANA.PDF"
const logoParticles = [
  { left: '14%', top: '18%', size: 'h-1.5 w-1.5', color: '#ffda75', delay: 0 },
  { left: '78%', top: '20%', size: 'h-2 w-2', color: '#50dcb7', delay: 0.35 },
  { left: '86%', top: '58%', size: 'h-1.5 w-1.5', color: '#8eb8ff', delay: 0.7 },
  { left: '18%', top: '72%', size: 'h-2 w-2', color: '#b8ff3d', delay: 1.05 },
  { left: '48%', top: '12%', size: 'h-1 w-1', color: '#ffffff', delay: 1.4 },
  { left: '62%', top: '82%', size: 'h-1.5 w-1.5', color: '#50dcb7', delay: 1.75 },
]

const stats = [
  ['15+', 'Animated UI blocks'],
  ['10+', 'Live projects'],
  ['MERN', 'Software development'],
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
      {...pageTransition}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#090a0a] px-4 pb-16 pt-28 text-white sm:pb-24 lg:pt-24"
    >
      {/* Editorial background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-15%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#b8ff3d]/[0.07] blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[460px] w-[460px] rounded-full bg-[#50dcb7]/[0.06] blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] xl:gap-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center lg:text-left"
        >
          <motion.div variants={fadeUp} className="mb-7 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-10 bg-[#b8ff3d]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#b8ff3d] sm:text-xs">
           <Handshake/>   Available for  work
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.38em] text-white/45 sm:text-sm">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-[clamp(3.3rem,9vw,7.7rem)] font-black leading-[0.84] tracking-[-0.075em] text-white"
          >
            Gyanaranjan
            <span className="block text-[#b8ff3d]">Sahu<span className="text-white">.</span></span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-8 text-xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            <TypingRoles />
          </motion.div>

          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8 lg:mx-0">
            I design and build expressive digital experiences with React, Tailwind CSS,
            Framer Motion, and the MERN stack — combining strong visual direction with
            reliable frontend architecture.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <MagneticButton
              onClick={() => navigate('/projects')}
              className="group w-full border border-[#b8ff3d] bg-[#b8ff3d] text-[#0b0d08] shadow-[0_0_35px_rgba(184,255,61,0.12)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_45px_rgba(184,255,61,0.24)] sm:w-auto"
            >
              View Projects <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </MagneticButton>

            <MagneticButton
              href={Resume}
              download="GYANA.pdf"
              onClick={handleResume}
              className="w-full border border-white/20 bg-transparent text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:w-auto"
            >
              {resumeStatus === 'loading' && 'Preparing resume...'}
              {resumeStatus === 'success' && 'Resume downloaded'}
              {resumeStatus === 'idle' && 'Download Resume ↓'}
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 py-5 lg:mx-0">
            {stats.map(([value, label], index) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                className={`px-2 text-center lg:text-left ${index !== 0 ? 'border-l border-white/10 lg:pl-5' : ''}`}
              >
                <p className="text-2xl font-black tracking-tight text-white sm:text-3xl">{value}</p>
                <p className="mt-1 text-[9px] font-semibold uppercase leading-4 tracking-[0.12em] text-white/35 sm:text-[10px]">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {resumeStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-5 max-w-sm border-l-2 border-[#b8ff3d] pl-3 text-left text-xs text-white/55"
              >
                <motion.div
                  className="mb-2 h-1 bg-[#b8ff3d]"
                  initial={{ width: '10%' }}
                  animate={{ width: resumeStatus === 'success' ? '100%' : '72%' }}
                />
                {resumeStatus === 'success' && 'Success. Your resume download has started.'}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(18px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex aspect-square w-full max-w-[350px] items-center justify-center sm:max-w-[470px] lg:min-h-[560px] lg:max-w-none"
        >
          <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(184,255,61,0.13),transparent_65%)] blur-3xl" />

          <motion.div
            className="absolute inset-0 border border-white/10"
            animate={{ scale: [1, 1.015, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="absolute left-0 top-0 h-16 w-16 border-l border-t border-[#b8ff3d]" />
          <div className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-[#50dcb7]" />

          <motion.div
            className="absolute h-56 w-56 rounded-full border border-[#b8ff3d]/25 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute h-40 w-40 rounded-full border border-dashed border-white/20 sm:h-60 sm:w-60 lg:h-72 lg:w-72"
            animate={{ rotate: -360, scale: [1, 1.06, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute h-28 w-72 rounded-full border border-[#50dcb7]/25 sm:h-44 sm:w-[27rem]"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />

          <motion.svg viewBox="0 0 420 180" className="absolute h-36 w-[92%] opacity-60 sm:h-44" aria-hidden="true">
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
              animate={{ x: [0, 18, -12, 0], y: [0, -20, 14, 0], opacity: [0.28, 1, 0.4, 0.28], scale: [0.8, 1.4, 0.95, 0.8] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: particle.delay }}
            />
          ))}

          <motion.div
            className="absolute left-2 top-10 hidden border-l-2 border-[#b8ff3d] pl-3 text-xs font-bold uppercase tracking-[0.18em] text-white/55 sm:block sm:left-5"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            React + Motion
          </motion.div>

          <motion.div
            className="absolute bottom-24 right-2 hidden border-r-2 border-[#50dcb7] pr-3 text-right text-xs font-bold uppercase tracking-[0.18em] text-white/55 sm:block sm:right-5"
            animate={{ y: [0, 12, 0] }}
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
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-2 border-t border-white/15 pt-4 text-center sm:bottom-5 sm:left-8 sm:right-8"
          >
            {['React', 'Motion', 'MERN'].map((item) => (
              <div key={item} className="text-[10px] font-black uppercase tracking-[0.16em] text-white/45 sm:text-xs">
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
