import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import bg1 from '../imgs/bg1.png';
import a4 from '../imgs/a4.png';
import nikka1 from '../imgs/nikka1.jpg';
import nikka2 from '../imgs/nikka2.jpg';
import nikka3 from '../imgs/nikka3.jpg';


const Main: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(1); // Start with middle image
  const wrapperRef = useRef<HTMLDivElement>(null);

  const galleryImages = [nikka1, nikka2, nikka3];

  const handleImageClick = (clickedIndex: number) => {
    setActiveImageIndex(clickedIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        // Track the wrapper's internal scroll position
        const wrapperScrollTop = wrapperRef.current.scrollTop || 0;
        setScrollY(wrapperScrollTop);
      }
    };
    
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('scroll', handleScroll);
      return () => wrapper.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // More scattered, lively arrangement for 9 squares
  const squares = [
    { top: '4%', left: '12%', size: '5.5rem', border: 5, color: '#3B82F6', opacity: 0.18, zIndex: 0, spinFactor: 0.7 },
    { top: '16%', right: '8%', size: '6.2rem', border: 5, color: '#8B5CF6', opacity: 0.16, zIndex: 0, spinFactor: -0.5 },
    { top: '28%', left: '22%', size: '5.1rem', border: 5, color: '#10B981', opacity: 0.17, zIndex: 0, spinFactor: 1.1 },
    { top: '44%', right: '14%', size: '5.7rem', border: 5, color: '#F59E42', opacity: 0.15, zIndex: 0, spinFactor: -0.9 },
    { top: '60%', left: '38%', size: '6.8rem', border: 5, color: '#EC4899', opacity: 0.10, zIndex: 0, spinFactor: 0.4 },
    { bottom: '22%', left: '10%', size: '5.4rem', border: 5, color: '#FACC15', opacity: 0.14, zIndex: 0, spinFactor: 0.6 },
    { bottom: '8%', right: '18%', size: '5.6rem', border: 5, color: '#14B8A6', opacity: 0.15, zIndex: 0, spinFactor: -0.8 },
    { bottom: '14%', left: '58%', size: '4.8rem', border: 5, color: '#EF4444', opacity: 0.13, zIndex: 0, spinFactor: 1.2 },
    { bottom: '32%', right: '6%', size: '6.1rem', border: 5, color: '#6366F1', opacity: 0.13, zIndex: 0, spinFactor: -1.1 },
  ];

  // Calculate transforms for shapes
  const spin = (factor: number) => `rotate(${scrollY * factor}deg)`;
  const bounce = (factor: number, offset: number = 0) => `translateY(${Math.sin((scrollY + offset) * 0.02) * factor}px)`;

    return (
        <section ref={wrapperRef} className="wrapper" style={{ backgroundColor: '#1a1a1a' }}>
            {/* Hero Section - Fixed height at top */}
            <div className="elements" style={{ height: '100vh', position: 'relative', zIndex: 10 }}>
                <img src={bg1} className="background layer" alt="Background" />
                
                {/* Dark gradient overlay - moves with background */}
                <div 
                    className="absolute inset-0 pointer-events-none background layer"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%)',
                        zIndex: 5,
                    }}
                ></div>
                
                <img src={a4} className="foreground" alt="Foreground" style={{ zIndex: 15 }} />

                {/* Hero Content - moves with foreground */}
                <div className="hero-content">
                    {/* Main Content */}
                    <div className="relative z-10 max-w-4xl mx-auto mt-[100px]">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wide mb-6 hero-title">
                            NIKKA MENDOZA
                        </h2>
                        <p className="text-lg md:text-xl text-white mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                            A curated collection of digital experiences, creative solutions, and innovative designs that showcase the intersection of art and technology.
                        </p>
                        <div className="flex justify-center items-center">
                            <a
                                href="#projects"
                                className="curtain-btn group px-8 py-4 bg-stone-800 text-white font-light tracking-wide text-sm hover:bg-stone-100 hover:text-stone-800 border-2 border-stone-800 transition-all duration-500 flex items-center justify-center"
                            >
                                <span>EXPLORE GALLERY</span>
                                <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Under main cover - Squares section below hero */}
            <div style={{ height: '220vh', position: 'relative', backgroundColor: '#000000', zIndex: 1 }}>
                
                {/* Abstract Animated Squares - Randomly Scattered */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {squares.map((sq, i) => (
                        <div
                            key={i}
                            className="absolute rounded-md shadow-lg"
                            style={{
                                top: sq.top,
                                left: sq.left,
                                right: sq.right,
                                bottom: sq.bottom,
                                width: sq.size,
                                height: sq.size,
                                borderWidth: `${sq.border}px`,
                                borderStyle: 'solid',
                                borderColor: sq.color,
                                background: 'transparent',
                                opacity: sq.opacity,
                                zIndex: sq.zIndex,
                                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
                                transform: spin(sq.spinFactor),
                                transition: 'box-shadow 0.3s',
                            }}
                        ></div>
                    ))}
                </div>

                {/* Content Section - Text, button, and images */}
                <div 
                    className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end z-20 pointer-events-auto pb-8"
                    style={{
                        transform: `translateY(${-scrollY * 0.02}px)`,
                    }}
                >
                    {/* Text and Button Section */}
                    <div className="text-center max-w-4xl mx-auto px-8 mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide uppercase">
                            Ready to explore my<br />
                            <span className="ml-8">professional journey?</span>
                        </h3>
                        <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                            Dive into my comprehensive resume to discover my skills, experience, and the creative solutions I bring to every project. Click below to download and explore my professional story.
                        </p>
                        <button
                            onClick={() => window.open('/resume/MENDOZA-RESUME.pdf', '_blank')}
                            className="curtain-btn group px-8 py-4 bg-stone-800 text-white font-light tracking-wide text-sm hover:bg-stone-100 hover:text-stone-800 border-2 border-stone-800 transition-all duration-500 flex items-center justify-center mx-auto"
                        >
                            <span>VIEW RESUME</span>
                            <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Gallery Carousel */}
                    <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-50">
                        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 relative">
                            {/* Left Image */}
                            <div
                                onClick={() => handleImageClick(activeImageIndex === 0 ? 2 : activeImageIndex - 1)}
                                className={`
                                    relative cursor-pointer transition-all duration-700 ease-in-out
                                    w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-48 lg:w-48 lg:h-56 opacity-70 hover:opacity-90 scale-90
                                    sm:transform sm:-translate-x-2 md:-translate-x-4
                                `}
                                style={{ zIndex: 10 }}
                            >
                                <div className="w-full h-full bg-gray-800 border-2 border-gray-600 rounded-xl overflow-hidden shadow-2xl">
                                    <img
                                        src={galleryImages[activeImageIndex === 0 ? 2 : activeImageIndex - 1]}
                                        alt="Left gallery image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 rounded-xl"></div>
                            </div>

                            {/* Center Image (Active) */}
                            <div
                                onClick={() => handleImageClick(activeImageIndex)}
                                className="relative cursor-pointer transition-all duration-700 ease-in-out w-40 h-48 sm:w-48 sm:h-60 md:w-64 md:h-80 lg:w-80 lg:h-96 z-50 scale-100"
                                style={{ zIndex: 50 }}
                            >
                                <div className="w-full h-full bg-gray-800 border-2 border-gray-600 rounded-xl overflow-hidden shadow-2xl">
                                    <img
                                        src={galleryImages[activeImageIndex]}
                                        alt="Center gallery image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Image */}
                            <div
                                onClick={() => handleImageClick(activeImageIndex === 2 ? 0 : activeImageIndex + 1)}
                                className={`
                                    relative cursor-pointer transition-all duration-700 ease-in-out
                                    w-24 h-32 sm:w-32 sm:h-40 md:w-40 md:h-48 lg:w-48 lg:h-56 opacity-70 hover:opacity-90 scale-90
                                    sm:transform sm:translate-x-2 md:translate-x-4
                                `}
                                style={{ zIndex: 10 }}
                            >
                                <div className="w-full h-full bg-gray-800 border-2 border-gray-600 rounded-xl overflow-hidden shadow-2xl">
                                    <img
                                        src={galleryImages[activeImageIndex === 2 ? 0 : activeImageIndex + 1]}
                                        alt="Right gallery image"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 rounded-xl"></div>
                            </div>
                        </div>
                        
                        {/* Navigation dots */}
                        <div className="flex justify-center mt-8 sm:mt-12 gap-3 relative z-50">
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleImageClick(index)}
                                    className={`
                                        w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border-2
                                        ${index === activeImageIndex 
                                            ? 'bg-white scale-125 border-white' 
                                            : 'bg-gray-400 border-gray-400 hover:border-gray-300 hover:bg-gray-300'
                                        }
                                    `}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;