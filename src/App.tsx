import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CreatorGallery from './components/CreatorGallery';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Link } from 'react-scroll';
import Main from './components/Main';

// Custom hook to detect current section and determine navigation color
const useNavigationColor = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['main', 'about', 'projects', 'contact', 'creator'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            // Dark backgrounds: main, projects (black), creator (dark) - use white text
            // Light backgrounds: about, contact (white) - use dark text
            const darkSections = ['main', 'projects', 'creator'];
            const lightSections = ['about', 'contact'];
            
            console.log(`Current section: ${sectionId}, isDark: ${darkSections.includes(sectionId)}`);
            
            if (darkSections.includes(sectionId)) {
              setIsDarkBackground(true);
            } else if (lightSections.includes(sectionId)) {
              setIsDarkBackground(false);
            }
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isDarkBackground;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const isDarkBackground = useNavigationColor();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="font-comfortaa">
        <nav className="fixed z-50 w-full backdrop-blur-sm g-gradient-to-b from-black/80 to-primary-950/0" ref={navRef}>
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <Link to="main" smooth duration={800} onClick={closeMenu} className="logo-container">
              <div className="logo">
                N<span className="logo-m">M</span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className={`hidden sm:flex items-center space-x-8 ${isDarkBackground ? 'text-white' : 'text-stone-800'}`}>
              <Link 
                to="about" 
                smooth 
                duration={800} 
                className={`cursor-pointer font-bold tracking-wide transition-colors duration-300 ${
                  isDarkBackground 
                    ? 'hover:text-stone-300' 
                    : 'hover:text-stone-600'
                }`}
              >
                ABOUT
              </Link>
              <Link 
                to="projects" 
                smooth 
                duration={800} 
                className={`cursor-pointer font-bold tracking-wide transition-colors duration-300 ${
                  isDarkBackground 
                    ? 'hover:text-stone-300' 
                    : 'hover:text-stone-600'
                }`}
              >
                GALLERY
              </Link>
              <Link 
                to="contact" 
                smooth 
                duration={800} 
                className={`cursor-pointer font-bold tracking-wide transition-colors duration-300 ${
                  isDarkBackground 
                    ? 'hover:text-stone-300' 
                    : 'hover:text-stone-600'
                }`}
              >
                CONTACT
              </Link>
            </div>

            {/* Kebab Menu Button */}
            <div className="sm:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`focus:outline-none transition-colors duration-300 ${
                  isDarkBackground 
                    ? 'text-white hover:text-stone-300' 
                    : 'text-stone-800 hover:text-stone-600'
                }`}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`sm:hidden absolute top-full right-7 w-64 bg-black rounded-lg shadow-lg p-4 transition-all duration-200 ease-out ${
            isMenuOpen 
              ? 'opacity-100 transform translate-y-0 pointer-events-auto' 
              : 'opacity-0 transform -translate-y-2 pointer-events-none'
          }`}>
            <div className="flex flex-col items-center space-y-2">
              <Link 
                to="about" 
                smooth 
                duration={800} 
                onClick={closeMenu} 
                className="block w-full text-center cursor-pointer text-white hover:text-stone-900 font-bold tracking-wide transition-colors duration-300 py-2 rounded-md hover:bg-stone-50"
              >
                ABOUT
              </Link>
              <Link 
                to="projects" 
                smooth 
                duration={800} 
                onClick={closeMenu} 
                className="block w-full text-center cursor-pointer text-white hover:text-stone-900 font-bold tracking-wide transition-colors duration-300 py-2 rounded-md hover:bg-stone-50"
              >
                GALLERY
              </Link>
              <Link 
                to="contact" 
                smooth 
                duration={800} 
                onClick={closeMenu} 
                className="block w-full text-center cursor-pointer text-white hover:text-stone-900 font-bold tracking-wide transition-colors duration-300 py-2 rounded-md hover:bg-stone-50"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <main>
              <section id="main"><Main /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
              <section id="creator"><CreatorGallery /></section>
            </main>
          } />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
