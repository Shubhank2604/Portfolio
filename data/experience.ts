export interface Experience {
  company: string;
  role: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  technologies: string[];
  metrics?: { value: string; label: string }[];
  logo?: string;
  image?: string;
  link?: string;
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "MathWorks",
    role: "Software Engineer Intern",
    location: "Natick, MA",
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary: "Compiler infrastructure inside the production MATLAB Compiler codebase.",
    featured: true,
    highlights: [
      "Designed a unified JSON artifact manifest as the source of truth for compiler outputs and dependencies.",
      "Re-architected section integration into a loosely coupled, data-driven C++ framework, cutting future additions from roughly an hour to under a minute.",
      "Extended safe MATLAB-to-C++ data transfer and dependency collection with explicit RAII ownership.",
    ],
    technologies: ["C++", "MATLAB", "Compiler Systems", "Serialization"],
    metrics: [{ value: "< 1 min", label: "future section integration, down from ~1 hour" }],
  },
  {
    company: "Wells Fargo",
    role: "Software Engineer",
    location: "Bengaluru, India",
    startDate: "Jul 2022",
    endDate: "Jun 2025",
    summary: "Capital-markets analytics and end-of-day risk-processing services.",
    featured: true,
    highlights: [
      "Built high-throughput services that processed roughly 200K records per major dataset and fed C++ calculations for VaR, DV01/DV02, and OAS.",
      "Replaced repeated database lookups with 20+ distributed-cache datasets, providing 7× faster in-memory access.",
      "Automated overnight validation and migrated 11 services to Java 17 and Spring Boot 3.3 without downtime.",
    ],
    technologies: ["Java", "Spring Boot", "SQL", "Redis", "C++"],
    metrics: [
      { value: "~40%", label: "lower data-retrieval latency" },
      { value: "200K", label: "records per major dataset daily" },
      { value: "< 2 min", label: "production validation, down from ~60 min" },
    ],
  },
  {
    company: "Bounce",
    role: "Software Engineer Intern",
    location: "Remote",
    startDate: "May 2022",
    endDate: "Jul 2022",
    summary: "Inventory allocation and backend services for a shared-mobility platform.",
    featured: true,
    highlights: [
      "Improved an operational allocation workflow from roughly 15 minutes to under 5 minutes.",
      "Delivered backend service and MongoDB changes alongside automated test coverage.",
    ],
    technologies: ["Node.js", "MongoDB", "Backend Services", "Testing"],
  },
  {
    company: "Selegic Inc.",
    role: "Software Engineer Intern",
    location: "Kolkata, India",
    startDate: "Jan 2022",
    endDate: "Apr 2022",
    technologies: [],
  },
  {
    company: "Scaler",
    role: "Technical Content Writer · Freelance",
    location: "Remote",
    startDate: "Jun 2021",
    endDate: "Nov 2021",
    summary: "Technical articles for software engineering learners.",
    technologies: ["Technical Writing"],
  },
  {
    company: "Placewit",
    role: "Mentor · Part-time",
    location: "Remote",
    startDate: "Mar 2022",
    endDate: "Jun 2022",
    summary: "Interview preparation and mock interviews for 100+ students.",
    highlights: ["DSA, OOP, operating systems, networking, and DBMS."],
    technologies: ["Mentoring", "Mock Interviews"],
    metrics: [{ value: "100+", label: "students mentored" }],
  },
];
