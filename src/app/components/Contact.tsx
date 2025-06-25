'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-black py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-white">Let&apos;s Build Something Great Together</h1>
          <p className="text-xl text-gray-400">Got a project in mind? Reach out—I&apos;d love to hear from you.</p>
        </motion.div>

        {/* Contact Form */}
        {!isSubmitted ? (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6 bg-custom-blue/10 p-8 rounded-lg border border-custom-orange/20 w-[80%] mx-auto"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-custom-orange/20 bg-black/50 text-white 
                         focus:border-custom-orange focus:ring-0
                         focus:shadow-[0_0_10px_rgba(255,87,51,0.5)] 
                         hover:border-custom-orange/50 hover:bg-black/70
                         transition-all duration-300
                         outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-custom-orange/20 bg-black/50 text-white 
                         focus:border-custom-orange focus:ring-0
                         focus:shadow-[0_0_10px_rgba(255,87,51,0.5)]
                         hover:border-custom-orange/50 hover:bg-black/70
                         transition-all duration-300
                         outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-custom-orange/20 bg-black/50 text-white 
                         focus:border-custom-orange focus:ring-0
                         focus:shadow-[0_0_10px_rgba(255,87,51,0.5)]
                         hover:border-custom-orange/50 hover:bg-black/70
                         transition-all duration-300
                         outline-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button
              type="button"
              className="w-full bg-custom-orange text-black py-3 px-6 rounded-md 
                       hover:bg-custom-orange/90 hover:scale-[1.02]
                       active:scale-[0.98]
                       transition-all duration-200 font-semibold"
              onClick={() => {
                const subject = encodeURIComponent('Contact from ' + formData.name);
                const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
                window.location.href = `mailto:jedidiahonotu@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              Let&apos;s Talk
            </button>
          </motion.form>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-8 bg-custom-blue/10 rounded-lg border border-custom-orange/20"
          >
            <h3 className="text-2xl font-semibold text-custom-orange mb-2">Thanks for reaching out!</h3>
            <p className="text-gray-300">I&apos;ll get back to you within 24–48 hours.</p>
          </motion.div>
        )}

        {/* Additional Contact Info */}
        <div className="mt-12 text-center space-y-6">
          <div>
            <p className="text-lg text-gray-300">
              📧 <a href="mailto:enesisspace@gmail.com" className="text-custom-orange hover:text-custom-orange/80">
                jedidiahonotu@gmail.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/jedidiah-onotu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-orange transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/Jedidiah5" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-orange transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@enesis.space?_t=ZM-8xLY9wZG88sX&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-custom-orange transition-colors duration-300">
              <span className="sr-only">TikTok</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.403 2.083a1.25 1.25 0 0 1 1.25 1.25v1.462a3.75 3.75 0 0 0 3.75 3.75h.254a1.25 1.25 0 1 1 0 2.5h-.254a6.25 6.25 0 0 1-4.75-2.25v7.505a5.25 5.25 0 1 1-5.25-5.25 1.25 1.25 0 1 1 0 2.5 2.75 2.75 0 1 0 2.75 2.75V3.333a1.25 1.25 0 0 1 1.25-1.25z"/>
              </svg>
            </a>
          </div>

          {/* Calendly Link */}
          <div>
            <p className="text-lg text-gray-300">
              Prefer a quick call?{' '}
              <a 
                href="https://calendly.com/jedidiahonotu/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-orange hover:text-custom-orange/80"
              >
                Book a free 15-min consultation here
              </a>
            </p>
          </div>

          {/* Location */}
          <div>
            <p className="text-lg text-gray-300">Available remotely | Based in Abuja, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
} 