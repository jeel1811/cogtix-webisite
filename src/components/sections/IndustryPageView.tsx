'use client'

import { useI18n } from '@/i18n/provider'
import { industryContent } from '@/i18n/industryContent'
import type { IndustryVariant } from '@/i18n/industryContent'
import { industryData } from '@/i18n/industryData'
import IndustryHero from './IndustryHero'
import ServiceFeatures from './ServiceFeatures'
import ServiceUseCases from './ServiceUseCases'
import IndustryChallenges from './IndustryChallenges'
import IndustryImpact from './IndustryImpact'
import Testimonials from './Testimonials'
import ContactForm from './ContactForm'

interface IndustryPageViewProps {
  variant: IndustryVariant
}

export default function IndustryPageView({ variant }: IndustryPageViewProps) {
  const { locale } = useI18n()
  const content = industryContent[locale][variant]
  const data = industryData[variant]

  const stats = content.hero.statLabels.map((label, idx) => ({
    value: data.statValues[idx] ?? '',
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

  const challenges = content.challenges.items.map((item, idx) => ({
    icon: data.challengeIcons[idx] ?? null,
    challenge: item.challenge,
    solution: item.solution,
  }))

  const metrics = content.impact.metrics.map((metric, idx) => ({
    value: data.metricValues[idx] ?? '',
    label: metric.label,
    description: metric.description,
  }))

  return (
    <>
      <IndustryHero
        variant={data.theme}
        subtitle={content.hero.badge}
        title={content.hero.title}
        highlight={content.hero.highlight}
        description={content.hero.description}
        image={data.image}
        cta={{ text: content.hero.cta, href: '#contact' }}
        stats={stats}
      />

      <ServiceFeatures
        variant={data.theme}
        subtitle={content.features.badge}
        title={content.features.title}
        description={content.features.description}
        features={features}
      />

      <IndustryChallenges
        variant={data.theme}
        subtitle={content.challenges.badge}
        title={content.challenges.title}
        description={content.challenges.description}
        challenges={challenges}
        challengeLabel={content.challenges.challengeLabel}
        solutionLabel={content.challenges.solutionLabel}
      />

      <ServiceUseCases
        variant={data.theme}
        subtitle={content.useCases.badge}
        title={content.useCases.title}
        description={content.useCases.description}
        useCases={content.useCases.items}
      />

      <IndustryImpact
        variant={data.theme}
        subtitle={content.impact.badge}
        title={content.impact.title}
        description={content.impact.description}
        metrics={metrics}
      />

      <Testimonials />
      <ContactForm />
    </>
  )
}
