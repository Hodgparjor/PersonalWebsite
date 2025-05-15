import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

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
  const [isHovering, setIsHovering] = useState(false);

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
          className="relative w-full h-96 bg-secondary-light dark:bg-secondary-dark"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={isHovering}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            className="h-full w-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img 
                  src={img} 
                  alt={`${title} ${index + 1}`}
                  className="h-full w-full object-contain"
                  draggable="false"
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
