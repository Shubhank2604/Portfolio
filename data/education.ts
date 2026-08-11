export interface Education {
  school: string;
  degree: string;
  period?: string;
  detail: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    school: "University of Florida",
    degree: "Master of Science, Computer & Information Science",
    period: "Aug 2025 – May 2027",
    detail: "GPA: 3.72 / 4.0",
    coursework: ["Distributed Systems", "Advanced Data Structures", "Machine Learning Engineering", "Trustworthy Machine Learning"],
  },
  {
    school: "National Institute of Technology, Durgapur",
    degree: "Bachelor of Technology, Computer Science & Engineering",
    detail: "GPA: 8.59 / 10.0 · scaled to 3.89 / 4.0",
    coursework: ["Data Structures", "Systems", "Algorithms"],
  },
];
