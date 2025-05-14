'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (!isMounted) return;

      const scrollPosition = window.scrollY + 100;
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      
      if (sections.some(section => !section)) return;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="w-full bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <Link href="/" className="text-custom-orange font-bold text-xl">
              <Image 
                src="/favicon.ico" 
                alt="Logo" 
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

          {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item 
                      ? 'text-custom-orange' 
                    : 'text-gray-300 hover:text-custom-orange/80'
                  }`}
                >
                  {item}
                </Link>
              ))}
          </div>

          {/* Mobile Menu Button */}
              <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute w-6 h-0.5 bg-custom-orange transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-2' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-custom-orange transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-custom-orange transform transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 translate-y-2' : 'translate-y-2'
                  }`}
                />
              </div>
              </button>
            </div>
        </div>
        </div>

      {/* Updated Mobile Menu - Vertical List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-black/20 backdrop-blur-md md:hidden border-b border-custom-orange/10"
          >
            <div className="flex flex-col items-center py-4">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: navItems.indexOf(item) * 0.1 }}
                  className="w-full"
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-center text-base font-medium transition-colors duration-300 ${
                      activeSection === item
                    ? 'text-custom-orange' 
                        : 'text-gray-300 hover:text-custom-orange/80'
                    }`}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
