'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/i18n/provider'

export default function AboutUs() {
  const { m } = useI18n()
  const title = m.aboutUs?.title || 'From Idea to Impact'

  return (
    <section className="relative bg-white py-12 md:py-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -left-24 top-12 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
      </div>

      <div className="container relative z-20 mx-auto px-6">
        <div className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center text-center relative">
          {/* Centered Content Wrapper - Anchors images and text together */}
          <div className="relative w-full max-w-[1400px] mx-auto min-h-[500px] flex items-center justify-center">
            
            {/* Side Images - Left (Anchored to inner container) */}
            <div className="absolute left-0 top-0 bottom-0 w-[150px] lg:w-[280px] hidden md:flex flex-col justify-around pointer-events-none z-10">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full aspect-[7/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 -translate-x-4 lg:-translate-x-12"
              >
                <Image
                  src="/about/about-us-1.webp"
                  alt="Office Desk"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="relative w-[80%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 translate-x-4 lg:translate-x-8"
              >
                <Image
                  src="/about/team2.png"
                  alt="Team Meeting"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Central Text Content */}
            <div className="max-w-2xl mx-auto space-y-6 md:space-y-8 relative z-30 px-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[0.625rem] font-extrabold uppercase tracking-[0.2em]">
                {m.awards.badge}
              </span>

              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#001D54]">
                {title}
              </h3>

              <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed mx-auto">
                {m.aboutUs?.subtitle ||
                  'Assisting companies in leveraging modern technology for digital evolution.'}
              </p>

              <div className="pt-2 md:pt-4">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest group"
                >
                  {m.services.learnMore} ABOUT US
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Side Images - Right (Anchored to inner container) */}
            <div className="absolute right-0 top-0 bottom-0 w-[180px] lg:w-[320px] hidden md:flex flex-col justify-around items-end pointer-events-none z-10">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 translate-x-4 lg:translate-x-12"
              >
                <Image
                  src="/about/coding.png"
                  alt="Coding"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="relative w-[85%] aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 -translate-x-4 lg:-translate-x-8"
              >
                <Image
                  src="/about/about-us-2.webp"
                  alt="Analytics"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile Images - Grid below text for smaller screens */}
          <div className="grid grid-cols-2 gap-4 mt-12 md:hidden w-full max-w-sm">
            <div className="relative aspect-[7/5] rounded-xl overflow-hidden shadow-lg border border-slate-100">
               <Image src="/about/about-us-1.webp" alt="Office" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-100">
               <Image src="/about/coding.png" alt="Coding" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Lines - Top Left (Infinite Loop) */}
      <div className="absolute hidden md:block top-8 left-8 lg:top-12 lg:left-12 z-5 pointer-events-none opacity-20">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
          <motion.path
            d="M 10 20 Q 40 10, 70 20 T 130 20 T 190 20"
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="10 5"
          />
          <motion.path
            d="M 10 40 Q 40 30, 70 40 T 130 40 T 190 40"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="10 5"
          />
        </svg>
      </div>

      {/* Decorative Wave Lines - Bottom Right (Infinite Loop) */}
      <div className="absolute hidden md:block bottom-8 right-8 lg:bottom-12 lg:right-12 z-5 pointer-events-none rotate-180 opacity-20">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
          <motion.path
            d="M 10 20 Q 40 10, 70 20 T 130 20 T 190 20"
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="10 5"
          />
          <motion.path
            d="M 10 40 Q 40 30, 70 40 T 130 40 T 190 40"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="10 5"
          />
        </svg>
      </div>

      {/* Diagonal Stripes - Top Right (Infinite Loop) */}
      <div className="absolute hidden md:block top-12 right-12 z-5 pointer-events-none opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <motion.line
            x1="0" y1="0" x2="120" y2="120"
            stroke="#60a5fa" strokeWidth="2"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="8 8"
          />
          <motion.line
            x1="20" y1="0" x2="140" y2="120"
            stroke="#3b82f6" strokeWidth="2"
            animate={{ strokeDashoffset: [0, 40] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      {/* Zigzag Lines - Bottom Left (Infinite Loop) */}
      <div className="absolute hidden md:block bottom-12 left-12 z-5 pointer-events-none opacity-20">
        <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
          <motion.path
            d="M 0 20 L 30 10 L 60 20 L 90 10 L 120 20 L 150 10 L 180 20"
            stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="10 10"
          />
          <motion.path
            d="M 0 45 L 30 35 L 60 45 L 90 35 L 120 45 L 150 35 L 180 45"
            stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
            animate={{ strokeDashoffset: [0, 100] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            strokeDasharray="10 10"
          />
        </svg>
      </div>
    </section>
  )
}
