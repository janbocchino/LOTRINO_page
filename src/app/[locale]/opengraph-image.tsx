import { ImageResponse } from "next/og";

export const alt = "LOTRINO - AI Consulting & Implementation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #050505 0%, #0a1515 45%, #050505 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: 48,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#ffffff",
            }}
          >
            LOTRINO
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#79b8ba",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            AI Consulting & Implementation
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
