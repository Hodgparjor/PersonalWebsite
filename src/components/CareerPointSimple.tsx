import type { CareerEntry } from '../data/career';

export default function CareerPointSimple({ company, logo, title, dates, longDescription }: CareerEntry) {
  return (
    <div className="mb-8">
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
        <p className="text-text-light dark:text-text-dark">
          {longDescription}
        </p>
      </div>
    </div>
  );
}
