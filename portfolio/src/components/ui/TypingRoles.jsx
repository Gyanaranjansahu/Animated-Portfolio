import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { roles } from '../../data/portfolio'

function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [letterCount, setLetterCount] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const activeRole = roles[roleIndex]
  const typed = useMemo(() => activeRole.slice(0, letterCount), [activeRole, letterCount])

  useEffect(() => {
    const isComplete = letterCount === activeRole.length
    const isEmpty = letterCount === 0
    const delay = isComplete && !deleting ? 1250 : deleting ? 42 : 72

    const timer = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true)
        return
      }

      if (deleting && isEmpty) {
        setDeleting(false)
        setRoleIndex((current) => (current + 1) % roles.length)
        return
      }

      setLetterCount((current) => current + (deleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [activeRole.length, deleting, letterCount])

  return (
    <span className="inline-flex min-h-[1.35em] items-center text-[#ffda75]">
      <span>{typed}</span>
      <motion.span
        className="ml-1 h-[1em] w-0.5 bg-[#50dcb7]"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  )
}

export default TypingRoles
