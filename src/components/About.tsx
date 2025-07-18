import React from 'react';

const About: React.FC = () => (
  <section id="about" className="py-32 bg-white relative overflow-hidden">
    {/* Artistic Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 border border-stone-200 rotate-45 opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-stone-200 rounded-full opacity-20"></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="w-16 h-px bg-stone-400 mx-auto mb-8"></div>
        <h2 className="text-5xl md:text-6xl font-extralight text-stone-800 tracking-wider mb-6">
          ABOUT
        </h2>
        <div className="w-16 h-px bg-stone-400 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-4">
              The Artist Behind the Code
            </h3>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              I am a creative technologist who approaches development as an art form. Every line of code, every pixel, and every interaction is carefully crafted to create meaningful digital experiences that resonate with users on both functional and emotional levels.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-4">
              Philosophy
            </h3>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              I believe that great digital experiences emerge from the perfect balance of technical excellence and artistic vision. My work reflects this philosophy through clean, elegant code and thoughtful, user-centered design.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-4">
              Approach
            </h3>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              Each project begins with deep research and understanding, followed by iterative design and development. I collaborate closely with clients to ensure every detail aligns with their vision while pushing creative boundaries.
            </p>
          </div>
        </div>

        {/* Right Column - Skills & Stats */}
        <div className="space-y-12">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-light text-stone-800 tracking-wide mb-8 text-center">
              TECHNICAL PALETTE
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
                <div className="text-3xl font-light text-stone-800 mb-2">Frontend</div>
                <div className="text-sm text-stone-600 font-light">React, Vue, TypeScript</div>
              </div>
              <div className="text-center p-6 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
                <div className="text-3xl font-light text-stone-800 mb-2">Backend</div>
                <div className="text-sm text-stone-600 font-light">Node.js, Python, Databases</div>
              </div>
              <div className="text-center p-6 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
                <div className="text-3xl font-light text-stone-800 mb-2">Design</div>
                <div className="text-sm text-stone-600 font-light">UI/UX, Figma, Prototyping</div>
              </div>
              <div className="text-center p-6 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
                <div className="text-3xl font-light text-stone-800 mb-2">Tools</div>
                <div className="text-sm text-stone-600 font-light">Git, Docker, Cloud</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-stone-800 mb-2">50+</div>
              <div className="text-sm text-stone-600 font-light tracking-wide">PROJECTS</div>
            </div>
            <div>
              <div className="text-4xl font-light text-stone-800 mb-2">5+</div>
              <div className="text-sm text-stone-600 font-light tracking-wide">YEARS</div>
            </div>
            <div>
              <div className="text-4xl font-light text-stone-800 mb-2">100%</div>
              <div className="text-sm text-stone-600 font-light tracking-wide">SATISFACTION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 