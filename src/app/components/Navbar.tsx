'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if ((sections[i] as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust for smaller screens
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Check size on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 shadow-lg font-poppins"
      style={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-custom-orange hover:text-white/90 transition-all duration-300 hover:scale-105">
              ENESI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`flex-1 ${isSmallScreen ? 'hidden' : 'flex'} justify-center`}>
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className={`transition-all duration-300 relative group ${
                    activeSection === item 
                      ? 'text-custom-orange' 
                      : 'text-white hover:text-custom-orange'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                    activeSection === item 
                      ? 'w-full bg-custom-orange' 
                      : 'w-0 bg-custom-orange group-hover:w-full'
                  }`}></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          {isSmallScreen && (
            <div className="sm:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-custom-orange p-2 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && isSmallScreen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sm:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                className={`block px-3 py-2 text-center font-medium transition-all duration-300 ${
                  activeSection === 'About' 
                    ? 'text-custom-orange' 
                    : 'text-white hover:text-custom-orange'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className={`block px-3 py-2 text-center font-medium transition-all duration-300 ${
                  activeSection === 'Projects' 
                    ? 'text-custom-orange' 
                    : 'text-white hover:text-custom-orange'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className={`block px-3 py-2 text-center font-medium transition-all duration-300 ${
                  activeSection === 'Contact' 
                    ? 'text-custom-orange' 
                    : 'text-white hover:text-custom-orange'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
