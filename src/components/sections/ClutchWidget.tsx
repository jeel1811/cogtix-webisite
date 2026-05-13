'use client'

import { useEffect } from 'react'
import Container from '@/components/ui/Container'

export default function ClutchWidget() {
  useEffect(() => {
    const scriptId = 'clutch-widget-script'
    
    const initWidget = () => {
      if (window.CLUTCHCO) {
        window.CLUTCHCO.Init()
      }
    }

    if (document.getElementById(scriptId)) {
      // Small timeout to ensure React has finished rendering the div
      const timer = setTimeout(initWidget, 150)
      return () => clearTimeout(timer)
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://widget.clutch.co/static/js/widget.js'
    script.async = true
    script.onload = () => setTimeout(initWidget, 500)
    document.body.appendChild(script)
  }, [])

  return (
    <section className="py-10 md:py-14 bg-white">
      <Container>
        <div className="flex justify-center items-center w-full px-4">
          <div className="max-w-[1000px] w-full min-h-[400px]">
            <div
              className="clutch-widget"
              data-url="https://widget.clutch.co"
              data-widget-type="4"
              data-height="auto"
              data-nofollow="true"
              data-expandifr="true"
              data-scale="100"
              data-reviews="360200,346051,335629,314386,303003"
              data-clutchcompany-id="2162306"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

declare global {
  interface Window {
    CLUTCHCO?: {
      Init: () => void
    }
  }
}
