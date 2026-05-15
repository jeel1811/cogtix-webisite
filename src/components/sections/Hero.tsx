'use client'

import {
  ArrowRight,
  Code2,
  Cloud,
  Server,
  BrainCircuit,
  Sparkles,
} from 'lucide-react'
import CogtixSymbol from '@/components/icons/CogtixSymbol'
import AiIcon from '@/components/icons/AiIcon'
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDotnet,
  SiClaude,
  SiGooglegemini,
  SiHuggingface,
  SiTensorflow,
  SiGooglecloud,
  SiKubernetes,
  SiCloudflare,
  SiVercel,
  SiDocker,
  SiTerraform,
} from '@icons-pack/react-simple-icons'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
// import ScrollIndicator from '@/components/ui/ScrollIndicator'
import { CONTACT_INFO } from '@/lib/constants'
import { useI18n } from '@/i18n/provider'

type OrbitIcon = {
  Icon: React.ComponentType<{
    size?: number
    color?: string
    className?: string
  }>
  color: string
}

// Inner orbit - core development stack (4 icons, rotates 30s clockwise)
const innerOrbit: OrbitIcon[] = [
  { Icon: SiReact, color: '#61DAFB' },
  { Icon: SiNodedotjs, color: '#339933' },
  { Icon: SiPython, color: '#3776AB' },
  { Icon: SiDotnet, color: '#512BD4' },
]

// Middle orbit - AI / ML platforms (6 icons, rotates 35s counter-clockwise)
const aiOrbit: OrbitIcon[] = [
  { Icon: SiClaude, color: '#D97757' },
  { Icon: SiGooglegemini, color: '#1C69FF' },
  { Icon: BrainCircuit, color: '#7C3AED' },
  { Icon: SiHuggingface, color: '#FFD21E' },
  { Icon: Sparkles, color: '#0EA5E9' },
  { Icon: SiTensorflow, color: '#FF6F00' },
]

// Outer orbit - cloud / infrastructure (8 icons, rotates 50s clockwise)
const cloudOrbit: OrbitIcon[] = [
  { Icon: SiGooglecloud, color: '#4285F4' },
  { Icon: Cloud, color: '#FF9900' }, // AWS placeholder
  { Icon: SiKubernetes, color: '#326CE5' },
  { Icon: SiDocker, color: '#2496ED' },
  { Icon: SiCloudflare, color: '#F38020' },
  { Icon: SiVercel, color: '#0F172A' },
  { Icon: SiTerraform, color: '#7B42BC' },
  { Icon: Server, color: '#475569' },
]

/**
 * Place children evenly on the perimeter of their parent.
 * Returns CSS left/top percentages for a polar coordinate at angle index `i` of `total`.
 * Radius = 50% means icons sit on the parent's edge.
 */
function polarPosition(i: number, total: number) {
  const angleRad = (i / total) * Math.PI * 2 - Math.PI / 2 // start at top
  const x = 50 + 50 * Math.cos(angleRad)
  const y = 50 + 50 * Math.sin(angleRad)
  return { left: `${x}%`, top: `${y}%` }
}


