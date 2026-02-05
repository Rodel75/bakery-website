"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    // High-end Mango Dessert Shot (Clear and Bright)
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2000",
    title: "The Golden Mango",
    subtitle: "SIGNATURE REVELATION",
  },
  {
    id: 2,
    // Premium Cream/Cake Texture (Very Detailed)
    image: "https://images.unsplash.com/photo-1464347744102-11db6282f854?q=80&w=2000",
    title: "Hand-Chilled Perfection",
    subtitle: "24-HOUR ARTISAN PROCESS",
  },
  {
    id: 3,
    // Dark Chocolate/Artisan Cocoa Detail
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2000",
    title: "Dark Cocoa Layers",
    subtitle: "PREMIUM SEASONAL BATCH",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Bagalan natin ang auto-slide (7 seconds) para ma-appreciate ang pic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#F9F7F4]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }} // Mas smooth na transition
          className="absolute inset-0"
        >
          {/* Ken Burns Effect: Subtle zoom-in animation habang naka-display */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].image}
              alt={slides[index].title}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          
          {/* Vignette Overlay: Mas madilim sa gilid para lutang ang text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <span className="text-[10px] md:text-xs tracking-[0.8em] font-bold uppercase drop-shadow-md inline-block border-b border-white/20 pb-2">
                {slides[index].subtitle}
              </span>
              
              <h1 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-[0.85]">
                {slides[index].title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "text-[#CFA6A0] font-light block md:inline" : "block md:inline"}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <div className="pt-8">
                <button className="group relative overflow-hidden px-12 py-5 border border-white/40 backdrop-blur-sm bg-white/5 text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-700 hover:bg-white hover:text-black">
                  <span className="relative z-10">Discover Menu</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Numbered Pagination */}
      <div className="absolute bottom-12 right-12 z-20 flex flex-col gap-4 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group flex items-center gap-4 outline-none"
          >
            <span className={`text-[10px] font-bold transition-all duration-500 ${index === i ? "text-white scale-125" : "text-white/30"}`}>
              0{i + 1}
            </span>
            <div className={`h-[1px] transition-all duration-700 ${index === i ? "w-12 bg-[#CFA6A0]" : "w-4 bg-white/20"}`} />
          </button>
        ))}
      </div>

      {/* Side Brand Indicator */}
      <div className="absolute left-12 bottom-12 hidden md:block">
        <p className="text-[9px] text-white/40 tracking-[0.6em] uppercase [writing-mode:vertical-lr] rotate-180">
          Artisan Graham — Est. 2026
        </p>
      </div>

      {/* Elegant Scroll Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-white/0 to-white/60" />
    </section>
  );
}