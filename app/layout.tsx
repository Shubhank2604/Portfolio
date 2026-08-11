import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./refinements.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shubhank-chandak.vercel.app";
export const metadata: Metadata = { title: { default: "Shubhank Chandak — Software Engineer", template: "%s — Shubhank Chandak" }, description: "Portfolio of Shubhank Chandak, a software engineer working across backend systems, compiler tooling, and AI infrastructure.", metadataBase: new URL(siteUrl), openGraph: { type: "website", title: "Shubhank Chandak — Software Engineer", description: "Backend systems, compiler tooling, and AI infrastructure." }, robots: { index: true, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${geist.variable} ${geistMono.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content">{children}</main><Footer /></body></html>; }
