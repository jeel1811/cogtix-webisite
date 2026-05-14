import React from 'react'

type Props = { className?: string }

// ─── Microsoft (official four-color logo) ─────────────────────────────────
export const MicrosoftLogo = ({ className }: Props) => (
  <svg viewBox="0 0 23 23" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fill="#f25022" d="M1 1h10v10H1z" />
    <path fill="#7fbb00" d="M12 1h10v10H12z" />
    <path fill="#00a1f1" d="M1 12h10v10H1z" />
    <path fill="#ffbb00" d="M12 12h10v10H12z" />
  </svg>
)

// ─── AI/ML Engineering — neural network brain ─────────────────────────────
export const AIEngineeringLogo = ({ className }: Props) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central brain/chip core */}
    <rect x="16" y="16" width="16" height="16" rx="4" fill="#6366F1" />
    <rect x="19" y="19" width="10" height="10" rx="2" fill="#818CF8" />

    {/* Horizontal connection lines */}
    <line x1="2"  y1="20" x2="16" y2="20" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
    <line x1="2"  y1="28" x2="16" y2="28" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="20" x2="46" y2="20" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="28" x2="46" y2="28" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />

    {/* Vertical connection lines */}
    <line x1="20" y1="2"  x2="20" y2="16" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="2"  x2="28" y2="16" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="32" x2="20" y2="46" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    <line x1="28" y1="32" x2="28" y2="46" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />

    {/* Outer nodes */}
    <circle cx="2"  cy="20" r="2.5" fill="#EC4899" />
    <circle cx="2"  cy="28" r="2.5" fill="#EC4899" />
    <circle cx="46" cy="20" r="2.5" fill="#EC4899" />
    <circle cx="46" cy="28" r="2.5" fill="#EC4899" />
    <circle cx="20" cy="2"  r="2.5" fill="#EC4899" />
    <circle cx="28" cy="2"  r="2.5" fill="#EC4899" />
    <circle cx="20" cy="46" r="2.5" fill="#EC4899" />
    <circle cx="28" cy="46" r="2.5" fill="#EC4899" />

    {/* Inner glow dot */}
    <circle cx="24" cy="24" r="3" fill="white" fillOpacity="0.7" />
  </svg>
)

// ─── Cloud & DevOps Engineering — cloud + gear ────────────────────────────
export const CloudDevOpsLogo = ({ className }: Props) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cloud body */}
    <path
      d="M12 34C7.582 34 4 30.418 4 26C4 22.006 6.86 18.683 10.666 18.1C11.28 13.52 15.218 10 20 10C24.288 10 27.934 12.716 29.34 16.5C29.558 16.5 29.778 16.494 30 16.494C34.694 16.494 38.5 20.3 38.5 25C38.5 29.694 34.694 34 30 34H12Z"
      fill="url(#cloud_fill)"
    />
    {/* Gear / settings overlay on the cloud */}
    <circle cx="34" cy="36" r="9" fill="#1E40AF" />
    <circle cx="34" cy="36" r="4" fill="white" />
    {/* Gear teeth */}
    <rect x="33" y="27" width="2" height="3" rx="1" fill="white" />
    <rect x="33" y="42" width="2" height="3" rx="1" fill="white" />
    <rect x="25" y="35" width="3" height="2" rx="1" fill="white" />
    <rect x="40" y="35" width="3" height="2" rx="1" fill="white" />
    <rect x="27.5" y="29.5" width="2" height="3" rx="1" fill="white" transform="rotate(-45 27.5 29.5)" />
    <rect x="39.5" y="39.5" width="2" height="3" rx="1" fill="white" transform="rotate(-45 39.5 39.5)" />
    <rect x="27.5" y="39.5" width="3" height="2" rx="1" fill="white" transform="rotate(45 27.5 39.5)" />
    <rect x="39.5" y="29.5" width="3" height="2" rx="1" fill="white" transform="rotate(45 39.5 29.5)" />

    <defs>
      <linearGradient id="cloud_fill" x1="4" y1="10" x2="38.5" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#60A5FA" />
      </linearGradient>
    </defs>
  </svg>
)

