export type PartnerVariant = 'microsoft' | 'aws' | 'google-cloud'

export interface PartnerAccent {
  // brand-tinted helpers (use sparingly — primary theme stays blue)
  ring: string         // ring color class for the brand card border
  glow: string         // tinted glow blob
  chipBg: string       // soft tint for certification chips
  chipText: string     // chip text color
  badge: string        // tier badge background
  badgeText: string    // tier badge text
}

export const partnerAccents: Record<PartnerVariant, PartnerAccent> = {
  microsoft: {
    ring: 'ring-[#0078D4]/20',
    glow: 'bg-[#0078D4]/15',
    chipBg: 'bg-[#0078D4]/8',
    chipText: 'text-[#0F4C81]',
    badge: 'bg-[#E5F1FB] text-[#0F4C81] ring-1 ring-[#0078D4]/30',
    badgeText: 'text-[#0F4C81]',
  },
  aws: {
    ring: 'ring-[#FF9900]/25',
    glow: 'bg-[#FF9900]/15',
    chipBg: 'bg-[#FFF4E0]',
    chipText: 'text-[#1F2937]',
    badge: 'bg-[#FFF4E0] text-[#7A4A00] ring-1 ring-[#FF9900]/30',
    badgeText: 'text-[#7A4A00]',
  },
  'google-cloud': {
    ring: 'ring-[#4285F4]/25',
    glow: 'bg-[#4285F4]/15',
    chipBg: 'bg-[#E8F0FE]',
    chipText: 'text-[#1F4FA1]',
    badge: 'bg-[#E8F0FE] text-[#1F4FA1] ring-1 ring-[#4285F4]/30',
    badgeText: 'text-[#1F4FA1]',
  },
}
