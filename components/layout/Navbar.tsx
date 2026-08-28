"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [{ label: "Experience", href: "/#experience" }, { label: "Projects", href: "/projects/" }, { label: "Writing", href: "/writing/" }, { label: "About", href: "/#about" }, { label: "Contact", href: "/#contact" }];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}><div className="container nav-inner">
    <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="Shubhank Chandak home">SC.</Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}<a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a><a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a><ThemeToggle /></nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation"><span>{open ? "Close" : "Menu"}</span><i /></button>
  </div><nav id="mobile-navigation" className={`mobile-nav ${open ? "open" : ""}`} aria-label="Mobile navigation">{links.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<ThemeToggle /></nav></header>;
}
