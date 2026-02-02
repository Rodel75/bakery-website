'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (

    <nav className="w-full bg-[#F2EDE4] py-5 border-b border-stone-200/50 shadow-sm relative z-[100]">
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between font-medium">
        
        
        <Link href="/" className="flex flex-col shrink-0 group">
          <span className="text-xl md:text-2xl font-serif italic text-[#2C2420] leading-none transition-colors group-hover:text-[#4A5D4E]">
            K.O.M Sweet Craving&apos;s
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#4A5D4E] mt-1">
            Artisan Graham Desserts
          </span>
        </Link>

      
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { name: 'Home', href: '/' },
            { name: 'Shop Now', href: '/shop' },
            { name: 'About Us', href: '/about' },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-[11px] font-bold uppercase tracking-widest text-[#2C2420]/80 hover:text-[#4A5D4E] transition-all relative group py-2"
            >
              {item.name}
              
      
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-0 bg-[#4A5D4E] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

      
        <div className="flex items-center gap-6">
          <Link href="/booking">
            <button className="bg-[#4A5D4E] text-white px-7 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#3d4d40] transition-all active:scale-95 shadow-md shadow-stone-200">
              Book Now
            </button>
          </Link>
          
          <button className="text-[#2C2420] lg:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}