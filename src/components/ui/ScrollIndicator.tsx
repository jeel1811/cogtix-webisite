'use client'

import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface ScrollIndicatorProps {
  /** Optional id of the section to scroll to. Falls back to one viewport down. */
  targetId?: string
  className?: string
}

/**
 * Subtle, bouncing chevron at the bottom of full-height hero sections that
 * communicates there is more content below. Click scrolls to the next section
 * (by id, if provided) or one viewport down.
 */
export default function ScrollIndicator({
  targetId,
  className = '',
}: ScrollIndicatorProps) {
  const handleClick = () => {
    if (targetId) {
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      aria-label="Scroll to next section"
      className={`group absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 cursor-pointer items-center justify-center md:flex ${className}`}
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/80 shadow-sm backdrop-blur-sm transition-colors group-hover:border-blue-400 group-hover:bg-white">
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex"
        >
          <ChevronDown className="h-4 w-4 text-slate-600 transition-colors group-hover:text-blue-600" />
        </motion.span>
      </span>
    </motion.button>
  )
}
