'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function BlogsHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 pt-28 pb-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />

        {/* Floating Glowing Orbs */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.14, 0.22, 0.14]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-200 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.12, 0.18, 0.12]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-200 rounded-full blur-[140px]"
        />

        {/* Diagonal stripes overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blogs-diagonal-stripe" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="20" height="40" fill="#0f172a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blogs-diagonal-stripe)" />
        </svg>
      </div>

      <Container className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center pt-6 md:pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-950 mb-8 tracking-tight leading-[1.1]"
          >
            Insights &<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-600">
              Knowledge.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Discover expert insights on software development, cloud technologies, digital transformation, and industry best practices to accelerate your digital journey.
          </motion.p>
          
          {/* Decorative scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-3"
          >
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
