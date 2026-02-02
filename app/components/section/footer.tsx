'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C2420] text-[#F2EDE4] py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* BRAND SECTION */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex flex-col mb-6">
            <span className="text-2xl font-serif italic leading-none text-white">
              K.O.M Sweet Craving&apos;s
            </span>
            <span className="text-[8px] tracking-[0.3em] uppercase font-bold text-[#4A5D4E] mt-1">
              Artisan Graham Desserts
            </span>
          </Link>
          <p className="text-xs text-stone-400 leading-relaxed italic">
            "Savor every layer of our handcrafted graham creations. Made with passion, delivered with love."
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-[#4A5D4E]">Navigation</h4>
          <ul className="space-y-4 text-xs">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop Now</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/faqs" className="hover:text-white transition-colors">FAQS</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-[#4A5D4E]">Contact Us</h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-center gap-3">
              <MapPin size={14} className="text-[#4A5D4E]" />
              <span className="text-stone-400">Caloocan, Metro Manila</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-[#4A5D4E]" />
              <span className="text-stone-400">hello@komsweetcravings.com</span>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-[#4A5D4E]">Follow Our Story</h4>
          <div className="flex gap-5">
            <Link href="#" className="p-2 border border-stone-700 rounded-full hover:bg-[#4A5D4E] transition-all">
              <Facebook size={16} />
            </Link>
            <Link href="#" className="p-2 border border-stone-700 rounded-full hover:bg-[#4A5D4E] transition-all">
              <Instagram size={16} />
            </Link>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-stone-500">
        <p>© 2026 K.O.M Sweet Craving&apos;s. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}