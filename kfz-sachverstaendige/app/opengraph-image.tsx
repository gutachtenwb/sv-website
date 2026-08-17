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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "3px solid #2F5D73",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              color: "#2F5D73",
            }}
          >
            SV
          </div>
          <div style={{ fontSize: 24, color: "#9AA5A0" }}>
            {siteConfig.adacStatus}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>
            {siteConfig.companyName}
          </div>
          <div style={{ fontSize: 30, color: "#9AA5A0" }}>
            Unfallgutachten · Fahrzeugbewertung · Technische Beweissicherung
          </div>
          <div style={{ fontSize: 26, color: "#E1622F" }}>
            {siteConfig.address.city}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
