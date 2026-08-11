"use client";

import { useMemo, useState } from "react";
import type { Article } from "@/data/articles";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";

export function ArticleFilter({ articles }: { articles: Article[] }) {
  const categories = useMemo(() => ["All", ...new Set(articles.map((article) => article.category))], [articles]);
  const [active, setActive] = useState("All");
  const visible = active === "All" ? articles : articles.filter((article) => article.category === active);

  return <>
    <div className="filter-bar" role="group" aria-label="Filter engineering notes">
      {categories.map((category) => <button key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)} aria-pressed={active === category}>{category}</button>)}
    </div>
    <div className="article-list">{visible.map((article) => <Link href={`/writing/${article.slug}/`} className="article-row" key={article.slug}><div><p className="eyebrow">{article.category} · {article.date} · {article.readingTime}</p><h2>{article.title}</h2><p>{article.description}</p></div><span>Read <ArrowRight /></span></Link>)}</div>
  </>;
}
