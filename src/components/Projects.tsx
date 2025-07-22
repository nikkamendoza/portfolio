import React, { useState, useEffect, useRef } from 'react';

// Project thumbnails
import phishermenImage from '../imgs/phishermen.png';
import ratatutorImage from '../imgs/ratatutor.png';
import pathfinderImage from '../imgs/pathfinder.png';
import pennywaiseImage from '../imgs/pennywaise.png';
import exerguideImage from '../imgs/exerguide.png';
import secondlifeImage from '../imgs/2ndlife.png';
import sisiwImage from '../imgs/sisiw.png';
import honeyImage from '../imgs/honey.png';
import uppaImage from '../imgs/uppa.png';

// Project gallery images
import phisher1 from '../imgs/phisher1.png';
import phisher2 from '../imgs/phisher2.png';
import phisher3 from '../imgs/phisher3.png';
import rata1 from '../imgs/rata1.png';
import rata2 from '../imgs/rata2.png';
import rata3 from '../imgs/rata3.png';
import rata4 from '../imgs/rata4.png';
import rata5 from '../imgs/rata5.png';
import path1 from '../imgs/path1.png';
import path2 from '../imgs/path2.png';
import path3 from '../imgs/path3.png';
import penny1 from '../imgs/penny1.png';
import penny2 from '../imgs/penny2.png';
import penny3 from '../imgs/penny3.png';
import penny4 from '../imgs/penny4.png';
import penny5 from '../imgs/penny5.png';
import second1 from '../imgs/2nd1.png';
import second2 from '../imgs/2nd2.png';
import second3 from '../imgs/2nd3.png';
import sisiw1 from '../imgs/sisiw1.png';
import honey1 from '../imgs/honey1.png';
import ar1 from '../imgs/ar1.jpg';
import ar2 from '../imgs/ar2.jpg';
import ar3 from '../imgs/ar3.jpg';
import ar4 from '../imgs/ar4.jpg';
import ar5 from '../imgs/ar5.jpg';
import ar6 from '../imgs/ar6.jpg';
import ar7 from '../imgs/ar7.jpg';
import ar8 from '../imgs/ar8.jpg';
import uppa1 from '../imgs/uppa1.png';
import uppa2 from '../imgs/uppa2.png';
import uppa3 from '../imgs/uppa3.png';
import uppa4 from '../imgs/uppa4.png';

interface Project {
  title: string;
  description: string;
  image: string;
  gallery: string[];
  link: string;
  technologies: string[];
  category: string;
  featured: boolean;
  role: string;
}

