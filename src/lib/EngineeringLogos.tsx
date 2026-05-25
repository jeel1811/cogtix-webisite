import React from "react";

type Props = { className?: string };

// ─── Microsoft (official four-color logo) ─────────────────────────────────
export const MicrosoftLogo = ({ className }: Props) => (
  <svg
    viewBox="0 0 23 23"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path fill="#f25022" d="M1 1h10v10H1z" />
    <path fill="#7fbb00" d="M12 1h10v10H12z" />
    <path fill="#00a1f1" d="M1 12h10v10H1z" />
    <path fill="#ffbb00" d="M12 12h10v10H12z" />
  </svg>
);

// ─── AI/ML Engineering : neural network brain ─────────────────────────────
export const AIEngineeringLogo = ({ className }: Props) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect x="16" y="16" width="16" height="16" rx="4" fill="#6366F1" />
    <rect x="19" y="19" width="10" height="10" rx="2" fill="#818CF8" />
    <line
      x1="2"
      y1="20"
      x2="16"
      y2="20"
      stroke="#A855F7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="28"
      x2="16"
      y2="28"
      stroke="#A855F7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="32"
      y1="20"
      x2="46"
      y2="20"
      stroke="#A855F7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="32"
      y1="28"
      x2="46"
      y2="28"
      stroke="#A855F7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="20"
      y1="2"
      x2="20"
      y2="16"
      stroke="#6366F1"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="2"
      x2="28"
      y2="16"
      stroke="#6366F1"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="20"
      y1="32"
      x2="20"
      y2="46"
      stroke="#6366F1"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="32"
      x2="28"
      y2="46"
      stroke="#6366F1"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="2" cy="20" r="2.5" fill="#EC4899" />
    <circle cx="2" cy="28" r="2.5" fill="#EC4899" />
    <circle cx="46" cy="20" r="2.5" fill="#EC4899" />
    <circle cx="46" cy="28" r="2.5" fill="#EC4899" />
    <circle cx="20" cy="2" r="2.5" fill="#EC4899" />
    <circle cx="28" cy="2" r="2.5" fill="#EC4899" />
    <circle cx="20" cy="46" r="2.5" fill="#EC4899" />
    <circle cx="28" cy="46" r="2.5" fill="#EC4899" />
    <circle cx="24" cy="24" r="3" fill="white" fillOpacity="0.7" />
  </svg>
);

// ─── Cloud & DevOps Engineering : solid fills (no shared gradient IDs) ─────
export const CloudDevOpsLogo = ({ className }: Props) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M36 32H14C9.03 32 5 27.97 5 23C5 18.48 8.13 14.73 12.4 13.58C13.36 9.46 17.08 6.5 21.5 6.5C25.02 6.5 28.12 8.34 30 11.1C31.32 10.72 32.72 10.5 34.2 10.5C39.17 10.5 43.2 14.53 43.2 19.5C43.2 24.47 39.17 28.5 34.2 28.5H36V32Z"
      fill="#2563EB"
    />
    {/* Gear / settings overlay on the cloud */}
    <circle cx="34" cy="36" r="9" fill="#1E40AF" />
    <circle cx="34" cy="36" r="4" fill="white" />
    {/* Gear teeth */}
    <rect x="33" y="27" width="2" height="3" rx="1" fill="white" />
    <rect x="33" y="42" width="2" height="3" rx="1" fill="white" />
    <rect x="25" y="35" width="3" height="2" rx="1" fill="white" />
    <rect x="40" y="35" width="3" height="2" rx="1" fill="white" />
    <rect
      x="27.5"
      y="29.5"
      width="2"
      height="3"
      rx="1"
      fill="white"
      transform="rotate(-45 27.5 29.5)"
    />
    <rect
      x="39.5"
      y="39.5"
      width="2"
      height="3"
      rx="1"
      fill="white"
      transform="rotate(-45 39.5 39.5)"
    />
    <rect
      x="27.5"
      y="39.5"
      width="3"
      height="2"
      rx="1"
      fill="white"
      transform="rotate(45 27.5 39.5)"
    />
    <rect
      x="39.5"
      y="29.5"
      width="3"
      height="2"
      rx="1"
      fill="white"
      transform="rotate(45 39.5 29.5)"
    />

    <defs>
      <linearGradient
        id="cloud_fill"
        x1="4"
        y1="10"
        x2="38.5"
        y2="34"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#60A5FA" />
      </linearGradient>
    </defs>
  </svg>
);

