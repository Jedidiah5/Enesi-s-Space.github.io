'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// Example projects data - you can replace this with your actual projects
const projects = [
  {
    title: "Store Management System",
    description: "It helps manage your store inventory and sales.",
    images: ["/project1.jpg", "/project1-2.jpg", "/project1-3.jpg", "/project1-3.jpg",  "/project1-3.jpg"],
    technologies: ["React", "TypeScript", "Tailwind"],
    github: "#"
  },
  {
    title: "Serene Mind",
    description: "It is a mental health platform that supports users in managing there metal health.",
    images: ["/project2.jpg", "/project2-2.jpg", "/project2-3.jpg"],
    technologies: ["Next.js", "Firebase", "Framer Motion"],
    github: "#"
  },
  {
    title: "Bidspirit-Auction",
    description: "It is an auction platform that allows users to bid on items and also buy items.",
    images: ["/bidspirit-auction.jpg", "/Bidspirit2.png", "/Bidspirit3.png", "/Bidspirit4.jpg", "/Bidspirit5.jpg"],
    technologies: ["TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Jedidiah5/Bidspirit-Auction"
  },
];

const Projects = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(projects.map(() => 0));

  const handlePrevImage = (projectIndex: number) => {
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      newIndexes[projectIndex] = (newIndexes[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length;
      return newIndexes;
    });
  };

  const handleNextImage = (projectIndex: number) => {
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % projects[projectIndex].images.length;
      return newIndexes;
    });
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-custom-orange">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 border border-custom-orange/20 rounded-lg overflow-hidden hover:border-custom-orange/40 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden group">
                <Image
                  src={project.images[currentImageIndexes[projectIndex]]}
                  alt={`${project.title} - Image ${currentImageIndexes[projectIndex] + 1}`}
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-custom-orange/20 to-transparent z-10" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => handlePrevImage(projectIndex)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-custom-orange"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => handleNextImage(projectIndex)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-custom-orange"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1">
                  {project.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentImageIndexes[projectIndex]
                          ? 'bg-custom-orange'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-custom-orange/10 text-custom-orange rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-custom-orange text-white px-4 py-2 rounded-lg text-center hover:bg-custom-orange/90 transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 