// ─── Data Engineering — database cylinders + flow ─────────────────────────
export const DataEngineeringLogo = ({ className }: Props) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main database cylinder */}
    <ellipse cx="24" cy="12" rx="14" ry="5" fill="#F59E0B" />
    <rect x="10" y="12" width="28" height="12" fill="#D97706" />
    <ellipse cx="24" cy="24" rx="14" ry="5" fill="#FCD34D" />

    {/* Second (smaller) cylinder behind — Data Lake */}
    <ellipse cx="24" cy="28" rx="14" ry="5" fill="#F59E0B" fillOpacity="0.6" />
    <rect x="10" y="28" width="28" height="9" fill="#D97706" fillOpacity="0.5" />
    <ellipse cx="24" cy="37" rx="14" ry="5" fill="#FCD34D" fillOpacity="0.7" />

    {/* Flow arrows */}
    <path d="M6 20 L2 24 L6 28" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 20 L46 24 L42 28" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── Digital Experience Engineering — browser / UX frame ─────────────────
export const ExperienceEngineeringLogo = ({ className }: Props) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Browser frame */}
    <rect x="3" y="7" width="42" height="34" rx="4" fill="#0F172A" stroke="#EC4899" strokeWidth="2" />
    {/* Browser top bar */}
    <rect x="3" y="7" width="42" height="10" rx="4" fill="#EC4899" />
    {/* Traffic-light dots */}
    <circle cx="10" cy="12" r="2" fill="#FF5F56" />
    <circle cx="17" cy="12" r="2" fill="#FFBD2E" />
    <circle cx="24" cy="12" r="2" fill="#27C93F" />
    {/* Address bar */}
    <rect x="28" y="9" width="14" height="6" rx="3" fill="white" fillOpacity="0.2" />

    {/* UI wireframe elements inside browser */}
    {/* Hero bar */}
    <rect x="8"  y="21" width="32" height="6"  rx="2" fill="#EC4899" fillOpacity="0.3" />
    {/* Content blocks */}
    <rect x="8"  y="30" width="9"  height="7"  rx="2" fill="#8B5CF6" fillOpacity="0.5" />
    <rect x="20" y="30" width="9"  height="7"  rx="2" fill="#8B5CF6" fillOpacity="0.5" />
    <rect x="32" y="30" width="9"  height="7"  rx="2" fill="#8B5CF6" fillOpacity="0.5" />

    {/* Cursor pointer */}
    <path d="M38 19 L42 26 L39.5 25.5 L38.5 28 L35 21Z" fill="white" />
  </svg>
)

// ─── Enterprise Services — building with nodes (org chart) ─────────────────
export const EnterpriseLogo = ({ className }: Props) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main office building */}
    <rect x="10" y="14" width="28" height="30" rx="2" fill="url(#ent_building)" />
    {/* Roof accent line */}
    <rect x="8"  y="12" width="32" height="4" rx="2" fill="#0EA5E9" />
    {/* Windows grid */}
    <rect x="14" y="20" width="5" height="5" rx="1" fill="white" fillOpacity="0.6" />
    <rect x="22" y="20" width="5" height="5" rx="1" fill="white" fillOpacity="0.6" />
    <rect x="30" y="20" width="5" height="5" rx="1" fill="white" fillOpacity="0.6" />
    <rect x="14" y="29" width="5" height="5" rx="1" fill="white" fillOpacity="0.4" />
    <rect x="22" y="29" width="5" height="5" rx="1" fill="#0EA5E9" fillOpacity="0.7" />
    <rect x="30" y="29" width="5" height="5" rx="1" fill="white" fillOpacity="0.4" />
    {/* Door */}
    <rect x="21" y="37" width="7" height="7" rx="1" fill="#0284C7" />
    {/* Flag / antenna */}
    <line x1="24" y1="12" x2="24" y2="5" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 5 L30 8 L24 10Z" fill="#0EA5E9" />

    <defs>
      <linearGradient id="ent_building" x1="10" y1="14" x2="38" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0284C7" />
        <stop offset="1" stopColor="#0369A1" />
      </linearGradient>
    </defs>
  </svg>
)
