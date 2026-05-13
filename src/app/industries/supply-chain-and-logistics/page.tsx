import { Metadata } from 'next'
import IndustryPageView from '@/components/sections/IndustryPageView'

export const metadata: Metadata = {
  title: 'Supply Chain & Logistics | Cogtix Solutions',
  description:
    'Fleet management, warehouse automation, and real-time tracking software solutions.',
}

export default function SupplyChainPage() {
  return <IndustryPageView variant="supplyChain" />
}
