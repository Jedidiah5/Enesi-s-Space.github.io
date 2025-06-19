'use client';

import { motion } from 'framer-motion';

const techSkills = [
  { name: "JavaScript", icon: "ri-javascript-fill" },
  { name: "React", icon: "ri-reactjs-line" },
  { name: "Next.js", icon: "ri-nextjs-line" },
  { name: "TypeScript", icon: "ri-javascript-fill" },
  { name: "TailwindCSS", icon: "ri-tailwind-css-fill" },
  { name: "HTML5", icon: "ri-html5-line" },
  { name: "Git", icon: "ri-github-fill" },
  { name: "Figma", icon: "ri-figma-fill" },
  { name: "UI/UX", icon: "ri-palette-line" }
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
                Hi, I&apos;m  a passionate Front-End Developer and Software Engineer with a focus on building clean, responsive, and user-focused web applications.
              </p>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With a background in software engineering and hands-on experience working with technologies like React, Next.js, JavaScript, and TailwindCSS, I specialize in turning design ideas into functional, high-performance websites.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I&apos;m currently interning at Wish to Wear, and I&apos;m also actively building projects like an application to help creators post on different platforms at the same time and a mental health app. I enjoy solving problems, learning new tools, and delivering experiences that make users feel at home.
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                When I&apos;m not coding, I&apos;m creating short stories for social media or designing content for my editing page.
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
                  <h4 className="text-custom-orange font-semibold mb-2 text-sm sm:text-base">HLS</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Working on a startup with a team as the front-end developer</p>
                </div>
                <div className="bg-custom-blue/10 rounded-lg p-3 sm:p-4 border border-custom-orange/20">
                  <h4 className="text-custom-orange font-semibold mb-2 text-sm sm:text-base">Personal Projects</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Working on a react native app to build my knowledge on react-native</p>
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