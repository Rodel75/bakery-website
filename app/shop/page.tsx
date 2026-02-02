'use client'; // Siguraduhing nandoon ito para iwas error sa App Router

import React from 'react';
import Image from 'next/image'; // Import ang Next Image component
import { ShoppingBag } from 'lucide-react';

const products = [
  { name: 'Mango Graham', stocks: 6, price: '₱150', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729' },
  { name: 'Cheesecake Graham', stocks: 5, price: '₱165', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad' },
  { name: 'Choco Graham', stocks: 3, price: '₱155', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c' },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - K.O.M Aesthetic */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif italic text-[#2C2420] mb-4">Our Graham Collection</h1>
          <p className="text-[#4A5D4E] font-bold uppercase tracking-[0.3em] text-[10px]">
            Artisan Graham Desserts
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((item) => (
            <div key={item.name} className="group">
              
              {/* Image Container with Next Image */}
              <div className="relative aspect-square overflow-hidden bg-white mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill // Gagamitin ang fill para mag-autosize sa container
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={item.name === 'Mango Graham'} // Mas mabilis na loading para sa main product
                />
                
                {/* Available Badge - Sage Green Theme */}
                <div className="absolute top-4 right-4 z-10 bg-[#F2EDE4]/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-[#4A5D4E] border border-stone-200">
                  {item.stocks} AVAILABLE
                </div>
              </div>

              {/* Product Info - Cocoa Brown Theme */}
              <div className="flex justify-between items-center px-2">
                <div>
                  <h3 className="text-xl font-serif italic text-[#2C2420]">{item.name}</h3>
                  <p className="text-[#4A5D4E] font-bold">{item.price}</p>
                </div>
                <button className="p-3 bg-[#4A5D4E] text-white rounded-full hover:bg-[#3d4d40] transition-colors shadow-md shadow-stone-200">
                  <ShoppingBag size={18} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}