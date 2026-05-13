import { Metadata } from 'next'
import ServicePageView from '@/components/sections/ServicePageView'

export const metadata: Metadata = {
  title: 'Microsoft Technologies | .NET, Azure & Power Platform | Cogtix Solutions',
  description: 'Expert Microsoft technology services including .NET development, Azure cloud solutions, and Power Platform automation to drive digital transformation.',
}

export default function MicrosoftTechnologiesPage() {
  return <ServicePageView variant="microsoft" />
}
