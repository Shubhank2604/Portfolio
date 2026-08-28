import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./refinements.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shubhank-chandak.vercel.app";
const description =
  "Shubhank Chandak builds production backend systems, compiler infrastructure, and measurable AI retrieval.";

export const metadata: Metadata = {
  title: {
    default: "Shubhank Chandak — Software Engineer",
    template: "%s — Shubhank Chandak",
  },
  description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Shubhank Chandak — Software Engineer",
    description,
    siteName: "Shubhank Chandak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhank Chandak — Software Engineer",
    description,
  },
  robots: { index: true, follow: true },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shubhank Chandak",
  url: siteUrl,
  jobTitle: "Software Engineer",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Florida" },
    { "@type": "CollegeOrUniversity", name: "National Institute of Technology, Durgapur" },
  ],
  sameAs: [
    "https://github.com/Shubhank2604",
    "https://www.linkedin.com/in/shubhank2604",
  ],
  knowsAbout: [
    "Backend engineering",
    "Distributed systems",
    "Compiler infrastructure",
    "Machine learning infrastructure",
    "Retrieval-augmented generation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
