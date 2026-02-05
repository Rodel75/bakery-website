'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { bestSellers } from '@/lib/constants'; 
import ProductCard from '@/components/ui/product-card';
import { ProductQuickView } from '@/components/ui/productquickview';

export default function Bestsellers() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E9298E]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#E9298E]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20 lg:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#E9298E] block mb-4"
          >
            Freshly Chilled Artisan Cakes
          </motion.span>
          
          <h2 className="text-5xl md:text-7xl font-serif italic text-stone-900 leading-tight">
            Our Most <span className="text-[#E9298E] font-sans not-italic font-bold tracking-tighter">Loved</span> Tubs
          </h2>
          
          <p className="mt-6 text-stone-400 font-light max-w-lg mx-auto text-[13px] leading-relaxed">
            Handcrafted graham creations made with premium cream and the finest ingredients. 
            Experience the perfect balance of sweetness in every chilled bite.
          </p>
        </div>

        {/* Product Grid - Fixed to 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 w-full">
          {bestSellers.slice(0, 4).map((product, idx) => (
            <motion.div
              key={product.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group flex flex-col w-full"
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] bg-stone-50">
                <ProductCard product={product} />
                
                {/* Bestseller Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <motion.span 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="bg-white/90 backdrop-blur-md px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#E9298E] shadow-sm border border-pink-100 block rounded-full"
                  >
                    Bestseller
                  </motion.span>
                </div>

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product Info - Better Alignment */}
              <div className="space-y-2 text-center min-h-[60px] flex flex-col justify-start">
                <h3 className="text-[13px] font-bold uppercase tracking-widest text-stone-900 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-[15px] font-semibold text-[#E9298E]">
                  ₱{product.price?.toLocaleString()}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <ProductQuickView product={product}>
                  <button className="w-full py-4 text-[10px] font-bold uppercase tracking-widest bg-stone-900 text-white hover:bg-[#E9298E] transition-all duration-500 rounded-full shadow-md hover:shadow-[#E9298E]/20">
                    Order Now
                  </button>
                </ProductQuickView>
                
                <a 
                  href={`https://m.me/YOUR_PAGE_ID?text=Hi! I want to inquire about ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-1 text-[9px] font-bold uppercase tracking-widest text-stone-300 hover:text-[#E9298E] transition-colors duration-300"
                >
                  Quick Inquiry
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features / Value Proposition */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-pink-50 pt-16"
        >
          {[
            { title: "Freshly Made", desc: "Every tub is prepared fresh daily to ensure the perfect texture and creaminess." },
            { title: "Premium Quality", desc: "We use only high-grade cream and authentic ingredients. No artificial fillers." },
            { title: "Fast Delivery", desc: "Get your cravings satisfied quickly with our efficient local delivery partners." }
          ].map((item, i) => (
            <div key={i} className="space-y-3 text-center md:text-left">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E9298E]">{item.title}</h4>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="mt-24 flex justify-center">
          <Link href="/shop">
            <Button 
              className="group rounded-full px-12 py-7 border-stone-200 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900 hover:bg-[#E9298E] hover:text-white transition-all duration-500"
            >
              Browse Full Menu
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}