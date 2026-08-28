import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shubhank Chandak — Software Engineer",
    short_name: "Shubhank Chandak",
    description:
      "Backend systems, compiler infrastructure, and measurable AI retrieval.",
    start_url: "/",
    display: "standalone",
    background_color: "#101110",
    theme_color: "#101110",
  };
}
