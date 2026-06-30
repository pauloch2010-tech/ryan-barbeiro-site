export function RBLogo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ryan Barbeiro logo"
    >
      {/* Outer pyramid/triangle */}
      <polygon
        points="50,4 94,76 6,76"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Horizontal facet line at ~60% height */}
      <line x1="23" y1="53" x2="77" y2="53" stroke="currentColor" strokeWidth="1.8" opacity="0.7" />
      {/* Left inner facet */}
      <line x1="23" y1="53" x2="50" y2="4" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
      {/* Right inner facet */}
      <line x1="77" y1="53" x2="50" y2="4" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
      {/* Bottom base line */}
      <line x1="6" y1="76" x2="94" y2="76" stroke="currentColor" strokeWidth="2.5" />
      {/* Tiny diamond at apex */}
      <polygon points="50,4 54,12 50,20 46,12" fill="currentColor" opacity="0.3" />

      {/* RYAN text */}
      <text
        x="50"
        y="95"
        textAnchor="middle"
        fontFamily="'Oswald', sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="currentColor"
        letterSpacing="4"
      >
        RYAN
      </text>
      {/* BARBEIRO text */}
      <text
        x="50"
        y="108"
        textAnchor="middle"
        fontFamily="'Oswald', sans-serif"
        fontWeight="400"
        fontSize="9.5"
        fill="currentColor"
        letterSpacing="5"
        opacity="0.85"
      >
        BARBEIRO
      </text>
    </svg>
  );
}
