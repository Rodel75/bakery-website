'use client';

import * as React from 'react';
import { products } from '@/lib/constants'; 
import ProductCard from '@/components/ui/product-card';
import Navbar from '@/components/section/navbar';
import FooterCTA from '@/components/section/footer';
import { ProductQuickView } from '@/components/ui/productquickview';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';

export default function ShopAllPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [maxPrice, setMaxPrice] = React.useState(1000);

  const filteredProducts = React.useMemo(() => {
    return products.filter((product) => {
      const matchCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchPrice = product.price <= maxPrice;
      return matchCategory && matchPrice;
    });
  }, [activeCategory, maxPrice]);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

    
      <header className="max-w-7xl mx-auto px-8 pt-40 md:pt-52 pb-16 border-b border-pink-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#E9298E] block mb-6">
              The Artisan Collection
            </span>
            <h1 className="text-6xl md:text-8xl font-serif italic text-stone-900 tracking-tighter leading-none">
              Shop <span className="font-sans font-bold not-italic text-[#E9298E]">All</span>
            </h1>
            <p className="mt-8 text-stone-400 font-light max-w-sm leading-relaxed text-sm mx-auto md:mx-0">
              Explore our full range of chilled graham masterpieces. Every tub is handcrafted with premium cream and honest flavors.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-stone-900">
              {filteredProducts.length} Flavors Available
            </div>
            <div className="h-px w-12 bg-[#E9298E]" />
          </div>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-16 py-24">
        
 
        <aside className="w-full lg:w-56 space-y-16 shrink-0">
          <div className="space-y-8">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-900 border-b border-pink-50 pb-4 flex items-center gap-2">
              <Filter size={12} className="text-[#E9298E]" /> Menu Filter
            </h4>
            <ul className="flex flex-wrap lg:flex-col gap-6 lg:gap-4">
              {['All', 'Best Sellers', 'Premium', 'Seasonal'].map((cat) => (
                <li 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className="group flex items-center gap-3 cursor-pointer"
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-[#E9298E] transition-all duration-500 ${activeCategory === cat ? 'scale-150 opacity-100 shadow-[0_0_8px_#E9298E]' : 'opacity-0 group-hover:opacity-50'}`} />
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${activeCategory === cat ? 'text-stone-900' : 'text-stone-400 group-hover:text-[#E9298E]'}`}>
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="flex justify-between items-end">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-900">Budget</h4>
                <span className="text-[10px] font-bold text-[#E9298E]">₱{maxPrice.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              className="w-full h-0.5 bg-pink-50 appearance-none cursor-pointer accent-[#E9298E]" 
              min="100" max="1000" step="10" value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
        </aside>

   
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
              <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product) => (
                  <motion.div 
                    layout 
                    key={product.id} 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className="group flex flex-col h-full"
                  >
                    <div className="relative mb-6 flex-1 rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-pink-50">
                      <ProductCard product={product} />
                    </div>
                    <div className="space-y-2 mb-6 text-center lg:text-left">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-950">{product.name}</h3>
                      <p className="text-[12px] font-medium text-[#E9298E]">₱{product.price?.toLocaleString()}</p>
                    </div>
                    <div className="mt-auto space-y-3">
                      <ProductQuickView product={product}>
                        <button className="w-full py-4 rounded-full text-[9px] font-bold uppercase tracking-[0.4em] bg-stone-950 text-white hover:bg-[#E9298E] transition-all duration-500 shadow-lg shadow-stone-100">
                          Order Details
                        </button>
                      </ProductQuickView>
                      <a 
                        href={`https://m.me/109880500681367?text=Inquiry: ${product.name}`} 
                        target="_blank" 
                        className="block text-center py-2 text-[8px] font-bold uppercase tracking-[0.3em] text-stone-400 hover:text-[#E9298E] transition-colors duration-500"
                      >
                        Quick Inquiry
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-center py-40 border-2 border-dashed border-pink-50 rounded-3xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-300">No flavors found in this range</p>
            </div>
          )}

          {/* --- BRAND VALUES --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-pink-50 pt-20"
          >
            {[
              { 
                step: "01", 
                title: "Premium Cream", 
                desc: "We exclusively use high-fat European-style cream for that silky, non-greasy mouthfeel in every bite." 
              },
              { 
                step: "02", 
                title: "Chilled Mastery", 
                desc: "Each tub is chilled for exactly 24 hours to ensure the honey grahams absorb just the right amount of cream." 
              },
              { 
                step: "03", 
                title: "Direct Value", 
                desc: "By producing in small artisan batches locally, we provide gourmet quality desserts at honest, friendly prices." 
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4 text-center md:text-left">
                <span className="text-[8px] font-bold text-[#E9298E] uppercase tracking-[0.4em]">{item.step} — {i === 0 ? 'Quality' : i === 1 ? 'Process' : 'Price'}</span>
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-stone-900">{item.title}</h4>
                <p className="text-[11px] text-stone-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <FooterCTA />
    </main>
  );
}