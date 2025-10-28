import React from 'react';

const About: React.FC = () => (
  <section className="py-32 sm:py-16 bg-white relative overflow-hidden font-comfortaa min-h-screen">
    {/* Multiple Scattered Gray Blobs Background */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#6B7280" />
          </linearGradient>
          <linearGradient id="blob2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>
        </defs>

        {/* Blob 1 - Upper Left Corner (Aesthetic Organic Shape) */}
        <path fill="url(#blob1)" fillOpacity="0.18" d="M-220,100Q-165,45,-110,150Q-55,255,0,110Q55,-35,110,130Q165,295,220,90Q165,-15,110,170Q55,355,0,190Q-55,25,-110,210Q-165,395,-220,150Q-165,5,-220,100Z">
          <animate attributeName="d" dur="8s" repeatCount="indefinite"
            values="M-220,100Q-165,45,-110,150Q-55,255,0,110Q55,-35,110,130Q165,295,220,90Q165,-15,110,170Q55,355,0,190Q-55,25,-110,210Q-165,395,-220,150Q-165,5,-220,100Z;
                    M-220,150Q-165,95,-110,200Q-55,305,0,160Q55,15,110,180Q165,345,220,140Q165,30,110,220Q55,405,0,240Q-55,75,-110,260Q-165,445,-220,200Q-165,55,-220,150Z;
                    M-220,100Q-165,45,-110,150Q-55,255,0,110Q55,-35,110,130Q165,295,220,90Q165,-15,110,170Q55,355,0,190Q-55,25,-110,210Q-165,395,-220,150Q-165,5,-220,100Z" />
        </path>

        {/* Blob 2 - Lower Right Corner (Aesthetic Flowing Shape) */}
        <path fill="url(#blob2)" fillOpacity="0.20" d="M600,400Q800,300,900,500Q1000,700,800,700Q600,700,500,500Q400,300,600,400Z">
          <animate attributeName="d" dur="10s" repeatCount="indefinite"
            values="M600,400Q800,300,900,500Q1000,700,800,700Q600,700,500,500Q400,300,600,400Z;
                    M600,450Q800,350,900,550Q1000,750,800,750Q600,750,500,550Q400,350,600,450Z;
                    M600,400Q800,300,900,500Q1000,700,800,700Q600,700,500,500Q400,300,600,400Z" />
        </path>
      </svg>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="flex flex-col items-center mb-20">
        <h2 className="section-title">
          <span className="title-highlight">A</span>BOUT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-8 items-start">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-4">
              The Artist Behind the Code
            </h3>
            <p className="about-description text-lg text-stone-600 leading-relaxed font-light">
              I'm a developer with a strong eye for design and a passion for creating digital experiences that are both functional and visually engaging. I approach every project with intention—writing clean code, designing intuitive interfaces, and ensuring every detail contributes to a smooth user experience.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-4">
              Philosophy
            </h3>
            <p className="about-description text-lg text-stone-600 leading-relaxed font-light">
              I believe effective digital products come from the right mix of technical skill and user-centered design. My goal is always to build solutions that not only work well but also feel right to the people using them.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-4">
              Approach
            </h3>
            <p className="about-description text-lg text-stone-600 leading-relaxed font-light">
              I start every project by understanding the problem, the users, and the goals. From there, I follow an iterative design and development process—collaborating closely with clients, testing ideas early, and refining based on feedback to ensure the final product is aligned, usable, and meaningful.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10">
            <span className="block text-sm font-signature text-stone-700 tracking-widest">— Nikka Joie</span>
          </div>
        </div>

        {/* Right Column - Skills with Animated Icons */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-8 text-center">
              Technical palette
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col items-center p-6 rounded-xl hover:scale-105 transform-gpu relative transition-transform duration-300">
                <span className="text-4xl mb-2 animate-bounce">💻</span>
                <div className="text-xl font-light text-stone-800 mb-1">Frontend</div>
                <div className="text-sm text-stone-600 font-light mb-6">React, Vue, TypeScript, Tailwind CSS, JavaScript, HTML, CSS</div>
                <div className="w-32 h-px bg-stone-400 absolute bottom-4"></div>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl hover:scale-105 transform-gpu relative transition-transform duration-300">
                <span className="text-4xl mb-2 animate-pulse">🎨</span>
                <div className="text-xl font-light text-stone-800 mb-1">Design</div>
                <div className="text-sm text-stone-600 font-light mb-6">Prototype, Mockups, Wireframes</div>
                <div className="w-32 h-px bg-stone-400 absolute bottom-4"></div>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl hover:scale-105 transform-gpu relative transition-transform duration-300">
                <span className="text-4xl mb-2 animate-pulse">☁️</span>
                <div className="text-xl font-light text-stone-800 mb-1">Tools</div>
                <div className="text-sm text-stone-600 font-light mb-6">Figma, Github, Canva, Photoshop</div>
                <div className="w-32 h-px bg-stone-400 absolute bottom-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 