const projects: Project[] = [
  {
    title: 'Ratatutor',
    description: 'RataTutor is an AI-powered study assistant web app that transforms student notes into flashcards, summaries, and quizzes. It features document processing, user authentication, and responsive design for personalized learning.',
    image: ratatutorImage,
    gallery: [rata1, rata2, rata3, rata4, rata5],
    link: 'https://ratatutor.onrender.com',
    technologies: ['Django', 'React', 'Tailwind CSS'],
    category: 'Website',
    featured: true,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'ExerGuide AR',
    description: 'ExerGuide AR is a markerless augmented reality fitness app that uses a 3D virtual coach to demonstrate correct exercise form and reduce injury risks. Designed for Android, it supports visual, audio, and text guidance.',
    image: exerguideImage,
    gallery: [ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8],
    link: 'https://github.com/nikkamendoza/ExerGuide',
    technologies: ['Unity', 'Vuforia', 'C#', 'Blender'],
    category: 'Mobile App',
    featured: false,
    role: 'Full Stack Developer'
  },
  {
    title: 'The Phishermen',
    description: 'The Phishermen is an educational cybersecurity platform designed to teach users how to identify and protect against phishing attacks. Through interactive simulations and real-world examples, users learn to spot malicious emails, fake websites, and other social engineering tactics.',
    image: phishermenImage,
    gallery: [phisher1, phisher2, phisher3],
    link: 'https://the-phishermen-blog.vercel.app',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    category: 'Website',
    featured: false,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'Super PathFinder',
    description: 'A Mario-themed pathfinding visualizer that simulates Dijkstra’s and A* algorithms on a customizable grid. Users can place obstacles and visualize how each algorithm navigates the environment.',
    image: pathfinderImage,
    gallery: [path1, path2, path3],
    link: 'https://indiv-labs.vercel.app',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    category: 'Website',
    featured: false,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'PennywAIse',
    description: 'PennywAIse is a budgeting dashboard that helps users manage income and expenses with AI-generated financial insights. It features responsive design and real-time data visualization.',
    image: pennywaiseImage,
    gallery: [penny1, penny2, penny3, penny4, penny5],
    link: 'https://pennywaise.onrender.com',
    technologies: ['Django', 'JavaScript', 'Tailwind CSS'],
    category: 'Website',
    featured: false,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: '2ndlife',
    description: '2ndLife is an e-commerce web platform focused on the buying and selling of secondhand items. The design emphasizes usability and simplicity to encourage sustainable consumer behavior.',
    image: secondlifeImage,
    gallery: [second1, second2, second3],
    link: 'https://2ndlife-namstech.vercel.app',
    technologies: ['React', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express.js'],
    category: 'Website',
    featured: false,
    role: 'UI/UX Designer, Frontend Developer, QA'
  },
  {
    title: 'Honey OS',
    description: 'Honey OS is a desktop interface concept featuring voice command integration and basic file management utilities like a notepad, with the goal of simplifying everyday computing tasks.',
    image: honeyImage,
    gallery: [honey1],
    link: '#',
    technologies: ['Java', 'NetBeans'],
    category: 'Web App',
    featured: true,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'Sisiw IDE',
    description: 'A custom integrated development environment tailored for the Sisiw programming language, complete with run, compile, file I/O features, and syntax highlighting.',
    image: sisiwImage,
    gallery: [sisiw1],
    link: '#',
    technologies: ['Java', 'NetBeans'],
    category: 'Web App',
    featured: true,
    role: 'UI/UX Designer, Frontend Developer'
  },
  {
    title: 'Uppa',
    description: 'Uppa is a location-based mobile app that connects renters with nearby accommodations—boarding houses, apartments, and condos—making it easy to find and manage rentals. Landlords benefit from organized property management and marketing tools.',
    image: uppaImage,
    gallery: [uppa1, uppa2, uppa3, uppa4],
    link: 'https://www.figma.com/design/pyQu6tbID1cLzZuaLdq9Cy/UPPA?node-id=0-1&p=f&t=7HOfgVNloKhwxqe0-0',
    technologies: ['Figma'],
    category: 'Mobile App',
    featured: true,
    role: 'UI/UX Designer'
  }
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [previewImageIndex, setPreviewImageIndex] = useState<number | null>(null);

  // Determine number of pages (2 for most, 3 for ExerGuide AR)
  const isAR = selectedProject?.title === 'ExerGuide AR';
  const totalPages = isAR ? 3 : 2;

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleImageClick = (index: number) => {
    setPreviewImageIndex(index);
  };

  const closeImagePreview = () => {
    setPreviewImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedProject && previewImageIndex !== null) {
      setPreviewImageIndex((previewImageIndex + 1) % selectedProject.gallery.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject && previewImageIndex !== null) {
      setPreviewImageIndex((previewImageIndex - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <div className="projects-and-featured-wrapper">
      <div className="projects-bg-art">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        <div className="blob blob-6"></div>
      </div>

      <section
        ref={sectionRef}
        id="projects"
        className="projects-section"
      >
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">
              <span className="title-highlight">P</span>ROJECT <span className="title-highlight">G</span>ALLERY
            </h2>
            <p className="projects-subtitle">
              A collection of creative digital experiences that showcase the intersection of art and technology
            </p>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="project-card"
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="card-overlay"></div>

                <div className="card-content">
                  <div className="card-title-container">
                    <h3 className="project-title-text">{project.title}</h3>
                    <p className="project-category-text">{project.category}</p>
                  </div>

                  <div className="card-hover-content">
                    <p className="project-description-text">{project.description}</p>
                    <div className="tech-tags">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View Project</span>
                      <svg className="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div
            className="modal-backdrop"
            onClick={closeModal}
          >
            <div
              className="modal-content"
              onClick={e => e.stopPropagation()}
              style={{ fontFamily: "'Cutive Mono', 'Courier New', monospace" }}
            >
              <button onClick={closeModal} className="modal-close-button">
                <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="modal-page-container">
                <div className={`modal-page ${currentPage === 0 ? 'visible' : ''}`}> {/* Frontpage */}
                  <span className="modal-project-category">{selectedProject.category}</span>
                  <h2 className="modal-project-title">{selectedProject.title}</h2>
                  <div style={{ margin: '0 0 0.5rem 0', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-website-link modal-link-small">
                      <span>{selectedProject.title === 'Uppa' ? 'Visit Design' : selectedProject.title === 'ExerGuide AR' ? 'GitHub Link' : 'Visit Website'}</span>
                      <svg style={{marginLeft: '0.3em', width: '1.1em', height: '1.1em', verticalAlign: 'middle', opacity: 0.8}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
                        <path d="M10 14L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 4h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    {selectedProject.title === 'ExerGuide AR' && (
                      <a href="https://drive.google.com/drive/u/0/folders/1xQN5uzOku0qNGzQwqFNX_hSV_-TypQfD" target="_blank" rel="noopener noreferrer" className="modal-website-link modal-link-small">
                        <span>APK Link</span>
                        <svg style={{marginLeft: '0.3em', width: '1.1em', height: '1.1em', verticalAlign: 'middle', opacity: 0.8}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
                          <path d="M10 14L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 4h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="modal-divider"></div>
                  <p className="modal-project-description">{selectedProject.description}</p>
                  <div className="modal-role-section">
                    <span className="modal-role-title">Role</span>
                    <div className="modal-tag-list">
                      {selectedProject.role.split(',').map(role => (
                        <span key={role.trim()} className="modal-tag">{role.trim()}</span>
                      ))}
                    </div>
                  </div>
                  <h4 className="modal-tech-title">Technologies Used</h4>
                  <div className="modal-tag-list">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="modal-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className={`modal-page ${currentPage === 1 ? 'visible' : ''}`}> {/* Gallery */}
                  <h2 className="modal-gallery-title">Image Gallery</h2>
                  {selectedProject.gallery.length > 1 ? (
                    <div className="modal-image-grid">
                      {selectedProject.gallery.map((img, index) => (
                        <div key={index} className="modal-image-container" onClick={() => handleImageClick(index)}>
                          <img src={img} alt={`${selectedProject.title} gallery image ${index + 1}`} className="modal-gallery-image" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="modal-single-image-container" onClick={() => handleImageClick(0)}>
                      <img src={selectedProject.gallery[0]} alt={`${selectedProject.title} gallery image 1`} className="modal-single-image" />
                    </div>
                  )}
                </div>

                {/* AR Video Page */}
                {isAR && (
                  <div className={`modal-page ${currentPage === 2 ? 'visible' : ''}`}> {/* Video */}
                    <h2 className="modal-gallery-title">Demo Video</h2>
                    <div className="featured-video-wrapper" style={{marginTop: '2rem'}}>
                      <iframe
                        className="featured-video"
                        src="https://www.youtube.com/embed/tfrpoiO_sHs"
                        title="ExerGuide AR Demo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 0}
                    className="modal-nav-button"
                    aria-label="Previous"
                  >
                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <div className="modal-page-indicator">Page {currentPage + 1} of {totalPages}</div>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                    className="modal-nav-button"
                    aria-label="Next"
                  >
                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
                  </button>
              </div>
            </div>
          </div>
        )}

        {previewImageIndex !== null && selectedProject && (
          <div className="image-preview-backdrop" onClick={closeImagePreview}>
            <button className="image-preview-close" onClick={closeImagePreview} aria-label="Close">
              <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <button className="image-preview-nav prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>
              <svg width="2em" height="2em" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="image-preview-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedProject.gallery[previewImageIndex]}
                alt={`${selectedProject.title} preview ${previewImageIndex + 1}`}
                className="image-preview-large"
              />
            </div>

            <button className="image-preview-nav next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>
              <svg width="2em" height="2em" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </section>

      {/* Featured Section */}
      <section className="featured-section">
        <div className="featured-container artistic" style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', justifyContent: 'center'}}>
            <div className="featured-video-card-v2">
              <iframe
                src="https://www.youtube.com/embed/tfrpoiO_sHs"
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          <div className="featured-column-right" style={{flex: '2 1 320px', minWidth: '280px', maxWidth: '600px', margin: '0 auto'}}>
            <h2 className="featured-title-v2">Featured Showcase</h2>
            <p className="featured-subtitle-v2">A closer look at my work in action.</p>
            <div className="featured-details-v2">
              <h3 className="featured-details-title-v2">ExerGuide AR: Augmented Reality Fitness</h3>
              <p className="featured-details-text-v2">
                This video showcases the core features of ExerGuide AR. Watch as the 3D virtual coach demonstrates exercises in real space, guiding users through safe and effective workouts.
              </p>
              <ul className="featured-details-list-v2">
                <li>- Real-time AR exercise demonstrations</li>
                <li>- Multimodal learning (3D, audio, text)</li>
                <li>- Interactive model controls</li>
                <li>- Muscle highlight mode for learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 