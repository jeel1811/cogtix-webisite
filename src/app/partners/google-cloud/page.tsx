import { Metadata } from 'next'
import PartnerPageView from '@/components/sections/partners/PartnerPageView'
import { enPartnerContent } from '@/i18n/partnerContent/en'

export const metadata: Metadata = {
  title: enPartnerContent['google-cloud'].metadata.title,
  description: enPartnerContent['google-cloud'].metadata.description,
}

export default function GoogleCloudPartnerPage() {
  return <PartnerPageView variant="google-cloud" />
}
