export type ProjectCategory = "Backend" | "Distributed Systems" | "Systems" | "AI / ML";

export interface ProjectSection { heading: string; body: string; }
export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  github?: string;
  demo?: string;
  metrics?: { value: string; label: string }[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "finsight-ai", title: "FinSight.ai", eyebrow: "AI systems · Retrieval · Verification",
    description: "A local-first financial decision engine combining hybrid RAG, multimodal reasoning, and a verification layer for grounded analysis.",
    categories: ["AI / ML", "Systems"], technologies: ["Qdrant", "BM25", "RRF", "Gemini", "Python"], featured: true, github: "https://github.com/Shubhank2604/FinSight-AI",
    sections: [
      { heading: "Overview", body: "FinSight.ai keeps retrieval, deterministic finance tools, and generated explanations distinct so results remain inspectable." },
      { heading: "Architecture", body: "Hybrid search combines dense retrieval with BM25 and Reciprocal Rank Fusion. A multimodal ingestion path supplies evidence to structured LLM outputs and the VeriFi confidence layer." },
      { heading: "Engineering decision", body: "Separating retrieved context, computation, and explanation makes the system easier to validate and reason about." },
    ],
  },
  {
    slug: "expense-platform", title: "Expense Platform", eyebrow: "Backend engineering · APIs · System design",
    description: "A Spring Boot backend for shared expenses, groups, balances, settlements, and JWT-protected REST APIs.",
    categories: ["Backend", "Distributed Systems"], technologies: ["Java", "Spring Boot", "MySQL", "JPA", "JWT"], featured: true, github: "https://github.com/Shubhank2604/chatbot",
    sections: [
      { heading: "Overview", body: "A Splitwise-style backend that lets users register, create groups, add members, record shared expenses, track balances, and settle debts." },
      { heading: "Implementation", body: "Spring Boot provides REST endpoints while Spring Data JPA and Hibernate persist the model in MySQL. JWT protects endpoints and BCrypt stores passwords securely." },
      { heading: "Design focus", body: "The core domain models users, groups, expenses, splits, balances, and settlements as explicit concepts." },
    ],
  },
  {
    slug: "oar-data-assistant", title: "OAR Data Assistant", eyebrow: "Applied retrieval · University tooling",
    description: "An AI data assistant that retrieves answers from a curated institutional data dictionary using Chroma and RAG.",
    categories: ["AI / ML"], technologies: ["LangChain", "ChromaDB", "CSV", "MMR", "Reranking"], featured: true, github: "https://github.com/Shubhank2604/chatbot",
    sections: [
      { heading: "Overview", body: "The assistant ingests a curated institutional data dictionary into Chroma, creates embeddings, and answers questions with retrieval-augmented generation." },
      { heading: "Retrieval", body: "Query reformulation, decomposition, intent detection, MMR, and reranking keep retrieval scoped and useful." },
      { heading: "Next", body: "Add corpus metrics, evaluation results, and screenshots as the project documentation evolves." },
    ],
  },
  {
    slug: "park-plus", title: "Park+", eyebrow: "Microservices · Real-time systems · Caching",
    description: "A real-time parking-management system built around Spring Boot microservices, Redis caching, Kafka events, and JWT authentication.",
    categories: ["Backend", "Distributed Systems"], technologies: ["Spring Boot", "Redis", "Kafka", "JWT", "Docker"], github: "https://github.com/Shubhank2604/Park_",
    sections: [
      { heading: "Overview", body: "A parking-management system designed around services that coordinate availability, reservations, and real-time state changes." },
      { heading: "Architecture", body: "Spring Boot services handle the API layer, Redis reduces repeated read pressure, and Kafka carries events between system boundaries." },
      { heading: "Next", body: "Add service diagrams, event contracts, and observed performance results as the project documentation evolves." },
    ],
  },
  {
    slug: "price-prediction-model", title: "Price Prediction Model", eyebrow: "Machine learning · Regression · Housing data",
    description: "A regression model for Bengaluru housing prices using locality, rooms, bathrooms, area, availability, and related property signals.",
    categories: ["AI / ML"], technologies: ["Python", "Pandas", "NumPy", "Regression", "Scikit-learn"], github: "https://github.com/Shubhank2604/PricePredictionModel",
    sections: [
      { heading: "Overview", body: "A machine-learning project that estimates Bengaluru home prices from structured property attributes." },
      { heading: "Data", body: "The dataset includes locality, room count, bathrooms, square footage, availability, balconies, and other property details." },
      { heading: "Next", body: "Add evaluation metrics, feature processing details, and model comparisons before treating this as a complete case study." },
    ],
  },
  {
    slug: "text-to-code", title: "Text to Code", eyebrow: "LLMs · Natural language · SQL",
    description: "A Gemini Pro wrapper that translates natural-language prompts into SQL, then queries a database for efficient retrieval.",
    categories: ["AI / ML", "Backend"], technologies: ["Gemini Pro", "SQL", "Python", "LLMs"], github: "https://github.com/Shubhank2604/TextToCode",
    sections: [
      { heading: "Overview", body: "A natural-language interface that generates SQL and returns database results." },
      { heading: "Flow", body: "The wrapper accepts a text prompt, generates a query with Gemini Pro, and executes it against the target database." },
      { heading: "Next", body: "Add query validation, schema-aware prompting, failure handling, and execution examples as the case study is expanded." },
    ],
  },
];
