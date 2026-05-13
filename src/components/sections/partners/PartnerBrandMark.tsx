'use client'

import type { PartnerVariant } from './partner-types'

interface PartnerBrandMarkProps {
  variant: PartnerVariant
  className?: string
}

export default function PartnerBrandMark({ variant, className = '' }: PartnerBrandMarkProps) {
  if (variant === 'microsoft') {
    return (
      <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
        <rect x="6" y="6" width="40" height="40" fill="#F25022" rx="2" />
        <rect x="54" y="6" width="40" height="40" fill="#7FBA00" rx="2" />
        <rect x="6" y="54" width="40" height="40" fill="#00A4EF" rx="2" />
        <rect x="54" y="54" width="40" height="40" fill="#FFB900" rx="2" />
      </svg>
    )
  }

  if (variant === 'aws') {
    return (
      <svg viewBox="0 0 120 70" className={className} aria-hidden="true">
        <text
          x="60"
          y="42"
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="800"
          fontSize="34"
          letterSpacing="-1"
          fill="#232F3E"
        >
          aws
        </text>
        <path
          d="M22 56 C44 66, 76 66, 98 56"
          stroke="#FF9900"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M94 50 L100 56 L94 62" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    )
  }

  // google-cloud
  return (
    <svg viewBox="0 0 100 70" className={className} aria-hidden="true">
      <path
        d="M62 24h-6.4l-3.5-6.1-3.5 6.1H22a14 14 0 0 0 0 28h40a12 12 0 0 0 0-24z"
        fill="#FFFFFF"
        stroke="#DADCE0"
        strokeWidth="2"
      />
      <path d="M52 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" fill="#4285F4" />
      <path d="M70 30a6 6 0 1 1 0 12h-12a8 8 0 0 0 0-16 8 8 0 0 0-4 1l4 7z" fill="#34A853" />
      <path d="M22 30a8 8 0 0 0 0 16h14a8 8 0 0 1-2-7l-6-10a8 8 0 0 0-6 1z" fill="#FBBC04" />
      <path d="M36 32l4-7 4 7-4 7z" fill="#EA4335" />
    </svg>
  )
}
