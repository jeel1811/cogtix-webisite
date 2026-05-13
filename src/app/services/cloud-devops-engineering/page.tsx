import { Metadata } from 'next'
import ServicePageView from '@/components/sections/ServicePageView'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Engineering Services | Cogtix Solutions',
  description:
    'Enterprise cloud architecture and DevOps services. AWS, Azure, GCP infrastructure, Kubernetes, CI/CD pipelines.',
}

export default function CloudDevOpsPage() {
  return <ServicePageView variant="cloud" />
}
