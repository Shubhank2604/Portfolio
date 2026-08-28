import Link from "next/link";
import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Icons";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section
      id="selected-work"
      eyebrow="Selected engineering work"
      title="Three systems. Three different failure surfaces."
      intro="Curated for depth: evaluated retrieval, an end-to-end AI product, and a backend system with explicit consistency trade-offs."
    >
      <div className="featured-projects">
        {featured.map((project, index) => (
          <Link
            href={`/projects/${project.slug}/`}
            className={`featured-project project-${index}`}
            key={project.slug}
          >
            <div className="project-art">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="art-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="project-copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.metrics && (
                <div className="project-proof">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <span key={metric.label}>
                      <strong>{metric.value}</strong> {metric.label}
                    </span>
                  ))}
                </div>
              )}
              <span className="text-link">
                Read the engineering case study <ArrowRight />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Link className="all-link" href="/projects/">
        View all projects <ArrowRight />
      </Link>
    </Section>
  );
}
