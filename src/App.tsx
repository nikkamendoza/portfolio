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

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

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
            <div className="hidden sm:flex items-center space-x-8 text-white">
              <Link to="about" smooth duration={800} className="cursor-pointer hover:text-stone-900 font-bold tracking-wide transition-colors duration-300">ABOUT</Link>
              <Link to="projects" smooth duration={800} className="cursor-pointer hover:text-stone-900 font-bold tracking-wide transition-colors duration-300">GALLERY</Link>
              <Link to="contact" smooth duration={800} className="cursor-pointer hover:text-stone-900 font-bold tracking-wide transition-colors duration-300">CONTACT</Link>
            </div>

            {/* Kebab Menu Button */}
            <div className="sm:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-stone-800 hover:text-stone-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`sm:hidden absolute top-full right-6 w-64 bg-white/98 backdrop-blur-sm rounded-lg shadow-lg p-4 mt-1 transition-all duration-200 ease-out ${
            isMenuOpen 
              ? 'opacity-100 transform translate-y-0 pointer-events-auto' 
              : 'opacity-0 transform -translate-y-2 pointer-events-none'
          }`}>
            <div className="flex flex-col items-center space-y-2">
              <Link to="about" smooth duration={800} onClick={closeMenu} className="block w-full text-center cursor-pointer text-stone-600 hover:text-stone-900 font-bold tracking-wide transition-colors duration-300 py-2 rounded-md hover:bg-stone-50">ABOUT</Link>
              <Link to="projects" smooth duration={800} onClick={closeMenu} className="block w-full text-center cursor-pointer text-stone-600 hover:text-stone-900 font-bold tracking-wide transition-colors duration-300 py-2 rounded-md hover:bg-stone-50">GALLERY</Link>
              <Link to="contact" smooth duration={800} onClick={closeMenu} className="block w-full text-center cursor-pointer text-stone-600 hover:text-stone-900 font-bold tracking-wide transition-colors duration-300 py-2 rounded-md hover:bg-stone-50">CONTACT</Link>
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
