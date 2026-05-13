'use client'

import Container from '@/components/ui/Container'
import { ReactNode } from 'react'

interface ServiceOverviewProps {
  title: string
  content: string
  image?: ReactNode
  layout?: 'left' | 'right'
  compact?: boolean
}

export default function ServiceOverview({
  title,
  content,
  image,
  layout = 'left',
  compact = false,
}: ServiceOverviewProps) {
  return (
    <section className={`${compact ? 'py-8 md:py-10' : 'py-10 md:py-14'} bg-white`}>
      <Container>
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${compact ? 'gap-6' : 'gap-10'} items-center`}>
          <div className={layout === 'right' ? 'lg:col-start-2' : ''}>
            <h2 className={`${compact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-bold text-navy-900 mb-4`}>
              {title}
            </h2>
            <div
              className={`prose ${compact ? 'prose-sm' : 'prose-base'} text-gray-600 leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {image && (
            <div className={`relative ${compact ? 'h-64 md:h-72' : 'h-80 md:h-96'} rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center`}>
              {image}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
