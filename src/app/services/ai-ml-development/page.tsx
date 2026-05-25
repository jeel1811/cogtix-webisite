import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/services/ai-ml-development'
const TITLE = 'AI ML Development Services | Generative AI & LLM'
const DESCRIPTION =
  'Cogtix Solutions builds AI/ML systems, generative AI, LLM copilots, RAG pipelines, computer vision, and MLOps platforms for global enterprises.'

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    'AI ML development services',
    'AI ML development company India',
    'generative AI development services',
    'LLM development company',
    'OpenAI GPT integration services',
    'ChatGPT integration company',
    'RAG retrieval augmented generation',
    'vector database development',
    'LangChain LlamaIndex development',
    'machine learning consulting',
    'MLOps services',
    'AI model deployment services',
    'computer vision development',
    'NLP development services',
    'predictive analytics solutions',
    'AI chatbot development',
    'enterprise AI solutions',
    'AI development company USA India',
    'hire AI ML engineers',
    'Azure OpenAI consulting',
    'Amazon Bedrock development',
    'Vertex AI consulting',
    'AI proof of concept development',
    'AI strategy consulting',
  ],
})

const SERVICE_OFFERS = [
  {
    name: 'Generative AI and LLM Engineering',
    description:
      'GPT, Claude, Gemini, and Llama integrations. Custom copilots, agents, and content workflows built on Azure OpenAI, Amazon Bedrock, or Vertex AI.',
  },
  {
    name: 'Retrieval Augmented Generation (RAG)',
    description:
      'Document retrieval pipelines on Pinecone, Weaviate, pgvector, or Azure AI Search with evaluation harnesses and guardrails.',
  },
  {
    name: 'Machine Learning Model Development',
    description:
      'Custom predictive, classification, regression, clustering, and recommendation models built and deployed end to end.',
  },
  {
    name: 'Computer Vision and NLP',
    description:
      'Object detection, OCR, document intelligence, speech to text, and language understanding solutions for enterprise data.',
  },
  {
    name: 'MLOps and Model Deployment',
    description:
      'CI and CD for ML on MLflow, Kubeflow, SageMaker, and Vertex AI Pipelines with monitoring, drift detection, and rollback.',
  },
  {
    name: 'AI Strategy and PoC Development',
    description:
      'Use case discovery, ROI modeling, and rapid proof of concept builds that mature into governed production rollouts.',
  },
]

export default function AIMLEngineeringPage() {
  const serviceJsonLd = buildServiceJsonLd({
    name: 'AI ML Development Services',
    description: DESCRIPTION,
    path: PAGE_PATH,
    serviceType: 'Artificial Intelligence and Machine Learning Engineering',
    offers: SERVICE_OFFERS,
  })

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'AI ML Engineering', path: PAGE_PATH },
  ])

  return (
    <>
      <JsonLd id="service-jsonld-ai" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-ai" data={breadcrumbJsonLd} />
      <ServicePageView variant="ai" />
    </>
  )
}
