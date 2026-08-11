"use client";
import { useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
const options: ("All" | ProjectCategory)[] = ["All", "Backend", "Distributed Systems", "Systems", "AI / ML"];
export function ProjectFilter({ projects }: { projects: Project[] }) { const [active, setActive] = useState<(typeof options)[number]>("All"); const visible = active === "All" ? projects : projects.filter((project) => project.categories.includes(active)); return <><div className="filter-bar" role="group" aria-label="Filter projects">{options.filter((option) => option === "All" || projects.some((project) => project.categories.includes(option))).map((option) => <button key={option} className={active === option ? "active" : ""} onClick={() => setActive(option)} aria-pressed={active === option}>{option}</button>)}</div><div className="project-grid">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></>; }
