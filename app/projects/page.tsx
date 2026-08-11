import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
export const metadata: Metadata = { title: "Projects", description: "A collection of engineering systems and experiments by Shubhank Chandak." };
export default function ProjectsPage() { return <><section className="page-hero"><Container><p className="eyebrow">Projects</p><h1>Systems I&apos;ve built,<br /><em>problems I&apos;ve worked through.</em></h1><p>A collection of backend products, retrieval systems, and technical experiments—with room for the implementation story behind each one.</p></Container></section><section className="page-content"><Container><ProjectFilter projects={projects} /></Container></section></>; }
