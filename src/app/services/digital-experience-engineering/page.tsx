import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  PRIMARY_PHONE_DISPLAY,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/services/digital-experience-engineering'
const TITLE =
  'Digital and Experience Engineering | Web, Mobile, UX UI Design Services'
const DESCRIPTION =
  'Design and ship responsive web, mobile, and SaaS products. Cogtix Solutions delivers UX, UI, design systems, React, Next.js, and Flutter builds. Call ' +
  PRIMARY_PHONE_DISPLAY +
  ' to start.'

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

const FAQS = [
  {
    question:
      'What digital experience engineering services does Cogtix Solutions offer?',
    answer:
      'Cogtix designs and builds digital products end to end. Our practice covers UX research, product design, design systems, React and Next.js frontends, Vue and Angular apps, mobile apps on Flutter and React Native, headless commerce, and Core Web Vitals plus accessibility engineering.',
  },
  {
    question:
      'How do I hire frontend developers or UX designers from Cogtix?',
    answer:
      'Call ' +
      PRIMARY_PHONE_DISPLAY +
      ' or email info@cogtix.com. We share vetted designer and engineer profiles within five business days. Engagement models include dedicated team, time and materials, and fixed scope delivery.',
  },
  {
    question: 'Can Cogtix Solutions design and ship a SaaS product from scratch?',
    answer:
      'Yes. We pair product designers, frontend engineers, backend engineers, and a delivery lead to ship MVPs in eight to twelve weeks. Discovery, design, and engineering happen in overlapping tracks so you reach a usable product faster.',
  },
  {
    question:
      'Do you build accessible and WCAG 2.2 compliant web applications?',
    answer:
      'Yes. We follow WCAG 2.2 AA as a default. Every release runs through automated axe core checks, manual keyboard and screen reader audits, and a remediation backlog. We also help teams reach AAA where regulated industries require it.',
  },
  {
    question:
      'How do you support Core Web Vitals and Lighthouse performance scores?',
    answer:
      'We treat Core Web Vitals as engineering acceptance criteria, not afterthoughts. We tune images, fonts, bundle splitting, server side rendering, and caching to land LCP, INP, and CLS scores in the green and we report Real User Monitoring numbers monthly.',
  },
  {
    question:
      'Do you build mobile apps on Flutter, React Native, or native iOS and Android?',
    answer:
      'All four. We pick the stack based on team size, performance needs, and store strategy. Flutter and React Native suit shared codebase builds, while native Swift or Kotlin wins for advanced device features and graphics heavy experiences.',
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

  const faqJsonLd = buildFaqJsonLd(FAQS)

  return (
    <>
      <JsonLd id="service-jsonld-experience" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-experience" data={breadcrumbJsonLd} />
      <JsonLd id="faq-jsonld-experience" data={faqJsonLd} />
      <ServicePageView variant="experience" />
    </>
  )
}
