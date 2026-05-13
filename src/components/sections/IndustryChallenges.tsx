'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ServiceVariant, serviceThemes } from './service-themes';

export interface Challenge {
  icon: React.ReactNode;
  challenge: string;
  solution: string;
}

interface IndustryChallengesProps {
  variant?: ServiceVariant;
  subtitle?: string;
  title: string;
  description: string;
  challenges: Challenge[];
  challengeLabel?: string;
  solutionLabel?: string;
}

export default function IndustryChallenges({
  variant = 'enterprise',
  subtitle = 'Industry Challenges',
  title,
  description,
  challenges,
  challengeLabel = 'The Challenge',
  solutionLabel = 'Our Solution',
}: IndustryChallengesProps) {
  const theme = serviceThemes[variant];

  return (
    <section className="relative py-10 md:py-14 bg-slate-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Theme-based gradient orb */}
        <div 
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} rounded-full blur-[120px] opacity-[0.05] -translate-y-1/2 translate-x-1/3`}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${theme.badgeBg} ${theme.badgeText} mb-6`}
          >
            <span className="text-sm font-semibold uppercase tracking-wider">
              {subtitle}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((item, idx) => (
            <motion.div
              key={item.challenge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`} />

              <div className="flex-1 flex flex-col pt-4">
                <div className="mb-6 flex items-start gap-4">
                  {item.icon && (
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme.badgeBg} ${theme.accentText}`}
                      aria-hidden
                    >
                      {item.icon}
                    </span>
                  )}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                      {challengeLabel}
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 leading-tight">
                      {item.challenge}
                    </h3>
                  </div>
                </div>

                <div className="relative mt-auto">
                  <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${theme.accentText}`}>
                    {solutionLabel}
                  </span>
                  <p className="text-gray-600 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
