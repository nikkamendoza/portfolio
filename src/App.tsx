import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Link } from 'react-scroll';

const App: React.FC = () => (
  <div className="font-sans bg-white min-h-screen">
    <nav className="fixed w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <span className="text-xl font-bold text-blue-700">Your Name</span>
        <div className="space-x-6">
          <Link to="about" smooth duration={500} className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="projects" smooth duration={500} className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium">Projects</Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </div>
      </div>
    </nav>
    <main className="pt-20">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
