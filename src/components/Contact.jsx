import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Replace with your EmailJS credentials
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID')
      .then(() => {
        alert('Message sent!');
        reset();
      })
      .catch(err => console.error(err));
  };

  return (
    <section id="contact" className="py-20 bg-white/80 dark:bg-dark-300/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Let's talk</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you ASAP.
              </p>
              <div className="flex space-x-6 text-3xl">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition">
                  <FiGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition">
                  <FiLinkedin />
                </a>
                <a href="mailto:amare@example.com" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition">
                  <FiMail />
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register('name', { required: true })}
                  className="w-full p-3 bg-white/50 dark:bg-dark-200/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-purple-500 outline-none text-gray-800 dark:text-white"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">Name is required</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full p-3 bg-white/50 dark:bg-dark-200/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-purple-500 outline-none text-gray-800 dark:text-white"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">Valid email is required</p>}
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  {...register('message', { required: true })}
                  className="w-full p-3 bg-white/50 dark:bg-dark-200/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-purple-500 outline-none text-gray-800 dark:text-white"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">Message is required</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;