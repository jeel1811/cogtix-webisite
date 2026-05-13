import { Metadata } from 'next'
import PartnerPageView from '@/components/sections/partners/PartnerPageView'
import { enPartnerContent } from '@/i18n/partnerContent/en'

export const metadata: Metadata = {
  title: enPartnerContent.aws.metadata.title,
  description: enPartnerContent.aws.metadata.description,
}

export default function AWSPartnerPage() {
  return <PartnerPageView variant="aws" />
}
