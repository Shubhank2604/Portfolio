import { existsSync } from 'node:fs';

export const SITE = {
  name: 'Shubhank Chandak',
  initials: 'SC.',
  role: 'Software Engineer · Backend, Systems & AI',
  email: 'shubhankchandak@gmail.com',
  description: 'Software engineer building backend infrastructure, compiler tooling, and AI systems. Previously at Wells Fargo and MathWorks. M.S. Computer Science at the University of Florida.',
  intro: 'Building reliable backend infrastructure and AI systems. Previously at Wells Fargo and MathWorks. M.S. Computer Science at the University of Florida.',
  locale: 'en',
  resume: existsSync(new URL('../public/resume.pdf', import.meta.url)) ? '/resume.pdf' : undefined,
  social: [
    { label: 'GitHub', href: 'https://github.com/Shubhank2604' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shubhank2604' },
  ],
} as const;

export const NAV_LINKS = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'About', href: '/about/' },
] as const;
