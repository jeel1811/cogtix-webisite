'use client';

import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
// import Button from '@/components/ui/Button';
import { ServiceVariant, serviceThemes } from './service-themes';
import Image from 'next/image';

interface IndustryHeroProps {
  variant?: ServiceVariant;
  subtitle?: string;
  title: string;
  highlight?: string;
  description: string;
  image?: string;
  cta?: { text: string; href: string };
  stats?: { value: string; label: string }[];
}

export default function IndustryHero({
  variant = 'enterprise',
  subtitle,
  title,
  highlight,
  description,
  image,
  stats,
}: IndustryHeroProps) {
  const theme = serviceThemes[variant];

  // Split title if highlight exists
  let titleParts = [title];
  if (highlight && title.includes(highlight)) {
    titleParts = title.split(highlight);
  }

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-slate-50 pt-24 pb-16">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Crisp grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${theme.gradientTo.replace('to-', '')} 1px, transparent 1px), linear-gradient(90deg, ${theme.gradientTo.replace('to-', '')} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Geometric Glass Orbs */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} rounded-full blur-[150px] opacity-[0.07]`}
        />
        
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className={`absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr ${theme.gradientFrom} ${theme.gradientTo} rounded-[40%] blur-[120px] opacity-[0.05]`}
        />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content (Spans 7 cols on large screens) */}
          <div className="lg:col-span-7">
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.badgeBg} ${theme.badgeText} border border-gray-100 mb-8`}
              >
                <span className="text-sm font-bold uppercase tracking-widest">
                  {subtitle}
                </span>
              </motion.div>
            )}

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.1] tracking-tight mb-8"
            >
              {highlight ? (
                <>
                  {titleParts[0]}{' '}
                  <span className={`${theme.accentText} font-semibold`}>
                    {highlight}
                  </span>{' '}
                  {titleParts[1]}
                </>
              ) : (
                title
              )}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10"
            >
              {description}
            </motion.p>

            {/* {cta && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  href={cta.href}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-lg shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  {cta.text}
                </Button>
              </motion.div>
            )} */}

            {stats && stats.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-gray-200 pt-5"
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className={`text-xl font-bold md:text-2xl ${theme.accentText}`}>
                      {s.value}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          <div className="relative lg:col-span-5 flex justify-center mt-8 lg:mt-0">
            {image && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative aspect-[4/3] w-full max-w-lg animate-[float-y-soft_8s_ease-in-out_infinite]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-white/10 rounded-[2rem] shadow-2xl backdrop-blur-sm -rotate-3 z-0" />
                <div className="absolute inset-0 bg-white/40 rounded-[2rem] shadow-xl backdrop-blur-md rotate-3 z-0" />
                <div className="relative z-10 h-full w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/50 bg-white">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
