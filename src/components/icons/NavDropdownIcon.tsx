'use client'

import type { ComponentType } from 'react'
import {
  Banknote,
  BookOpen,
  BrainCircuit,
  Briefcase,
  ClipboardList,
  Cpu,
  FileText,
  Handshake,
  HeartPulse,
  LayoutTemplate,
  Mail,
  Search,
  ShoppingCart,
  Truck,
  Users,
  Workflow,
} from 'lucide-react'
import { SiGooglecloud } from '@icons-pack/react-simple-icons'
import { FaAws } from 'react-icons/fa'
import {
  CloudDevOpsLogo,
  DataEngineeringLogo,
  EnterpriseLogo,
  ExperienceEngineeringLogo,
  MicrosoftLogo,
} from '@/lib/EngineeringLogos'

type IconProps = { className?: string }

/** Official AWS brand mark (same as tech stack / partner pages). */
const AwsLogo = ({ className }: IconProps) => (
  <FaAws className={className} color="#FF9900" aria-hidden />
)

/** English nav labels from NAV_ITEMS — used as stable icon lookup keys. */
const NAV_DROPDOWN_ICONS: Record<string, ComponentType<IconProps>> = {
  // Engineering
  'AI/ML Engineering': BrainCircuit,
  'Cloud & DevOps Engineering': CloudDevOpsLogo,
  'Digital Experience Engineering': ExperienceEngineeringLogo,
  'Data Engineering': DataEngineeringLogo,
  'Enterprise Services': EnterpriseLogo,
  'Microsoft Technologies': MicrosoftLogo,

  // Industries
  'Financial Services': Banknote,
  'Healthcare and Life Sciences': HeartPulse,
  'Retail and E-commerce': ShoppingCart,
  'Supply Chain and Logistics': Truck,
  'Hi-Tech and Digital Natives': Cpu,

  // Partners
  Microsoft: MicrosoftLogo,
  AWS: AwsLogo,
  'Google Cloud': SiGooglecloud,

  // Insights
  'Case Studies': FileText,
  Blogs: BookOpen,

  // Company
  'About Us': Users,
  'Contact Us': Mail,
  'How We Work': Workflow,
  'Dedicated Resource Model': Users,
  'Discovery Process Model': Search,
  'Fixed Cost Model': ClipboardList,

  // Legacy / services labels (if used elsewhere)
  AI: BrainCircuit,
  'Data & Analytics': DataEngineeringLogo,
  Cloud: CloudDevOpsLogo,
  'Experience Design': LayoutTemplate,
  'CMS Development': LayoutTemplate,
  'Digital Marketing': Briefcase,
  'Quality Assurance': ClipboardList,
}

const DEFAULT_ICON = Handshake

interface NavDropdownIconProps {
  /** Original English label from NAV_ITEMS (stable across locales). */
  iconKey: string
  className?: string
  /** Light icons for Engineering mobile blue buttons */
  variant?: 'default' | 'onDark'
}

export function NavDropdownIcon({
  iconKey,
  className = '',
  variant = 'default',
}: NavDropdownIconProps) {
  const Icon = NAV_DROPDOWN_ICONS[iconKey] ?? DEFAULT_ICON
  const isBrandSvg =
    Icon === MicrosoftLogo || Icon === AwsLogo || Icon === SiGooglecloud
  const isEngineeringLogo =
    Icon === CloudDevOpsLogo ||
    Icon === ExperienceEngineeringLogo ||
    Icon === DataEngineeringLogo ||
    Icon === EnterpriseLogo

  const wrapperClass =
    variant === 'onDark'
      ? 'flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/15'
      : 'flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-100/80'

  const iconClass =
    variant === 'onDark'
      ? `size-[1.125rem] shrink-0 ${isBrandSvg || isEngineeringLogo ? '' : 'text-white'} ${className}`
      : `size-[1.125rem] shrink-0 ${isBrandSvg || isEngineeringLogo ? '' : 'text-blue-600'} ${className}`

  return (
    <span className={wrapperClass} aria-hidden>
      <Icon className={iconClass} />
    </span>
  )
}

/** Icon + label row with consistent vertical alignment in nav dropdowns. */
export function NavDropdownItemContent({
  iconKey,
  label,
  variant = 'default',
  labelClassName = '',
}: {
  iconKey: string
  label: string
  variant?: 'default' | 'onDark'
  labelClassName?: string
}) {
  return (
    <span className="flex min-h-9 min-w-0 flex-1 items-center gap-3">
      <NavDropdownIcon iconKey={iconKey} variant={variant} />
      <span
        className={`min-w-0 flex-1 whitespace-normal text-left leading-snug ${labelClassName}`}
      >
        {label}
      </span>
    </span>
  )
}
