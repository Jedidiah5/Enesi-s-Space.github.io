'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useCallback, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  liveSite: string;
  type: 'image' | 'video';
  images?: string[];
  video?: string;
}

// Example projects data - you can replace this with your actual projects
const projects: Project[] = [
  {
    title: "Store Management System",
    description: "I worked on this project as the frontend developer with my team to manage the store inventory and sales for strores.",
    images: ["/StoreSystem3.jpg", "/StoreSystem4.jpg", "/StoreSystem5.jpg", "/StoreSystem1.jpg", "/StoreSystem2.jpg"],
    technologies: ["Html", "CSS", "Javascript", "Firebase"],
    github: "https://github.com/Jedidiah5/storeManagementSystem",
    liveSite: "",
    type: "image"
  },
  {
    title: "3D-Page",
    description: "Using Three.js, i created a 3D page that allows users to interact with the page in a 3D enviroment.",
    video: "/3dPage.mov",
    technologies: ["Three.js", "CSS"],
    github: "https://github.com/Jedidiah5/3D-Page",
    liveSite: "https://3-d-page-three.vercel.app/",
    type: "video"
  },
  {
    title: "Bidspirit-Auction",
    description: "Using basic html, css and javascript, i created an auction platform that allows users to bid on items and also buy items.",
    images: ["/bidspirit-auction.jpg", "/Bidspirit2.png", "/Bidspirit3.png", "/Bidspirit4.jpg", "/Bidspirit5.jpg"],
    technologies: ["CSS", "Html", "Javascript"],
    github: "https://github.com/Jedidiah5/Bidspirit-Auction",
    liveSite: "https://bidspirit-auction.vercel.app/",
    type: "image"
  },
];

const Projects = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(projects.map(() => 0));
  const videoRef = useRef<HTMLVideoElement>(null);
  const playTimeoutRef = useRef<NodeJS.Timeout>();

  const handlePrevImage = (projectIndex: number) => {
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      const project = projects[projectIndex];
      if (project.type === 'image' && project.images) {
        newIndexes[projectIndex] = (newIndexes[projectIndex] - 1 + project.images.length) % project.images.length;
      }
      return newIndexes;
    });
  };

  const handleNextImage = (projectIndex: number) => {
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      const project = projects[projectIndex];
      if (project.type === 'image' && project.images) {
        newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % project.images.length;
      }
      return newIndexes;
    });
  };

  const handleVideoHover = useCallback((isHovering: boolean) => {
    if (!videoRef.current) return;

    // Clear any existing timeout
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
    }

    if (isHovering) {
      // Add a small delay before playing to prevent race conditions
      playTimeoutRef.current = setTimeout(() => {
        if (videoRef.current) {
          // Ensure video is loaded before playing
          if (videoRef.current.readyState >= 2) {
            videoRef.current.play().catch(error => {
              // Ignore AbortError as it's expected when quickly hovering
              if (error.name !== 'AbortError') {
                console.error('Error playing video:', error);
              }
            });
          } else {
            // If video isn't loaded yet, wait for it to load
            videoRef.current.addEventListener('loadeddata', () => {
              videoRef.current?.play().catch(error => {
                if (error.name !== 'AbortError') {
                  console.error('Error playing video:', error);
                }
              });
            }, { once: true });
          }
        }
      }, 50);
    } else {
      // Pause and reset immediately
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-custom-gray mb-4">
            My <span className="text-custom-orange">Projects</span>
          </h2>
          <p className="text-custom-gray-light/80 max-w-2xl mx-auto">
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
              className="bg-custom-blue/10 border border-custom-purple/20 rounded-lg overflow-hidden hover:border-custom-gold/40 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div 
                className="aspect-video relative overflow-hidden group"
                onMouseEnter={() => project.type === 'video' && handleVideoHover(true)}
                onMouseLeave={() => project.type === 'video' && handleVideoHover(false)}
              >
                {project.type === 'video' ? (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={{ pointerEvents: 'none' }}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <Image
                      src={project.images![currentImageIndexes[projectIndex]]}
                      alt={`${project.title} - Image ${currentImageIndexes[projectIndex] + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={projectIndex === 0}
                      quality={75}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-custom-purple/20 to-transparent z-10" />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => handlePrevImage(projectIndex)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-custom-blue/50 text-custom-gray p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-custom-gold hover:text-custom-dark hover:scale-110"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleNextImage(projectIndex)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-custom-blue/50 text-custom-gray p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-custom-gold hover:text-custom-dark hover:scale-110"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1">
                      {project.images!.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            index === currentImageIndexes[projectIndex]
                              ? 'bg-custom-gold'
                              : 'bg-custom-gray/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-custom-gray mb-2">{project.title}</h3>
                <p className="text-custom-gray-light/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-custom-purple/10 text-custom-orange rounded-full text-sm transition-all duration-300 hover:bg-custom-purple/20 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-custom-orange text-custom-dark px-4 py-2 rounded-lg text-center border-2 border-custom-orange hover:bg-custom-dark hover:text-white hover:border-custom-orange transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-custom-dark text-custom-gray px-4 py-2 rounded-lg text-center border-2 border-custom-orange hover:bg-custom-orange hover:text-custom-dark transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Live Site
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