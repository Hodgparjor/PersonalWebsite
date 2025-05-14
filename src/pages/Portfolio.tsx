import { projects } from '../data/projects';

export default function Portfolio() {
  const studyProjects = projects.filter(p => p.type === 'study');
  const professionalProjects = projects.filter(p => p.type === 'professional');

  return (
    <main>
      <section>
        <h2>Studies</h2>
        <div>
          {studyProjects.map(p => (
            <div key={p.title}>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Professional</h2>
        <div>
          {professionalProjects.map(p => (
            <div key={p.title}>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}