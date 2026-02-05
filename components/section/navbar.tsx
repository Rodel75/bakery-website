'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-white/80 backdrop-blur-md py-4 border-b border-pink-50 shadow-sm z-100">
      <div className="max-w-360 mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* --- LOGO SECTION --- */}
        <Link href="/" className="flex flex-col shrink-0 group">
          <span className="text-xl md:text-2xl font-serif italic text-stone-900 leading-none transition-colors group-hover:text-[#E9298E]">
            K.O.M Sweet Craving&apos;s
          </span>
          <span className="text-[8px] tracking-[0.4em] uppercase font-bold text-[#E9298E] mt-1.5 transition-all group-hover:tracking-[0.5em]">
            Artisan Graham Desserts
          </span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: 'Home', href: '/' },
            { name: 'Shop', href: '/shop' },
            { name: 'Our Story', href: '/about' },
            { name: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-[#E9298E] transition-all relative group py-2"
            >
              {item.name}
              {/* Animated Underline */}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#E9298E] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* --- CTA SECTION --- */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/shop" className="hidden md:block">
            <button className="flex items-center gap-2 text-stone-400 hover:text-[#E9298E] transition-colors">
              <ShoppingBag size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Shop</span>
            </button>
          </Link>

          <Link href="/shop">
            <button className="bg-[#E9298E] text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-stone-900 transition-all active:scale-95 shadow-lg shadow-pink-100">
              Order Now
            </button>
          </Link>
          
          {/* MOBILE MENU ICON */}
          <button className="text-stone-900 lg:hidden p-2 hover:bg-pink-50 rounded-full transition-colors">
            <Menu size={22} />
          </button>
        </div>

      </div>
    </nav>
  );
}