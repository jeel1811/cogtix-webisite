import { Metadata } from 'next'
import PartnerPageView from '@/components/sections/partners/PartnerPageView'
import { enPartnerContent } from '@/i18n/partnerContent/en'

export const metadata: Metadata = {
  title: enPartnerContent.microsoft.metadata.title,
  description: enPartnerContent.microsoft.metadata.description,
}

export default function MicrosoftPartnerPage() {
  return <PartnerPageView variant="microsoft" />
}
