'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { ServiceVariant, serviceThemes } from './service-themes';

export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}

interface IndustryImpactProps {
  variant?: ServiceVariant;
  subtitle?: string;
  title: string;
  description: string;
  metrics: ImpactMetric[];
}

export default function IndustryImpact({
  variant = 'enterprise',
  subtitle = 'Business Impact',
  title,
  description,
  metrics,
}: IndustryImpactProps) {
  const theme = serviceThemes[variant];

  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Abstract geometric background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Glowing Orb */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} rounded-full blur-[150px] opacity-10`} />

        {/* Diagonal stripes overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-stripe" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="20" height="40" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-stripe)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Text Content */}
          <div className="lg:w-1/3 sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6`}
            >
              <span className={`text-sm font-semibold uppercase tracking-wider ${theme.accentText}`}>
                {subtitle}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              {description}
            </motion.p>
            
            {/* Decorative line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`h-1 w-24 bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} mt-10 rounded-full origin-left`}
            />
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                {/* Metric Value */}
                <div className="mb-4">
                  <span className={`text-5xl lg:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo}`}>
                    {metric.value}
                  </span>
                </div>
                
                {/* Metric Label */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {metric.label}
                </h3>
                
                {/* Metric Description */}
                <p className="text-gray-400 leading-relaxed">
                  {metric.description}
                </p>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b ${theme.gradientFrom} ${theme.gradientTo} transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out`} />
                  <div className={`absolute top-0 right-0 h-2 w-full bg-gradient-to-l ${theme.gradientFrom} ${theme.gradientTo} transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out`} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
