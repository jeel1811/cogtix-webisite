export default function AuFlag() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-8 h-8 rounded-full border border-gray-100 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="24" height="24" fill="#012169" />

      {/* Union Jack (simplified canton) */}
      <g transform="scale(0.5)">
        <rect width="24" height="24" fill="#012169" />
        <path d="M0 0 L24 24 M24 0 L0 24" stroke="#fff" strokeWidth="3" />
        <path d="M0 0 L24 24 M24 0 L0 24" stroke="#C8102E" strokeWidth="1.5" />
        <rect x="9" width="6" height="24" fill="#fff" />
        <rect y="9" width="24" height="6" fill="#fff" />
        <rect x="10.5" width="3" height="24" fill="#C8102E" />
        <rect y="10.5" width="24" height="3" fill="#C8102E" />
      </g>

      {/* Commonwealth Star */}
      <circle cx="6" cy="18" r="1.8" fill="#fff" />

      {/* Southern Cross */}
      <circle cx="18" cy="6" r="1" fill="#fff" />
      <circle cx="21" cy="9" r="1" fill="#fff" />
      <circle cx="18" cy="12" r="1" fill="#fff" />
      <circle cx="15" cy="9" r="1" fill="#fff" />
      <circle cx="20" cy="16" r="1.4" fill="#fff" />
    </svg>
  );
}