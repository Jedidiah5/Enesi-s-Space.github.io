'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
  liveSite: string;
}

const projects: Project[] = [
  // {
  //   title: "MindEase",
  //   subtitle: "Mental Health Platform",
  //   goal: "Help users manage their mental health with daily check-ins and mood tracking.",
  //   role: "Designed and developed the front-end using React, integrated mood tracker UI.",
  //   technologies: ["React", "TailwindCSS", "Firebase", "Framer Motion"],
  //   outcome: "Improved UX with smooth animations and a calming UI.",
  //   images: ["/images/clotify1.png"],
  //   github: "https://github.com/Jedidiah5/mindease",
  //   liveSite: "https://mindease.vercel.app",
  //   type: "image"
  // },
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
    title: "3D page",
    subtitle: "Interactive 3D page",
    goal: "Create an immersive 3D page showcasing 3D models",
    role: "Developed the entire application using Three.js and React Three Fiber.",
    technologies: ["Three.js", "React Three Fiber", "React", "TailwindCSS"],
    outcome: "Unique and engaging portfolio that stands out from traditional websites.",
    video: "/3dPage.mov",
    github: "https://github.com/Jedidiah5/3D-Page",
    liveSite: "https://3-d-page-three.vercel.app/",
    type: "video"
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
  const [activeIndex, setActiveIndex] = useState(0);
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
            .swiper-pagination-bullet {
              background: var(--custom-orange);
              opacity: 0.5;
            }
            .swiper-pagination-bullet-active {
              background: var(--custom-orange);
              opacity: 1;
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
            initialSlide={activeIndex}
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
              clickable: true,
              dynamicBullets: true
            }}
            modules={[EffectCoverflow, Pagination]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full pb-12"
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
                  {/* Content Container */}
                  <div className="p-4 sm:p-6">
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-custom-orange text-xs sm:text-sm mb-3 sm:mb-4">{project.subtitle}</p>
                      
                      <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
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
                        
                        <div>
                          <h4 className="text-custom-orange font-semibold mb-1">Outcome</h4>
                          <p className="text-gray-300">{project.outcome}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 sm:gap-3 justify-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 sm:px-4 bg-custom-orange text-custom-dark py-1 rounded-lg text-center border border-custom-orange hover:bg-custom-dark hover:text-white transition-all duration-300 text-xs flex items-center gap-1 sm:gap-2"
                      >
                        <i className="ri-github-fill"></i>
                        View Code
                      </a>
                      <a
                        href={project.liveSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 sm:px-4 bg-custom-dark text-custom-gray py-1 rounded-lg text-center border border-custom-orange hover:bg-custom-orange hover:text-custom-dark transition-all duration-300 text-xs flex items-center gap-1 sm:gap-2"
                      >
                        <i className="ri-external-link-line"></i>
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Image/Video Container */}
                  <div className="relative h-[180px] sm:h-[200px] w-full overflow-hidden">
                    {project.type === 'video' ? (
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
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
                      <Image
                        src={project.images![0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects; 