import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/services/digital-experience-engineering'
const TITLE = 'Digital Experience Engineering | Web, Mobile, UX'
const DESCRIPTION =
  'Design and ship responsive web, mobile, and SaaS products. Cogtix Solutions delivers UX, UI, design systems, React, Next.js, and Flutter builds.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'digital experience engineering services',
    'digital product engineering company',
    'UX design services India',
    'UI design company India',
    'product design services',
    'design system development services',
    'React development services',
    'React JS development company',
    'Next.js development services',
    'Vue.js development services',
    'Angular development services',
    'frontend engineering services',
    'progressive web app development',
    'PWA development company',
    'mobile app development services',
    'Flutter app development',
    'React Native development',
    'iOS app development services',
    'Android app development services',
    'headless commerce development',
    'responsive web design services',
    'user experience consulting',
    'accessibility compliance services',
    'hire frontend developers',
    'hire UX designers',
  ],
})

const SERVICE_OFFERS = [
  {
    name: 'UX Research and Product Design',
    description:
      'User interviews, journey maps, usability tests, and high fidelity prototypes that ship into engineering with clear acceptance criteria.',
  },
  {
    name: 'Design Systems and UI Libraries',
    description:
      'Token based design systems built in Figma and shipped as reusable React, Vue, or Web Component libraries with Storybook docs.',
  },
  {
    name: 'Frontend Engineering on React and Next.js',
    description:
      'Production React, Next.js, Remix, and Vue web apps with strict TypeScript, accessibility, and Core Web Vitals targets.',
  },
  {
    name: 'Mobile App Engineering',
    description:
      'Native iOS and Android, Flutter, and React Native apps with store readiness, analytics, and remote configuration.',
  },
  {
    name: 'Headless Commerce and CMS',
    description:
      'Composable storefronts on Shopify Hydrogen, Commercetools, Sanity, Contentful, and Strapi with personalization hooks.',
  },
  {
    name: 'Accessibility and Performance Engineering',
    description:
      'WCAG 2.2 audits, ARIA fixes, bundle optimization, image strategy, and Lighthouse score uplift for existing products.',
  },
]


export default function DigitalExperienceEngineeringPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Digital and Experience Engineering Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Digital Product Design and Engineering',
    offers: SERVICE_OFFERS,
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Digital and Experience Engineering', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-experience" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-experience" data={breadcrumbJsonLd} />
      <ServicePageView variant="experience" />
    </>
  )
}
