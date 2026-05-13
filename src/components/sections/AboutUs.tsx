'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/i18n/provider'

export default function AboutUs() {
  const { m } = useI18n()
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleChars, setTitleChars] = useState<string[]>([])
  const [charClipPaths, setCharClipPaths] = useState<string[]>([])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // const xMove = useTransform(scrollYProgress, [0, 1], ["20%", "-60%"])
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 80])
  const yImage3 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    [0, 1, 1]
  )
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  // Split title into characters on mount
  useEffect(() => {
    const title = m.aboutUs?.title || 'From Idea to Impact'
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTitleChars(title.split(''))
    setCharClipPaths(new Array(title.length).fill(''))
  }, [m.aboutUs?.title])

  // Calculate precise overlap areas for clip-path
  useEffect(() => {
    if (!titleRef.current) return

    const charElements = titleRef.current.querySelectorAll('.char-wrapper')
    const imageElements = document.querySelectorAll('.floating-image')

    const calculateClipPaths = () => {
      const newClipPaths = Array.from(charElements).map((charEl) => {
        const charRect = charEl.getBoundingClientRect()

        // Collect all overlapping rectangles
        const overlappingRects: DOMRect[] = []

        Array.from(imageElements).forEach((imgEl) => {
          const imgRect = imgEl.getBoundingClientRect()

          // Calculate intersection rectangle
          const left = Math.max(charRect.left, imgRect.left)
          const right = Math.min(charRect.right, imgRect.right)
          const top = Math.max(charRect.top, imgRect.top)
          const bottom = Math.min(charRect.bottom, imgRect.bottom)

          // If there's an overlap
          if (left < right && top < bottom) {
            overlappingRects.push(
              new DOMRect(left, top, right - left, bottom - top)
            )
          }
        })

        if (overlappingRects.length === 0) {
          return '' // No overlap
        }

        // Convert absolute positions to percentages relative to the character
        const polygons = overlappingRects.map((rect) => {
          const leftPercent =
            ((rect.left - charRect.left) / charRect.width) * 100
          const rightPercent =
            ((rect.right - charRect.left) / charRect.width) * 100
          const topPercent = ((rect.top - charRect.top) / charRect.height) * 100
          const bottomPercent =
            ((rect.bottom - charRect.top) / charRect.height) * 100

          return `polygon(${leftPercent}% ${topPercent}%, ${rightPercent}% ${topPercent}%, ${rightPercent}% ${bottomPercent}%, ${leftPercent}% ${bottomPercent}%)`
        })

        return polygons.join(', ')
      })

      setCharClipPaths(newClipPaths)
    }

    // Use RAF for smooth updates during scroll
    let rafId: number
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(calculateClipPaths)
    }

    // Initial check
    calculateClipPaths()

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', calculateClipPaths)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', calculateClipPaths)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [titleChars])

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div className="sticky top-0 h-[88vh] md:h-[85vh] w-full flex flex-col justify-center overflow-hidden">
        {/* Central Content Layer */}
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="relative z-20 container mx-auto px-6 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[0.625rem] font-extrabold uppercase tracking-[0.2em]">
              {m.awards.badge}
            </span>

            <h3
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight"
            >
              {titleChars.map((char, index) => (
                <span
                  key={index}
                  className="char-wrapper inline-block relative"
                >
                  {/* Base character (default color) */}
                  <span className="relative inline-block text-[#001D54]">
                    {char === ' ' ? '\u00A0' : char}
                  </span>

                  {/* Overlapping character (colored version) - only visible in overlap area */}
                  {charClipPaths[index] && (
                    <span
                      className="absolute inset-0 text-[#cdddf2]"
                      style={{
                        clipPath: charClipPaths[index],
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  )}
                </span>
              ))}
            </h3>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl mx-auto">
              {m.aboutUs?.subtitle ||
                'Assisting companies in leveraging modern technology for digital evolution.'}
            </p>

            <div className="pt-4">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest group"
              >
                {m.services.learnMore} ABOUT US
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Floating Images Layer */}
        <div className="absolute inset-0 pointer-events-none z-15">
          {/* Top Left Image */}
          <motion.div
            style={{ y: yImage1 }}
            className="floating-image absolute hidden md:block top-[15%] left-[5%] w-[150px] md:w-[280px] aspect-[7/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
          >
            <Image
              src="/about/about-us-1.webp"
              alt="Office Desk"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 150px, 280px"
            />
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div
            style={{ y: yImage3 }}
            className="floating-image absolute hidden md:block bottom-[10%] left-[15%] w-[120px] md:w-[220px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
          >
            <Image
              src="/about/team2.png"
              alt="Team Meeting"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Top Right Image */}
          <motion.div
            style={{ y: yImage2 }}
            className="floating-image absolute hidden md:block top-[10%] right-[10%] w-[180px] md:w-[320px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
          >
            <Image
              src="/about/coding.png"
              alt="Coding"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            style={{ y: yImage1 }}
            className="floating-image absolute hidden md:block bottom-[15%] right-[5%] w-[140px] md:w-[260px] aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
          >
            <Image
              src="/about/about-us-2.webp"
              alt="Analytics"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute hidden md:block top-[25%] right-[35%] w-16 h-16 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-blue-200/30"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute hidden md:block bottom-[25%] left-[38%] w-24 h-24 rounded-full bg-gradient-to-br from-blue-300/20 to-indigo-300/20 backdrop-blur-sm"
        />

        <motion.div
          animate={{
            rotate: [0, -360],
            y: [0, 40, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute hidden md:block top-[60%] left-[20%] w-12 h-12 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 backdrop-blur-sm"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />

        {/* Decorative Wave Lines - Top Left */}
        <div className="absolute hidden md:block top-8 left-8 md:top-12 md:left-12 z-5 pointer-events-none">
          <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
            <motion.path
              d="M 10 20 Q 40 10, 70 20 T 130 20 T 190 20"
              stroke="#60a5fa"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [0, 200],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              strokeDasharray="10 5"
            />
            <motion.path
              d="M 10 40 Q 40 30, 70 40 T 130 40 T 190 40"
              stroke="#3b82f6"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [200, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              strokeDasharray="10 5"
            />
            <motion.path
              d="M 10 60 Q 40 50, 70 60 T 130 60 T 190 60"
              stroke="#93c5fd"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [0, 200],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
              }}
              strokeDasharray="10 5"
            />
            <motion.path
              d="M 10 80 Q 40 70, 70 80 T 130 80 T 190 80"
              stroke="#dbeafe"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [200, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'linear',
              }}
              strokeDasharray="10 5"
            />
          </svg>
        </div>

        {/* Decorative Wave Lines - Bottom Right */}
        <div className="absolute hidden md:block bottom-8 right-8 md:bottom-12 md:right-12 z-5 pointer-events-none rotate-180">
          <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
            <motion.path
              d="M 10 20 Q 40 10, 70 20 T 130 20 T 190 20"
              stroke="#60a5fa"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [0, 200],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: 'linear',
              }}
              strokeDasharray="10 5"
            />
            <motion.path
              d="M 10 40 Q 40 30, 70 40 T 130 40 T 190 40"
              stroke="#3b82f6"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [200, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: 'linear',
              }}
              strokeDasharray="10 5"
            />
            <motion.path
              d="M 10 60 Q 40 50, 70 60 T 130 60 T 190 60"
              stroke="#93c5fd"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [0, 200],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: 'linear',
              }}
              strokeDasharray="10 5"
            />
          </svg>
        </div>

        {/* Diagonal Stripes - Top Right */}
        <div className="absolute hidden md:block top-12 right-12 z-5 pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <motion.line
              x1="0"
              y1="0"
              x2="120"
              y2="120"
              stroke="#60a5fa"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [0, 60],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              strokeDasharray="15 15"
            />
            <motion.line
              x1="20"
              y1="0"
              x2="120"
              y2="100"
              stroke="#3b82f6"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [60, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              strokeDasharray="15 15"
            />
            <motion.line
              x1="40"
              y1="0"
              x2="120"
              y2="80"
              stroke="#93c5fd"
              strokeWidth="2.5"
              strokeLinecap="round"
              animate={{
                strokeDashoffset: [0, 60],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              strokeDasharray="15 15"
            />
          </svg>
        </div>

        {/* Zigzag Lines - Bottom Left */}
        <div className="absolute hidden md:block bottom-12 left-12 z-5 pointer-events-none">
          <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
            <motion.path
              d="M 0 20 L 30 10 L 60 20 L 90 10 L 120 20 L 150 10 L 180 20"
              stroke="#3b82f6"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                strokeDashoffset: [0, 120],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              strokeDasharray="10 10"
            />
            <motion.path
              d="M 0 45 L 30 35 L 60 45 L 90 35 L 120 45 L 150 35 L 180 45"
              stroke="#60a5fa"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                strokeDashoffset: [120, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
              strokeDasharray="10 10"
            />
            <motion.path
              d="M 0 70 L 30 60 L 60 70 L 90 60 L 120 70 L 150 60 L 180 70"
              stroke="#93c5fd"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                strokeDashoffset: [0, 120],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              strokeDasharray="10 10"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
