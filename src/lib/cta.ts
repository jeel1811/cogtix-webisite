import { CONTACT_INFO } from '@/lib/constants'

/** Shared CTA destinations across the marketing site. */
export const CTA_LINKS = {
  consultation: `${CONTACT_INFO.calendlyContactPath}#schedule`,
  project: '/contact-us',
  estimate: '/contact-us',
} as const
