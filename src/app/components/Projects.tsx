'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    title: "Clotify",
    description: "A modern e-commerce platform for clothing with a sleek user interface, shopping cart functionality, and product filtering.",
    images: ["/images/clotify1.png", "/images/clotify2.png", "/images/clotify3.png"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/Jedidiah5/Clotify",
    liveSite: "https://clotify.vercel.app",
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
    images: ["/images/bidspirit-auction.jpg", "/images/Bidspirit2.png", "/images/Bidspirit3.png", "/images/Bidspirit4.jpg", "/images/Bidspirit5.jpg"],
    technologies: ["CSS", "Html", "Javascript"],
    github: "https://github.com/Jedidiah5/Bidspirit-Auction",
    liveSite: "https://bidspirit-auction.vercel.app/",
    type: "image"
  },
  {
    title: "ElevateBiz",
    description: "A premium web template designed to help business create strong online presence effortlessly",
    images: ["/images/image.png"],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Jedidiah5/task-manager",
    liveSite: "https://task-manager-pro.vercel.app",
    type: "image"
  }
  // {
  //   title: "AI Chat Assistant",
  //   description: "A real-time chat application powered by AI that provides intelligent responses and code suggestions for developers.",
  //   images: ["/images/clotify1.png"],
  //   technologies: ["OpenAI API", "Next.js", "TypeScript", "WebSocket"],
  //   github: "https://github.com/Jedidiah5/ai-chat",
  //   liveSite: "https://ai-chat-assistant.vercel.app",
  //   type: "image"
  // }

];

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
    <section id="projects" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
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

        <div className="relative w-full max-w-[1800px] mx-auto">
          <style jsx global>{`
            .swiper-container {
              overflow: visible !important;
              padding: 0 10px;
              @media (min-width: 768px) {
                padding: 0 100px;
              }
            }
            .swiper-wrapper {
              align-items: center;
              padding: 10px 0;
              @media (min-width: 768px) {
                padding: 20px 0;
              }
            }
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
              @media (max-width: 768px) {
                max-width: 100%;
                transform: scale(0.9) translateY(30px);
              }
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
              position: relative;
              bottom: -20px !important;
            }
            .swiper-pagination-bullet {
              background: var(--custom-orange);
              opacity: 0.5;
            }
            .swiper-pagination-bullet-active {
              background: var(--custom-orange);
              opacity: 1;
            }
            .swiper-button-prev,
            .swiper-button-next {
              display: none !important;
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
              modifier: 2,
              slideShadows: false
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: "auto",
                spaceBetween: -50
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: -100
              }
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
                  className="relative bg-custom-blue/10 rounded-[11.7px] overflow-hidden w-full border-2 border-custom-orange shadow-lg"
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
                  <div className="p-4 md:p-6">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-4 text-center"
                    >
                      <h3 className="text-xl font-bold text-custom-gray mb-3">{project.title}</h3>
                      <p className="text-custom-gray-light/80 text-sm">{project.description}</p>
                    </motion.div>

                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                          className="px-2 py-1 bg-custom-purple/10 text-custom-orange rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                    <div className="flex gap-3 justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                        className="px-4 bg-custom-orange text-custom-dark py-1 rounded-lg text-center border border-custom-orange hover:bg-custom-dark hover:text-white transition-all duration-300 text-xs"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                        className="px-4 bg-custom-dark text-custom-gray py-1 rounded-lg text-center border border-custom-orange hover:bg-custom-orange hover:text-custom-dark transition-all duration-300 text-xs"
                  >
                    Live Site
                  </a>
                </div>
              </div>

                  {/* Image/Video Container */}
                  <div className="relative h-[200px] md:h-[300px] w-full overflow-hidden">
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