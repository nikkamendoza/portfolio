import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white overflow-x-hidden">
      {/* Navigation - Exact match to image */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Left side - Hamburger menu */}
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <div className="text-white font-bold tracking-wide text-sm">MORE</div>
          </div>
          
          {/* Right side - Search and menu icons */}
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg className="w-6 h-6 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Hero Section - Exact match to image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with dark figures */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black">
          {/* Dark shadowy figures in background */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-black/30 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-black/40 rounded-full blur-lg"></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 bg-black/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-black/40 rounded-full blur-lg"></div>
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            <span className="text-white">ABOUT</span>
            <br />
            <span className="text-white font-bold tracking-wider" style={{ 
              textShadow: '0 0 20px #60a5fa, 0 0 40px #60a5fa, 0 0 60px #60a5fa',
              background: 'linear-gradient(45deg, #60a5fa, #ffffff, #60a5fa)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              NIKKA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            La protagonista de esta historia, y también el centro de todo el caos que nace en Piltover
          </p>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <span className="text-white text-sm tracking-wide">Scroll Down</span>
          </div>
        </div>
      </section>

      {/* Timeline Section - Exact match to image */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="text-pink-400 font-bold tracking-wider" style={{ 
                  textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899'
                }}>
                  LÍNEA TEMPORAL
                </span>
              </h2>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                SINOPSIS
              </h2>
            </div>
          </div>

          {/* Timeline Cards - Exact layout from image */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting dotted line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px border-t-2 border-dotted border-purple-400 opacity-50"></div>
            
            {/* X and O marks */}
            <div className="hidden md:block absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-pink-400 rotate-45 opacity-70"></div>
            <div className="hidden md:block absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-blue-400 rounded-full opacity-70"></div>

            {/* Acto I - INICIOS */}
            <div className="relative group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 h-full transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                      <p className="text-sm">Young Creator</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">INICIOS</h3>
                <p className="text-gray-300 text-sm">Beginnings</p>
              </div>
            </div>

            {/* Acto II - RECUERDOS */}
            <div className="relative group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 h-full transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-pink-600 to-purple-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <p className="text-sm">Creative Journey</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">RECUERDOS</h3>
                <p className="text-gray-300 text-sm">Memories</p>
              </div>
            </div>

            {/* Acto III - VENGANZA */}
            <div className="relative group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 h-full transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-red-600 to-blue-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <p className="text-sm">Innovation</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">VENGANZA</h3>
                <p className="text-gray-300 text-sm">Revenge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Features Section - Exact match to image */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            <span className="text-white">Características del </span>
            <span className="text-white font-bold">PERSONAJE</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/50 to-blue-500/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">🎨</span>
                    </div>
                    <p className="text-white text-lg">Digital Creator</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-blue-400 h-1 rounded-full"></div>
              <p className="text-blue-300 text-sm mt-2">LA MUERTE DE POWDER</p>
            </div>

            {/* Right side - Traits */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <p className="text-white text-lg font-medium">TRAUMATIZADA POR SU PASADO</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <p className="text-white text-lg font-medium">RELACIONES CONFLICTIVAS</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <p className="text-white text-lg font-medium">VULNERABILIDAD OCULTA</p>
              </div>
              
              <button className="mt-8 px-8 py-3 bg-blue-400 text-white font-bold tracking-wide rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Content Section - Exact match to image */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-pink-500 p-4 rounded-lg text-center">
              <span className="text-white font-bold tracking-wide">WALLPAPERS ANIMADOS</span>
            </div>
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                CONTENIDO EXCLUSIVO
              </h2>
              <p className="text-white text-lg">/ PORTFOLIO</p>
            </div>
            <div className="bg-purple-500 p-4 rounded-lg text-center">
              <span className="text-white font-bold tracking-wide">FHD</span>
            </div>
          </div>

          {/* Premium Cards - Exact layout from image */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - MIEDOS */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Premium Label - Vertical */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500"></div>
                <div className="absolute left-2 top-4 transform -rotate-90 origin-left">
                  <span className="text-pink-400 text-xs font-bold tracking-wider">PREMIUM CARDS</span>
                </div>
                
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                    NUEVO
                  </span>
                </div>

                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-green-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">😰</span>
                      </div>
                      <p className="text-sm">Fears</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">MIEDOS</h3>
                  <p className="text-gray-300 text-sm mb-4">Confronting creative challenges</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-400 font-bold text-lg">₱299</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - CAMBIOS */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Premium Label - Vertical */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500"></div>
                <div className="absolute left-2 top-4 transform -rotate-90 origin-left">
                  <span className="text-pink-400 text-xs font-bold tracking-wider">PREMIUM CARDS</span>
                </div>
                
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                    NUEVO
                  </span>
                </div>

                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-pink-600 to-orange-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <p className="text-sm">Changes</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">CAMBIOS</h3>
                  <p className="text-gray-300 text-sm mb-4">Evolution of design</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-400 font-bold text-lg">₱399</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - IRA */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Premium Label - Vertical */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500"></div>
                <div className="absolute left-2 top-4 transform -rotate-90 origin-left">
                  <span className="text-pink-400 text-xs font-bold tracking-wider">PREMIUM CARDS</span>
                </div>
                
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500 text-black">
                    EDICIÓN LIMITADA
                  </span>
                </div>

                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-red-600 to-blue-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <p className="text-sm">Anger</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">IRA</h3>
                  <p className="text-gray-300 text-sm mb-4">Creative energy</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-400 font-bold text-lg">₱599</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Exact match to image */}
      <footer className="py-12 px-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm mb-4">
            ©2024 Nikka Mendoza Portfolio, original design inspired by Arcane Series. Riot Games Production, League Of Legends.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-white font-bold text-xl">NM</span>
            <span className="text-white font-bold text-xl">PORTFOLIO</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
