export default function InFlag() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 rounded-full border border-gray-100 overflow-hidden"
      aria-hidden="true"
    >
      {/* Tricolor */}
      <rect width="24" height="8" y="0" fill="#FF9933" />
      <rect width="24" height="8" y="8" fill="#FFFFFF" />
      <rect width="24" height="8" y="16" fill="#138808" />

      {/* Ashoka Chakra */}
      <g transform="translate(12 12)">
        {/* Outer ring */}
        <circle r="3" fill="none" stroke="#000080" strokeWidth="0.6" />

        {/* 24 spokes */}
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2="-3"
            stroke="#000080"
            strokeWidth="0.4"
            transform={`rotate(${i * 15})`}
          />
        ))}
      </g>
    </svg>
  );
}