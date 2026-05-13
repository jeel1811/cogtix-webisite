"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useI18n } from "@/i18n/provider";

export default function WhyChooseUs() {
  const { m } = useI18n();

  const checklist = [
    m.whyChooseUs.trackRecord,
    m.whyChooseUs.certifiedExperts,
    m.whyChooseUs.clientCentric,
    m.whyChooseUs.innovativeSolutions,
    m.whyChooseUs.endToEndSupport,
  ];

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1e293b 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Decorative elements behind image */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-pink-50 rounded-full blur-3xl opacity-60 animate-pulse delay-700" />
              
              <Image
                src="/why-choose-us.png"
                alt="Why Choose Cogtix"
                fill
                className="object-contain relative z-10"
                priority
              />

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 z-20 w-8 h-8 text-blue-400 opacity-60"
              >
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 z-20 w-6 h-6 text-blue-400 opacity-50"
              >
                <div className="w-full h-full rounded-full border-2 border-current" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-4 z-20 w-4 h-4 text-pink-400 opacity-60"
              >
                <div className="w-full h-full rotate-45 border-t-2 border-l-2 border-current" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
                {m.whyChooseUs.badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] mb-8">
              {m.whyChooseUs.title}
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              {m.whyChooseUs.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
              {checklist.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-700 font-medium group-hover:text-navy-900 transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
