export default function GeometricShapes() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-3xl rounded-full" />

      {/* Floating 3D Rings */}
      <svg
        className="absolute top-1/4 right-1/4 w-40 h-40 animate-[float_8s_ease-in-out_infinite]"
        viewBox="0 0 100 100"
      >
        <ellipse
          cx="50"
          cy="50"
          rx="45"
          ry="25"
          stroke="url(#ring-gradient)"
          strokeWidth="0.5"
          fill="none"
          className="animate-[spin_10s_linear_infinite]"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="45"
          ry="25"
          stroke="url(#ring-gradient)"
          strokeWidth="0.5"
          fill="none"
          transform="rotate(60, 50, 50)"
          className="animate-[spin_15s_linear_infinite]"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="45"
          ry="25"
          stroke="url(#ring-gradient)"
          strokeWidth="0.5"
          fill="none"
          transform="rotate(120, 50, 50)"
          className="animate-[spin_12s_linear_infinite]"
        />
        <defs>
          <linearGradient
            id="ring-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.4)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.4)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Hexagonal Grid */}
      <svg
        className="absolute bottom-1/4 left-1/4 w-48 h-48 animate-[float_6s_ease-in-out_infinite]"
        viewBox="0 0 100 100"
      >
        <pattern
          id="hexGrid"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M5 0 L10 2.5 L10 7.5 L5 10 L0 7.5 L0 2.5 Z"
            fill="none"
            stroke="url(#hex-gradient)"
            strokeWidth="0.2"
          />
        </pattern>
        <rect width="100" height="100" fill="url(#hexGrid)" />
        <defs>
          <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`
            absolute w-2 h-2 rounded-full
            bg-gradient-to-r from-purple-400/30 to-indigo-400/30
            animate-[particle_${4 + i}s_ease-in-out_infinite]
            top-${Math.random() * 100}%
            left-${Math.random() * 100}%
          `}
          />
        ))}
      </div>

      {/* 3D Torus */}
      <svg
        className="absolute top-1/3 right-1/3 w-32 h-32 animate-[float_10s_ease-in-out_infinite]"
        viewBox="0 0 100 100"
      >
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="50"
            rx="30"
            ry="15"
            fill="none"
            stroke="url(#torus-gradient)"
            strokeWidth="0.3"
            transform={`rotate(${i * 22.5}, 50, 50)`}
            className="animate-[spin_20s_linear_infinite]"
          />
        ))}
        <defs>
          <linearGradient
            id="torus-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(52, 211, 153, 0.3)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave Lines */}
      <svg
        className="absolute bottom-1/3 right-1/3 w-40 h-40"
        viewBox="0 0 100 100"
      >
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M10 ${30 + i * 10} Q 50 ${20 + i * 10} 90 ${30 + i * 10}`}
            fill="none"
            stroke="url(#wave-gradient)"
            strokeWidth="0.3"
            className="animate-[wave_4s_ease-in-out_infinite]"
          />
        ))}
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(129, 140, 248, 0.2)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.2)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
