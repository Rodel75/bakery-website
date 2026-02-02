import Navbar from  "@/app/components/section/navbar";
import Hero from "@/app/components/section/hero";
import Shop from "@/app/shop/page";
import About from "@/app/about/page"
import Book from "@/app/book/page";
import Footer  from "./components/section/footer";      

export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-amber-50 text-stone-900 overflow-x-hidden">
     <Navbar/> 
     <Hero/>
     <Shop/>
     <About/>
     <Book/>
     <Footer/>
    </main>
  );
}