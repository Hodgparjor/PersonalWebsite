import SkillCard from '../components/SkillCard';
import CareerPointSimple from '../components/CareerPointSimple';
import { careerPath } from '../data/career';
import { educationPath } from '../data/education';

export default function About() {
  const technicalSkills = [
    { name: '.NET C#', level: 85, text: 'Advanced' },
    { name: 'React', level: 75, text: 'Advanced' },
    { name: 'TypeScript', level: 70, text: 'Intermediate' },
  ];

  const softSkills = [
    'Team Leadership',
    'Problem Solving',
    'Communication',
  ];

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark pt-16">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <img
            src="/assets/images/MyPhoto.jpg"
            alt="Aleksander Brzostowski"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-accent"
          />
          <h1 className="font-heading text-4xl text-text-light dark:text-text-dark mb-6">
            About Me
          </h1>
          <p className="text-xl text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto mb-8">
            I'm a passionate full-stack developer with expertise in .NET and React, currently leading IT projects at Marcom Tech.
          </p>
          <p className="text-text-light/80 dark:text-text-dark/80 max-w-3xl mx-auto">
            With a strong foundation in backend development and a growing expertise in frontend technologies,
            I strive to create efficient and user-friendly solutions. My journey in software development
            has led me from writing complex backend systems to crafting intuitive user interfaces.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-3xl text-text-light dark:text-text-dark mb-8 text-center">
            Skills Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {technicalSkills.map(skill => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-3xl text-text-light dark:text-text-dark mb-8 text-center">
            Career Highlights
          </h2>
          <div className="space-y-6">
            {careerPath.map((entry, index) => (
              <CareerPointSimple key={index} {...entry} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-text-light dark:text-text-dark mb-8 text-center">
            Education
          </h2>
          <div className="space-y-6">
            {educationPath.map((entry, index) => (
              <CareerPointSimple key={index} {...entry} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}