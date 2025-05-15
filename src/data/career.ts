export interface CareerEntry {
  company: string;
  logo: string;
  title: string;
  dates: string;
  description: string;
  longDescription?: string;
}

export const careerPath: CareerEntry[] = [
  {
    company: "Marcom Tech Sp. z o.o.",
    logo: "/assets/images/marcom-tech-logo.png",
    title: "Head of IT",
    dates: "2024-Present",
    description: "Leading IT department and managing multiple projects",
    longDescription: "As IT Department Manager at Marcom Tech, I'm leading software development initiatives and overseeing the daily operations of the IT team. I played a key role in shaping project direction and selecting appropriate technologies to align with business goals. My responsibilities extended beyond technical leadership — I regularly engaged with potential clients to present our products, collaborated closely with the sales department by conducting specialized training on our master controller device, predictive maintance solution and industrial sensors, and ensured the accuracy and clarity of all technical documentation. Additionally, I represented the company at international industry fairs in Hannover, Nuremberg and Warsaw, contributing to global outreach and business development."
  },
  {
    company: "Marcom Tech Sp. z o.o.",
    logo: "/assets/images/marcom-tech-logo.png",
    title: "Software Engineer",
    dates: "2022-2024",
    description: "Development of industrial compressors master controller with C# and WinForms .NET",
    longDescription: "I developed a master controller device for compressed air systems using C# and WinForms, aimed at optimizing the operation of industrial air compressors to significantly reduce energy consumption in factories. I designed and implemented the core control algorithms, which were later validated to deliver energy savings of up to 26.3%. Close collaboration with hardware engineers was essential to ensure seamless integration and system reliability throughout development."
  }
];
