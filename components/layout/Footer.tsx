import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
export function Footer() { return <footer className="footer"><Container className="footer-inner"><p>© {new Date().getFullYear()} {profile.name}</p><div><a href={profile.social.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></Container></footer>; }
