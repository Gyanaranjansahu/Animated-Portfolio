
import { motion } from 'framer-motion'
import { socialLinks } from '../../data/portfolio'
import AnimatedLogo from '../ui/AnimatedLogo'
import SocialIcon from '../ui/SocialIcon'

function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative z-10 overflow-hidden bg-[#080808] px-4 pb-8 pt-16 sm:px-6">

      {/* Decorative Top Line */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 h-px bg-gradient-to-r from-[#b8ff3d] via-white/15 to-transparent" />

        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

          {/* Brand & Message */}
          <div className="max-w-xl">
            <div className="mb-6">
              <AnimatedLogo />
            </div>

            <p className="max-w-md text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              Let's build something
              <span className="text-[#b8ff3d]"> meaningful.</span>
            </p>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/45">
              Thank you for visiting my portfolio. I design and develop
              responsive digital experiences using React, Tailwind CSS,
              Framer Motion, and the MERN stack.
            </p>
          </div>

          {/* Social & Back To Top */}
          <div className="flex flex-col items-start gap-5 md:items-end">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              Connect with me
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ y: -5 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 20,
                  }}
                >
                  <SocialIcon {...link} />
                </motion.div>
              ))}

              {/* Back To Top */}
              <motion.button
                type="button"
                onClick={backToTop}
                aria-label="Back to top"
                className="ml-2 grid h-12 w-12 place-items-center border border-[#b8ff3d]/50 bg-[#b8ff3d] text-xl font-bold text-[#080808] transition-colors duration-300 hover:bg-white"
                whileHover={{
                  y: -5,
                  boxShadow: '0 0 30px rgba(184,255,61,0.25)',
                }}
                whileTap={{ scale: 0.94 }}
              >
                ↑
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Footer Bottom */}
        <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white/30 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Gyanaranjan Sahu. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b8ff3d]" />
            <span>Designed & Developed with React</span>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer