import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-lg' : 'py-6'
      }`}
    >
      <div className="container-custom px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Ame.dev
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-gray-700 dark:text-gray-300"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full glass hover:bg-white/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full glass"
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg glass"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass rounded-lg overflow-hidden"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-white/10 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
