'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-orange/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold text-white mb-6"
        >
          Welcome To <span className="text-custom-orange">Enesi&apos;s</span> Space
        </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8"
          >
            Crafting Digital Experiences
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1HfLqsSUD7-pIrprrL2SbP1faF740lDd1/view?usp=sharing"
              className="bg-custom-orange text-white px-8 py-3 rounded-full font-medium hover:bg-custom-orange/90 transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="border border-custom-orange text-custom-orange px-8 py-3 rounded-full font-medium hover:bg-custom-orange/10 transition-colors"
            >
              Contact Me
            </a>
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