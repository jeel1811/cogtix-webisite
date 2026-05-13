'use client'

import { useI18n } from '@/i18n/provider'
import { partnerContent } from '@/i18n/partnerContent'
import type { PartnerVariant } from '@/i18n/partnerContent'
import { partnerData } from '@/i18n/partnerData'
import PartnerHero from '@/components/sections/partners/PartnerHero'
import PartnerCredentials from '@/components/sections/partners/PartnerCredentials'
import ServiceFeatures from '@/components/sections/ServiceFeatures'
import ServiceUseCases from '@/components/sections/ServiceUseCases'
import IndustryChallenges from '@/components/sections/IndustryChallenges'
import IndustryImpact from '@/components/sections/IndustryImpact'
import Testimonials from '@/components/sections/Testimonials'
import ContactForm from '@/components/sections/ContactForm'

interface PartnerPageViewProps {
  variant: PartnerVariant
}

export default function PartnerPageView({ variant }: PartnerPageViewProps) {
  const { locale } = useI18n()
  const content = partnerContent[locale][variant]
  const data = partnerData[variant]

  const stats = content.hero.statLabels.map((label, idx) => ({
    value: data.statValues[idx] ?? '',
    label,
  }))

  const certifications = content.credentials.certifications.map((c, idx) => ({
    name: c.name,
    level: data.certificationLevels[idx]?.level ?? '',
  }))

  const features = content.features.items.map((item) => ({
    title: item.title,
    description: item.description,
    details: item.details,
    outcomes: item.outcomes,
    outcomesTitle: content.features.outcomesTitle,
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
      <PartnerHero
        variant={variant}
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        highlight={content.hero.highlight}
        description={content.hero.description}
        tier={content.hero.tier}
        tierSubtitle={content.hero.tierSubtitle}
        highlights={content.hero.highlights}
        cta={{ text: content.hero.cta, href: '#contact' }}
        exploreCapabilitiesLabel={content.hero.exploreCapabilities}
        activePartnerLabel={content.hero.activePartnerBadge}
        stats={stats}
      />

      <div id="capabilities">
        <PartnerCredentials
          variant={variant}
          badge={content.credentials.badge}
          title={content.credentials.title}
          description={content.credentials.description}
          competencies={content.credentials.competencies}
          certifications={certifications}
          certificationsTitle={content.credentials.certificationsTitle}
          certificationsDescription={content.credentials.certificationsDescription}
        />
      </div>

      <ServiceFeatures
        variant={data.themeBody}
        subtitle={content.features.badge}
        title={content.features.title}
        description={content.features.description}
        features={features}
      />

      <IndustryChallenges
        variant={data.themeBody}
        subtitle={content.challenges.badge}
        title={content.challenges.title}
        description={content.challenges.description}
        challenges={challenges}
        challengeLabel={content.challenges.challengeLabel}
        solutionLabel={content.challenges.solutionLabel}
      />

      <ServiceUseCases
        variant={data.themeBody}
        subtitle={content.useCases.badge}
        title={content.useCases.title}
        description={content.useCases.description}
        useCases={content.useCases.items}
      />

      <IndustryImpact
        variant={data.themeBody}
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