// ─── Data Engineering : database cylinders + flow ─────────────────────────
export const DataEngineeringLogo = ({ className }: Props) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <ellipse cx="24" cy="12" rx="14" ry="5" fill="#F59E0B" />
    <rect x="10" y="12" width="28" height="12" fill="#D97706" />
    <ellipse cx="24" cy="24" rx="14" ry="5" fill="#FCD34D" />
    <ellipse cx="24" cy="28" rx="14" ry="5" fill="#F59E0B" fillOpacity="0.6" />
    <rect
      x="10"
      y="28"
      width="28"
      height="9"
      fill="#D97706"
      fillOpacity="0.5"
    />
    <ellipse cx="24" cy="37" rx="14" ry="5" fill="#FCD34D" fillOpacity="0.7" />
    <path
      d="M6 20 L2 24 L6 28"
      stroke="#EF4444"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 20 L46 24 L42 28"
      stroke="#10B981"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Digital Experience Engineering : browser / UX frame ─────────────────
export const ExperienceEngineeringLogo = ({ className }: Props) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="3"
      y="7"
      width="42"
      height="34"
      rx="4"
      fill="#0F172A"
      stroke="#EC4899"
      strokeWidth="2"
    />
    <rect x="3" y="7" width="42" height="10" rx="4" fill="#EC4899" />
    <circle cx="10" cy="12" r="2" fill="#FF5F56" />
    <circle cx="17" cy="12" r="2" fill="#FFBD2E" />
    <circle cx="24" cy="12" r="2" fill="#27C93F" />
    <rect
      x="28"
      y="9"
      width="14"
      height="6"
      rx="3"
      fill="white"
      fillOpacity="0.2"
    />
    <rect
      x="8"
      y="21"
      width="32"
      height="6"
      rx="2"
      fill="#EC4899"
      fillOpacity="0.3"
    />
    <rect
      x="8"
      y="30"
      width="9"
      height="7"
      rx="2"
      fill="#8B5CF6"
      fillOpacity="0.5"
    />
    <rect
      x="20"
      y="30"
      width="9"
      height="7"
      rx="2"
      fill="#8B5CF6"
      fillOpacity="0.5"
    />
    <rect
      x="32"
      y="30"
      width="9"
      height="7"
      rx="2"
      fill="#8B5CF6"
      fillOpacity="0.5"
    />
    <path d="M38 19 L42 26 L39.5 25.5 L38.5 28 L35 21Z" fill="white" />
  </svg>
);

// ─── Mobile App : smartphone frame ─────────────────────────────────────────
export const MobileAppLogo = ({ className }: Props) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="14"
      y="4"
      width="20"
      height="40"
      rx="4"
      fill="#0F172A"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <rect x="18" y="8" width="12" height="28" rx="2" fill="#1E3A8A" />
    <circle cx="24" cy="39" r="2" fill="#60A5FA" />
    <rect x="20" y="5" width="8" height="2" rx="1" fill="#334155" />
  </svg>
);

// ─── Enterprise Services : solid fills (no shared gradient IDs) ────────────
export const EnterpriseLogo = ({ className }: Props) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main office building */}
    <rect x="10" y="14" width="28" height="30" rx="2" fill="#0379A1" />

    {/* Roof accent line */}
    <rect x="8" y="12" width="32" height="4" rx="2" fill="#0EA5E9" />

    {/* Windows grid */}
    <rect
      x="14"
      y="20"
      width="5"
      height="5"
      rx="1"
      fill="white"
      fillOpacity="0.6"
    />

    <rect
      x="22"
      y="20"
      width="5"
      height="5"
      rx="1"
      fill="white"
      fillOpacity="0.6"
    />

    <rect
      x="30"
      y="20"
      width="5"
      height="5"
      rx="1"
      fill="white"
      fillOpacity="0.6"
    />

    <rect
      x="14"
      y="29"
      width="5"
      height="5"
      rx="1"
      fill="white"
      fillOpacity="0.4"
    />

    <rect
      x="22"
      y="29"
      width="5"
      height="5"
      rx="1"
      fill="#0EA5E9"
      fillOpacity="0.7"
    />

    <rect
      x="30"
      y="29"
      width="5"
      height="5"
      rx="1"
      fill="white"
      fillOpacity="0.4"
    />

    {/* Door */}
    <rect x="21" y="37" width="7" height="7" rx="1" fill="#0284C7" />

    {/* Flag / antenna */}
    <line
      x1="24"
      y1="12"
      x2="24"
      y2="5"
      stroke="#0EA5E9"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path d="M24 5 L30 8 L24 10Z" fill="#0EA5E9" />
  </svg>
);