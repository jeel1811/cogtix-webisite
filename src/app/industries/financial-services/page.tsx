import { Metadata } from 'next'
import IndustryPageView from '@/components/sections/IndustryPageView'

export const metadata: Metadata = {
  title: 'Financial Services | Cogtix Solutions',
  description:
    'Secure, compliant, and scalable software solutions for Banking, Financial Services, and Insurance (BFSI).',
}

export default function FinancialServicesPage() {
  return <IndustryPageView variant="financial" />
}
