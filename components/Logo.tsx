export function Logo({
  className = "",
  hideWordmark = false
}: {
  className?: string;
  hideWordmark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg
        className="h-16 w-16"
        viewBox="0 0 128 128"
        role="img"
        aria-labelledby="ouberg-logo-title"
      >
        <title id="ouberg-logo-title">OUBERG athletics emblem</title>
        <defs>
          <linearGradient id="ouberg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFD1" />
            <stop offset="50%" stopColor="#00AFFF" />
            <stop offset="100%" stopColor="#7A00FF" />
          </linearGradient>
          <linearGradient
            id="ouberg-inner-gradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#0A0D1A" />
            <stop offset="100%" stopColor="#1F2650" />
          </linearGradient>
        </defs>
        <rect
          x="6"
          y="6"
          width="116"
          height="116"
          rx="26"
          fill="url(#ouberg-gradient)"
        />
        <path
          d="M72 28c-13.807 0-24 10.193-24 24s10.193 24 24 24 24 10.193 24 24c0 7.732-6.268 14-14 14H42"
          fill="none"
          stroke="url(#ouberg-inner-gradient)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M36 100 92 28"
          stroke="#0FFFC8"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <circle cx="72" cy="52" r="14" fill="#0FFFC8" />
      </svg>
      {!hideWordmark && (
        <span className="text-4xl font-bold tracking-[0.3em] text-white">
          OUBERG
        </span>
      )}
    </div>
  );
}
