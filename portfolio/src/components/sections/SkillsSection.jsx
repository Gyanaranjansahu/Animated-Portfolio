import { motion } from 'framer-motion'
import { skillGroups } from '../../data/portfolio'
import { fadeUp, pageTransition, stagger } from '../../utils/motion'
import SectionHeader from '../ui/SectionHeader'

const skillIcons = {
  HTML5: {
    color: '#f97316',
    text: 'HTML',
    path: 'M24 10h48l-4 58-20 8-20-8-4-58Zm13 17 1 9h21l-.7 8H39l1.4 16 8.6 3.4 8.7-3.4.6-8H66l-1.2 14.2L49 72l-15.8-5.8L31 39h27.5l.5-6H30l-.8-6Z',
  },
  CSS3: {
    color: '#38bdf8',
    text: 'CSS',
    path: 'M24 10h48l-4 58-20 8-20-8-4-58Zm12 17 .7 8H59l-.8 8H37.4l2.1 23L49 69.5l9.4-3.5.9-10H51l-.3 4-1.7.7-1.8-.7-.5-6H40l1 13.5L49 71l15.7-5.8L67 35H43l-.5-6H68l.7-8H35.3Z',
  },
  'JavaScript (ES6+)': {
    color: '#facc15',
    text: 'JS',
    path: 'M20 20h56v56H20V20Zm30 42c0 8-4.6 12-11.5 12-6.2 0-9.8-3.2-11.6-7l6.4-3.8c1.2 2.1 2.3 3.9 4.9 3.9 2.5 0 4.1-1 4.1-4.8V37H50v25Zm13.5 12c-7.2 0-11.8-3.4-14.1-7.9l6.4-3.7c1.7 2.8 4 4.9 7.9 4.9 3.3 0 5.4-1.6 5.4-3.9 0-2.7-2.1-3.6-5.8-5.2l-2-.9c-5.8-2.5-9.6-5.6-9.6-12.2 0-6.1 4.6-10.7 11.8-10.7 5.1 0 8.8 1.8 11.5 6.4l-6.1 3.9c-1.4-2.5-2.9-3.5-5.4-3.5s-4 1.6-4 3.5c0 2.5 1.5 3.5 5 5l2 .9c6.8 2.9 10.6 5.9 10.6 12.5 0 7.2-5.6 11-13.6 11Z',
  },
  React: {
    color: '#61dafb',
    text: 'React',
    path: 'M48 41.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0-17c17 0 31 10.5 31 23.5S65 71.5 48 71.5 17 61 17 48s14-23.5 31-23.5Zm0 8C35.5 32.5 25 39.5 25 48s10.5 15.5 23 15.5 23-7 23-15.5-10.5-15.5-23-15.5Zm-20.4 3.8c8.5-14.7 24.6-21.6 35.9-15.1 11.2 6.5 13.3 23.8 4.8 38.5-8.5 14.7-24.6 21.6-35.9 15.1-11.2-6.5-13.3-23.8-4.8-38.5Zm7 4c-6.3 10.9-5.7 23.5 1.7 27.8 7.4 4.2 18.6-2 24.9-12.9 6.3-10.9 5.7-23.5-1.7-27.8-7.4-4.2-18.6 2-24.9 12.9Zm33.8-4c8.5 14.7 6.4 32-4.8 38.5-11.3 6.5-27.4-.4-35.9-15.1-8.5-14.7-6.4-32 4.8-38.5 11.3-6.5 27.4.4 35.9 15.1Zm-7 4C55.1 29.4 43.9 23.2 36.5 27.4c-7.4 4.3-8 16.9-1.7 27.8 6.3 10.9 17.5 17.1 24.9 12.9 7.4-4.3 8-16.9 1.7-27.8Z',
  },
  'Tailwind CSS': {
    color: '#38bdf8',
    text: 'TW',
    path: 'M48 28c-9.8 0-15.9 4.9-18.4 14.7 3.7-4.9 8-6.7 12.9-5.5 2.8.7 4.8 2.7 7 4.9 3.6 3.7 7.8 8 16.9 8 9.8 0 15.9-4.9 18.4-14.7-3.7 4.9-8 6.7-12.9 5.5-2.8-.7-4.8-2.7-7-4.9-3.6-3.7-7.8-8-16.9-8ZM29.6 50.1c-9.8 0-15.9 4.9-18.4 14.7 3.7-4.9 8-6.7 12.9-5.5 2.8.7 4.8 2.7 7 4.9 3.6 3.7 7.8 8 16.9 8 9.8 0 15.9-4.9 18.4-14.7-3.7 4.9-8 6.7-12.9 5.5-2.8-.7-4.8-2.7-7-4.9-3.6-3.7-7.8-8-16.9-8Z',
  },
  'Framer Motion': {
    color: '#a78bfa',
    text: 'FM',
    path: 'M30 18h38v20H49L30 18Zm0 20h19l19 20H49L30 38Zm0 20h19v20L30 58Z',
  },
  'Node.js': {
    color: '#84cc16',
    text: 'Node',
    path: 'M48 12 78 29v38L48 84 18 67V29l30-17Zm0 9L26 34v28l22 13 22-13V34L48 21Zm-13 44V34h8l15 18V34h8v31h-7.4L43 46.5V65h-8Z',
  },
  'Express.js': {
    color: '#f8fafc',
    text: 'Ex',
    path: 'M18 30h60v9H29v9h43v8H29v10h50v9H18V30Zm47 17 8-11h10L70 53l14 17H73l-8-11-8 11H47l13-17-13-17h10l8 11Z',
  },
  MongoDB: {
    color: '#22c55e',
    text: 'DB',
    path: 'M49 10c9 13 18 25 18 41 0 13-7 23-18 32-11-9-18-19-18-32 0-16 9-28 18-41Zm0 13c-5.8 9-10 18-10 28 0 7 3.2 13.4 8 19V42h4v28c4.8-5.6 8-12 8-19 0-10-4.2-19-10-28Z',
  },
  'REST APIs': {
    color: '#fb7185',
    text: 'API',
    path: 'M20 32h56v32H20V32Zm8 9v14h7l2-4 3 8 4-14 3 10h21V41H28Z',
  },
  Git: {
    color: '#f97316',
    text: 'Git',
    path: 'M48 12 84 48 48 84 12 48 48 12Zm0 13L25 48l23 23 23-23-23-23Zm-7 18a7 7 0 0 1 10 6l10 5a7 7 0 1 1-3 6l-10-5a7 7 0 1 1-7-12Z',
  },
  GitHub: {
    color: '#e5e7eb',
    text: 'GH',
    path: 'M48 15a33 33 0 0 0-10.5 64.3c1.7.3 2.3-.7 2.3-1.6v-6.1c-9.3 2-11.3-4-11.3-4-1.5-3.9-3.7-4.9-3.7-4.9-3-2.1.2-2 .2-2 3.4.2 5.1 3.4 5.1 3.4 3 5.1 7.8 3.6 9.7 2.8.3-2.2 1.2-3.6 2.1-4.5-7.4-.8-15.2-3.7-15.2-16.5 0-3.6 1.3-6.6 3.4-9-.3-.8-1.5-4.3.4-8.9 0 0 2.8-.9 9.2 3.4a31.3 31.3 0 0 1 16.8 0c6.4-4.3 9.2-3.4 9.2-3.4 1.9 4.6.7 8.1.4 8.9 2.1 2.4 3.4 5.4 3.4 9 0 12.9-7.9 15.7-15.3 16.5 1.2 1 2.3 3.1 2.3 6.2v9c0 .9.6 1.9 2.3 1.6A33 33 0 0 0 48 15Z',
  },
  'Responsive Design': {
    color: '#8eb8ff',
    text: 'RWD',
    path: 'M16 24h46v33H16V24Zm6 6v21h34V30H22Zm44 10h14v32H54V62h12V40Zm6 6v20h2V46h-2ZM26 65h25v7H26v-7Z',
  },
  'API Integration': {
    color: '#50dcb7',
    text: 'API',
    path: 'M33 33h14v8H33a7 7 0 0 0 0 14h14v8H33a15 15 0 0 1 0-30Zm16 10h-8v10h14V43h-6Zm0 12h14a7 7 0 0 0 0-14H49v-8h14a15 15 0 0 1 0 30H49v-8Z',
  },
  'React Hooks': {
    color: '#61dafb',
    text: 'Hook',
    path: 'M30 50c0-13 8-22 18-22s18 9 18 22v7a10 10 0 1 1-8 0v-7c0-8.5-4.3-14-10-14s-10 5.5-10 14v14h-8V50Zm30 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM21 28h12v8H21v-8Zm0 16h12v8H21v-8Z',
  },
}

