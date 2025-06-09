'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface Project {
  title: string;
  subtitle: string;
  goal: string;
  role: string;
  technologies: string[];
  outcome: string;
  type: 'image' | 'video';
  images?: string[];
  video?: string;
  github: string;
  liveSite?: string;
}

const projects: Project[] = [
  {
    title: "Store Management System",
    subtitle: "Inventory & Sales Management Application",
    goal: "Create a comprehensive system for managing store inventory, sales tracking, and employee management.",
    role: "Developed the front end of the application with real-time updates.",
    technologies: ["Html", "Css", "JavaScript", "Firebase"],
    outcome: "Still in development",
    images: ["/images/StoreSystem1.jpg"],
    github: "https://github.com/Jedidiah5/storeManagementSystem",
    type: "image"
  },
  {
    title: "Clotify",
    subtitle: "Clothing E-commerce Site",
    goal: "Create a stylish online shop with cart, checkout, and admin dashboard.",
    role: "Built complete frontend, handled cart logic, and made the site fully responsive.",
    technologies: ["Next.js", "Redux", "TailwindCSS", "TypeScript"],
    outcome: "Ready-to-launch shopping site for small businesses.",
    images: ["/images/clotify2.png"],
    github: "https://github.com/Jedidiah5/Clotify",
    liveSite: "https://clotify.vercel.app/",
    type: "image"
  },
  {
    title: "Scriptify",
    subtitle: "AI-Powered Short-Form Video Script Generator",
    goal: "Helps generate video scripts for a given topic or niche",
    role: "Designed and developed the full application",
    technologies: ["TypeScript", "NextJS", "Tailwind CSS", "Genkit", "Gemini", "Vercel"],
    outcome: "Succesull able to generate video scripts.",
    images: ["/images/scriptify.png"],
    github: "https://github.com/Jedidiah5/Scriptify",
    liveSite: "https://scriptify-jedidiah5s-projects.vercel.app/",
    type: "image"
  },
  {
    title: "Whispr",
    subtitle: "Ai powered audio journal",
    goal: "Used to keep detailed entries of your day",
    role: "Designed and developed the full application",
    technologies: ["React", "TailwindCSS", "Firebase", "Next.js", "OpenAI", "Vercel"],
    outcome: "Succesull able to store users journal entries.",
    images: ["/images/whispr.png"],
    github: "https://github.com/Jedidiah5/Whispr",
    liveSite: "https://whispr-jedidiah5s-projects.vercel.app/",
    type: "image"
  },
  {
    title: "3D page",
    subtitle: "Interactive 3D page",
    goal: "Create an immersive 3D page showcasing 3D models",
    role: "Developed the entire application using Three.js and React Three Fiber.",
    technologies: ["Three.js", "React Three Fiber", "React", "TailwindCSS"],
    outcome: "Unique and engaging portfolio that stands out from traditional websites.",
    images: ["/images/3Dpage.png"],
    github: "https://github.com/Jedidiah5/3D-Page",
    liveSite: "https://3-d-page-three.vercel.app/",
    type: "image"
  },
  {
    title: "ElevateBiz",
    subtitle: "A modern business site template to build an online presence with customizable features.",
    goal: "Create a  modern template for businessesto build an online presence with customizable features.",
    role: "Built complete frontend.",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "React"],
    outcome: "Already active on Vercel",
    images: ["/images/elevatebiz.png"],
    github: "https://github.com/Jedidiah5/ElevateBiz",
    liveSite: "https://elevate-biz-omega.vercel.app/",
    type: "image"
  }

];

const techIcons: { [key: string]: string } = {
  "React": "ri-reactjs-line",
  "Next.js": "ri-nextjs-line",
  "TailwindCSS": "ri-tailwind-css-fill",
  "TypeScript": "ri-javascript-fill",
  "JavaScript": "ri-javascript-fill",
  "HTML": "ri-html5-line",
  "CSS": "ri-css3-line",
  "Firebase": "ri-firebase-line",
  "Redux": "ri-redux-line",
  "Three.js": "ri-3d-line",
  "Framer Motion": "ri-motion-line",
  "Git": "ri-github-fill",
  "Figma": "ri-figma-fill"
};

