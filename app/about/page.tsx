import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] pt-32 pb-20 px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#4A5D4E] uppercase tracking-[0.5em] text-[10px] font-bold mb-3">
            Our Story
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif italic text-[#2C2420] mb-6">
            K.O.M Sweet Craving&apos;s
          </h1>
          <div className="w-20 h-px bg-[#4A5D4E] mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Placeholder */}
          <div className="relative aspect-4/5 bg-stone-200 overflow-hidden rounded-sm shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b" // Pwede mong palitan ng picture ng bakery niyo
              alt="Artisan Graham Preparation"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif italic text-[#2C2420]">
                More than just a dessert.
              </h3>
              <p className="text-[#8C6D4F] leading-relaxed italic text-sm">
                Started from a simple love for home-made treats, K.O.M Sweet Craving&apos;s was born out of the desire to elevate the classic Filipino Graham cake into an artisan experience.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[#2C2420]/80 leading-relaxed text-sm">
                We believe that every layer tells a story. From our hand-picked mangoes to our signature premium cream blend, we don&apos;t take shortcuts. Each batch is handcrafted daily to ensure that you get the perfect balance of crunch and sweetness.
              </p>
            </div>

            {/* Specialties List */}
            <div className="pt-6 border-t border-stone-200">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4A5D4E] mb-4">
                Our Specialties
              </h4>
              <ul className="grid grid-cols-2 gap-y-3">
                {['Mango Graham', 'Cheesecake Graham', 'Choco Graham', 'Premium Grahams'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[11px] font-bold text-[#2C2420]/70 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A5D4E]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center border border-[#4A5D4E]/20 p-12 bg-white/50">
          <p className="text-[#4A5D4E] font-serif italic text-xl">
            "Savor the layers, share the craving.&quot;
          </p>
          <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.4em] text-[#8C6D4F]">
            Artisan Graham Desserts Since 2024
          </p>
        </div>

      </div>
    </div>
  );
}