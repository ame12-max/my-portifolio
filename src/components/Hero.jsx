import React from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import profile from '../assets/profile.png'

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Fullstack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'],
    loop: true,
    delay: 70,
    deleteSpeed: 50,
  })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-300 dark:via-dark-200 dark:to-dark-300"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <motion.div
  className="relative inline-block mb-8 mt-16 md:mt-24 lg:mt-32"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-dark-200 shadow-2xl mx-auto">
    <img 
      src={profile} 
      alt="Amare - Fullstack Developer"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-ping"></div>
</motion.div>


            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Amare</span>
            </motion.h1>

            {/* Typewriter Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-6 h-12"
            >
              <span className="typing-container">{text}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              I craft digital experiences that are fast, accessible, and visually appealing. 
              With expertise in modern web technologies, I bring ideas to life through clean code 
              and innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
