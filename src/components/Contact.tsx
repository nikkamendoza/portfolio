import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="py-20 bg-white px-4">
    <h2 className="text-4xl font-bold text-center mb-6">Contact</h2>
    <form className="max-w-xl mx-auto bg-gray-50 rounded-xl shadow-md p-8 flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200" required />
      <input type="email" placeholder="Your Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200" required />
      <textarea placeholder="Your Message" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200" rows={5} required />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
    </form>
    <div className="flex justify-center gap-6 mt-8">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-600 font-bold">
        GH
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-600 font-bold">
        IN
      </a>
      <a href="mailto:your@email.com" className="text-2xl text-gray-600 hover:text-blue-600 font-bold">
        ✉
      </a>
    </div>
  </section>
);

export default Contact; 