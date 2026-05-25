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

const PAGE_PATH = '/services/experience-design'
const TITLE =
  'Experience Design Services | UX Research, UI Design and Design Systems'
const DESCRIPTION =
  'Human centered product design from research to launch. Cogtix designs UX flows, UI systems, mobile, and SaaS experiences. Call ' +
  PRIMARY_PHONE_DISPLAY +
  ' to start your design engagement.'

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

const FAQS = [
  {
    question:
      'What is included in a Cogtix experience design engagement?',
    answer:
      'A typical engagement covers UX research, journey design, information architecture, UI design, prototyping, design system work, and usability testing. We can also include design ops setup and handoff documentation for in house teams.',
  },
  {
    question: 'How do I hire experience designers from Cogtix Solutions?',
    answer:
      'Call ' +
      PRIMARY_PHONE_DISPLAY +
      ' or email info@cogtix.com to start a discovery call. We share vetted designer profiles within five business days. Designers can be embedded into your team or work as a self contained design pod.',
  },
  {
    question:
      'Can Cogtix build a design system that engineers can actually use?',
    answer:
      'Yes. Our design systems ship as Figma libraries paired with engineered React, Vue, or Web Component packages, Storybook docs, accessibility guidance, and a contribution model. Designers and engineers maintain the system from the same source of truth.',
  },
  {
    question:
      'How long does a typical product redesign or MVP design phase take?',
    answer:
      'A focused product redesign or MVP design phase typically runs six to ten weeks, depending on scope. We work in two week design sprints with weekly stakeholder reviews and we hand off designs to engineering with annotated specs and component tokens.',
  },
  {
    question:
      'Do you provide design ops support for in house design teams?',
    answer:
      'Yes. We help in house teams set up Figma library governance, design QA processes, component contribution workflows, and onboarding playbooks. The goal is to leave your team able to scale design without us.',
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

  const faqJsonLd = buildFaqJsonLd(FAQS)

  return (
    <>
      <JsonLd id="service-jsonld-experience-design" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-experience-design" data={breadcrumbJsonLd} />
      <JsonLd id="faq-jsonld-experience-design" data={faqJsonLd} />
      <ServicePageView variant="experience" />
    </>
  )
}
