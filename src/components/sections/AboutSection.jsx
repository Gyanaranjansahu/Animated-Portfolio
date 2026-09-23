
import { motion } from 'framer-motion'
import { fadeUp, pageTransition, stagger } from '../../utils/motion'
import SectionHeader from '../ui/SectionHeader'

const experienceHighlights = [
  {
    number: '01',
    title: 'MERN Stack Internship',
    description:
      'Completed a MERN Stack Development internship, gaining practical experience in building modern web applications with React, Node.js, Express, and MongoDB.',
  },
  {
    number: '02',
    title: 'Frontend & UI Development',
    description:
      'Focused on creating responsive, interactive interfaces with attention to user experience, reusable components, and clean frontend architecture.',
  },
  {
    number: '03',
    title: 'AI-Powered Web Applications',
    description:
      'Explored AI integration into web applications and developed an AI Resume Analyzer to help users understand their resume and prepare for job opportunities.',
  },
  {
    number: '04',
    title: 'Continuous Learning',
    description:
      'Currently strengthening TypeScript, testing, system design, and full-stack development skills while building practical projects.',
  },
]

const techStack = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'Git & GitHub',
]

function AboutSection() {
  return (
    <motion.section
      className="min-h-screen bg-[#080808] px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-36"
      {...pageTransition}
    >
      {/* Section Header */}
      <SectionHeader
        eyebrow="About Me / 01"
        title="Building digital experiences with code, curiosity, and purpose."
        text="I'm Gyanaranjan Sahu, a Computer Science Engineering graduate and MERN Stack Developer who enjoys turning ideas into responsive, interactive web applications."
      />

      <motion.div
        className="mx-auto mt-14 grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div variants={fadeUp} className="relative">

          {/* Small Label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[#b8ff3d]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#b8ff3d]">
              Who I Am
            </span>
          </div>

          <h2 className="max-w-lg text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[0.98] tracking-[-0.055em] text-white">
            Learning.
            <br />
            Building.
            <br />
            <span className="text-[#b8ff3d]">Growing.</span>
          </h2>

          <p className="mt-7 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            I completed my B.Tech in Computer Science and Engineering and
            developed a strong interest in full-stack web development.
            During my MERN Stack Development internship, I gained practical
            exposure to building web applications and working with modern
            development technologies.
          </p>

          <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            I enjoy working on frontend experiences, connecting applications
            with APIs, and exploring how AI can make digital products more
            useful. My goal is to continue improving as a developer by
            learning, building, and solving real-world problems.
          </p>

          {/* Education / Experience Snapshot */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">
                  2026
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">
                  B.Tech CSE
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">
                  MERN
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">
                  Internship Experience
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
              Technologies I Work With
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((skill) => (
                <motion.span
                  key={skill}
                  className="border border-white/10 px-3 py-2 text-[11px] font-semibold text-white/65 transition-colors duration-300 hover:border-[#b8ff3d]/60 hover:text-[#b8ff3d]"
                  whileHover={{ y: -3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Content: Experience Timeline */}
        <motion.div variants={fadeUp} className="relative">

          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8ff3d]">
                My Journey
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Experience & Focus
              </h3>
            </div>

            <span className="text-xs font-bold text-white/25">
              04 / 04
            </span>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-[#b8ff3d]/70 via-white/15 to-transparent" />

            <div className="space-y-4">
              {experienceHighlights.map((item, index) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="group relative flex gap-5 border-b border-white/[0.08] py-6 first:pt-2"
                  whileHover={{ x: 6 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 24,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 bg-[#080808] text-[10px] font-bold text-[#b8ff3d] transition-colors duration-300 group-hover:border-[#b8ff3d]">
                    {item.number}
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#b8ff3d] sm:text-xl">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-white/50 sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Closing Statement */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto mt-20 max-w-7xl border-t border-white/10 pt-10 sm:mt-28"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Turning ideas into
            <br />
            <span className="text-[#b8ff3d]">meaningful experiences.</span>
          </h3>

          <p className="max-w-xs text-sm leading-6 text-white/40">
            Always exploring new technologies, improving my skills, and
            creating better digital products.
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default AboutSection