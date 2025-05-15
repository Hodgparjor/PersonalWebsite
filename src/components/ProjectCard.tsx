import { useState, useEffect } from 'react';

interface ProjectCardProps {
  title: string;
  date: string;
  category: 'work' | 'education' | 'personal';
  technologies: string[];
  images: string[];
  description: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  date,
  category,
  technologies,
  images,
  description,
  githubUrl
}: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovering) return;

    const interval = setInterval(() => {
      setCurrentImage(current => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isHovering]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((current) => (current - 1 + images.length) % images.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((current) => (current + 1) % images.length);
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'work': return 'bg-accent/10 text-accent';
      case 'education': return 'bg-accent/20 text-accent';
      case 'personal': return 'bg-accent/30 text-accent';
    }
  };

  return (
    <div className="h-full">
      <div className="bg-white/50 dark:bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
        <div 
          className="relative w-full h-96 bg-secondary-light dark:bg-white/5"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img 
            src={images[currentImage]} 
            alt={title}
            className="w-full h-full object-contain"
          />
          {images.length > 1 && isHovering && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-accent mb-2">
            {title}
          </h3>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 mb-3">
            {date} • <span className={`px-2 py-1 rounded-full ${getCategoryColor()}`}>{category}</span>
          </p>
          <p className="text-text-light dark:text-text-dark mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-accent hover:text-accent/80 transition-colors"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
