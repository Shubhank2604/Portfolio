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
}

export const experiences: Experience[] = [
  {
    company: "MathWorks",
    role: "Software Engineer Intern",
    location: "Natick, MA",
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary: "MATLAB Compiler infrastructure.",
    highlights: [
      "Built a data-driven manifest framework for compiler artifacts and dependencies.",
      "Extended safe MATLAB-to-C++ transfer and dependency collection with RAII ownership.",
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
    summary: "Capital-markets analytics and end-of-day processing services.",
    highlights: [
      "Improved SQL access patterns and distributed caching for high-volume analytics workflows.",
      "Automated validation and migrated 11 services to Java 17 and Spring Boot 3.3.",
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
    summary: "Inventory and backend services.",
    highlights: ["Improved an allocation workflow from roughly 15 minutes to under 5 minutes.", "Contributed backend service and MongoDB work alongside test coverage."],
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
