import { experiences } from "@/data/experience";
import { Section } from "@/components/ui/Section";

export function ExperienceSection() {
  const selected = experiences.filter((item) => item.featured);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Engineering in production."
      intro="Selected roles where the work had real users, operational constraints, and measurable outcomes."
    >
      <div className="experience-list">
        {selected.map((item) => (
          <article className="experience" key={`${item.company}-${item.role}`}>
            <div className="experience-date">
              {item.startDate && <span>{item.startDate}</span>}
              <i aria-hidden="true" />
            </div>
            <div className="experience-content">
              <div className="experience-topline">
                <div>
                  <h3>{item.company}</h3>
                  <p>
                    {item.role}
                    {item.location && ` · ${item.location}`}
                  </p>
                </div>
                {item.endDate && <span>{item.endDate}</span>}
              </div>
              {item.summary && <p className="experience-summary">{item.summary}</p>}
              {item.highlights && item.highlights.length > 0 && (
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              {item.metrics && (
                <div className="metrics">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}
              {item.technologies.length > 0 && (
                <div className="tags">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
