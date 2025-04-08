'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-orange/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-3xl sm:text-4xl pt-10 font-bold text-custom-orange mb-3">Hi, I&apos;m <span className="text-white">Jedidiah Onotu</span></h1>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              I transform Ideas Into <span className="text-custom-orange">Digital Excellence</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              I build responsive and user-friendly web applications that elevate your online presence. I specialize in modern web technologies and exceptional user experiences.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md mx-auto"
          >
            <Link
              href="#contact"
              className="bg-custom-orange text-white px-8 py-3 rounded-full font-medium hover:bg-custom-orange/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-custom-orange/20"
            >
              Let&apos;s Work Together
            </Link>
            <a
              href="https://drive.google.com/file/d/1TlcWpRXrPgu-XX9ZM4Tvsi_AQ29427_Y/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-custom-orange text-custom-orange px-8 py-3 rounded-full font-medium hover:bg-custom-orange/10 transition-all duration-300 transform hover:scale-105"
            >
              View Resume
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "10+", label: "Happy Clients" },
              { number: "5+", label: "Technologies Mastered" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-custom-orange mb-2">{stat.number}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center ">
              <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-6 h-6 text-custom-orange"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-custom-orange/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-custom-orange/20 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero; 