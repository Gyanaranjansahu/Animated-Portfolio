import { motion } from 'framer-motion'
import { socialLinks } from '../../data/portfolio'
import AnimatedLogo from '../ui/AnimatedLogo'
import SocialIcon from '../ui/SocialIcon'

function Footer() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative z-10 px-4 pb-8">
      <div className="glass mx-auto flex max-w-6xl flex-col gap-6 rounded-[8px] p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <AnimatedLogo />
          <div>
            <p className="font-bold text-white">Thank you for visiting.</p>
            <p className="mt-1 text-sm text-white/48">Gyanaranjan Sahu. Built with React, Tailwind CSS, and Framer Motion.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} {...link} />
          ))}
          <motion.button
            type="button"
            onClick={backToTop}
            aria-label="Back to top"
            className="grid h-12 w-12 place-items-center rounded-full bg-[#ffda75] text-[#080907]"
            whileHover={{ y: -6, boxShadow: '0 0 34px rgba(255,218,117,0.3)' }}
            whileTap={{ scale: 0.94 }}
          >
            ↑
          </motion.button>
        </div>
      </div>
      <p className="mx-auto mt-5 max-w-6xl text-center text-xs text-white/38 md:text-left">
        Copyright © 2026 Gyanaranjan Sahu. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
