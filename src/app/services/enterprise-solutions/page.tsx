import { Metadata } from 'next'
import ServicePageView from '@/components/sections/ServicePageView'

export const metadata: Metadata = {
  title: 'Enterprise Services | Cogtix Solutions',
  description: 'Enterprise software solutions. ERP, CRM, business process automation, legacy modernization.',
}

export default function EnterpriseSolutionsPage() {
  return <ServicePageView variant="enterprise" />
}
