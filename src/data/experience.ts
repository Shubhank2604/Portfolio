export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  highlights?: string[];
  technologies: string[];
}

// Dates and professional claims: supplied brief + pre-migration portfolio.
export const experiences: Experience[] = [
  {
    id: 'mathworks', company: 'MathWorks', role: 'Software Engineer Intern',
    period: 'May – Aug 2026', location: 'Natick, MA',
    summary: 'Built production C++ compiler infrastructure, unifying dependency and deployment metadata for MATLAB Compiler.',
    highlights: [
      'Designed a unified JSON artifact manifest for compiler outputs, dependencies, and deployment metadata.',
      'Made section-based serialization extensible through a data-driven C++ framework. Future section integration went from roughly an hour to under a minute.',
      'Extended MATLAB-to-C++ dependency collection and mxArray data transfer with explicit RAII ownership.',
    ], technologies: ['C++', 'MATLAB', 'Serialization', 'Compiler infrastructure'],
  },
  {
    id: 'wells-fargo', company: 'Wells Fargo', role: 'Software Engineer',
    period: 'Jul 2022 – Jun 2025', location: 'Bengaluru, India',
    summary: 'Engineered capital-markets analytics services, improving high-volume data access, distributed caching, and production validation.',
    highlights: [
      'Built Java/Spring Boot services handling roughly 200K records per major dataset daily and feeding C++ financial analytics.',
      'Optimized SQL access and distributed caching across 20+ datasets, reducing retrieval latency by roughly 40%.',
      'Automated production validation from roughly 60 minutes to under 2 minutes.',
      'Modernized 11 services from Java 8 to 17 and Spring Boot 2.7 to 3.3.',
    ], technologies: ['Java', 'Spring Boot', 'SQL', 'Redis', 'C++'],
  },
  {
    id: 'bounce', company: 'Bounce', role: 'Software Engineer Intern',
    period: 'May – Jul 2022', location: 'Remote',
    summary: 'Improved backend inventory and battery-allocation workflows for EV fleet operations.',
    highlights: ['Contributed service logic, MongoDB updates, and automated tests for inventory allocation.'],
    technologies: ['Node.js', 'MongoDB', 'Testing'],
  },
  {
    id: 'placewit', company: 'Placewit', role: 'Mentor · Part-time',
    period: 'Mar – Jun 2022', location: 'Remote',
    summary: 'Mentored 100+ students in DSA, CS fundamentals, and product-company interview preparation.',
    highlights: ['Conducted mock interviews covering DSA, OOP, operating systems, networking, and DBMS.'],
    technologies: ['Mentoring', 'Mock interviews'],
  },
  {
    id: 'selegic', company: 'Selegic Inc.', role: 'Software Engineer Intern',
    period: 'Jan – Apr 2022', location: 'Kolkata, India', technologies: [],
  },
  {
    id: 'scaler', company: 'Scaler', role: 'Technical Content Writer · Freelance',
    period: 'Jun – Nov 2021', location: 'Remote',
    summary: 'Created technical educational content for software engineering learners.',
    technologies: ['Technical writing'],
  },
];
