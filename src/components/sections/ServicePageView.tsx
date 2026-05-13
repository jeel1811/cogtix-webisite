'use client'

import { useI18n } from '@/i18n/provider'
import { serviceTechnologyPanels } from '@/i18n/technologyPanels'
import { serviceData } from '@/i18n/serviceData'
import type { ServiceVariant } from './service-themes'
import ServiceHero from './ServiceHero'
import ServiceFeatures from './ServiceFeatures'
import ServiceUseCases from './ServiceUseCases'
import ServiceExpertise from './ServiceExpertise'
import ServiceTechnologies from './ServiceTechnologies'
import Testimonials from './Testimonials'
import ContactForm from './ContactForm'

interface ServicePageViewProps {
  variant: ServiceVariant
}

export default function ServicePageView({ variant }: ServicePageViewProps) {
  const { m, locale } = useI18n()
  const content = m.serviceContent[variant]
  const data = serviceData[variant]
  const techPanels = serviceTechnologyPanels[locale][variant]

  const stats = content.hero.statLabels.map((label, idx) => ({
    value: data.stats[idx]?.value ?? '',
    label,
  }))

  const features = content.features.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    details: item.details,
    outcomes: item.outcomes,
    outcomesTitle: content.features.outcomesTitle,
    highlights: data.features[idx]?.highlights ?? [],
  }))

  const pillars = content.expertise.items.map((item, idx) => ({
    title: item.title,
    description: item.description,
    tags: data.pillars[idx]?.tags ?? [],
  }))

  const categories = content.technologies.categories.map((name, idx) => ({
    name,
    items: data.technologies[idx]?.items ?? [],
    overview: techPanels.categoryPanels[idx]?.overview ?? '',
    outcomes: techPanels.categoryPanels[idx]?.outcomes ?? [],
  }))

  return (
    <>
      <ServiceHero
        variant={variant}
        subtitle={content.hero.badge}
        title={content.hero.title}
        highlight={content.hero.highlight}
        description={content.hero.description}
        cta={{ text: content.hero.cta, href: '#contact' }}
        stats={stats}
      />

      <ServiceFeatures
        variant={variant}
        subtitle={content.features.badge}
        title={content.features.title}
        description={content.features.description}
        features={features}
      />

      <ServiceUseCases
        variant={variant}
        subtitle={content.useCases.badge}
        title={content.useCases.title}
        description={content.useCases.description}
        useCases={content.useCases.items}
      />

      <ServiceExpertise
        variant={variant}
        subtitle={content.expertise.badge}
        title={content.expertise.title}
        description={content.expertise.description}
        pillars={pillars}
      />

      <ServiceTechnologies
        variant={variant}
        subtitle={content.technologies.badge}
        title={content.technologies.title}
        description={content.technologies.description}
        panelOutcomesTitle={techPanels.panelOutcomesTitle}
        categories={categories}
      />

      <Testimonials />
      <ContactForm />
    </>
  )
}
