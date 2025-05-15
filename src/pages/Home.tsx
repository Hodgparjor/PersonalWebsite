import { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SkillCard from '../components/SkillCard';
import CareerPoint from '../components/CareerPoint';
import { careerPath } from '../data/career';
import { educationPath } from '../data/education';
import TypewriterText from '../components/TypewriterText';

export default function Home() {
  const skillsRef = useRef<HTMLElement>(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSkills = () => skillsRef.current?.scrollIntoView({ behavior: 'smooth' });

  const technicalSkills = [
    { name: '.NET C#', level: 85, text: 'Advanced' },
    { name: 'Java', level: 55, text: 'Intermediate' },
    { name: 'Python', level: 55, text: 'Intermediate' },
    { name: 'C/C++', level: 55, text: 'Intermediate' },
    { name: 'React', level: 35, text: 'Basic' },
    { name: 'TypeScript', level: 35, text: 'Basic' },
    { name: 'HTML/CSS', level: 35, text: 'Basic' },
    { name: 'SQL and Databases', level: 65, text: 'Intermediate' },
    { name: 'MS Office', level: 85, text: 'Advanced' },
    { name: 'GitHub', level: 65, text: 'Intermediate' }
  ];

  const languageSkills = [
    { name: 'Polish', level: 100, text: 'Native' },
    { name: 'English', level: 90, text: 'Advanced' },
    { name: 'German', level: 35, text: 'Basic' }
  ];

  const otherSkills = [
    'Team Leadership',
    'Strong Soft Skills',
    'Project Management',
    'Problem Solving',
    'Critical Thinking',
    'Communication',
    'Agile Methodologies',
    'SOLID Principles',
    'Design Patterns',
    'RESTful APIs'
  ];

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-4 bg-primary-light dark:bg-primary-dark">
          <div className="text-center">
            <img
              src="/assets/images/MyPhoto.jpg"
              alt="Aleksander Brzostowski"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-accent"
            />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-light dark:text-text-dark mb-6">
              <TypewriterText text="Hi, I'm Aleksander Brzostowski" />
            </h1>
            <p className="text-xl text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto">
              .NET & React developer passionate about clean, maintainable code and elegant UI.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://www.linkedin.com/in/aleksander-brzostowski-533b5523a" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-accent hover:text-accent-light transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="https://github.com/Hodgparjor" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-accent hover:text-accent-light transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:olekbrzost@gmail.com"
                 className="text-accent hover:text-accent-light transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
          {isAtTop && (
            <button 
              onClick={scrollToSkills}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent animate-bounce"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          )}
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20 px-4 bg-secondary-light dark:bg-secondary-dark">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-text-light dark:text-text-dark mb-12 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map(skill => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>

            {/* Languages Section */}
            <h2 className="font-heading text-3xl md:text-4xl text-text-light dark:text-text-dark mt-20 mb-12 text-center">
              Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languageSkills.map(skill => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>

            <h2 className="font-heading text-3xl md:text-4xl text-text-light dark:text-text-dark mt-20 mb-8 text-center">
              Other Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {otherSkills
          .map(skill => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Career Timeline Section */}
        <section className="relative bg-primary-light dark:bg-primary-dark">
          {/* Horizontal lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-accent/30" />
          {/*<div className="absolute bottom-0 left-0 right-0 h-1 bg-accent/30" />*/}
          {/* Timeline line - adjusted height to account for horizontal lines */}
          <div className="absolute left-[25%] transform -translate-x-1/2 w-1 bg-accent/30 top-1 bottom-0" />
                
          {/* Career entries */}
          <div className="relative z-10 py-12">
              <h2 className="font-heading text-3xl md:text-4xl text-text-light dark:text-text-dark mb-12 text-center">
                Career Path
              </h2>
              {careerPath.map((entry, index) => (
                <CareerPoint 
                  key={`${entry.company}-${entry.title}`}
                  {...entry}
                  isReversed={index % 2 === 0}
                />
              ))}
          </div>
        </section>

        {/* Education Timeline Section */}
        <section className="relative bg-primary-light dark:bg-primary-dark">
          {/* Horizontal lines */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent/30" />
          {/* Timeline line */}
          <div className="absolute left-[25%] transform -translate-x-1/2 w-1 bg-accent/30 top-0 bottom-1" />
                
          {/* Education entries */}
          <div className="relative z-10 py-12">
              <h2 className="font-heading text-3xl md:text-4xl text-text-light dark:text-text-dark mb-12 text-center">
                Education
              </h2>
              {educationPath.map((entry, index) => (
                <CareerPoint 
                  key={`${entry.company}-${entry.title}`}
                  {...entry}
                  isReversed={index % 2 === 0}
                />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}