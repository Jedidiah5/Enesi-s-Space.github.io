'use client';

import { motion } from 'framer-motion';

const techSkills = [
  { name: "JavaScript", icon: "ri-javascript-fill" },
  { name: "TypeScript", icon: "ri-javascript-fill" },
  { name: "React", icon: "ri-reactjs-line" },
  { name: "Next.js", icon: "ri-nextjs-line" },
  { name: "Node.js", icon: "ri-nodejs-line" },
  { name: "TailwindCSS", icon: "ri-tailwind-css-fill" },
  { name: "HTML5", icon: "ri-html5-line" },
  { name: "Git", icon: "ri-github-fill" },
  { name: "Figma", icon: "ri-figma-fill" }
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <i className="ri-user-3-line text-xl sm:text-2xl"></i>
            About <span className="text-custom-orange">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="prose prose-invert">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I&apos;m an undergraduate Information Technology student at <span className="text-white font-medium">Middlesex University</span>, based in <span className="text-white font-medium">London, United Kingdom</span>, and I&apos;m approaching graduation. I work across the stack—frontend, backend, and databases—to ship reliable, well-designed products.
              </p>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I build with modern tools like React, Next.js, TypeScript, and Node, and I care about performance, security, and clear user experiences from API to interface.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I enjoy turning briefs and ideas into working software, learning new tools as the stack evolves, and collaborating with others on projects that are useful in the real world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Technical <span className="text-custom-orange">Skills</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {techSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-custom-orange/10 text-custom-orange rounded-lg p-2 sm:p-3 text-center text-xs sm:text-sm hover:bg-custom-orange/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <i className={skill.icon}></i>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Current <span className="text-custom-orange">Focus</span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-custom-blue/10 rounded-lg p-3 sm:p-4 border border-custom-orange/20">
                  <h4 className="text-custom-orange font-semibold mb-2 text-sm sm:text-base">Final year &amp; wrap-up</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Finishing my BSc IT degree at Middlesex, strengthening full-stack project work, and preparing for the next step after graduation.</p>
                </div>
                <div className="bg-custom-blue/10 rounded-lg p-3 sm:p-4 border border-custom-orange/20">
                  <h4 className="text-custom-orange font-semibold mb-2 text-sm sm:text-base">London, UK</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Open to full-stack and software roles where I can keep building products end to end and grow with a strong team.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 