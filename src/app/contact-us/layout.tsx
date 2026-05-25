import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title:
    'Contact Cogtix Solutions | Talk to Engineers in USA, UK, India & Australia',
  description:
    'Reach the Cogtix Solutions team. Book a call, start a project, or get a free engineering consultation. Offices in New York, Ahmedabad, Perth, and Bridgwater.',
  path: '/contact-us',
  keywords: [
    'contact Cogtix Solutions',
    'software development consultation',
    'hire software engineers contact',
    'Cogtix offices USA India UK Australia',
    'free engineering consultation',
    'book a discovery call',
    'cogtix sales contact',
    'product engineering quote',
  ],
})

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
