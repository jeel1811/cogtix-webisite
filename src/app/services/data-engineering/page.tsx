import { Metadata } from 'next'
import ServicePageView from '@/components/sections/ServicePageView'

export const metadata: Metadata = {
  title: 'Data Engineering Services | Cogtix Solutions',
  description:
    'Expert data engineering services. Build scalable data pipelines, data warehouses, and analytics platforms.',
}

export default function DataEngineeringPage() {
  return <ServicePageView variant="data" />
}
