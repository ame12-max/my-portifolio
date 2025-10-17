import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
    }
  }, [darkMode])

  // Background gradient based on mode
  const backgroundStyle = darkMode 
    ? 'bg-gradient-to-br from-dark-300 via-dark-200 to-dark-300'
    : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'

  return (
    <div className={`min-h-screen transition-colors duration-300 ${backgroundStyle}`}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>

      {/* Loading screen for theme transition */}
      <AnimatePresence>
        {false && ( // Set to true when you want to show loading between theme changes
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white dark:bg-dark-300 z-50 flex items-center justify-center"
          >
            <div className="text-2xl font-bold gradient-text">Ame.dev</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
