import Link from "next/link";
import { Container } from "@/components/ui/Container";
export default function NotFound() { return <section className="not-found"><Container><p className="eyebrow">404</p><h1>That route isn&apos;t in the manifest.</h1><Link className="button button-primary" href="/">Return home →</Link></Container></section>; }
