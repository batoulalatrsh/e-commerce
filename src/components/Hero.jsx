export default function Hero() {
  return (
    <section className="min-h-screen bg-white text-black flex items-center">
      <div className="px-5 md:px-16 max-w-3xl">
        {/* Badge */}
        <div className="inline-block border border-black/20 px-3 py-1 text-xs tracking-widest text-black/70 mb-6">
          NEW COLLECTION 2025
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
          Wear the <br />
          <span className="italic font-serif text-black">Silence</span>
        </h1>

        {/* Description */}
        <p className="text-black/60 text-sm md:text-base max-w-md mb-8">
          Luxury essentials crafted with intention. Timeless silhouettes for the
          modern wardrobe.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white px-6 py-3 text-sm hover:bg-black/80 transition">
            SHOP NOW →
          </button>

          <button className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition">
            VIEW LOOKBOOK
          </button>
        </div>

        {/* Scroll */}
        <div className="mt-16 flex flex-col items-center text-black/40 text-xs">
          <div className="w-[1px] h-10 bg-black/20 mb-2"></div>
          SCROLL
        </div>
      </div>
    </section>
  );
}
