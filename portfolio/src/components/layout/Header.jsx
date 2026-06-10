import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { navItems } from '../../data/portfolio'
import AnimatedLogo from '../ui/AnimatedLogo'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3">
        <NavLink to="/" aria-label="Go to home" onClick={() => setOpen(false)}>
          <AnimatedLogo />
        </NavLink>
        <div className="hidden items-center gap-6 text-sm text-white/68 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-colors hover:text-white ${isActive ? 'text-white' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeRoute"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-[#ffda75]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#b8ff3d]/35 text-white md:hidden"
        >
          <span className="relative h-4 w-5">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-5 bg-white"
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
            />
            <motion.span
              className="absolute left-0 top-1/2 h-0.5 w-5 bg-white"
              animate={{ opacity: open ? 0 : 1 }}
            />
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 w-5 bg-white"
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="glass mx-auto mt-3 max-w-6xl rounded-[8px] p-3 md:hidden"
            initial={{ opacity: 0, y: -16, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(10px)' }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-[8px] px-4 py-3 text-sm font-semibold ${
                    isActive ? 'bg-white text-[#050606]' : 'text-white/72'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
