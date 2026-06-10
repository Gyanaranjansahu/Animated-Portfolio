import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { fadeUp, pageTransition, stagger } from '../../utils/motion'
import MagneticButton from '../ui/MagneticButton'
import SectionHeader from '../ui/SectionHeader'

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      className="glass group relative overflow-hidden rounded-[8px] p-4 sm:p-6 md:min-h-[500px]"
      whileHover={{ y: -12, rotateX: 4, rotateY: -4, boxShadow: `0 0 70px ${project.accent}26` }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <motion.div
        className="absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl"
        style={{ backgroundColor: project.accent }}
        animate={{ scale: [0.8, 1.16, 0.8], opacity: [0.16, 0.34, 0.16] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="relative mb-6 grid h-44 place-items-center overflow-hidden rounded-[8px] border border-[#b8ff3d]/25 bg-black/24 sm:mb-8 sm:h-52"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px] opacity-30" />
        <motion.svg viewBox="0 0 140 100" className="h-24 w-32 sm:h-28 sm:w-36">
          <motion.path
            d="M18 72V24h104v48H18Zm16-35h72M34 52h48M34 65h68"
            fill="none"
            stroke={project.accent}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            animate={{ pathLength: [0.45, 1, 0.45] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="70" y="91" textAnchor="middle" className="fill-white text-[16px] font-black">
            {project.mark}
          </text>
        </motion.svg>
      </motion.div>
      <div className="flex flex-col items-start justify-between gap-3 min-[420px]:flex-row min-[420px]:gap-4">
        <h3 className="text-xl font-black text-white sm:text-2xl">{project.title}</h3>
        <span className="shrink-0 rounded-full border border-[#b8ff3d]/25 px-3 py-1 text-xs font-black text-white/52">
          Live
        </span>
      </div>
      <div className="mt-6 rounded-[8px] border border-[#b8ff3d]/25 bg-white/[0.035] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/42">Features</p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-white/66">
          {project.features.map((feature) => (
            <li key={feature}>- {feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-[#b8ff3d]/25 px-3 py-1.5 text-xs font-bold text-white/64">
            {tech}
          </span>
        ))}
      </div>
      <MagneticButton
        href={project.liveDemo}
        target="_blank"
        className="mt-7 bg-white text-[#080907]"
      >
        Live Demo
      </MagneticButton>
    </motion.article>
  )
}

function ProjectsSection() {
  return (
    <motion.section className="min-h-screen px-4 pb-20 pt-28 sm:pb-24 sm:pt-32" {...pageTransition}>
      <SectionHeader
        eyebrow="Projects"
        title="Real work presented through premium animated cards."
        text="Each project card uses motion, glow borders, custom animated marks, hover tilt, and magnetic calls to action."
      />
      <motion.div
        className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default ProjectsSection
