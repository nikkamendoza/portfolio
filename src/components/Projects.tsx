import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    link: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web App',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
    link: '#',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
    category: 'Web App',
    featured: false
  },
  {
    title: 'Mobile Fitness Tracker',
    description: 'A cross-platform mobile app for tracking workouts, nutrition, and fitness goals with beautiful charts and progress visualization.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=700&fit=crop',
    link: '#',
    technologies: ['React Native', 'Redux', 'Chart.js', 'Expo'],
    category: 'Mobile App',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with modern animations, dark mode toggle, and smooth scrolling navigation.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
    link: '#',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'Web Design',
    featured: false
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    link: '#',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
    category: 'Web App',
    featured: false
  },
  {
    title: 'AI Chat Assistant',
    description: 'An intelligent chatbot powered by machine learning with natural language processing and context awareness.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    link: '#',
    technologies: ['Python', 'TensorFlow', 'Flask', 'WebSocket'],
    category: 'AI/ML',
    featured: true
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
    link: '#',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    category: 'Web App',
    featured: false
  },
  {
    title: 'E-Learning Platform',
    description: 'An interactive learning platform with video courses, quizzes, and progress tracking for students.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=700&fit=crop',
    link: '#',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    category: 'Web App',
    featured: false
  }
];

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-32 bg-stone-50 overflow-hidden"
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-stone-300/20 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-stone-300/15 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-stone-200/30 rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border border-stone-300/20 transform -rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-6xl font-extralight tracking-wider mb-6 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            PROJECTS
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed text-center">
            A collection of creative digital experiences that showcase the intersection of art and technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 font-light tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'border-b-2 border-stone-800 text-stone-800'
                  : 'text-stone-500 hover:text-stone-700 hover:border-b border-stone-300'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`break-inside-avoid group relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent transition-all duration-500 ${
                  hoveredProject === idx ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 border border-white/30 text-sm font-light tracking-wide">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 bg-stone-600 text-sm font-light tracking-wide">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-light tracking-wide mb-3">{project.title}</h3>
                    <p className="text-stone-200 mb-6 line-clamp-3 font-light leading-relaxed">{project.description}</p>
                    
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-sm text-xs text-white font-light tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-sm text-xs text-white font-light tracking-wide">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <a
                      href={project.link}
                      className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-light tracking-wide hover:bg-white hover:text-stone-900 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW PROJECT
                      <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-32 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-stone-800">
              <div className="text-4xl font-extralight mb-2">{projects.length}</div>
              <div className="text-sm text-stone-600 font-light tracking-wide">TOTAL WORKS</div>
            </div>
            <div className="text-stone-800">
              <div className="text-4xl font-extralight mb-2">{categories.length - 1}</div>
              <div className="text-sm text-stone-600 font-light tracking-wide">CATEGORIES</div>
            </div>
            <div className="text-stone-800">
              <div className="text-4xl font-extralight mb-2">{projects.filter(p => p.featured).length}</div>
              <div className="text-sm text-stone-600 font-light tracking-wide">FEATURED</div>
            </div>
            <div className="text-stone-800">
              <div className="text-4xl font-extralight mb-2">100%</div>
              <div className="text-sm text-stone-600 font-light tracking-wide">SATISFACTION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 