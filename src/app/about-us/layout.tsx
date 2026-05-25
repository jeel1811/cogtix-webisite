import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'About Cogtix Solutions, Mission, Team & Values',
  description:
    'Meet the team behind Cogtix Solutions. Learn our story, mission, vision, leadership, and what drives a global product engineering company.',
  path: '/about-us',
  keywords: [
    'about Cogtix Solutions',
    'Cogtix company history',
    'software company founders',
    'Akash Limbani Cogtix',
    'Cogtix leadership team',
    'Cogtix mission and vision',
    'global software engineering company',
    'product engineering company about us',
  ],
})

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