const Projects = () => {
  const clotifyIndex = projects.findIndex(p => p.title === "Clotify");
  const initialIndex = clotifyIndex !== -1 ? clotifyIndex : 0; // Default to 0 if not found

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType>();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoHover = (isHovering: boolean) => {
    if (!videoRef.current) return;
    
    if (isHovering) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <i className="ri-puzzle-line text-xl sm:text-2xl"></i>
            Featured <span className="text-custom-orange">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Deep dive into some of my recent projects and their impact
          </p>
        </motion.div>

        <div className="relative w-full max-w-[1800px] mx-auto">
          <style jsx global>{`
            .swiper-slide {
              transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              transform: scale(0.75) translateY(50px);
              opacity: 0.65;
              cursor: pointer;
              display: flex;
              justify-content: center;
              filter: brightness(0.7) blur(1px);
              width: 100% !important;
              max-width: 660px;
              position: relative;
              z-index: 1;
            }
            .swiper-slide-active {
              transform: scale(1) translateY(0);
              opacity: 1;
              z-index: 3;
              filter: brightness(1) blur(0);
            }
            .swiper-slide-prev {
              transform: scale(0.75) translateY(50px) translateX(50%);
              z-index: 2;
            }
            .swiper-slide-next {
              transform: scale(0.75) translateY(50px) translateX(-50%);
              z-index: 2;
            }
            .swiper-pagination {
              position: static !important;
              margin-top: 2rem;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
            }
            .swiper-pagination-bullet {
              width: 8px !important;
              height: 8px !important;
              background-color: #FF5733 !important;
              opacity: 0.5;
              transition: all 0.3s ease;
              margin: 0 !important;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
              width: 24px !important;
              border-radius: 4px;
              background-color: #FF5733 !important;
            }
            @media (max-width: 640px) {
              .swiper-slide {
                transform: scale(0.9) translateY(30px);
              }
              .swiper-slide-active {
                transform: scale(1) translateY(0);
              }
              .swiper-slide-prev,
              .swiper-slide-next {
                transform: scale(0.9) translateY(30px);
              }
            }
          `}</style>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={initialIndex}
            loop={true}
            speed={800}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              type: 'bullets',
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
            }}
            modules={[EffectCoverflow, Pagination]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide 
                key={project.title}
                className="!w-full md:!w-[660px] cursor-pointer"
                onClick={() => {
                  if (index !== activeIndex) {
                    swiperRef.current?.slideToLoop(index);
                  }
                }}
              >
                <motion.div
                  className="relative bg-custom-blue/10 rounded-lg overflow-hidden w-full border border-custom-orange/20 shadow-lg"
                  animate={{ 
                    scale: index === activeIndex ? 1 : 0.75,
                    opacity: index === activeIndex ? 1 : 0.65,
                    y: index === activeIndex ? 0 : 50,
                  }}
                  whileHover={{
                    scale: index === activeIndex ? 1 : 0.8,
                    opacity: index === activeIndex ? 1 : 0.8,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Content Container (Left Column) */}
                    <div className="p-4 sm:p-6">
                      <div> {/* Top part of left column */} 
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-custom-orange text-xs sm:text-sm mb-3 sm:mb-4">{project.subtitle}</p>
                        
                        <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm mb-4">
                          <div>
                            <h4 className="text-custom-orange font-semibold mb-1">Goal</h4>
                            <p className="text-gray-300">{project.goal}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-custom-orange font-semibold mb-1">My Role</h4>
                            <p className="text-gray-300">{project.role}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-custom-orange font-semibold mb-1">Tech Stack</h4>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-custom-orange/10 text-custom-orange rounded-full text-xs flex items-center gap-1"
                                >
                                  <i className={techIcons[tech] || "ri-code-line"}></i>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image/Video, Outcome & Buttons Container (Right Column) */}
                    <div className="p-4 sm:p-6 flex flex-col justify-between">
                      <div> {/* Top part of right column (Image & Outcome) */} 
                        {/* Image/Video Container */}
                        <div className="relative h-[200px] w-full rounded-lg overflow-hidden group mb-4 sm:mb-6">
                          {project.type === 'video' ? (
                            <video
                              ref={videoRef}
                              className="w-full h-full object-cover rounded-lg"
                              muted
                              loop
                              playsInline
                              preload="auto"
                              onMouseEnter={() => handleVideoHover(true)}
                              onMouseLeave={() => handleVideoHover(false)}
                            >
                              <source src={project.video} type="video/mp4" />
                            </video>
                          ) : (
                            <>
                              <Image
                                src={project.images![0]}
                                alt={project.title}
                                fill
                                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                priority={index === 0}
                              />
                              {/* Hover Overlay for Images */} 
                              {project.liveSite && (
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <a
                                    href={project.liveSite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()} // Prevent slide change or modal open
                                    className="p-3 bg-custom-orange rounded-full text-white transform scale-90 group-hover:scale-100 transition-all duration-300 hover:bg-custom-orange/80"
                                    aria-label="View Live Demo"
                                  >
                                    <i className="ri-external-link-line text-2xl"></i>
                                  </a>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                        
                        {/* Outcome Section */}
                        <div className="text-xs sm:text-sm">
                          <h4 className="text-custom-orange font-semibold mb-1">Outcome</h4>
                          <p className="text-gray-300">{project.outcome}</p>
                        </div>
                      </div>

                      <div> {/* Bottom part of right column (Buttons) */} 
                        <div className="flex gap-2 sm:gap-3 justify-start ">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 sm:px-4 bg-custom-orange text-custom-dark py-1 rounded-lg text-center border border-custom-orange hover:bg-custom-dark hover:text-white transition-all duration-300 text-xs flex items-center gap-1 sm:gap-2"
                          >
                            <i className="ri-github-fill"></i>
                            View Code
                          </a>
                          {project.liveSite && (
                            <a
                              href={project.liveSite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 sm:px-4 bg-custom-dark text-custom-gray py-1 rounded-lg text-center border border-custom-orange hover:bg-custom-orange hover:text-custom-dark transition-all duration-300 text-xs flex items-center gap-1 sm:gap-2"
                            >
                              <i className="ri-external-link-line"></i>
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-8"></div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl w-full max-h-[90vh] rounded-lg overflow-hidden"
            >
              <Image
                src={selectedImage}
                alt="Project Preview"
                fill
                className="object-contain"
                quality={100}
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-custom-orange rounded-full p-2 hover:bg-custom-orange/80 transition-colors duration-300"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 