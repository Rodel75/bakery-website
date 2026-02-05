'use client';

import Image from 'next/image';
import { useState } from 'react';

// In-update natin ang Interface para tumugma sa constants.ts mo
interface Product {
  id?: number;
  name: string;
  image?: string;      // Base sa constants.ts mo
  baseImg?: string;
  hoverImg?: string;
  images?: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!product) return null;

  const mainImage = product.image || product.baseImg || product.images?.[0] || '';
  
 
  const hoverImage = product.hoverImg || product.images?.[1] || mainImage;

  return (
    <div
      className="relative aspect-[4/5] overflow-hidden bg-[#F4F4F4] cursor-pointer group shadow-sm transition-all duration-500 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {mainImage && (
        <Image
          src={mainImage}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-1000 ease-in-out ${
            isHovered ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      )}

      {hoverImage && (
        <Image
          src={hoverImage}
          alt={`${product.name} alternate view`}
          fill
          className={`absolute inset-0 object-cover transition-all duration-1000 ease-in-out ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      )}


      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}