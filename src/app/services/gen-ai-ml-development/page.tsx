import { Metadata } from 'next'
import ServicePageView from '@/components/sections/ServicePageView'

export const metadata: Metadata = {
  title: 'AI/ML Engineering Services | Cogtix Solutions',
  description:
    'Custom AI and ML solutions for businesses. Expert development in machine learning, generative AI, LLMs, and neural networks.',
}

export default function AIMLEngineeringPage() {
  return <ServicePageView variant="ai" />
}
