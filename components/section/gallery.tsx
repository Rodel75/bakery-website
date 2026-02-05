'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Sample Gallery Data - Pwede mong palitan ang links ng actual photos niyo
const galleryItems = [
  { id: 1, title: 'Signature Mango', size: 'large', src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729' },
  { id: 2, title: 'Strawberry Dream', size: 'small', src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
  { id: 3, title: 'Dark Choco Ganache', size: 'small', src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c' },
  { id: 4, title: 'Handcrafted Layers', size: 'medium', src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b' },
  { id: 5, title: 'Classic Graham', size: 'medium', src: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38' },
  { id: 6, title: 'Premium Series', size: 'small', src: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#E9298E] text-[10px] font-bold uppercase tracking-[0.5em] block mb-4"
          >
            Visual Cravings
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-stone-900">
            The <span className="text-[#E9298E] font-sans not-italic font-bold">Sweet</span> Collection
          </h2>
          <p className="mt-6 text-stone-400 font-light max-w-md mx-auto text-sm leading-relaxed">
            Take a look at our handcrafted layers of joy. Every tub is a masterpiece made with love.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative group overflow-hidden rounded-2xl bg-stone-100",
                item.size === 'large' ? "md:row-span-2 md:col-span-1" : "",
                item.size === 'medium' ? "md:col-span-2" : ""
              )}
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
                  <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Artisan Graham</p>
                  <h3 className="text-white font-serif italic text-2xl">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="mt-16 text-center">
          <p className="text-stone-300 text-[9px] font-bold uppercase tracking-[0.4em]">
            Tag us on Instagram @KOM_SweetCravings
          </p>
        </div>
      </div>
    </section>
  );
}

// Utility function para sa grid classes
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}