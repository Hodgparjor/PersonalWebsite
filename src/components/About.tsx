
const careerPoints = [
  {
    title: 'Software Engineer',
    date: 'Jan 2020 - Present',
    description: 'Developing web applications using React and Node.js',
  },
  {
    title: 'Frontend Developer',
    date: 'Jun 2018 - Dec 2019',
    description: 'Building responsive UI components with HTML, CSS, and JavaScript',
  },
  // Add more career points as needed
];

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="space-y-4">
        {careerPoints.map((point, index) => (
          <div key={index} className="career-point">
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{point.title}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{point.date}</span>
              <p className="mt-2">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}