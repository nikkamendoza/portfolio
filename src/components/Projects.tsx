import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of your amazing project goes here.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Another project that highlights your skills and experience.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Showcase your best work and what you are proud of.',
    link: '#',
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-20 bg-gray-50 px-4">
    <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
    <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a href={project.link} className="mt-auto text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 