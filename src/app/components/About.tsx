'use client';

import { motion } from 'framer-motion';

const frontendSkills = [
  "JavaScript",
  "React",
  "CSS3",
  "Tailwind CSS",
  "HTML5",
  "Responsive Design",
  "Next.js",
  "Node.js",
  "Angular"
];

const About = () => {
  return (
    <section id="about" className="py-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg">
              Hi, I am Enesi. I am a front end developer based in Abuja Nigeria with an advanced diploma in software engineering. 
              I am passionate about designing and creating software solutions.
            </p>
            
            <p className="text-gray-300 text-lg">
              I have expertise in JavaScript, React, and Next.js, along with their components. I specialize 
              in building responsive, user-friendly web applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-3 text-center">
              <span className="text-custom-orange">Skills</span> & <span className="text-white">Expertise</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-items-center">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-custom-orange/10 text-custom-orange rounded-full text-sm transition-all duration-300 hover:bg-custom-orange/20 hover:scale-105 hover:shadow-lg text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 