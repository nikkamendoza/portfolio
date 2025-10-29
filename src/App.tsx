import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Main from './components/Main';

// Custom hook to determine navigation color based on current route
const useNavigationColor = () => {
  const location = useLocation();
  
  // Dark backgrounds: main, gallery - use white text
  // Light backgrounds: about, contact - use dark text
  const darkRoutes = ['/', '/gallery'];
  const lightRoutes = ['/about', '/contact'];
  
  if (darkRoutes.includes(location.pathname)) {
    return true; // isDarkBackground
  } else if (lightRoutes.includes(location.pathname)) {
    return false; // isLightBackground
  }
  
  return true; // default to dark
};

// Navigation component that uses the hook
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const isDarkBackground = useNavigationColor();
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const handleNavClick = () => {
    scrollToTop();
    closeMenu();
  };

  const isActive = (path: string) => location.pathname === path;

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
    <nav className="fixed w-full backdrop-blur-sm g-gradient-to-b from-black/80 to-primary-950/0" ref={navRef} style={{ zIndex: 100 }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" onClick={closeMenu} className="logo-container">
          <div className="logo">
            N<span className="logo-m">M</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className={`hidden sm:flex items-center space-x-8 ${isDarkBackground ? 'text-white' : 'text-stone-800'}`}>
          <Link
            to="/"
            onClick={handleNavClick}
            className={`cursor-pointer font-bold tracking-wide transition-colors duration-300 ${
              isDarkBackground ? 'hover:text-stone-300' : 'hover:text-stone-600'
            } ${isActive('/') ? 'border-b-2 border-current opacity-100' : 'opacity-70 hover:opacity-100'}`}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            onClick={handleNavClick}
            className={`cursor-pointer font-bold tracking-wide transition-colors duration-300 ${
              isDarkBackground 
                ? 'hover:text-stone-300' 
                : 'hover:text-stone-600'
            } ${isActive('/about') ? 'border-b-2 border-current opacity-100' : 'opacity-70 hover:opacity-100'}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/gallery" 
            onClick={handleNavClick}
            className={`cursor-pointer font-bold tracking-wide transition-colors duration-300 ${
              isDarkBackground 
                ? 'hover:text-stone-300' 
                : 'hover:text-stone-600'
            } ${isActive('/gallery') ? 'border-b-2 border-current opacity-100' : 'opacity-70 hover:opacity-100'}`}
          >
            GALLERY
          </Link>
          <Link 
            to="/contact" 
            onClick={handleNavClick}
            className={`cursor-pointer font-bold tracking-wide transition-colors duration-300 ${
              isDarkBackground 
                ? 'hover:text-stone-300' 
                : 'hover:text-stone-600'
            } ${isActive('/contact') ? 'border-b-2 border-current opacity-100' : 'opacity-70 hover:opacity-100'}`}
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
            to="/" 
            onClick={handleNavClick} 
            className={`block w-full text-center cursor-pointer text-white font-bold tracking-wide transition-colors duration-300 py-2 rounded-md ${isActive('/') ? 'bg-white/10' : 'hover:bg-stone-50 hover:text-stone-900'}`}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            onClick={handleNavClick} 
            className={`block w-full text-center cursor-pointer text-white font-bold tracking-wide transition-colors duration-300 py-2 rounded-md ${isActive('/about') ? 'bg-white/10' : 'hover:bg-stone-50 hover:text-stone-900'}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/gallery" 
            onClick={handleNavClick} 
            className={`block w-full text-center cursor-pointer text-white font-bold tracking-wide transition-colors duration-300 py-2 rounded-md ${isActive('/gallery') ? 'bg-white/10' : 'hover:bg-stone-50 hover:text-stone-900'}`}
          >
            GALLERY
          </Link>
          <Link 
            to="/contact" 
            onClick={handleNavClick} 
            className={`block w-full text-center cursor-pointer text-white font-bold tracking-wide transition-colors duration-300 py-2 rounded-md ${isActive('/contact') ? 'bg-white/10' : 'hover:bg-stone-50 hover:text-stone-900'}`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-comfortaa">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
