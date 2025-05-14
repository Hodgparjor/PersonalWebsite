export interface Project {
    title: string;
    description: string;
    image: string;
    type: 'study' | 'professional';
  }
  
  export const projects: Project[] = [
    {
      title: 'University Final Project',
      description: 'A scheduling system using C# and SQL Server.',
      image: '/assets/images/study1.jpg',
      type: 'study'
    },
    {
      title: 'Company ERP Extension',
      description: 'Added reporting dashboard using Blazor and EF Core.',
      image: '/assets/images/prof1.jpg',
      type: 'professional'
    }
  ];