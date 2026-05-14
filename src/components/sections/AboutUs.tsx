'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/i18n/provider'

// ── Floating geometric shape config ──────────────────────────────────────────
const shapes = [
  // circles
  { type: 'circle', x: '8%',  y: '12%', size: 44, color: '#3b82f620', duration: 6,  delay: 0   },
  { type: 'circle', x: '88%', y: '18%', size: 28, color: '#06b6d420', duration: 8,  delay: 1.5 },
  { type: 'circle', x: '75%', y: '78%', size: 56, color: '#818cf830', duration: 7,  delay: 0.5 },
  { type: 'circle', x: '18%', y: '80%', size: 20, color: '#3b82f625', duration: 9,  delay: 2   },
  // rings (circle with stroke only)
  { type: 'ring',   x: '92%', y: '55%', size: 48, color: '#3b82f640', duration: 10, delay: 1   },
  { type: 'ring',   x: '5%',  y: '50%', size: 36, color: '#06b6d440', duration: 7,  delay: 3   },
  // triangles
  { type: 'tri',    x: '15%', y: '22%', size: 30, color: '#f59e0b30', duration: 9,  delay: 0.8 },
  { type: 'tri',    x: '82%', y: '70%', size: 22, color: '#818cf840', duration: 6,  delay: 2.5 },
  // squares (rotated 45°)
  { type: 'square', x: '60%', y: '8%',  size: 22, color: '#3b82f625', duration: 8,  delay: 1.2 },
  { type: 'square', x: '30%', y: '90%', size: 18, color: '#06b6d425', duration: 11, delay: 0.3 },
  // dots cluster
  { type: 'dot',    x: '50%', y: '5%',  size: 8,  color: '#3b82f650', duration: 5,  delay: 0   },
  { type: 'dot',    x: '52%', y: '5%',  size: 5,  color: '#818cf860', duration: 6,  delay: 0.4 },
  { type: 'dot',    x: '48%', y: '7%',  size: 6,  color: '#06b6d450', duration: 7,  delay: 0.8 },
  { type: 'dot',    x: '4%',  y: '38%', size: 7,  color: '#f59e0b50', duration: 8,  delay: 1   },
  { type: 'dot',    x: '96%', y: '38%', size: 7,  color: '#f59e0b50', duration: 8,  delay: 1.4 },
  // cross / plus
  { type: 'cross',  x: '22%', y: '60%', size: 20, color: '#3b82f640', duration: 7,  delay: 2.2 },
  { type: 'cross',  x: '78%', y: '35%', size: 16, color: '#818cf840', duration: 9,  delay: 0.6 },
]

function Shape({ type, x, y, size, color, duration, delay }: typeof shapes[0]) {

  const style = { position: 'absolute' as const, left: x, top: y, pointerEvents: 'none' as const, zIndex: 1 }

  if (type === 'circle')
    return (
      <motion.div style={{ ...style, width: size, height: size, borderRadius: '50%', background: color }}
        animate={{ y: [0, -14, 0] }} transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }} />
    )
  if (type === 'ring')
    return (
      <motion.div style={{ ...style, width: size, height: size, borderRadius: '50%', border: `2.5px solid ${color}`, background: 'transparent' }}
        animate={{ y: [0, -12, 0], rotate: [0, 180, 360] }} transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }} />
    )
  if (type === 'tri') {
    const half = size / 2
    return (
      <motion.div style={style} animate={{ y: [0, -10, 0], rotate: [0, 15, 0, -15, 0] }} transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <polygon points={`${half},2 ${size - 2},${size - 2} 2,${size - 2}`} fill={color} />
        </svg>
      </motion.div>
    )
  }
  if (type === 'square')
    return (
      <motion.div style={{ ...style, width: size, height: size, background: color, borderRadius: 3 }}
        animate={{ rotate: [45, 90, 45], y: [0, -10, 0] }} transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }} />
    )
  if (type === 'dot')
    return (
      <motion.div style={{ ...style, width: size, height: size, borderRadius: '50%', background: color }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }} />
    )
  if (type === 'cross')
    return (
      <motion.div style={style} animate={{ rotate: [0, 90, 0], y: [0, -8, 0] }} transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <rect x={size / 2 - 1.5} y={2} width={3} height={size - 4} rx={1.5} fill={color} />
          <rect x={2} y={size / 2 - 1.5} width={size - 4} height={3} rx={1.5} fill={color} />
        </svg>
      </motion.div>
    )
  return null
}

export default function AboutUs() {
  const { m } = useI18n()
  const title    = m.aboutUs?.title    || 'From Idea to Impact'
  const subtitle = m.aboutUs?.subtitle || 'Assisting companies in leveraging modern technology for digital evolution.'

  return (
    <section className="relative bg-white py-14 md:py-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-8  h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      {/* ── Floating geometric shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {shapes.map((s, i) => <Shape key={i} {...s} />)}
      </div>

      <div className="container relative z-20 mx-auto px-6">

        {/* ── Centered Text Block ──────────────────────────────── */}
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[0.625rem] font-extrabold uppercase tracking-[0.2em]">
            {m.awards.badge}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#001D54] leading-tight">
            {title}
          </h2>

          <p className="text-sm md:text-base text-gray-500 leading-relaxed">
            {subtitle}
          </p>

          <div>
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest group"
            >
              {m.services.learnMore} ABOUT US
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Image Collage ───────────────────────────────────── */}

        {/* MOBILE: 2×2 grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
          {[
            { src: '/about/about-us-1.webp', alt: 'Office' },
            { src: '/about/coding.png',      alt: 'Coding' },
            { src: '/about/team2.png',        alt: 'Team'  },
            { src: '/about/about-us-2.webp', alt: 'Work'   },
          ].map((img, i) => (
            <motion.div key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        {/* DESKTOP: 3-column overlapping collage
            Wrapped in max-w-6xl to keep it tight on large screens */}
        <div className="hidden md:flex mt-6 max-w-6xl mx-auto items-end justify-center gap-6 lg:gap-12">

          {/* ── Left cluster ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex-shrink-0"
            style={{ width: 340, height: 360 }}
          >
            {/* Front — landscape top-left */}
            <div className="absolute top-4 left-0 w-52 h-40 rounded-2xl overflow-hidden shadow-2xl border-2 border-white z-20">
              <Image
                src="/about/about-us-1.webp"
                alt="Office Desk"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Back — square Cogtix Logo card bottom-right */}
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-white z-10 bg-[#001D54] flex items-center justify-center p-8 group">
              <div className="relative w-full h-full">
                <Image
                  src="/cogtix.svg"
                  alt="Cogtix Logo"
                  fill
                  className="object-contain brightness-0 invert transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* ── Centre tall image ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex-shrink-0 w-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-white z-30"
            style={{ height: 380 }}
          >
            <Image
              src="/about/coding.png"
              alt="Engineering at Work"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* ── Right cluster ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative flex-shrink-0"
            style={{ width: 340, height: 360 }}
          >
            {/* Back — portrait top-right */}
            <div className="absolute top-4 right-0 w-44 h-60 rounded-2xl overflow-hidden shadow-xl border-2 border-white z-10">
              <Image
                src="/about/about-us-2.webp"
                alt="Analytics"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Front — landscape bottom-left */}
            <div className="absolute bottom-0 left-0 w-52 h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-white z-20">
              <Image
                src="/about/team2.png"
                alt="Office Space"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