export default function Hero() {
  const { m } = useI18n()

  const FEATURES = [
    {
      title: m.hero.featureAiTitle,
      desc: m.hero.featureAiDesc,
      iconBg:
        'bg-gradient-to-br from-indigo-100 via-blue-100 to-violet-100 border border-blue-200/60',
      icon: <AiIcon className="w-6 h-6 text-blue-700" />,
    },
    {
      title: m.hero.featureMicrosoftTitle,
      desc: m.hero.featureMicrosoftDesc,
      iconBg: 'bg-white border border-gray-200/80',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
          <rect x="2" y="2" width="9" height="9" fill="#f25022" rx="1" />
          <rect x="13" y="2" width="9" height="9" fill="#7fba00" rx="1" />
          <rect x="2" y="13" width="9" height="9" fill="#00a4ef" rx="1" />
          <rect x="13" y="13" width="9" height="9" fill="#ffb900" rx="1" />
        </svg>
      ),
    },
    {
      title: m.hero.featureCustomTitle,
      desc: m.hero.featureCustomDesc,
      iconBg:
        'bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100 border border-teal-200/60',
      icon: <Code2 className="w-5 h-5 text-teal-700" strokeWidth={2} />,
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[140px] animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Container className="relative z-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* --------- Left: Copy --------- */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 leading-[1.05] tracking-tight mb-6">
              <span className="block animate-fade-in-up">
                {m.hero.title}
              </span>
              <span
                className="block gradient-text animate-fade-in-up"
                style={{ animationDelay: '0.15s' }}
              >
                {m.hero.titleHighlight}
              </span>
            </h3>

            <p
              className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.45s' }}
            >
              {m.hero.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-12 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Button
                variant="primary"
                size="lg"
                href={CONTACT_INFO.calendlyContactPath}
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    sessionStorage.setItem('shouldScrollToSchedule', 'true')
                    window.dispatchEvent(new Event('triggerScheduleScroll'))
                  }
                }}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {m.hero.scheduleMeeting}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/case-studies"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {m.hero.viewCaseStudies}
              </Button>
            </div>

            <ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 animate-fade-in-up min-w-0"
              style={{ animationDelay: '0.75s' }}
            >
              {FEATURES.map((f) => (
                <li
                  key={f.title}
                  className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/70 hover:border-blue-500/30 hover:bg-white hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300 min-w-0"
                >
                  <span
                    className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${f.iconBg}`}
                  >
                    {f.icon}
                  </span>
                  <span className="flex flex-col text-left min-w-0 flex-1">
                    <strong className="text-[0.8125rem] font-bold text-navy-900 leading-tight break-words">
                      {f.title}
                    </strong>
                    <span className="text-[0.6875rem] text-gray-500 leading-tight mt-0.5 break-words">
                      {f.desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* --------- Right: Animated Tech Ecosystem --------- */}
          <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[600px] 2xl:max-w-[680px] aspect-square animate-fade-in">
            {/* Animated grid backdrop (panning) */}
            <div
              className="absolute inset-6 rounded-[2rem] opacity-60 animate-grid-pan"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,102,204,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,204,0.10) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                maskImage:
                  'radial-gradient(circle at center, black 40%, transparent 75%)',
                WebkitMaskImage:
                  'radial-gradient(circle at center, black 40%, transparent 75%)',
              }}
            />

            {/* Soft radial glow */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-300/30 via-teal-200/20 to-transparent blur-3xl" />

            {/* Connection SVG (animated dashed lines) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00A3E0" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0066CC" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 60, 120, 180, 240, 300].map((deg) => {
                const rad = (deg * Math.PI) / 180
                const x2 = 200 + Math.cos(rad) * 170
                const y2 = 200 + Math.sin(rad) * 170
                return (
                  <line
                    key={deg}
                    x1="200"
                    y1="200"
                    x2={x2}
                    y2={y2}
                    stroke="url(#line-grad)"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    className="animate-dash"
                  />
                )
              })}
            </svg>

            {/* Pulse rings (3 expanding) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="absolute w-40 h-40 rounded-full border border-blue-400/40 animate-ping-slow"
                style={{ animationDelay: '0s' }}
              />
              <div
                className="absolute w-40 h-40 rounded-full border border-teal-400/40 animate-ping-slow"
                style={{ animationDelay: '1.3s' }}
              />
              <div
                className="absolute w-40 h-40 rounded-full border border-blue-300/40 animate-ping-slow"
                style={{ animationDelay: '2.6s' }}
              />
            </div>

            {/* Static decorative dashed orbit rings (3 tiers) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[40%] aspect-square rounded-full border border-dashed border-blue-300/50" />
              <div className="absolute w-[64%] aspect-square rounded-full border border-dashed border-violet-300/45" />
              <div className="absolute w-[88%] aspect-square rounded-full border border-dashed border-blue-200/50" />
            </div>

            {/* Inner orbit - Dev stack (30s clockwise; icons counter-rotate to stay upright) */}
            <div className="absolute w-[40%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
              {innerOrbit.map(({ Icon, color }, i) => {
                const pos = polarPosition(i, innerOrbit.length)
                return (
                  <div
                    key={`inner-${i}`}
                    className="absolute"
                    style={{ ...pos, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="animate-spin-reverse-slow">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200/80 shadow-md shadow-blue-500/10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <Icon size={24} color={color} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Middle orbit - AI / ML (35s counter-clockwise) */}
            <div className="absolute w-[64%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-reverse-mid">
              {aiOrbit.map(({ Icon, color }, i) => {
                const pos = polarPosition(i, aiOrbit.length)
                return (
                  <div
                    key={`ai-${i}`}
                    className="absolute"
                    style={{ ...pos, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="animate-spin-mid">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-50 via-white to-blue-50 border border-violet-200/70 shadow-md shadow-violet-500/10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <Icon size={22} color={color} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Outer orbit - Cloud / Infra (50s clockwise) */}
            <div className="absolute w-[88%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slower">
              {cloudOrbit.map(({ Icon, color }, i) => {
                const pos = polarPosition(i, cloudOrbit.length)
                return (
                  <div
                    key={`cloud-${i}`}
                    className="absolute"
                    style={{ ...pos, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="animate-spin-reverse-slower">
                      <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm border border-gray-200/70 shadow shadow-blue-500/5 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <Icon size={20} color={color} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Central Glass Hub */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative group cursor-pointer">
                {/* Multi-layered glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-teal-400/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Geometric background rings */}
                <div className="absolute inset-[-20px] rounded-full border border-blue-500/10 animate-spin-slow" />
                <div className="absolute inset-[-40px] rounded-full border border-teal-500/5 animate-spin-reverse-slower" />

                {/* The Core: Glass Prism */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Internal gradient mesh */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10" />
                  
                  {/* Rotating inner geometric shapes */}
                  <div className="absolute w-16 h-16 border border-blue-400/30 rounded-2xl animate-spin-slow opacity-40" />
                  <div className="absolute w-16 h-16 border border-teal-400/30 rounded-2xl animate-spin-reverse-mid opacity-40" />

                  {/* Central Icon: Stylized Hub */}
                  <div className="relative z-10 flex flex-col items-center">
                    <CogtixSymbol className="w-16 h-16 drop-shadow-lg" />
                  </div>
                  
                  {/* Glass shine effect */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent" />
                </div>
              </div>
            </div>

            {/* Sparkle dots */}
            <span
              className="absolute top-12 left-10 w-1.5 h-1.5 rounded-full bg-blue-400 animate-shimmer"
              style={{ animationDelay: '0.2s' }}
            />
            <span
              className="absolute bottom-16 right-16 w-2 h-2 rounded-full bg-teal-400 animate-shimmer"
              style={{ animationDelay: '1s' }}
            />
            <span
              className="absolute top-1/3 right-12 w-1 h-1 rounded-full bg-blue-300 animate-shimmer"
              style={{ animationDelay: '1.8s' }}
            />
            <span
              className="absolute bottom-1/3 left-14 w-1.5 h-1.5 rounded-full bg-teal-300 animate-shimmer"
              style={{ animationDelay: '2.4s' }}
            />
          </div>
        </div>
      </Container>

      {/* <ScrollIndicator /> */}
    </section>
  )
}
