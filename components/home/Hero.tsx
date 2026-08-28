import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { Terminal } from "./Terminal";

export function Hero() {
  return (
    <section className="hero">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role}</p>
          <h1>
            Building systems
            <br />
            with evidence,
            <br />
            <em>not adjectives.</em>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <p className="hero-context">
            MS Computer Science at the University of Florida · Graduating May 2027
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/#selected-work">
              Explore selected work <ArrowRight />
            </Link>
            <a
              className="button button-secondary"
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight />
            </a>
          </div>
          <div className="proof-strip" aria-label="Engineering impact">
            {profile.proof.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <Terminal />
      </Container>
    </section>
  );
}
