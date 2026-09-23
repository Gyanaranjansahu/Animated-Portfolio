import { lazy, Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AnimatedBackground from './components/background/AnimatedBackground'
import Cursor from './components/ui/Cursor'
import LoadingScreen from './components/ui/LoadingScreen'
import RouteTransition from './components/ui/RouteTransition'

const HomeSection = lazy(() => import('./components/sections/HomeSection'))
const AboutSection = lazy(() => import('./components/sections/AboutSection'))
const SkillsSection = lazy(() => import('./components/sections/SkillsSection'))
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'))
const ContactSection = lazy(() => import('./components/sections/ContactSection'))

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2600)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      {!loading && <RouteTransition />}
      <Cursor />
      <AnimatedBackground />
      <div className="noise" />

      <motion.main
        className="relative z-10 min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <Header />
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomeSection />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/skills" element={<SkillsSection />} />
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </motion.main>
    </>
  )
}

export default App
