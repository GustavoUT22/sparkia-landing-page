import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "white",
          backgroundColor: "#1e1b4b",
          backgroundImage:
            "radial-gradient(circle at 85% 18%, rgba(139, 92, 246, 0.75), transparent 34%), linear-gradient(135deg, #1e1b4b 0%, #352375 60%, #5125a4 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #1e1b4b, #7c3aed)",
              border: "2px solid rgba(255, 255, 255, 0.25)",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            <span>&lt;</span>
            <span style={{ color: "#fbbf24", fontSize: 30 }}>/</span>
            <span>&gt;</span>
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 20px",
              borderRadius: 999,
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              color: "#e1d8ff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 48 ? 60 : 70,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#d3cee7" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: "#5fe2a1" }} />
          <span>Clases online en vivo · Perú</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
