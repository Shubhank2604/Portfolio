export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  published: boolean;
  body: { heading: string; text: string }[];
}

export const articles: Article[] = [
  {
    slug: "building-retrieval-systems-that-know-their-limits",
    title: "When BM25 beat hybrid retrieval",
    description:
      "How I built a reproducible RAG benchmark, why the supposedly simpler retriever won, and what the failure taught me about evaluation.",
    category: "AI Systems",
    date: "August 2026",
    readingTime: "8 min",
    published: true,
    body: [],
  },
];
