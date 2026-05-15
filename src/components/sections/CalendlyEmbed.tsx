'use client'

import { useEffect, useState } from 'react'

const EMBED_HEIGHT = 820

type CalendlyEmbedProps = {
  url: string
}

function buildEmbedSrc(baseUrl: string, hostname: string): string {
  const parsed = new URL(baseUrl)
  parsed.searchParams.set('embed_type', 'Inline')
  parsed.searchParams.set('embed_domain', hostname)
  parsed.searchParams.set('hide_gdpr_banner', '1')
  return parsed.toString()
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const [embedSrc, setEmbedSrc] = useState<string | null>(null)

  useEffect(() => {
    setEmbedSrc(buildEmbedSrc(url, window.location.hostname))
  }, [url])

  if (!embedSrc) {
    return (
      <div
        className="w-full animate-pulse rounded-xl bg-slate-100"
        style={{ height: EMBED_HEIGHT }}
        aria-hidden
      />
    )
  }

  return (
    <iframe
      src={embedSrc}
      title="Schedule a meeting with Cogtix"
      className="w-full rounded-xl border-0 bg-white"
      height={EMBED_HEIGHT}
      style={{ minHeight: EMBED_HEIGHT, display: 'block' }}
      loading="lazy"
      allow="fullscreen"
    />
  )
}
