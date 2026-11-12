import { ImageResponse } from "next/og";

export const alt = "KiyoraX Technologies — Great ideas deserve a technology partner you can trust.";
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
          background: "#ffffff",
          color: "#13293d",
          padding: "60px 72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -120,
            width: 640,
            height: 640,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(43,156,240,0.20), rgba(255,255,255,0) 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -160,
            width: 600,
            height: 600,
            borderRadius: 999,
            background: "radial-gradient(circle, rgba(19,41,61,0.08), rgba(255,255,255,0) 68%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              background: "#0A1E2E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#5FC2FF",
            }}
          >
            K
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 25, fontWeight: 700, letterSpacing: -0.8 }}>
              KiyoraX
            </div>
            <div style={{ fontSize: 11, letterSpacing: 5, color: "rgba(19,41,61,0.45)" }}>
              TECHNOLOGIES
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
          <div
            style={{
              fontSize: 16,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              color: "#0f74c9",
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            A technology partner you can trust
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2.6,
            }}
          >
            <div>Great ideas deserve a</div>
            <div>technology partner you can trust.</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(19,41,61,0.14)",
            paddingTop: 22,
            fontSize: 17,
            color: "rgba(19,41,61,0.55)",
          }}
        >
          <div>Websites · Platforms · CRM · AI · Growth</div>
          <div style={{ color: "#13293d", fontWeight: 600 }}>kiyorax.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
