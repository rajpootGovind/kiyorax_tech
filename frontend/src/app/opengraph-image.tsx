import { ImageResponse } from "next/og";

export const alt = "KiyoraX Technologies — Building Intelligent Digital Experiences";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          color: "#ffffff",
          padding: "64px 72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(0,200,245,0.28), rgba(5,6,10,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -100,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(133,46,255,0.24), rgba(5,6,10,0) 68%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #00C8F5, #286BFF 52%, #852EFF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            K
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 27, fontWeight: 600, letterSpacing: -1 }}>KiyoraX</div>
            <div style={{ fontSize: 12, letterSpacing: 6, color: "rgba(255,255,255,0.42)" }}>
              TECHNOLOGIES
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#00C8F5",
              marginBottom: 22,
            }}
          >
            Building intelligent digital experiences
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 74,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -3,
            }}
          >
            <div>Technology that moves</div>
            <div>businesses forward.</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 24,
            fontSize: 18,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <div>Web · CRM · SaaS · AI · Commerce</div>
          <div style={{ color: "rgba(255,255,255,0.65)" }}>KiyoraX Technologies</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
