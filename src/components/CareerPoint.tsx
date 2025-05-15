import { useState } from 'react';
import type { CareerEntry } from '../data/career';

interface CareerPointProps extends CareerEntry {
  isReversed: boolean;
}

export default function CareerPoint({ company, logo, title, dates, description, longDescription }: CareerPointProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex items-center mb-16">
      {/* Timeline dot */}
      <div className="absolute left-[25%] transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg" />
      
      {/* Content */}
      <div 
        className="ml-[30%] w-[65%]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="bg-white/50 dark:bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
          <img 
            src={logo} 
            alt={company}
            className="h-12 mb-4"
          />
          <h3 className="font-heading text-xl text-accent mb-2">
            {title}
          </h3>
          <h4 className="text-text-light/80 dark:text-text-dark/80 mb-2">
            {company}
          </h4>
          <p className="text-sm text-text-light/60 dark:text-text-dark/60 mb-3">
            {dates}
          </p>
          <p className="text-text-light dark:text-text-dark transition-all duration-300">
            {isHovering && longDescription ? longDescription : description}
          </p>
        </div>
      </div>
    </div>
  );
}
