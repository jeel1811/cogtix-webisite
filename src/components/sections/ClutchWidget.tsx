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
    <section className="relative py-10 md:py-10 bg-white overflow-hidden">
      {/* ── Background layers ─────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated grid backdrop (panning) */}
        <div
          className="absolute inset-0 opacity-[0.04] animate-grid-pan"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(circle at center, black, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 85%)',
          }}
        />
        
        {/* Multi-layered radial glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/25 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/35 rounded-full blur-[140px] translate-y-1/4 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-50/10 rounded-full blur-[100px]" />
      </div>

      {/* ── Decorative SVG curves & Animated lines ─────── */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 w-[600px] h-[400px] opacity-[0.08]"
        viewBox="0 0 600 400"
        fill="none"
      >
        <path 
          d="M600 0C520 60 380 140 300 180C220 220 140 240 60 300C-20 360 0 400 0 400" 
          stroke="#3B82F6" 
          strokeWidth="2" 
          strokeDasharray="6 8" 
          className="animate-dash"
        />
        <path d="M600 40C520 100 400 160 320 200C240 240 160 270 80 330C0 390 20 400 20 400" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
        <circle cx="500" cy="100" r="3" fill="#3B82F6" className="animate-pulse" />
        <circle cx="100" cy="300" r="2" fill="#3B82F6" className="animate-pulse" style={{ animationDelay: '1s' }} />
      </svg>
      
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-10 w-[500px] h-[350px] opacity-[0.07]"
        viewBox="0 0 500 350"
        fill="none"
      >
        <path d="M0 350C80 300 160 240 240 200C320 160 400 120 440 80C480 40 500 0 500 0" stroke="#3B82F6" strokeWidth="2" />
        <path 
          d="M0 310C80 270 180 220 260 180C340 140 400 100 450 60C490 25 500 0 500 0" 
          stroke="#3B82F6" 
          strokeWidth="1.5" 
          strokeDasharray="10 5" 
          className="animate-dash"
          style={{ animationDirection: 'reverse' }}
        />
      </svg>

      {/* ── Geometrical shapes ─────── */}
      <div aria-hidden className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full border-[2px] border-blue-200/20" />
      <div aria-hidden className="pointer-events-none absolute top-[15%] -right-12 h-44 w-44 rounded-full border-[2px] border-dashed border-blue-200/15 animate-spin-slow" />
      <div aria-hidden className="pointer-events-none absolute bottom-40 right-[15%] h-3.5 w-3.5 rounded-full bg-blue-300/30 animate-ping" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-[5%] h-10 w-10 rotate-45 rounded-[4px] border-[2px] border-blue-200/20 animate-float" />
      <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 h-32 w-32 rounded-full border border-blue-100/30" />
      <div aria-hidden className="pointer-events-none absolute top-[40%] left-[20%] h-1 w-1 rounded-full bg-blue-400/20" />
      <div aria-hidden className="pointer-events-none absolute bottom-[30%] right-[25%] h-2 w-2 rounded-full border border-blue-400/20" />
      
      {/* Sparkle dots / Floating elements */}
      <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-shimmer" />
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-500/30 rounded-full animate-shimmer" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-2/3 left-[15%] w-2 h-2 bg-blue-200/50 rounded-full animate-shimmer" style={{ animationDelay: '0.8s' }} />
      <div className="absolute top-1/2 right-[10%] w-1.5 h-1.5 bg-blue-300/40 rounded-full animate-shimmer" style={{ animationDelay: '2.2s' }} />
      <div className="absolute bottom-[15%] left-[40%] w-1 h-1 bg-blue-400/30 rounded-full animate-shimmer" style={{ animationDelay: '0.5s' }} />

      <Container className="relative z-10">
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
