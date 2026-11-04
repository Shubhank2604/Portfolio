// Extends the starter's glob-loaded, validated Markdown content model.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(), summary: z.string().max(200),
    category: z.enum(['Systems & Backend', 'AI & ML', 'Other / Experiments']),
    technologies: z.array(z.string()).default([]), status: z.string(),
    repo: z.url(), demo: z.url().optional(),
    featuredOrder: z.number().optional(), order: z.number(),
    published: z.boolean().default(false),
    sourceRef: z.string(), verifiedAt: z.string(),
  }),
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(), description: z.string(), category: z.string(),
    date: z.string(), dateISO: z.string().optional(), readingTime: z.string(),
    published: z.boolean().default(false), historical: z.boolean().default(false),
  }),
});

export const collections = { projects, writing };
