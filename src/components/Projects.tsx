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

interface Project {
  title: string;
  description: string;
  image: string;
  gallery: string[];
  link: string;
  technologies: string[];
  category: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'Super PathFinder',
    description: "Super PathFinder is a dynamic and collaborative task management tool designed to bring clarity to complex projects. It allows teams to visualize their workflows, set dependencies, and track progress in real-time. With its intuitive drag-and-drop interface and Gantt chart integration, PathFinder helps you map out the most efficient path to project completion, ensuring deadlines are met and goals are achieved.",
    image: pathfinderImage,
    gallery: [path1, path2, path3],
    link: '#',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
    category: 'Website',
    featured: false
  },
  {
    title: 'Honey OS',
    description: "Honey OS is a beautifully designed, all-in-one productivity suite that brings a touch of sweetness to your daily digital life. It combines a minimalist design with powerful features, including a smart calendar, a focused to-do list, and a note-taking app. Honey OS is engineered to create a seamless and enjoyable user experience, helping you organize your tasks and ideas with elegance and efficiency.",
    image: honeyImage,
    gallery: [honey1],
    link: '#',
    technologies: ['React Native', 'Redux', 'Chart.js', 'Expo'],
    category: 'Web App',
    featured: true
  },
  {
    title: 'Sisiw IDE',
    description: "Sisiw IDE is a lightweight and beginner-friendly Integrated Development Environment tailored for web developers. 'Sisiw', meaning 'chick' in Filipino, reflects its goal: to nurture new programmers. It offers a clean, distraction-free coding environment with essential features like syntax highlighting, code completion, and a built-in terminal, making it the perfect starting point for those hatching their coding journey.",
    image: sisiwImage,
    gallery: [sisiw1],
    link: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web App',
    featured: true
  },
  {
    title: 'The Phishermen',
    description: "The Phishermen is an educational cybersecurity platform designed to teach users how to identify and protect against phishing attacks. Through interactive simulations and real-world examples, users learn to spot malicious emails, fake websites, and other social engineering tactics. Our goal is to arm individuals and organizations with the knowledge to navigate the digital world safely.",
    image: phishermenImage,
    gallery: [phisher1, phisher2, phisher3],
    link: '#',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'Website',
    featured: false
  },
  {
    title: 'ExerGuide AR',
    description: "ExerGuide AR revolutionizes personal fitness by leveraging Augmented Reality to provide interactive workout instructions. Point your device's camera, and our AR instructors will appear in your room, demonstrating exercises with perfect form. The app offers personalized workout plans, real-time feedback, and progress tracking to ensure you exercise safely and effectively.",
    image: exerguideImage,
    gallery: [ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8],
    link: 'https://github.com/nikkamendoza/ExerGuide',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
    category: 'Mobile App',
    featured: false
  },
  {
    title: 'Ratatutor',
    description: "Ratatutor is your personal AI-powered culinary companion. Inspired by the idea that anyone can cook, this chatbot guides you through recipes with step-by-step instructions, answers your cooking questions in real-time, and even suggests dishes based on the ingredients you have. Whether you're a novice or a seasoned cook, Ratatutor makes learning new recipes a delightful experience.",
    image: ratatutorImage,
    gallery: [rata1, rata2, rata3, rata4, rata5],
    link: '#',
    technologies: ['Python', 'TensorFlow', 'Flask', 'WebSocket'],
    category: 'Website',
    featured: true
  },
  {
    title: 'PennywAIse',
    description: "PennywAIse is an intelligent personal finance manager that uses AI to help you save money and make smarter financial decisions. It automatically tracks your spending, identifies saving opportunities, and provides personalized budget recommendations. With PennywAIse, you can take control of your finances and build a secure financial future, one smart decision at a time.",
    image: pennywaiseImage,
    gallery: [penny1, penny2, penny3, penny4, penny5],
    link: '#',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    category: 'Website',
    featured: false
  },
  {
    title: '2ndlife',
    description: "2ndlife is an online marketplace dedicated to giving pre-loved items a new home. From vintage fashion to refurbished electronics, our platform connects sellers and buyers who share a passion for sustainability and unique finds. By making it easy to buy and sell second-hand goods, 2ndlife promotes a circular economy and helps reduce waste.",
    image: secondlifeImage,
    gallery: [second1, second2, second3],
    link: '#',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    category: 'Website',
    featured: false
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
                  <div className="modal-divider"></div>
                  <p className="modal-project-description">{selectedProject.description}</p>
                  <h4 className="modal-tech-title">Technologies Used</h4>
                  <div className="modal-tech-tags">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="modal-tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-website-link">
                    <span>{selectedProject.title === 'ExerGuide AR' ? 'GitHub Link' : 'Visit Website'}</span>
                    <svg className="link-icon-modal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                  {selectedProject.title === 'ExerGuide AR' && (
                    <a href="https://drive.google.com/drive/u/0/folders/1xQN5uzOku0qNGzQwqFNX_hSV_-TypQfD" target="_blank" rel="noopener noreferrer" className="modal-website-link" style={{marginLeft: '1.5rem'}}>
                      <span>APK Link</span>
                      <svg className="link-icon-modal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
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
                  >
                    Previous
                  </button>
                  <div className="modal-page-indicator">Page {currentPage + 1} of {totalPages}</div>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                    className="modal-nav-button"
                  >
                    Next
                  </button>
              </div>
            </div>
          </div>
        )}

        {previewImageIndex !== null && selectedProject && (
          <div className="image-preview-backdrop" onClick={closeImagePreview}>
            <button className="image-preview-close" onClick={closeImagePreview}>
              <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <button className="image-preview-nav prev" onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="image-preview-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedProject.gallery[previewImageIndex]}
                alt={`${selectedProject.title} preview ${previewImageIndex + 1}`}
                className="image-preview-large"
              />
            </div>

            <button className="image-preview-nav next" onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </section>

      {/* Featured Section */}
      <section className="featured-section">
        <br />
        <br />
        <br />
        <div className="featured-container artistic">
          <div className="featured-column-left">
            <div className="featured-video-card-v2">
              <iframe
                className="featured-video-v2"
                src="https://www.youtube.com/embed/tfrpoiO_sHs"
                title="Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="featured-column-right">
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
        <br />
        <br />
      </section>
    </div>
  );
};

export default Projects; 