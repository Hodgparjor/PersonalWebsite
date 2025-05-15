import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  const projects = [
    {
      title: "Master Controller of Industrial Compressors",
      date: "2023-2024",
      category: "work" as const,
      technologies: ["C#", "WinForms", ".NET"],
      images: ["/assets/images/projects/mtcontrol_1.jpg", "/assets/images/projects/mtcontrol_2.jpg", "/assets/images/projects/mtcontrol_3.jpg"],
      description: "Developed master controller for industrial compressors, allowing to automate and optimize operation of compressed air network, and save up to 26% energy.",
      githubUrl: undefined
    },
    {
      title: "AI Image Recognition",
      date: "2023",
      category: "personal" as const,
      technologies: ["Python", "TensorFlow", "OpenCV"],
      images: ["/assets/images/project2.jpg"],
      description: "Developed an AI-powered image recognition system using deep learning.",
      githubUrl: "https://github.com/yourusername/project"
    },
    {
      title: "E-commerce Platform",
      date: "2022",
      category: "work" as const,
      technologies: ["React", "Node.js", "MongoDB"],
      images: ["/assets/images/project3.jpg"],
      description: "Built a scalable e-commerce platform with modern technologies.",
      githubUrl: undefined
    },
    {
      title: "Mobile Weather App",
      date: "2022",
      category: "personal" as const,
      technologies: ["React Native", "Weather API"],
      images: ["/assets/images/project4.jpg"],
      description: "Created a cross-platform mobile weather application.",
      githubUrl: "https://github.com/yourusername/weather-app"
    },
  ];

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark pt-16">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="font-heading text-4xl text-text-light dark:text-text-dark mb-12 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}