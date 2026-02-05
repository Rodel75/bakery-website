'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sheet, 
  SheetContent, 
  SheetTitle, 
  SheetTrigger,
  SheetClose 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingBag,Circle, ChevronLeft,  Minus, Plus, Utensils, } from 'lucide-react';

interface QuickViewProduct {
  id: number | string;
  name: string;
  price: string | number;
  image?: string;
  description?: string; 
  stocks?: number;
  isAvailable?: boolean;
}

interface QuickViewProps {
  product: QuickViewProduct;
  children: React.ReactNode;
}

export function ProductQuickView({ product, children }: QuickViewProps) {
  const [copied, setCopied] = React.useState(false);
  const [selectedSize, setSelectedSize] = React.useState('Regular');
  const [quantity, setQuantity] = React.useState(1);

  if (!product) return <>{children}</>;

  const validImage = product.image || "https://images.unsplash.com/photo-1621303837174-89787a7d4729";
  const isOutOfStock = product.stocks === 0 || product.isAvailable === false; 

  const parsePrice = (priceInput: string | number): number => {
    if (typeof priceInput === 'number') return priceInput;
    return parseInt(priceInput.replace(/[₱,]/g, '')) || 0;
  };

  const basePrice = parsePrice(product.price);
  const totalPrice = basePrice * quantity;

  const MESSENGER_ID = "109880500681367"; 
  const orderMessage = encodeURIComponent(
    `Hi! I'd like to order:\n🍰 ${product.name}\n📦 Size: ${selectedSize}\n🔢 Qty: ${quantity}\n💰 Total: ₱${totalPrice.toLocaleString()}`
  );
  const messengerLink = `https://m.me/${MESSENGER_ID}?text=${orderMessage}`;

  const handleCopy = () => {
    const textToCopy = `Order Details: ${product.name} (${selectedSize}) x ${quantity} = ₱${totalPrice.toLocaleString()}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-125 md:max-w-200 p-0 border-none overflow-y-auto bg-white">
        
      
        <div className="sticky top-0 z-50 flex items-center justify-between p-3 bg-white md:hidden border-b">
          <SheetClose className="flex items-center gap-2 text-stone-900">
            <ChevronLeft size={18} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to Menu</span>
          </SheetClose>
        </div>

        <div className="flex flex-col md:flex-row h-full">
         
          <div className="relative w-full md:w-[45%] bg-[#FFF5F8]">
            <div className="relative aspect-4/5 md:h-full w-full">
              <Image 
                src={validImage} 
                alt={product.name} 
                fill 
                className={`object-cover ${isOutOfStock ? 'grayscale opacity-60' : ''}`}
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-2 py-1 text-[9px] font-bold border uppercase tracking-tighter backdrop-blur-md ${
                  isOutOfStock ? 'bg-white text-red-500 border-red-100' : 'bg-white/90 text-[#E9298E] border-pink-100'
                }`}>
                  {isOutOfStock ? 'Sold Out' : 'In Stock'}
                </span>
              </div>
            </div>
          </div>

 
          <div className="w-full md:w-[55%] mt-6 p-6 md:p-8 flex flex-col bg-white">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#E9298E]">
                <Circle size={6} className="fill-current" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Freshly Chilled Daily
                </span>
              </div>
              
              <SheetTitle className="text-3xl font-serif italic text-stone-900 leading-tight">
                {product.name}
              </SheetTitle>
              
              <p className="text-2xl font-bold text-[#E9298E]">
                ₱{basePrice.toLocaleString()}
              </p>

       
              <div className="pt-2 border-t border-stone-50">
                <p className="text-xs text-stone-500 leading-relaxed italic">
                  {product.description || "A signature graham creation handcrafted with premium cream, fresh ingredients, and the perfect chill in every bite."}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Select Tub Size</span>
                <div className="flex gap-2">
                  {['Solo', 'Regular', 'Family'].map((size) => (
                    <button 
                      key={size} 
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-2 border text-[11px] font-bold transition-all ${
                        selectedSize === size 
                        ? "border-[#E9298E] bg-[#E9298E] text-white" 
                        : "border-stone-200 text-stone-400 hover:border-pink-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

         
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Quantity</span>
                <div className="flex items-center w-28 border border-stone-200 rounded-md">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-[#E9298E] transition-colors"><Minus size={14} /></button>
                  <span className="flex-1 text-center text-xs font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-[#E9298E] transition-colors"><Plus size={14} /></button>
                </div>
              </div>

        
              <div className="bg-pink-50/50 p-4 border border-pink-100 rounded-lg space-y-2">
                <div className="flex justify-between items-center border-b border-pink-100 pb-2">
                  <span className="text-[10px] font-bold uppercase text-pink-400 tracking-tighter">Order Summary</span>
                  <button onClick={handleCopy} className="text-[10px] font-bold text-[#E9298E] uppercase hover:underline">
                    {copied ? "Copied!" : "Copy Info"}
                  </button>
                </div>
                <div className="text-[12px] font-medium text-stone-700">
                  {product.name} ({selectedSize}) x {quantity}
                  <div className="text-xl font-bold mt-1 text-[#E9298E]">Total: ₱{totalPrice.toLocaleString()}</div>
                </div>
              </div>

           
              <Link href={isOutOfStock ? "#" : messengerLink} target={isOutOfStock ? "_self" : "_blank"} className="block w-full">
                <Button 
                  disabled={isOutOfStock}
                  className="w-full h-12 rounded-full bg-[#E9298E] hover:bg-[#D11D7A] text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all shadow-md shadow-pink-100"
                >
                  <ShoppingBag className="mr-2" size={16} />
                  {isOutOfStock ? 'Sold Out' : 'Order via Messenger'}
                </Button>
              </Link>

             
              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg">
                <Utensils size={14} className="text-[#E9298E] mt-0.5" />
                <p className="text-[10px] text-stone-500 leading-tight">
                  <span className="font-bold text-stone-700">Storage Tip:</span> Keep refrigerated. Best consumed within 3-5 days for maximum freshness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}