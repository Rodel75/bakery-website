
export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] pt-32 px-8">
      <div className="max-w-xl mx-auto bg-white p-10 shadow-sm border border-stone-100">
        <h1 className="text-3xl font-serif italic text-[#2C2420] mb-6 text-center">
          Reserve Your Cravings
        </h1>
        <p className="text-center text-[#8C6D4F] mb-8 text-sm uppercase tracking-widest font-bold">
          K.O.M Artisan Graham Desserts
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#4A5D4E] mb-2">Full Name</label>
            <input type="text" className="w-full border-b border-stone-200 py-2 focus:border-[#4A5D4E] outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#4A5D4E] mb-2">Order Details (Mango/Choco/Cheesecake)</label>
            <textarea className="w-full border-b border-stone-200 py-2 focus:border-[#4A5D4E] outline-none transition-colors" rows={3}></textarea>
          </div>
          <button className="w-full bg-[#4A5D4E] text-white py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#3d4d40] transition-all">
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
}