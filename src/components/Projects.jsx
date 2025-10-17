import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import VideoEditor  from '../assets/Video-editor.png'
import Inuproject from '../assets/inu.png'
import Bank from '../assets/bank.png'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Video Editor Portifolio',
      description: 'A responsive portfolio website for a video editor showcasing projects and skills.',
      image: VideoEditor,
      tags: ['React', 'Express', 'Resend Mail API ',"Tailwind CSS"],
      category: 'Fullstack',
      liveUrl: 'https://epicedits-siol.vercel.app/',
      githubUrl: 'https://github.com/ame12-max/video-editor-porifolio'
      
    },
    {
      id: 2,
      title: 'Injibara University Tech Club Platform',
      description: 'Built a full-stack web application using React.js, Node.js, and MySQL featuring dual registration systems for both website accounts and computation courses. Implemented secure JWT authentication, role-based access control, and responsive Tailwind CSS design.',
      image: Inuproject,
      tags: ['React', 'Express', 'Mail Api', 'Mysql'],
      category: 'fullstack',
      liveUrl: 'https://inu-tech-club.vercel.app',
      githubUrl: 'https://github.com/ame12-max/tech-club'
    },
    {
      id: 3,
      title: 'Banking Management System',
      description: 'Built a secure banking platform using React.js, Express.js, and MongoDB. Features include user account management, fund transfers, transaction history, and balance tracking. Implemented JWT authentication, encrypted data storage, and role-based access control.',
      image: Bank,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      liveUrl: 'https://banking-system-brown.vercel.app/dashboard',
      githubUrl: 'https://github.com/ame12-max/Fullstack-banking-system'
    },
  /*   {
      id: 4,
      title: 'REST API Service',
      description: 'Scalable REST API with authentication, rate limiting, and comprehensive documentation.',
      image: '/project4.jpg',
      tags: ['Node.js', 'Express', 'JWT', 'Swagger'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#'
    }, */

  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="section-padding bg-gray-50 dark:bg-dark-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and experience 
              in web development.
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-dark-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target='blank'
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-2 rounded-lg transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-center py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="btn-primary inline-block"
            >
              View More Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
