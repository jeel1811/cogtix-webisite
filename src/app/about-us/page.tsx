'use client'

import Container from '@/components/ui/Container'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Cloud,
  Globe2,
  Rocket,
  Shield,
  Target,
  Users,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SiX } from '@icons-pack/react-simple-icons'
import { useI18n } from '@/i18n/provider'
import { FOUNDER_SOCIAL_LINKS } from '@/lib/constants'
import Awards from '@/components/sections/Awards'
import Offices from '@/components/sections/Offices'

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description:
      'We build with curiosity, practical experimentation, and a clear focus on outcomes.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Users,
    title: 'Client Centric',
    description:
      'We stay close to your goals and work as a partner, not just a vendor.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Shield,
    title: 'Quality & Integrity',
    description:
      'We keep the work solid, the communication clear, and the process transparent.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Zap,
    title: 'Speed & Agility',
    description:
      'We move quickly without making the experience feel rushed or fragmented.',
    color: 'bg-amber-50 text-amber-600',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.6 },
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const founderSocialLinks = [
  {
    href: FOUNDER_SOCIAL_LINKS.linkedin,
    label: 'Akash Limbani on LinkedIn',
    icon: <LinkedInIcon className="h-[1.125rem] w-[1.125rem]" />,
  },
  {
    href: FOUNDER_SOCIAL_LINKS.x,
    label: 'Akash Limbani on X',
    icon: <SiX size={18} color="currentColor" />,
  },
] as const

export default function AboutUsPage() {
  const { m } = useI18n()
  const founder = m.founderProfile

  const credibilityItems = [
    { key: 'experience', icon: Briefcase, data: founder.experience, accent: 'bg-blue-50 text-blue-600' },
    { key: 'tech', icon: Cloud, data: founder.techExpertise, accent: 'bg-indigo-50 text-indigo-600' },
    { key: 'domain', icon: Globe2, data: founder.domainExposure, accent: 'bg-teal-50 text-teal-600' },
  ] as const

  return (
    <div className="relative isolate min-h-[85vh] overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pt-20">
      <section className="relative">
        <Container>
          <div className="grid items-center gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
            <motion.div {...fadeUp}>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-1.5 text-[0.625rem] font-extrabold uppercase tracking-[0.24em] text-blue-600 shadow-sm backdrop-blur-sm">
                Our Story
              </span>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl lg:text-5xl lg:leading-[1.1]">
                {m.aboutUs.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                {m.aboutUs.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/10 transition-transform hover:-translate-y-0.5"
                >
                  {m.siteCtas.discussProject}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { value: '50+', label: 'Projects delivered' },
                  { value: '20+', label: 'Team members' },
                  { value: '10+', label: 'Years of experience' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-gray-100 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
                    <div className="text-2xl font-bold tracking-tight text-navy-900">{item.value}</div>
                    <div className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
              <div className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:mr-0">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/8 via-white to-teal-500/8 blur-2xl" />
                <div className="absolute -right-4 top-8 h-16 w-16 rounded-full border border-blue-200/70 bg-white/80" />
                <div className="absolute -bottom-4 left-10 h-12 w-12 rounded-full border border-teal-200/70 bg-white/80" />
                <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_26px_80px_rgba(10,22,40,0.08)]">
                  <div className="relative aspect-[601/717] w-full">
                    <Image
                      src="/heroimg.webp"
                      alt="Our team"
                      fill
                      className="h-full w-full object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 380px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section id="leadership" className="relative py-10 sm:py-14">
        <Container>
          <motion.div
            {...fadeUp}
            className="grid gap-8 overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_24px_80px_rgba(10,22,40,0.06)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center sm:p-10"
          >
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[0.625rem] font-extrabold uppercase tracking-[0.22em] text-blue-600">
                {founder.badge}
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {founder.name}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                {founder.title}
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                {founder.summary}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {credibilityItems.map((item) => (
                  <div
                    key={item.key}
                    className="rounded-2xl border border-gray-100 bg-gradient-to-b from-slate-50/80 to-white p-5 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-md"
                  >
                    <div
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${item.accent}`}
                    >
                      <item.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy-900">
                      {item.data.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.data.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 h-px w-full max-w-md bg-gradient-to-r from-blue-200 via-teal-200 to-transparent" />
              <p className="mt-5 max-w-xl text-sm leading-6 text-gray-500">{founder.tagline}</p>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 mx-auto h-[280px] w-[280px] rounded-full bg-blue-50/70 blur-3xl" />
              <div className="relative w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(10,22,40,0.08)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/team/aakashbhai.webp"
                    alt="Akash Limbani"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-gray-100 p-5 text-center">
                  <div className="text-[0.625rem] font-extrabold uppercase tracking-[0.24em] text-blue-600">
                    {founder.title}
                  </div>
                  <div className="mt-2 text-lg font-bold text-navy-900">{founder.name}</div>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    {founderSocialLinks.map(({ href, label, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-14">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_24px_80px_rgba(10,22,40,0.08)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-transparent to-transparent" />
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/about/who-we-are.png"
                    alt="Who We Are Graphic"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              {/* Decorative elements behind the graphic */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-blue-100/50" />
              <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-blue-50/50 blur-xl" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[0.625rem] font-extrabold uppercase tracking-[0.22em] text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Who we are
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {m.aboutUs.whoWeAreTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                {m.aboutUs.whoWeAreContent}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  '10+ Years of Experience',
                  'Global Client Base',
                  'Certified Cloud Experts',
                  'Agile Development Process',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-semibold text-navy-900">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-14">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div {...fadeUp} className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_20px_60px_rgba(10,22,40,0.06)] sm:p-10">
              <div className="absolute right-[-2rem] top-[-2rem] h-32 w-32 rounded-full bg-blue-50" />
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">{m.aboutUs.missionTitle}</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {m.aboutUs.missionContent}
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="relative overflow-hidden rounded-[2rem] border border-navy-900 bg-navy-900 p-8 text-white shadow-[0_20px_60px_rgba(10,22,40,0.12)] sm:p-10">
              <div className="absolute -right-8 top-0 h-40 w-40 rounded-full border border-white/10" />
              <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full border border-blue-400/20" />
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">{m.aboutUs.visionTitle}</h3>
                <p className="mt-4 text-lg leading-relaxed text-blue-100/85">
                  {m.aboutUs.visionContent}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative py-10 sm:py-14">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[0.625rem] font-extrabold uppercase tracking-[0.22em] text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              Core values
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {m.aboutUs.valuesTitle}
            </h2>
            <p className="mt-4 text-gray-500">
              {m.aboutUs.valuesSubtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="group rounded-[1.75rem] border border-gray-100 bg-white p-7 shadow-[0_16px_50px_rgba(10,22,40,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_70px_rgba(0,102,204,0.08)]"
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${value.color} transition-transform duration-300 group-hover:scale-105`}>
                  <value.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-navy-900">{value.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Awards />
      <Offices />
    </div>
  )
}
