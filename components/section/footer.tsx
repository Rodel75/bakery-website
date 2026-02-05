'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-100 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          
          {/* BRAND SECTION - 4 Columns */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="flex flex-col group">
              <span className="text-3xl font-serif italic leading-none text-stone-900 group-hover:text-[#E9298E] transition-colors">
                K.O.M Sweet Craving&apos;s
              </span>
              <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#E9298E] mt-2">
                Artisan Graham Desserts
              </span>
            </Link>
            <p className="text-[13px] text-stone-400 leading-relaxed font-light max-w-sm italic">
              &quot;Savor every layer of our handcrafted graham creations. Made with passion, delivered with love to satisfy your deepest cravings.&quot;
            </p>
            {/* Social Icons Integrated here */}
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-100 text-stone-400 hover:bg-[#E9298E] hover:text-white hover:border-[#E9298E] transition-all duration-500">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-100 text-stone-400 hover:bg-[#E9298E] hover:text-white hover:border-[#E9298E] transition-all duration-500">
                <Instagram size={16} />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS - 3 Columns */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-stone-900">Navigation</h4>
            <ul className="space-y-4 text-[12px] font-medium text-stone-500">
              <li><Link href="/" className="hover:text-[#E9298E] transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-[#E9298E] transition-colors">The Gallery</Link></li>
              <li><Link href="/about" className="hover:text-[#E9298E] transition-colors">Our Story</Link></li>
              <li><Link href="/booking" className="hover:text-[#E9298E] transition-colors">Reserve Orders</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO - 4 Columns */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-stone-900">Get in Touch</h4>
            <ul className="space-y-6 text-[12px] font-medium text-stone-500">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#E9298E] shrink-0" />
                <span className="leading-relaxed">Caloocan City, Metro Manila,<br />Philippines</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-[#E9298E] shrink-0" />
                <span>hello@komsweetcravings.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-12 border-t border-stone-100 flex flex-col md:row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
            <p className="text-[9px] font-bold uppercase tracking-widest text-stone-400">
              © 2026 K.O.M Sweet Craving&apos;s
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[9px] font-bold uppercase tracking-widest text-stone-300 hover:text-stone-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[9px] font-bold uppercase tracking-widest text-stone-300 hover:text-stone-900 transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-300">
            Handcrafted with <span className="text-[#E9298E]">♥</span> in the Philippines
          </p>
        </div>

      </div>
    </footer>
  );
}