export interface JourneyEntry {
  date: string;
  title: string;
  description: string;
  images?: string[];
}

export const journeyEntries: JourneyEntry[] = [
  {
    date: "2022-01",
    title: "Started Professional Career",
    description: "Joined Marcom Tech as a Software Engineer, working primarily with .NET and React.",
    images: ["/assets/images/career-start.jpg"]
  },
  {
    date: "2023-06",
    title: "First Major Project",
    description: "Led the development of a critical ERP module that improved company efficiency by 40%.",
    images: ["/assets/images/project1.jpg", "/assets/images/project2.jpg"]
  },
  {
    date: "2024-01",
    title: "Promotion to Head of IT",
    description: "Took on the responsibility of leading the IT department and managing multiple projects.",
    images: ["/assets/images/promotion.jpg"]
  }
];
