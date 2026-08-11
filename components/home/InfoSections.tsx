import Link from "next/link";
import { education } from "@/data/education";
import { articles } from "@/data/articles";
import { profile } from "@/data/profile";
import { ContactForm } from "./ContactForm";
import { ArrowRight } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
export function About() { return <Section id="about" eyebrow="Education" title="Academic foundation."><div className="about-education">{education.map((item) => <article key={item.school}><p className="eyebrow">{item.period ?? "Education"}</p><h3>{item.school}</h3><strong>{item.degree}</strong><p>{item.detail}</p></article>)}</div></Section>; }
export function WritingPreview() { return <Section eyebrow="Engineering notes" title="Working notes from the build process."><div className="writing-preview">{articles.map((article) => <Link href={`/writing/${article.slug}/`} key={article.slug} className="article-row"><div><p className="eyebrow">{article.category} · {article.date}</p><h3>{article.title}</h3><p>{article.description}</p></div><span>Read <ArrowRight /></span></Link>)}</div><Link href="/writing/" className="all-link">All writing <ArrowRight /></Link></Section>; }
export function Contact() { return <Section eyebrow="Contact" title="Let&apos;s connect."><div className="contact"><p>Interested in working together or talking systems?</p><ContactForm /><div><a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.social.github} target="_blank" rel="noreferrer">GitHub ↗</a><Link href="/resume.pdf" target="_blank">Resume ↗</Link></div></div></Section>; }
