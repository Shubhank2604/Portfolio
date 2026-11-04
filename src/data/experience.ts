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

// Reviewed 2026-11-04 against Shubhank's own resume files and UF offer.
// Internal evidence notes live in the ignored .migration/CONTENT_AUDIT.md.
export const experiences: Experience[] = [
  {
    id: 'uf-oar', company: 'University of Florida · Assessment & Research',
    role: 'OPS Student Analyst Intern · Part-time',
    period: 'Sep 2025 – Present', location: 'Gainesville, FL',
    summary: 'Built request-management automation connecting Microsoft Lists, Power Automate, Planner, and SharePoint.',
    highlights: [
      'Automated request intake, task creation and assignment, categorization, and dedicated SharePoint document folders.',
      'Added conditional form logic and validation to improve request traceability and reduce manual coordination.',
      'Created operational reporting for request status, completion, and turnaround time; integrated dashboards into the department website.',
    ],
    technologies: ['Power Automate', 'Microsoft Lists', 'Planner', 'SharePoint', 'Power BI'],
  },
  {
    id: 'mathworks', company: 'MathWorks', role: 'Software Engineer Intern',
    period: 'May – Aug 2026', location: 'Natick, MA',
    summary: 'Built production C++ compiler infrastructure, unifying dependency and deployment metadata for MATLAB Compiler.',
    highlights: [
      'Designed a unified JSON artifact manifest for compiler outputs, dependencies, and deployment metadata.',
      'Replaced hard-coded serialization with a data-driven C++ framework, reducing integration and maintenance effort from three hours to under five minutes.',
      'Extended MATLAB-to-C++ dependency collection and mxArray data transfer with explicit RAII ownership.',
    ], technologies: ['C++', 'MATLAB', 'Serialization', 'Compiler infrastructure'],
  },
  {
    id: 'wells-fargo', company: 'Wells Fargo', role: 'Software Engineer',
    period: 'Jul 2022 – Jun 2025', location: 'Bengaluru, India',
    summary: 'Engineered capital-markets analytics services, improving high-volume data access, distributed caching, and production validation.',
    highlights: [
      'Built Java/Spring Boot microservices processing 2.3 million records daily for end-of-day MBS analytics.',
      'Optimized JPA queries, joins, and indexes to reduce retrieval latency by 36%; extended Oracle Coherence caching across 20+ datasets.',
      'Automated production validation from roughly 60 minutes to under 2 minutes.',
      'Modernized 12 services from Java 8 to 17 and Spring Boot 2.7 to 3.3.',
    ], technologies: ['Java', 'Spring Boot', 'SQL', 'Oracle Coherence', 'C++'],
  },
  {
    id: 'bounce', company: 'Bounce', role: 'Software Engineer Intern',
    period: 'May – Jul 2022', location: 'Remote',
    summary: 'Improved backend inventory and battery-allocation workflows for EV fleet operations.',
    highlights: ['Developed backend services and APIs using Java and Spring Boot.'],
    technologies: ['Java', 'Spring Boot'],
  },
  {
    id: 'placewit', company: 'Placewit', role: 'Mentor · Part-time',
    period: 'Mar – Jun 2022', location: 'Remote',
    // The 100+ figure was explicitly confirmed by Shubhank in the original brief.
    summary: 'Mentored 100+ students in DSA, CS fundamentals, and product-company interview preparation.',
    highlights: ['Conducted mock interviews covering DSA, OOP, operating systems, networking, and DBMS.'],
    technologies: ['Mentoring', 'Mock interviews'],
  },
  {
    id: 'selegic', company: 'Selegic Inc.', role: 'Software Engineer Intern',
    period: 'Jan – Apr 2022', location: 'Kolkata, India',
    summary: 'Developed an early-stage backend proof of concept using Java and the Spring framework.',
    technologies: ['Java', 'Spring'],
  },
  {
    id: 'scaler', company: 'Scaler', role: 'Technical Content Writer · Freelance',
    period: 'Jun – Nov 2021', location: 'Remote',
    summary: 'Created technical educational content for software engineering learners.',
    technologies: ['Technical writing'],
  },
];
