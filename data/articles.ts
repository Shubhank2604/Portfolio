export interface Article { slug: string; title: string; description: string; category: string; date: string; readingTime: string; published: boolean; body: { heading: string; text: string }[]; }
export const articles: Article[] = [
  { slug: "building-retrieval-systems-that-know-their-limits", title: "Building retrieval systems that know their limits", description: "A draft note on separating retrieval, deterministic tools, and generated explanations.", category: "AI Systems", date: "Draft", readingTime: "6 min", published: false, body: [
    { heading: "A useful boundary", text: "This is a starter draft for the writing system. A retrieval product becomes more dependable when it makes evidence, computation, and interpretation distinguishable." },
    { heading: "What to measure", text: "Before publishing, add a real evaluation set, error analysis, and source-specific observations." },
  ] },
];
