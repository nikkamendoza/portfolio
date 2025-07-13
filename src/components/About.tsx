import React from 'react';

const About: React.FC = () => (
  <section id="about" className="py-20 bg-white text-center px-4">
    <h2 className="text-4xl font-bold mb-6">About Me</h2>
    <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
      I am a passionate developer with experience in building web applications using modern technologies. I love creating clean, efficient, and user-friendly solutions.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">React</span>
      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">TypeScript</span>
      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Tailwind CSS</span>
      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Node.js</span>
      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">UI/UX</span>
    </div>
  </section>
);

export default About; 