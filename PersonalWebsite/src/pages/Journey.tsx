import { journeyEntries } from '../data/journey';

export default function Journey() {
  return (
    <main>
      <h1>My Journey</h1>
      <div>
        {journeyEntries.map((entry, index) => (
          <div key={index}>
            <div>
              <time>{entry.date}</time>
              <h2>{entry.title}</h2>
              <p>{entry.description}</p>
            </div>
            {entry.images && (
              <div>
                {entry.images.map((image, imgIndex) => (
                  <img 
                    key={imgIndex}
                    src={image}
                    alt={`${entry.title} - image ${imgIndex + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
