"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Container from "@/components/ui/Container";
import { useI18n } from "@/i18n/provider";

interface TestimonialItem {
  name: string;
  title: string;
  description: string;
}

/* ------------------ TESTIMONIAL CARD ------------------ */
function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="bg-white px-8 py-9 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-50 relative h-full flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_30px_70px_-15px_rgba(59,130,246,0.12)]">
      {/* Flipped Quote Icon to show as Opening Quote */}
      <div className="absolute top-6 left-6 text-[#cdddf2] transition-all duration-300 scale-x-[-1]">
        <Quote size={36} className="fill-current" />
      </div>
      
      <div className="relative z-10">
        <p className="text-slate-600 leading-relaxed text-[15.5px] mb-8 pt-4 font-medium italic">
          &quot;{item.description}&quot;
        </p>
        
        <div className="flex flex-col border-t border-slate-100 pt-6">
          <h5 className="font-bold text-[#001D54] text-base leading-tight">
            {item.name}
          </h5>
          <p className="text-[10px] text-blue-600 font-extrabold uppercase tracking-[0.2em] mt-2">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------ MAIN SECTION ------------------ */
export default function Testimonials() {
  const { m } = useI18n();
  const { testimonials } = m;
  const items = testimonials.items;
  const { stats } = testimonials;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  // Total pages = total items / 2 (rounded up if odd)
  const totalPages = Math.ceil(items.length / 2);

  const rotate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + 2;
      return nextIndex >= items.length ? 0 : nextIndex;
    });
  }, [items.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => rotate(1), 5000);
    return () => clearInterval(timer);
  }, [isPaused, rotate]);

  // Get current 2 items to display (distinct pairs)
  const visibleItems = [
    items[currentIndex],
    items[(currentIndex + 1) % items.length]
  ];

  return (
    <section 
      id="testimonials" 
      className="py-10 lg:py-14 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Solid White Base */}
        <div className="absolute inset-0 bg-blue-50/60 -z-20" />
        
        {/* Soft Background Orbs */}
        <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-[#cdddf2]/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] bg-blue-50/30 rounded-full blur-[80px]" />
        
        {/* Decorative Dot Grid - Positioned between text and carousel */}
        <div className="absolute top-[15%] left-[42%] grid gap-[14px] z-0"
          style={{ gridTemplateColumns: 'repeat(9, 1fr)' }}>
          {[...Array(63)].map((_, i) => (
            <div key={i} className={`w-[5px] h-[5px] rounded-full bg-[#cdddf2] transition-opacity
              ${i < 9 ? 'opacity-40' : i >= 54 ? 'opacity-30' : 'opacity-80'}`} />
          ))}
        </div>
      </div>

      <Container className="max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-20 items-center">
          
          {/* Left: Content Area */}
          <div className="lg:col-span-5 space-y-7">
             <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase tracking-[0.2em]">
               {testimonials.badge}
            </span>
            
            {/* Solid Brand Color Title (No Gradient) */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight text-[#001D54]">
               {testimonials.subtitle}
            </h2>
            
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg font-medium">
              {testimonials.description}
            </p>
            
            <div className="flex items-center gap-12 pt-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-[#001D54] tracking-tighter">
                  {stats.implementations}
                </span>
                <span className="text-[12px] font-bold text-slate-400 max-w-[100px] leading-snug">
                  {stats.implementationsLabel}
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-[#001D54] tracking-tighter">
                  {stats.minds}
                </span>
                <span className="text-[12px] font-bold text-slate-400 max-w-[100px] leading-snug">
                  {stats.mindsLabel}
                </span>
              </div>
            </div>

            {/* Navigation Indicators (One dot per pair) */}
            <div className="flex items-center gap-2.5 pt-6">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i * 2 > currentIndex ? 1 : -1);
                    setCurrentIndex(i * 2);
                  }}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    i * 2 === currentIndex ? "w-10 bg-[#001D54]" : "w-2.5 bg-[#cdddf2]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Carousel Area */}
          <div className="lg:col-span-7 relative">
            <div className="overflow-hidden py-10 px-4 -mx-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className="flex flex-col md:flex-row gap-6 w-full"
                >
                  {visibleItems.map((item, i) => (
                    <div key={`${currentIndex}-${i}`} className="flex-1 min-w-0">
                      <TestimonialCard item={item} />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
