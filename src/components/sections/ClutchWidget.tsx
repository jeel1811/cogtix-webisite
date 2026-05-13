'use client'

import { useEffect, useState } from 'react'
// import { useI18n } from '@/i18n/provider'
import Container from '@/components/ui/Container'

export default function ClutchWidget() {
  const [showWidget, setShowWidget] = useState(false)
  // const { m } = useI18n()

  useEffect(() => {
    const scriptId = 'clutch-widget-script'
    if (document.getElementById(scriptId)) {
      setShowWidget(true)
      if (window.CLUTCHCO) {
        window.CLUTCHCO.Init()
      }
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://widget.clutch.co/static/js/widget.js'
    script.async = true
    
    script.onload = () => {
      setShowWidget(true)
      setTimeout(() => {
        if (window.CLUTCHCO) {
          window.CLUTCHCO.Init()
        }
      }, 500)
    }

    document.body.appendChild(script)

    return () => {
      // document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="py-10 md:py-14 bg-white">
      <Container>
        <div className="flex justify-center items-center w-full px-4">
          <div className="max-w-[1000px] w-full min-h-[400px]">
            {showWidget && (
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
            )}
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
