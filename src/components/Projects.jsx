import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce with React, Node.js, and MySQL',
    image: 'https://picsum.photos/600/400?random=1',
    tech: ['React', 'Node.js', 'MySQL', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat with AI integration using WebSockets',
    image: 'https://picsum.photos/600/400?random=2',
    tech: ['React', 'Express', 'Socket.io', 'OpenAI'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Portfolio 2025',
    description: 'This very portfolio with 3D and animations',
    image: 'https://picsum.photos/600/400?random=3',
    tech: ['React', 'Three.js', 'Tailwind', 'Framer'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white/80 dark:bg-dark-300/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-600 dark:text-purple-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-purple-500 transition">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 dark:text-gray-300 hover:text-purple-500 transition">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;