import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import ServicePageView from '@/components/sections/ServicePageView'
import {
  PRIMARY_PHONE_DISPLAY,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildMetadata,
  buildServiceJsonLd,
} from '@/lib/seo'

const PAGE_PATH = '/services/gen-ai-ml-development'
const TITLE =
  'AI ML Development Services in India and USA | Generative AI, LLM and RAG Solutions'
const DESCRIPTION =
  'Hire Cogtix Solutions for AI and machine learning development services. Build generative AI, LLM copilots, RAG, computer vision, and MLOps platforms. Call ' +
  PRIMARY_PHONE_DISPLAY +
  ' to start.'

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

const FAQS = [
  {
    question:
      'What AI and ML services does Cogtix Solutions provide for businesses in India and abroad?',
    answer:
      'Cogtix Solutions builds generative AI applications, large language model copilots, RAG retrieval pipelines, custom machine learning models, computer vision solutions, NLP systems, and full MLOps platforms. Engagements cover discovery, proof of concept, productionization, and ongoing operations for clients in India, the USA, the UK, and Australia.',
  },
  {
    question: 'How do I hire AI ML engineers from Cogtix Solutions?',
    answer:
      'You can hire dedicated AI ML engineers from Cogtix Solutions on a monthly, hourly, or project basis. Call ' +
      PRIMARY_PHONE_DISPLAY +
      ' or email info@cogtix.com to book a free discovery call. We share matching profiles within five to seven business days and engineers can start in two to four weeks.',
  },
  {
    question:
      'Which AI platforms and large language models does Cogtix work with?',
    answer:
      'We deliver production work on Azure OpenAI, Amazon Bedrock, Google Vertex AI, OpenAI GPT 4 and GPT 4o, Anthropic Claude, Meta Llama, Mistral, and Gemini. We also stand up open source stacks on Hugging Face Transformers and self hosted inference where data residency requires it.',
  },
  {
    question: 'What does an AI development engagement cost in 2026?',
    answer:
      'Pricing depends on team size, model complexity, and integration scope. A proof of concept typically takes four to eight weeks, while a governed production rollout takes ten to sixteen weeks. We share a transparent proposal with team mix, milestones, and India and USA based rates after a discovery call.',
  },
  {
    question:
      'Can Cogtix Solutions deliver AI projects with HIPAA, SOC 2, and GDPR compliance?',
    answer:
      'Yes. Our AI engagements ship with private networking, managed identity, content safety guardrails, PII redaction, audit logging, and evaluation harnesses. We support HIPAA, SOC 2, ISO 27001, and GDPR controls and work under your security questionnaires and data processing agreements.',
  },
  {
    question:
      'How long does it take to move an AI proof of concept into production?',
    answer:
      'Cogtix typically moves an AI proof of concept into a governed, evaluated, observable production rollout in eight to twelve weeks. Timeline depends on data readiness, integration surface, and the responsible AI checklist agreed with your legal and security teams.',
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

  const faqJsonLd = buildFaqJsonLd(FAQS)

  return (
    <>
      <JsonLd id="service-jsonld-ai" data={serviceJsonLd} />
      <JsonLd id="breadcrumb-jsonld-ai" data={breadcrumbJsonLd} />
      <JsonLd id="faq-jsonld-ai" data={faqJsonLd} />
      <ServicePageView variant="ai" />
    </>
  )
}
