import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { Container } from "@/components/ui/Container";
import { ArticleFilter } from "@/components/writing/ArticleFilter";
export const metadata: Metadata = { title: "Writing", description: "Engineering notes, measurements, and failure analysis by Shubhank Chandak." };
export default function WritingPage() { return <><section className="page-hero"><Container><p className="eyebrow">Engineering notes</p><h1>Notes from the<br /><em>build process.</em></h1><p>Short explorations of backend systems, retrieval, and the decisions that make a technical design more dependable.</p></Container></section><section className="page-content"><Container><ArticleFilter articles={articles} /></Container></section></>; }
