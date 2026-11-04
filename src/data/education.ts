export const education = [
  {
    school: 'University of Florida', degree: 'M.S. Computer Science',
    period: 'Aug 2025 – May 2027', location: 'Gainesville, FL',
    // Conflicting 3.72/3.8 source values: omit GPA until current record is supplied.
    gpa: undefined,
    courses: ['Distributed Systems', 'Advanced Data Structures', 'Machine Learning Engineering', 'Trustworthy Machine Learning'],
  },
  {
    school: 'National Institute of Technology, Durgapur',
    degree: 'B.Tech Computer Science & Engineering',
    period: 'Jul 2018 – May 2022', location: 'Durgapur, India', gpa: '8.59 / 10',
    courses: ['Data Structures & Algorithms', 'Databases', 'Operating Systems', 'Computer Networks', 'Object-Oriented Programming'],
  },
] as const;
