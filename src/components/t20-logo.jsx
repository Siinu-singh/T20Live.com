export function T20Logo({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 230 150"
      className={className}
      aria-label="T20Live Logo"
    >
      <defs>
        <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FACC15' }} />
          <stop offset="100%" style={{ stopColor: '#F59E0B' }} />
        </linearGradient>
        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#neon-glow)">
        <path
          fill="url(#neon-gradient)"
          d="M108.3,0.6l-33,26.1L27.6,4.6L44,36.5L0,48.2l42.6,16.2L28,103.4l35.6-26.1l11.7,35.8l13.1-34.9l36.5,23.1L119,69.5l37.1,20.5l-21.3-37.1l39.5-12.7L136.2,52l32.2-30.8l-40.2,8.8L108.3,0.6z"
        />
        <text
          x="115"
          y="80"
          className="t20-logo-text"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="sans-serif"
          fontSize="60"
          fontWeight="bold"
        >
          T20
        </text>
      </g>
    </svg>
  );
}
