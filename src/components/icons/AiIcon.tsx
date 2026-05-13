import React from "react";

export default function AiIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Frame with Deep Cut */}
      <path
        d="M11 5H16C18.2 5 20 6.8 20 9V16C20 18.2 18.2 20 16 20H8C5.8 20 4 18.2 4 16V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top Left Sparkle */}
      <path
        d="M7 2.5L7.4 4.1L9 4.5L7.4 4.9L7 6.5L6.6 4.9L5 4.5L6.6 4.1L7 2.5Z"
        fill="currentColor"
      />

      {/* Bottom Left Sparkle */}
      <path
        d="M3.5 7.5L3.8 8.7L5 9L3.8 9.3L3.5 10.5L3.2 9.3L2 9L3.2 8.7L3.5 7.5Z"
        fill="currentColor"
      />

      {/* AI Bold Letters (fixed proportions) */}
      <path
        d="M7.5 16L9.8 8.5H11.6L13.9 16H12.3L11.8 14.5H9.6L9.1 16H7.5ZM10 13.3H11.4L10.7 10.8L10 13.3Z"
        fill="currentColor"
      />

      <rect
        x="14.2"
        y="8.5"
        width="1.6"
        height="7.5"
        rx="0.3"
        fill="currentColor"
      />
    </svg>
  );
}
