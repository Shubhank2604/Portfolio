import type { ReactNode } from "react";
import { Container } from "./Container";
export function Section({ id, eyebrow, title, intro, children, className = "" }: { id?: string; eyebrow?: string; title?: string; intro?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`section ${className}`}><Container>{eyebrow && <p className="eyebrow">{eyebrow}</p>}{title && <div className="section-heading"><h2>{title}</h2>{intro && <p>{intro}</p>}</div>}{children}</Container></section>;
}
