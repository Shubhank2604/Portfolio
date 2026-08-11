import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { Terminal } from "./Terminal";
export function Hero() { return <section className="hero"><Container className="hero-grid"><div className="hero-copy"><p className="eyebrow">Hi, I&apos;m Shubhank.</p><h1>Software engineer<br />building systems<br /><em>that hold up.</em></h1><p className="hero-intro">{profile.intro}</p><div className="hero-actions"><Link className="button button-primary" href="/#selected-work">Explore my work <ArrowRight /></Link><Link className="button button-secondary" href="/resume.pdf" target="_blank">Resume <ArrowUpRight /></Link></div></div><Terminal /></Container></section>; }
