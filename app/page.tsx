import Navbar from  "@/components/section/navbar";
import Hero from "@/components/section/hero";
import BestSellers from "@/components/section/best-seller";
import About from "@/app/about/page"
import Book from "@/app/book/page";
import Gallery  from "../components/section/gallery";   
import Footer  from "../components/section/footer";      

export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-amber-50 text-stone-900 overflow-x-hidden">
     <Navbar/> 
     <Hero/>
     <BestSellers/>
     <About/>
     <Gallery/>
     <Book/>
     <Footer/>
    </main>
  );
}