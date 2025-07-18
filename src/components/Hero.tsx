import React, { useEffect, useState, useMemo } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const NUM_SQUARES = 10;

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // More scattered, lively arrangement for 9 squares
  const squares = [
    { top: '4%', left: '12%', size: '5.5rem', border: 5, color: '#3B82F6', opacity: 0.18, zIndex: 0, spinFactor: 0.7 },
    { top: '16%', right: '8%', size: '6.2rem', border: 5, color: '#8B5CF6', opacity: 0.16, zIndex: 0, spinFactor: -0.5 },
    { top: '28%', left: '22%', size: '5.1rem', border: 5, color: '#10B981', opacity: 0.17, zIndex: 0, spinFactor: 1.1 },
    { top: '44%', right: '14%', size: '5.7rem', border: 5, color: '#F59E42', opacity: 0.15, zIndex: 0, spinFactor: -0.9 },
    { top: '60%', left: '38%', size: '6.8rem', border: 5, color: '#EC4899', opacity: 0.10, zIndex: 0, spinFactor: 0.4 },
    { bottom: '22%', left: '10%', size: '5.4rem', border: 5, color: '#FACC15', opacity: 0.14, zIndex: 0, spinFactor: 0.6 },
    { bottom: '8%', right: '18%', size: '5.6rem', border: 5, color: '#14B8A6', opacity: 0.15, zIndex: 0, spinFactor: -0.8 },
    { bottom: '14%', left: '58%', size: '4.8rem', border: 5, color: '#EF4444', opacity: 0.13, zIndex: 0, spinFactor: 1.2 },
    { bottom: '32%', right: '6%', size: '6.1rem', border: 5, color: '#6366F1', opacity: 0.13, zIndex: 0, spinFactor: -1.1 },
  ];

  // Calculate transforms for shapes
  const spin = (factor: number) => `rotate(${scrollY * factor}deg)`;
  const bounce = (factor: number, offset: number = 0) => `translateY(${Math.sin((scrollY + offset) * 0.02) * factor}px)`;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Abstract Animated Squares - Randomly Scattered */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {squares.map((sq, i) => (
          <div
            key={i}
            className={`absolute rounded-md shadow-lg`}
            style={{
              top: sq.top,
              left: sq.left,
              right: sq.right,
              bottom: sq.bottom,
              width: sq.size,
              height: sq.size,
              borderWidth: `${sq.border}px`,
              borderStyle: 'solid',
              borderColor: sq.color,
              background: 'transparent',
              opacity: sq.opacity,
              zIndex: sq.zIndex,
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
              transform: spin(sq.spinFactor),
              transition: 'box-shadow 0.3s',
            }}
          ></div>
        ))}
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div>
          <h2 className="text-4xl md:text-6xl font-light text-stone-600 tracking-wide mb-6">
            NIKKA MENDOZA
          </h2>
        </div>
        
        <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
        
        <p className="text-lg md:text-xl text-stone-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          A curated collection of digital experiences, creative solutions, and innovative designs that showcase the intersection of art and technology.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a 
            href="#contact" 
            className="curtain-btn px-8 py-4 bg-stone-800 text-white font-light tracking-wide relative overflow-hidden"
          >
            GET IN TOUCH
          </a>
          <a 
            href="#projects" 
            className="curtain-btn curtain-btn-stone group px-8 py-4 border-2 border-stone-800 bg-stone-100 text-stone-800 font-light tracking-wide hover:bg-stone-800 hover:text-white transition-all duration-500 flex items-center justify-center"
          >
            <span>EXPLORE GALLERY</span>
            <BsArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 