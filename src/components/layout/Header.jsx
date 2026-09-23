
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { navItems } from '../../data/portfolio'
import AnimatedLogo from '../ui/AnimatedLogo'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 bg-[#080808]/95 px-1 py-3 backdrop-blur-sm md:px-2">

        {/* Logo */}
        <NavLink
          to="/"
          aria-label="Go to home"
          onClick={() => setOpen(false)}
          className="relative z-10 transition-opacity duration-300 hover:opacity-80"
        >
          <AnimatedLogo />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative flex items-center gap-2 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 ${
                  isActive
                    ? 'text-[#b8ff3d]'
                    : 'text-white/50 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="text-[9px] text-white/20 transition-colors group-hover:text-[#b8ff3d]/60">
                    0{index + 1}
                  </span>

                  {item.label}

                  {isActive && (
                    <motion.span
                      layoutId="activeRoute"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#b8ff3d]"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Status */}
        <div className="hidden items-center gap-2 lg:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b8ff3d] shadow-[0_0_12px_rgba(184,255,61,0.8)]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
            Available for work
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors duration-300 hover:border-[#b8ff3d]/60 md:hidden"
        >
          <span className="relative h-4 w-5">
            <motion.span
              className="absolute left-0 top-0 h-[2px] w-5 bg-[#b8ff3d]"
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 7 : 0,
              }}
              transition={{ duration: 0.25 }}
            />

            <motion.span
              className="absolute left-0 top-1/2 h-[2px] w-5 bg-white"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />

            <motion.span
              className="absolute bottom-0 left-0 h-[2px] w-5 bg-[#b8ff3d]"
              animate={{
                rotate: open ? -45 : 0,
                y: open ? -7 : 0,
              }}
              transition={{ duration: 0.25 }}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden border border-white/10 bg-[#0b0b0b] p-3 md:hidden"
            initial={{ opacity: 0, height: 0, y: -12 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -12 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-3 flex items-center justify-between border-b border-white/10 px-3 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Navigation
              </span>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8ff3d]">
                Menu
              </span>
            </div>

            <div className="space-y-1">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-white/[0.06] px-4 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-300 ${
                      isActive
                        ? 'bg-[#b8ff3d] text-[#080808]'
                        : 'text-white/65 hover:bg-white/[0.04] hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center gap-4">
                        <span className="text-[10px] opacity-40">
                          0{index + 1}
                        </span>

                        {item.label}
                      </span>

                      <motion.span
                        animate={{
                          x: isActive ? 0 : -4,
                          opacity: isActive ? 1 : 0,
                        }}
                        className="text-lg"
                      >
                        ↗
                      </motion.span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2 px-4 py-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b8ff3d]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                Available for work
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header