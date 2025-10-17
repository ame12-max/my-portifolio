import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import coddingImg from "../assets/codding.png"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]

  const skills = [
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'MongoDB', level: 80 },
    { name: 'Express.js', level: 88 },
    { name: 'Mysql', level: 85 }
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-dark-200">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10"
            >
              <img
                src={coddingImg}
                alt="My Photo working on laptop"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-2xl float-animation"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-500 rounded-2xl float-animation" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Right Column - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              I'm a passionate Fullstack Developer with over 1 years of experience creating 
              digital solutions that make a difference. My journey in web development started 
              with a curiosity about how things work, and it has evolved into a career dedicated 
              to building exceptional user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I specialize in the MERN stack but I'm always expanding my toolkit. Whether it's 
              a responsive frontend, a robust backend API, or a complete fullstack application, 
              I approach each project with attention to detail and a focus on performance.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Skills Progress Bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-primary-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 1 }}
                        className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
