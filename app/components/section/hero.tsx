"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Senior Devs use this for optimization
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072",
    title: "Saint Valentin 2026",
    subtitle: "COLLECTION",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2052",
    title: "Freshly Baked",
    subtitle: "TRADITION",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2080",
    title: "Artisan Breads",
    subtitle: "DAILY FRESH",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#F2EDE4]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Next.js Image Component for better performance */}
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            priority
            className="object-cover"
          />
          
          {/* Overlay to match your minimalist aesthetic */}
          <div className="absolute inset-0 bg-black/5" />

          {/* Text Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center drop-shadow-md">
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm tracking-[0.5em] font-light mb-2 uppercase"
            >
              {slides[index].subtitle}
            </motion.p>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-7xl font-serif italic"
            >
              {slides[index].title}
            </motion.h1>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots (Same as your screenshot) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === i ? "bg-white w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}