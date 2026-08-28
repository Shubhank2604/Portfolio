import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  return {
    title: project?.title ?? "Project",
    description: project?.description,
    alternates: { canonical: `/projects/${slug}/` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return (
    <article className="case-study">
      <Container>
        <Link href="/projects/" className="back-link">
          ← All projects
        </Link>
        <header className="case-study-hero">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <div className="case-actions">
            {project.github && (
              <a
                className="button button-primary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Inspect the repository <ArrowUpRight />
              </a>
            )}
            {project.demo && (
              <a
                className="button button-secondary"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Open demo <ArrowUpRight />
              </a>
            )}
          </div>
        </header>

        <div className="system-flow" aria-label={`${project.title} system flow`}>
          {project.architecture.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>

        {project.metrics && (
          <div className="metrics case-metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="case-study-body">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
        <div className="case-next">
          <span>Continue</span>
          <Link href="/projects/">
            Explore other work <ArrowRight />
          </Link>
        </div>
      </Container>
    </article>
  );
}
