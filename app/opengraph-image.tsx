import { ImageResponse } from "next/og";

export const alt = "Shubhank Chandak — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#f2f0e9",
        background: "#101110",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#cfdf68", fontSize: 28, letterSpacing: "0.08em" }}>
        SHUBHANK CHANDAK · SOFTWARE ENGINEER
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: "-0.055em" }}>
          Building systems with evidence, not adjectives.
        </div>
        <div style={{ color: "#aaa9a1", fontSize: 30 }}>
          Backend systems · Compiler infrastructure · Evaluated AI
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
        <span>University of Florida · MS CS</span>
        <span style={{ color: "#cfdf68" }}>github.com/Shubhank2604</span>
      </div>
    </div>,
    size,
  );
}