function SkillIcon({ label }) {
  const icon = skillIcons[label] ?? skillIcons.React

  return (
    <div className="relative grid h-20 w-20 place-items-center sm:h-24 sm:w-24">
      <motion.span
        className="absolute inset-0 rounded-full border border-[#b8ff3d]/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
      >
        <motion.span
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
          style={{ backgroundColor: icon.color, boxShadow: `0 0 18px ${icon.color}` }}
        />
      </motion.span>
      <motion.svg
        viewBox="0 0 96 96"
        className="relative h-16 w-16 sm:h-20 sm:w-20"
        whileHover={{ rotate: 12, scale: 1.08 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.circle
          cx="48"
          cy="48"
          r="40"
          fill="rgba(255,255,255,0.045)"
          stroke={icon.color}
          strokeWidth="2"
          animate={{ pathLength: [0.55, 1, 0.55], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d={icon.path}
          fill={icon.color}
          initial={{ scale: 0.84, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
        />
      </motion.svg>
      <motion.span
        className="absolute -bottom-1 rounded-full border border-[#b8ff3d]/25 bg-black/45 px-2 py-1 text-[10px] font-black text-white/76 backdrop-blur-md"
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {icon.text}
      </motion.span>
    </div>
  )
}

function SkillCard({ skill }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass group flex min-h-44 flex-col items-center justify-center rounded-[8px] p-4 text-center sm:min-h-52 sm:p-5"
      whileHover={{
        y: -12,
        rotateX: 6,
        rotateY: -6,
        boxShadow: '0 0 58px rgba(255,218,117,0.16)',
      }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <motion.div
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <SkillIcon label={skill} />
      </motion.div>
      <p className="mt-4 text-sm font-bold text-white/82 group-hover:text-white sm:text-base">{skill}</p>
    </motion.div>
  )
}

function SkillsSection() {
  return (
    <motion.section className="min-h-screen px-4 pb-20 pt-28 sm:pb-24 sm:pt-32" {...pageTransition}>
      <SectionHeader
        eyebrow="Skills"
        title="Interactive skill cards instead of ordinary progress bars."
        text="A visual skill system built around floating cards, SVG icon marks, staggered reveals, tilt interactions, and soft glow feedback."
      />
      <div className="mx-auto max-w-6xl space-y-12">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="glass relative overflow-hidden rounded-[8px] p-4 sm:p-5 md:p-7"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div
              className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#50dcb7]/10 blur-3xl"
              animate={{ scale: [1, 1.16, 1], opacity: [0.25, 0.55, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div variants={fadeUp} className="relative mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#50dcb7]">
                  Skill cluster
                </p>
                <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
                  {group.title}
                </h3>
              </div>
              <p className="text-sm font-semibold text-white/42">
                {group.skills.length} technologies
              </p>
            </motion.div>
            <div className="relative grid gap-4 min-[440px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.skills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default SkillsSection
