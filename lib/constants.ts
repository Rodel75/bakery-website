export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isAvailable: boolean; 
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Mango Graham",
    price: 150,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    category: "Best Sellers",
    isAvailable: true,
    description: "Our signature dessert featuring layers of sweet Philippine mangoes and premium chilled cream."
  },
  {
    id: 2,
    name: "Strawberry Cheesecake",
    price: 185,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    category: "Best Sellers",
    isAvailable: true, 
    description: "Rich cream cheese graham layers with fresh strawberry compote."
  },
  {
    id: 3,
    name: "Dark Choco Graham",
    price: 165,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    category: "Best Sellers", 
    isAvailable: true,
    description: "Indulgent dark chocolate ganache paired with honey-roasted graham crackers."
  },
  {
    id: 4,
    name: "Ube Macapuno Graham",
    price: 170,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2",
    category: "Best Sellers", 
    isAvailable: true,
    description: "Classic Pinoy favorite with halayang ube and macapuno strings."
  }
];


export const bestSellers = products.filter(p => p.category === "Best Sellers");