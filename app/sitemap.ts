import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { projects } from "@/data/projects";
const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shubhank-chandak.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/projects/", "/writing/", ...projects.map((project) => `/projects/${project.slug}/`), ...articles.map((article) => `/writing/${article.slug}/`)].map((path) => ({ url: `${base}${path}` })); }
