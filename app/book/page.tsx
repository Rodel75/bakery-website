'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Gamitin ang ginawa nating Button component

export default function BookingPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    order: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect sa Messenger with pre-filled text
    const message = `Hi K.O.M! I would like to reserve:
Name: ${formData.name}
Order: ${formData.order}
Pickup/Delivery Date: ${formData.date}`;
    
    window.open(`https://m.me/YOUR_PAGE_ID?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl border border-stone-50"
      >
        <div className="text-center mb-10">
          <span className="text-[#E9298E] text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
            Reservation Form
          </span>
          <h1 className="text-4xl font-serif italic text-stone-900 mb-2">
            Reserve Your Cravings
          </h1>
          <p className="text-stone-400 text-[11px] uppercase tracking-widest font-medium">
            K.O.M Artisan Graham Desserts
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Full Name */}
          <div className="group">
            <label className="block text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-2 group-focus-within:text-[#E9298E] transition-colors">
              Full Name
            </label>
            <input 
              type="text" 
              required
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border-b border-stone-200 py-3 focus:border-[#E9298E] outline-none transition-all bg-transparent text-stone-800"
              placeholder="e.g. Maria Clara"
            />
          </div>

          {/* Date Picker */}
          <div className="group">
            <label className="block text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-2 group-focus-within:text-[#E9298E] transition-colors">
              Preferred Date
            </label>
            <input 
              type="date" 
              required
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full border-b border-stone-200 py-3 focus:border-[#E9298E] outline-none transition-all bg-transparent text-stone-500"
            />
          </div>

          {/* Order Details */}
          <div className="group">
            <label className="block text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-2 group-focus-within:text-[#E9298E] transition-colors">
              Order Details (e.g. 2 Mango, 1 Choco)
            </label>
            <textarea 
              required
              onChange={(e) => setFormData({...formData, order: e.target.value})}
              className="w-full border-b border-stone-200 py-3 focus:border-[#E9298E] outline-none transition-all bg-transparent text-stone-800 resize-none" 
              rows={3}
              placeholder="List your cravings here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              type="submit"
              className="w-full py-8 rounded-full text-[11px] tracking-[0.3em] shadow-xl shadow-pink-100"
            >
              Submit via Messenger
            </Button>
            <p className="text-center text-[10px] text-stone-400 mt-6 italic">
              *By submitting, you will be redirected to our Messenger to finalize payment and delivery.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}