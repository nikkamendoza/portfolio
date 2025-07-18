import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Link } from 'react-scroll';

const App: React.FC = () => {
  return (
    <div className="font-serif bg-stone-50 min-h-screen">
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link to="hero" smooth duration={800} className="cursor-pointer text-2xl font-light text-stone-800 tracking-wider hover:text-stone-600 focus:underline outline-none transition-colors duration-200">PORTFOLIO</Link>
          <div className="space-x-8">
            <Link to="about" smooth duration={800} className="cursor-pointer text-stone-600 hover:text-stone-900 font-light tracking-wide transition-colors duration-300">ABOUT</Link>
            <Link to="projects" smooth duration={800} className="cursor-pointer text-stone-600 hover:text-stone-900 font-light tracking-wide transition-colors duration-300">GALLERY</Link>
            <Link to="contact" smooth duration={800} className="cursor-pointer text-stone-600 hover:text-stone-900 font-light tracking-wide transition-colors duration-300">CONTACT</Link>
          </div>
        </div>
      </nav>
      <main className="pt-24">
        <section id="hero"><Hero /></section>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
