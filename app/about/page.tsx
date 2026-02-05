'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-white pt-40 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E9298E] uppercase tracking-[0.6em] text-[10px] font-bold mb-4 block"
          >
            Since 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic text-stone-900 mb-8"
          >
            K.O.M Sweet Craving&apos;s
          </motion.h1>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "80px" }}
             viewport={{ once: true }}
             className="h-px bg-[#E9298E]/30 mx-auto"
          />
        </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
       
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
 
            <div className="absolute -inset-4 border border-[#E9298E]/10 translate-x-4 translate-y-4 -z-10" />
            <div className="relative aspect-[4/5] bg-stone-50 overflow-hidden shadow-xl rounded-sm">
              <Image 
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b" 
                alt="Artisan Graham Preparation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-serif italic text-stone-900 leading-tight">
                Crafting layers of joy, <br />
                <span className="text-xl text-stone-400 not-italic font-sans uppercase tracking-widest">one tub at a time.</span>
              </h3>
              <p className="text-stone-500 leading-relaxed text-[15px] font-light">
                Ang **K.O.M Sweet Craving&apos;s** ay nagsimula sa simpleng pagmamahal sa home-made treats. Ang layunin namin ay i-level up ang paboritong Filipino Graham cake para maging isang artisan dessert experience. Hindi lang kami nagtitimpla; bawat layer ay pinag-iisipan.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-stone-500 leading-relaxed text-[15px] font-light">
                Naniniwala kami na ang sikreto ay nasa kalidad ng ingredients. Mula sa aming signature premium cream blend hanggang sa mga pinaka-fresh na prutas, bawat batch ay handcrafted daily para masiguro ang tamang tamis at texture.
              </p>
            </motion.div>

         
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-10 border-t border-stone-100"
            >
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#E9298E] mb-6">
                Our Specialties
              </h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                {['Classic Mango', 'Strawberry Cheesecake', 'Dark Choco Graham', 'Premium Tubs'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[11px] font-bold text-stone-800 uppercase tracking-tighter">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E9298E]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

 
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center py-24 px-8 bg-[#FDFCFD] border border-stone-50 rounded-2xl"
        >
          <p className="text-stone-900 font-serif italic text-2xl md:text-3xl max-w-2xl mx-auto leading-relaxed">
            &ldquo;Savor the layers, share the craving.&rdquo;
          </p>
          <div className="mt-10 flex flex-col items-center">
            <div className="w-12 h-px bg-[#E9298E] mb-6" />
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400">
              Artisan Graham Desserts
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}