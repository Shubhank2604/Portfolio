import { skillGroups } from "@/data/skills";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return <Section eyebrow="Technical skills" title="Systems, from the inside out.">
    <div className="skill-grid">
      {skillGroups.map((group, index) => <article className="skill-group" key={group.label}>
        <span className="skill-index">0{index + 1}</span>
        <h3>{group.label}</h3>
        <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>)}
    </div>
  </Section>;
}
