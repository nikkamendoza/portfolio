import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">NIKKA JOIE SANCHEZ MENDOZA</h1>
          <p className="text-xl text-gray-600 mb-2">Digital Artist & Creative Technologist</p>
          <p className="text-gray-500">nikka.mendoza@email.com | +1 (555) 123-4567</p>
        </div>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Creative digital artist and technologist with expertise in visual design, interactive media, and innovative digital solutions. 
            Passionate about merging art with technology to create compelling digital experiences that engage and inspire audiences.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Design & Art</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Digital Illustration</li>
                <li>• 3D Modeling & Animation</li>
                <li>• UI/UX Design</li>
                <li>• Brand Identity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Technology</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• React & TypeScript</li>
                <li>• WebGL & Three.js</li>
                <li>• Adobe Creative Suite</li>
                <li>• Blender & Cinema 4D</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300">Professional Experience</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Senior Digital Artist</h3>
              <span className="text-gray-600">2022 - Present</span>
            </div>
            <p className="text-gray-600 mb-2">Creative Studio Inc.</p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>• Led digital art projects for major brand campaigns</li>
              <li>• Developed interactive web experiences using modern technologies</li>
              <li>• Collaborated with cross-functional teams to deliver innovative solutions</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Digital Designer</h3>
              <span className="text-gray-600">2020 - 2022</span>
            </div>
            <p className="text-gray-600 mb-2">Tech Innovations Ltd.</p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>• Created visual assets for web and mobile applications</li>
              <li>• Designed user interfaces for digital products</li>
              <li>• Implemented responsive design solutions</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300">Education</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Bachelor of Fine Arts in Digital Media</h3>
              <p className="text-gray-600">University of Creative Arts</p>
            </div>
            <span className="text-gray-600">2016 - 2020</span>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300">Featured Projects</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Interactive Digital Gallery</h3>
            <p className="text-gray-600 mb-2">A web-based immersive art experience featuring 3D environments and interactive elements</p>
            <p className="text-gray-500 text-sm">Technologies: React, Three.js, WebGL</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Brand Identity System</h3>
            <p className="text-gray-600 mb-2">Complete visual identity design for a tech startup, including logo, color palette, and brand guidelines</p>
            <p className="text-gray-500 text-sm">Tools: Adobe Illustrator, Photoshop, InDesign</p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-200">
          <p>This is a dummy resume for demonstration purposes</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
