import { Metadata } from 'next'
import IndustryPageView from '@/components/sections/IndustryPageView'

export const metadata: Metadata = {
  title: 'Retail & E-commerce | Cogtix Solutions',
  description:
    'Omnichannel commerce platforms, POS integrations, and personalized digital shopping experiences.',
}

export default function RetailEcommercePage() {
  return <IndustryPageView variant="retail" />
}
