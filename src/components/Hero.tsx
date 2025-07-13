import React from 'react';

const Hero: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white text-center px-4">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Your Name</h1>
    <h2 className="text-2xl md:text-3xl font-medium text-blue-600 mb-6">Professional Title / Role</h2>
    <p className="max-w-xl text-lg md:text-xl text-gray-600 mb-8">
      Welcome to my portfolio! I build modern, responsive, and beautiful web experiences.
    </p>
    <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition">Contact Me</a>
  </section>
);

export default Hero; 