"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0A0B0F]">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Drifting glows — the "dynamic" part */}
      <div className="glow glow-a" />
      <div className="glow glow-b" />

      {/* Edge fade so the grid doesn't feel flat */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, transparent 0%, #0A0B0F 72%)",
        }}
      />

      <style jsx>{`
        .glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(120px);
          will-change: transform;
        }
        .glow-a {
          width: 460px;
          height: 460px;
          top: 6%;
          left: 12%;
          background: #6c8eef;
          opacity: 0.16;
          animation: drift-a 26s ease-in-out infinite;
        }
        .glow-b {
          width: 380px;
          height: 380px;
          bottom: 8%;
          right: 10%;
          background: #8e9eff;
          opacity: 0.1;
          animation: drift-b 30s ease-in-out infinite;
        }
        @keyframes drift-a {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(70px, 45px); }
        }
        @keyframes drift-b {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-55px, -35px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .glow-a, .glow-b { animation: none; }
        }
      `}</style>
    </div>
  )
}