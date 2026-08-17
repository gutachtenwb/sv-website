import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.companyName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1C2226",
          padding: "72px",
          color: "#F1F3F1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 28, height: 2, backgroundColor: "#C6A24C" }} />
          <div style={{ fontSize: 22, color: "#C6A24C", letterSpacing: 2 }}>
            {siteConfig.adacStatus.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.1 }}>
            Kfz-Sachverständige mit eigenem Prüfzentrum
          </div>
          <div style={{ fontSize: 28, color: "#9A9488" }}>
            Unfallgutachten · Achsvermessung · 3D-Rahmenvermessung
          </div>
          <div style={{ fontSize: 26, color: "#C6A24C" }}>
            {siteConfig.address.city}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
