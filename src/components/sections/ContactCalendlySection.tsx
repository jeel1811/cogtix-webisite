'use client'

import { useEffect } from 'react'
import Container from '@/components/ui/Container'
import CalendlyEmbed from '@/components/sections/CalendlyEmbed'
import { CONTACT_INFO } from '@/lib/constants'
import { useI18n } from '@/i18n/provider'

export default function ContactCalendlySection() {
  const { m } = useI18n()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const performScroll = () => {
      const el = document.getElementById('schedule')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          sessionStorage.removeItem('shouldScrollToSchedule')
          if (window.location.hash === '#schedule') {
            window.history.replaceState(null, '', window.location.pathname)
          }
        }, 150)
      }
    }

    const checkScroll = () => {
      const hasHash = window.location.hash === '#schedule'
      const hasFlag = sessionStorage.getItem('shouldScrollToSchedule') === 'true'
      if (hasHash || hasFlag) {
        performScroll()
      }
    }

    checkScroll()

    window.addEventListener('triggerScheduleScroll', performScroll)
    return () => window.removeEventListener('triggerScheduleScroll', performScroll)
  }, [])

  return (
    <section
      id="schedule"
      className="scroll-mt-12 bg-white py-5 md:py-16"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-900 md:text-3xl lg:text-4xl">
            {m.contact.scheduleTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
            {m.contact.scheduleSubtitle}
          </p>
        </div>

        <div className="mx-auto mt-1 w-full max-w-5xl">
          <div className="overflow-hidden">
            <CalendlyEmbed url={CONTACT_INFO.calendly} />
          </div>
        </div>
      </Container>
    </section>
  )
}
