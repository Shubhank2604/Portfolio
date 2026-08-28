import Link from "next/link";
import { education } from "@/data/education";
import { articles } from "@/data/articles";
import { profile } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { ArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Production experience. Systems depth."
      intro="I care about designs that remain understandable when traffic, data volume, failure modes, and team size grow."
    >
      <div className="about-copy">
        <p>
          Before graduate school, I spent three years at Wells Fargo building Java and
          Spring services for capital-markets analytics. I worked on high-volume data
          pipelines, distributed caches, SQL performance, production validation, and an
          11-service platform modernization.
        </p>
        <p>
          At MathWorks, I moved closer to the systems layer: C++, compiler infrastructure,
          ownership boundaries, serialization, and a data-driven artifact framework that
          reduced future section integration from roughly an hour to under a minute.
        </p>
      </div>
      <div className="about-education">
        {education.map((item) => (
          <article key={item.school}>
            <p className="eyebrow">{item.period ?? "Education"}</p>
            <h3>{item.school}</h3>
            <strong>{item.degree}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function WritingPreview() {
  return (
    <Section
      eyebrow="Build in public"
      title="Engineering notes backed by experiments."
      intro="The implementation is only half the work. I publish the measurements, failed assumptions, and trade-offs that changed the design."
    >
      <div className="writing-preview">
        {articles.map((article) => (
          <Link href={`/writing/${article.slug}/`} key={article.slug} className="article-row">
            <div>
              <p className="eyebrow">
                {article.category} · {article.date}
              </p>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
            <span>
              Read <ArrowRight />
            </span>
          </Link>
        ))}
      </div>
      <Link href="/writing/" className="all-link">
        All writing <ArrowRight />
      </Link>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let&apos;s build something dependable.">
      <div className="contact">
        <p>I&apos;m always open to thoughtful conversations about software and ML systems.</p>
        <ContactForm />
        <div>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </Section>
  );
}
