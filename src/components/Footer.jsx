import React from 'react'
import { motion } from 'framer-motion'
import { FaTelegram, FaYoutube,FaLinkedin } from 'react-icons/fa'; // From Font Awesome


const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/ame12-max', icon: '💻' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Telegram', href: '#', icon: '🐦' },
    { name: 'Email', href: 'mailto:amex44755@gmail.com', icon: '📧' }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-dark-300 text-white py-12">
      <div className="container-custom px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Ame.dev</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Fullstack developer passionate about creating digital experiences 
              that are both beautiful and functional. Let's build something 
              amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-primary-500 rounded-lg transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>📧 Amex44755@gmail.com</p>
              <p>📱 +2 (519) 851-39776</p>
              <p>📍 Injibara Universiy, Ethiopia</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Ame.dev. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            Made with ❤️ using React, Tailwind CSS,Express and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
