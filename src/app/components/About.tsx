'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-custom-orange">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg">
              I am an undergraduate student with an advanced diploma in software engineering, 
              passionate about creating innovative digital solutions. My journey in software development 
              has equipped me with a strong foundation in modern web technologies and best practices.
            </p>
            
            <p className="text-gray-300 text-lg">
              With extensive experience in JavaScript and its ecosystem, I specialize in building 
              responsive, user-friendly web applications. My creative approach to problem-solving 
              and attention to detail allows me to deliver exceptional results in every project.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-custom-orange/10 text-custom-orange rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-custom-orange/10 text-custom-orange rounded-full text-sm">
                React
              </span>
              <span className="px-4 py-2 bg-custom-orange/10 text-custom-orange rounded-full text-sm">
                Next.js
              </span>
              <span className="px-4 py-2 bg-custom-orange/10 text-custom-orange rounded-full text-sm">
                TypeScript
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-custom-orange/10 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-custom-orange/20 to-transparent" />
              {/* You can add an image here if you want */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 