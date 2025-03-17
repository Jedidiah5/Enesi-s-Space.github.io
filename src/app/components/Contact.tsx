'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Email',
    icon: <i className="ri-mail-line text-4xl"></i>,
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=jedidiahonotu@gmail.com&su=Hello%20Enesi&body=I%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect.',
    description: 'Send me an email'
  },
  {
    name: 'GitHub',
    icon: <i className="ri-github-fill text-4xl"></i>,
    url: 'https://github.com/Jedidiah5',
    description: 'Check out my GitHub profile'
  },
  {
    name: 'LinkedIn',
    icon: <i className="ri-linkedin-fill text-4xl"></i>,
    url: 'https://www.linkedin.com/in/jedidiah-onotu/',
    description: 'Connect with me on LinkedIn'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in <span className="text-custom-orange">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with me through any of these platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 rounded-lg p-6 text-center border-2 border-custom-orange/50 hover:border-custom-orange transition-colors"
            >
              <div className="text-4xl mb-4">{link.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{link.name}</h3>
              <p className="text-gray-400">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact; 