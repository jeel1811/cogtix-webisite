'use client'

// import { ReactNode } from 'react'

export type ServiceVariant =
  | 'ai'
  | 'cloud'
  | 'microsoft'
  | 'enterprise'
  | 'data'
  | 'experience'

export interface ServiceTheme {
  badgeBg: string
  badgeText: string
  badgeDot: string
  gradientFrom: string
  gradientTo: string
  accentText: string
  accentRing: string
  accentSoftBg: string
  accentBg: string
  accentBgHover: string
  numberText: string
  glowOrb: string
  ctaBgFrom: string
  ctaBgTo: string
  ctaPattern: string
  techChipBg: string
  techChipText: string
  techChipHover: string
}

const landingPageBlueTheme: ServiceTheme = {
  badgeBg: 'bg-blue-100/80',
  badgeText: 'text-blue-800 font-bold',
  badgeDot: 'bg-blue-600',
  gradientFrom: 'from-blue-50',
  gradientTo: 'to-sky-50',
  accentText: 'text-blue-600',
  accentRing: 'ring-blue-300/60',
  accentSoftBg: 'bg-blue-100/70',
  accentBg: 'bg-blue-600',
  accentBgHover: 'hover:bg-blue-700',
  numberText: 'text-blue-200',
  glowOrb: 'bg-blue-400/30',
  ctaBgFrom: 'from-blue-600',
  ctaBgTo: 'to-teal-500',
  ctaPattern: 'rgba(125,211,252,0.35)',
  techChipBg: 'bg-blue-50',
  techChipText: 'text-blue-700',
  techChipHover: 'hover:bg-blue-100',
}

export const serviceThemes: Record<ServiceVariant, ServiceTheme> = {
  ai: landingPageBlueTheme,
  cloud: landingPageBlueTheme,
  microsoft: landingPageBlueTheme,
  enterprise: landingPageBlueTheme,
  data: landingPageBlueTheme,
  experience: landingPageBlueTheme,
}
