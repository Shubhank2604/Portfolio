import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { Container } from "@/components/ui/Container";
import RetrievalSystemsNote from "@/content/writing/building-retrieval-systems-that-know-their-limits.mdx";
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = articles.find((entry) => entry.slug === slug); return { title: article?.title ?? "Writing", description: article?.description }; }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = articles.find((entry) => entry.slug === slug); if (!article) notFound(); const Content = article.slug === "building-retrieval-systems-that-know-their-limits" ? RetrievalSystemsNote : null; return <article className="article"><Container><Link href="/writing/" className="back-link">← All writing</Link><header><p className="eyebrow">{article.category} · {article.date} · {article.readingTime}</p><h1>{article.title}</h1><p>{article.description}</p></header><div className="prose"><p className="draft-callout">Draft note — this writing route and reading layout are ready for a completed, reviewed article.</p>{Content ? <Content /> : article.body.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p></section>)}</div></Container></article>; }
