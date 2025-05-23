import React from "react";

export default function CircuitBackground({ className = "" }) {
  return (
    <div>
      <div className="fixed bg-gradient-to-br from-[#141d25] to-[#101318] inset-0 w-full h-full z-0 pointer-events-none">
      <div className="absolute inset-0 -z-20 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(49,194,247,0.18) 0%, rgba(20,29,37,0.04) 65%)",
            filter: "blur(2px)"
          }}
        />
      </div>
    <svg
      className={`fixed inset-0 w-full h-full z-0 pointer-events-none ${className}`}
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ mixBlendMode: "lighten" }}
    >
      <defs>
        {/* Glow filter for nodes/lines */}
        <filter id="circuit-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="12" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g stroke="#31c2f7" strokeWidth="1.5" opacity="0.24" filter="url(#circuit-glow)">
        {/* Large diamond */}
        <polyline points="720,60 1340,450 720,840 100,450 720,60" />
        {/* Horizontal and vertical lines */}
        <polyline points="720,60 720,840" />
        <polyline points="100,450 1340,450" />
        {/* Diagonal inner paths */}
        <polyline points="410,250 1030,250" />
        <polyline points="410,650 1030,650" />
        <polyline points="320,450 1120,450" />
        <polyline points="570,150 570,750" />
        <polyline points="870,150 870,750" />
        {/* Circuit nodes */}
        {[
          [720, 60], [1340, 450], [720, 840], [100, 450],
          [410, 250], [1030, 250], [410, 650], [1030, 650],
          [570, 150], [570, 750], [870, 150], [870, 750],
          [320, 450], [1120, 450]
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="10" fill="#31c2f7" opacity="0.65" />
        ))}
      </g>
    </svg>
    </div>
    
  );
}
