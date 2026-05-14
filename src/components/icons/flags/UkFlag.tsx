export default function UkFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-8 h-8 rounded-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Blue background */}
      <rect width="24" height="24" fill="#012169" />

      {/* White diagonals */}
      <path d="M0 0 L24 24 M24 0 L0 24" stroke="#FFFFFF" strokeWidth="4" />

      {/* Red diagonals (offset) */}
      <path d="M0 0 L24 24" stroke="#C8102E" strokeWidth="2" transform="translate(1,1)" />
      <path d="M24 0 L0 24" stroke="#C8102E" strokeWidth="2" transform="translate(-1,1)" />

      {/* White cross */}
      <rect x="10" y="0" width="4" height="24" fill="#FFFFFF" />
      <rect x="0" y="10" width="24" height="4" fill="#FFFFFF" />

      {/* Red cross */}
      <rect x="11" y="0" width="2" height="24" fill="#C8102E" />
      <rect x="0" y="11" width="24" height="2" fill="#C8102E" />
    </svg>
  );
}