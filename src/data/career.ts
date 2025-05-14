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
    longDescription: "Managing the IT department, overseeing multiple development projects, and implementing strategic technological solutions."
  },
  {
    company: "Marcom Tech Sp. z o.o.",
    logo: "/assets/images/marcom-tech-logo.png",
    title: "Software Engineer",
    dates: "2022-2024",
    description: "Development of industrial compressors master controller with C# and WinForms .NET",
    longDescription: "Developed and maintained enterprise applications using .NET, React, and SQL Server. Led the development of critical ERP modules."
  }
];
