export type ProjectCategory =
  | "Backend"
  | "Distributed Systems"
  | "Systems"
  | "AI / ML";

export interface ProjectSection {
  heading: string;
  body: string;
}

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
  architecture: string[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "finsight-ai",
    title: "FinSight AI",
    eyebrow: "Evaluated RAG · Retrieval · Verification",
    description:
      "A local-first financial decision engine with hybrid retrieval, structured generation, and an evaluation harness that reports failures instead of hiding them.",
    categories: ["AI / ML", "Systems"],
    technologies: ["Qdrant", "BM25", "RRF", "Gemini", "Python", "Pytest"],
    featured: true,
    github: "https://github.com/Shubhank2604/FinSight-AI",
    metrics: [
      { value: "18", label: "human-labeled retrieval queries" },
      { value: "0.944", label: "hybrid Recall@3 baseline" },
      { value: "30", label: "automated tests" },
    ],
    architecture: ["Route", "Retrieve", "Reason", "Verify"],
    sections: [
      {
        heading: "Problem",
        body: "Financial answers can look fluent while relying on the wrong evidence. FinSight keeps retrieval, deterministic finance tools, generated explanations, and verification as separate stages so each failure is inspectable.",
      },
      {
        heading: "System",
        body: "The retrieval layer combines Qdrant dense search with BM25 through Reciprocal Rank Fusion. Structured Gemini output carries citations, claims, assumptions, confidence, and missing-data signals into a VeriFi validation layer.",
      },
      {
        heading: "Evaluation",
        body: "A deterministic 18-query finance benchmark measures Precision@K, Recall@K, Hit Rate, MRR, nDCG, and latency across dense, sparse, and hybrid modes. CI enforces a minimum hybrid Recall@3 of 0.90 without requiring credentials or network access.",
      },
      {
        heading: "What the benchmark exposed",
        body: "BM25 achieved perfect Recall@3 while the local-hash dense and hybrid paths reached 0.944. Keeping that result public made the engineering lesson clear: fusion cannot rescue a weak representation automatically, and evaluation should challenge the architecture rather than decorate it.",
      },
    ],
  },
  {
    slug: "cafeteria-buddy",
    title: "CafeteriaBuddy",
    eyebrow: "Applied AI · Product engineering · Safety rules",
    description:
      "A menu-understanding product that turns cafeteria images into structured meals and gives employees explainable, preference-aware food recommendations.",
    categories: ["AI / ML", "Backend"],
    technologies: ["Next.js", "Python", "Azure Document Intelligence", "Gemini", "SQLite"],
    featured: true,
    github: "https://github.com/Shubhank2604/CafeteriaBuddy",
    metrics: [
      { value: "3rd", label: "of 39 MathWorks HackDay teams" },
      { value: "0", label: "cloud credentials for the demo path" },
      { value: "2", label: "runtime layers: Next.js and Python" },
    ],
    architecture: ["Upload", "Extract", "Review", "Personalize"],
    sections: [
      {
        heading: "Problem",
        body: "Employees see cafeteria menus as images, but deciding what fits an allergy, dietary restriction, dislike, or goal still requires manual interpretation. CafeteriaBuddy converts those images into a reviewable catalogue and a personalized daily decision.",
      },
      {
        heading: "System",
        body: "A Next.js application invokes a Python extraction pipeline. Azure Document Intelligence provides layout-aware OCR, parsers recover stations and dishes, a canonical catalogue resolves recurring items, and optional Gemini enrichment improves metadata and recommendation language.",
      },
      {
        heading: "Safety boundary",
        body: "Allergy and hard-avoid decisions are deterministic. The LLM may polish an explanation, but it cannot promote a dish that the rule layer excluded. Uncertain ingredients are surfaced as cautions rather than converted into false certainty.",
      },
      {
        heading: "Public reproducibility",
        body: "A credential-free demo replaces cloud OCR and Gemini with deterministic local providers while exercising the same upload, review, catalogue, and personalization flow. Reviewers can inspect the complete product without provisioning external accounts.",
      },
    ],
  },
  {
    slug: "park-plus",
    title: "Parking Management System",
    eyebrow: "Backend systems · Caching · Event boundaries",
    description:
      "A modular Spring Boot backend for parking availability, vehicle entry and exit, billing, authentication, Redis caching, and Kafka events.",
    categories: ["Backend", "Distributed Systems"],
    technologies: ["Java 17", "Spring Boot", "MySQL", "Redis", "Kafka", "Docker"],
    featured: true,
    github: "https://github.com/Shubhank2604/Park_",
    architecture: ["Reserve", "Ticket", "Bill", "Publish"],
    sections: [
      {
        heading: "Problem",
        body: "Parking allocation joins transactional state, low-latency availability, authentication, billing, and asynchronous events. The project models those boundaries without pretending the current implementation has solved every distributed consistency problem.",
      },
      {
        heading: "Current architecture",
        body: "The codebase is a modular monolith with auth, lot, ticket, billing, infrastructure, and shared modules. MySQL owns durable state, Redis accelerates availability and candidate selection, and Kafka publishes entry and slot events.",
      },
      {
        heading: "Allocation flow",
        body: "The system reads cached availability, pops a candidate slot, falls back to the database when necessary, creates the ticket transactionally, updates cached state, and publishes events for downstream consumers.",
      },
      {
        heading: "Reliability roadmap",
        body: "The documented next steps include atomic reservations with expiry, database locking or uniqueness constraints, compensation, a transactional outbox, idempotent consumers, concurrent load tests, and Prometheus/Grafana observability.",
      },
    ],
  },
  {
    slug: "expense-platform",
    title: "Expense Platform",
    eyebrow: "Backend engineering · APIs · Domain modeling",
    description:
      "A Spring Boot backend for groups, shared expenses, custom splits, balances, settlements, and JWT-protected REST APIs.",
    categories: ["Backend"],
    technologies: ["Java", "Spring Boot", "MySQL", "JPA", "JWT"],
    github: "https://github.com/Shubhank2604/Splitwise",
    architecture: ["Authenticate", "Record", "Balance", "Settle"],
    sections: [
      {
        heading: "Problem",
        body: "Shared expenses are simple to describe but easy to model incorrectly once groups, custom splits, bilateral balances, and partial settlements interact.",
      },
      {
        heading: "Implementation",
        body: "Spring Boot exposes REST endpoints, Spring Data JPA persists the domain in MySQL, JWT protects requests, and BCrypt stores password hashes. Explicit entities model users, groups, memberships, expenses, splits, balances, and transactions.",
      },
      {
        heading: "Current limitation",
        body: "The architecture and core flows are implemented, but existing test classes are disabled. This remains a secondary project until the test suite and deployment story match the stronger repositories in this portfolio.",
      },
    ],
  },
  {
    slug: "oar-data-assistant",
    title: "OAR Data Assistant",
    eyebrow: "Local RAG · Institutional data discovery",
    description:
      "A local data-dictionary assistant using Chroma, Ollama, query decomposition, MMR retrieval, and grounded generation.",
    categories: ["AI / ML"],
    technologies: ["LangChain", "ChromaDB", "Ollama", "MMR", "Streamlit"],
    github: "https://github.com/Shubhank2604/chatbot",
    architecture: ["Ingest", "Reformulate", "Retrieve", "Ground"],
    sections: [
      {
        heading: "Problem",
        body: "Institutional data dictionaries are difficult to navigate when users know the business question but not the exact field name. The assistant maps natural-language questions to relevant definitions and examples.",
      },
      {
        heading: "Retrieval",
        body: "CSV rows become LangChain documents embedded locally with Ollama and persisted in Chroma. Intent detection, query reformulation, decomposition, MMR, and optional reranking shape the evidence passed to a local Llama model.",
      },
      {
        heading: "Current limitation",
        body: "The checked-in source dictionary still needs richer definitions and labels before answer quality can be evaluated credibly. It is listed as an experiment, not presented as a production-ready system.",
      },
    ],
  },
  {
    slug: "text-to-code",
    title: "Text-to-SQL Explorer",
    eyebrow: "LLM security · Natural language · SQL",
    description:
      "An educational Streamlit prototype that treats generated SQL as untrusted input before executing it against a read-only SQLite database.",
    categories: ["AI / ML", "Backend"],
    technologies: ["Gemini", "SQLite", "Python", "Streamlit"],
    github: "https://github.com/Shubhank2604/TextToCode",
    architecture: ["Prompt", "Generate", "Validate", "Read only"],
    sections: [
      {
        heading: "Problem",
        body: "Natural-language database interfaces are useful, but directly executing model output creates an obvious security boundary. The prototype demonstrates a constrained learning environment rather than claiming production safety.",
      },
      {
        heading: "Controls",
        body: "The application permits exactly one SELECT or WITH statement, rejects state-changing keywords, opens SQLite in read-only mode, and caps displayed results. Credentials are loaded from local environment configuration.",
      },
      {
        heading: "Production gap",
        body: "A real deployment would still require a restricted database role, query timeouts, schema permissions, auditing, resource limits, and isolated execution. Those missing controls are documented explicitly.",
      },
    ],
  },
];
