import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/services/experience-design'
const TITLE = 'Experience Design Services | UX, UI & Design Ops'
const DESCRIPTION =
  'Human-centered product design from research to launch. Cogtix designs UX flows, UI systems, mobile, and SaaS experiences that ship fast.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'experience design services',
    'product design agency India',
    'UX research services',
    'UX UI design company',
    'UI design services India',
    'design system development services',
    'mobile app design services',
    'SaaS product design services',
    'enterprise UX design services',
    'design thinking workshops',
    'user testing and usability research',
    'wireframing and prototyping services',
    'interaction design services',
    'service design consulting',
    'Figma design partner',
    'design ops consulting',
    'hire product designers',
    'hire UX designers India',
  ],
})

const SERVICE_OFFERS = [
  {
    name: 'UX Discovery and Research',
    description:
      'User interviews, contextual inquiry, surveys, and analytics review with synthesized insight maps and prioritized opportunity areas.',
  },
  {
    name: 'Information Architecture and Journey Design',
    description:
      'Service blueprints, journey maps, and IA models that align product, engineering, and operations on the same shared narrative.',
  },
  {
    name: 'UI Design and Prototyping',
    description:
      'High fidelity UI design, interaction prototypes, and motion language tested in Figma with stakeholders and real users.',
  },
  {
    name: 'Design System Engineering',
    description:
      'Token based design systems shipped as Figma libraries and reusable React, Vue, or Web Component packages with Storybook docs.',
  },
  {
    name: 'Usability Testing and Iteration',
    description:
      'Moderated and unmoderated usability tests, A B test design, and a measurable backlog of design quality improvements.',
  },
  {
    name: 'Design Ops and Enablement',
    description:
      'Design ops setup, Figma library governance, design QA processes, and onboarding playbooks for in house design teams.',
  },
]


export default function ExperienceDesignPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'Experience Design Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Product Design and Experience Design',
    offers: SERVICE_OFFERS,
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Experience Design', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-experience-design" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-experience-design" data={breadcrumbJsonLd} />
      <ServicePageView variant="experience" />
    </>
  )
}
