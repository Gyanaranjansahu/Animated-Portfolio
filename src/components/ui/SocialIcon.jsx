import { motion } from 'framer-motion'

function IconPath({ icon }) {
  if (icon === 'github') {
    return (
      <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.46.08.63-.2.63-.44v-1.58c-2.55.56-3.09-1.1-3.09-1.1-.42-1.05-1.02-1.33-1.02-1.33-.83-.57.06-.56.06-.56.92.07 1.4.95 1.4.95.82 1.39 2.14.99 2.66.76.08-.6.32-.99.58-1.22-2.04-.23-4.18-1.02-4.18-4.53 0-1 .36-1.82.95-2.46-.1-.23-.41-1.17.09-2.43 0 0 .77-.25 2.53.94a8.7 8.7 0 0 1 4.6 0c1.75-1.19 2.52-.94 2.52-.94.5 1.26.19 2.2.09 2.43.6.64.95 1.46.95 2.46 0 3.52-2.15 4.29-4.2 4.52.33.29.62.85.62 1.71v2.53c0 .25.17.53.64.44A9.2 9.2 0 0 0 12 2.8Z" />
    )
  }

  if (icon === 'linkedin') {
    return (
      <path d="M6.7 20H3.4V8.9h3.3V20ZM5 7.4a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM20.6 20h-3.3v-5.4c0-1.3-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V20h-3.3V8.9h3.17v1.52h.05c.44-.84 1.52-1.73 3.13-1.73 3.35 0 3.97 2.2 3.97 5.07V20Z" />
    )
  }

  return <path d="M3.5 6.8h17v10.4h-17V6.8Zm1.3 1.4L12 13.1l7.2-4.9M4.8 15.8l5.1-3.8m9.3 3.8-5.1-3.8" />
}

function SocialIcon({ icon, label, href }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className="glass grid h-12 w-12 place-items-center rounded-full text-white/78 transition-colors hover:text-white"
      whileHover={{ y: -6, rotate: 8, boxShadow: '0 0 34px rgba(80,220,183,0.22)' }}
      whileTap={{ scale: 0.94 }}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <IconPath icon={icon} />
      </svg>
    </motion.a>
  )
}

export default SocialIcon
