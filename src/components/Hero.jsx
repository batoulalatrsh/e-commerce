import { Link } from "react-router-dom";
import hero from '../../public/hero.png'
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 px-5 md:px-16 max-w-3xl text-black">
        <div className="inline-block border border-black/20 px-3 py-1 text-xs tracking-widest text-black/70 mb-6">
          NEW COLLECTION 2025
        </div>

        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
          Wear the <br />
          <span className="italic font-serif">Silence</span>
        </h1>

        <p className="text-black/60 text-sm md:text-base max-w-md mb-8">
          Luxury essentials crafted with intention. Timeless silhouettes for the
          modern wardrobe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="products"
            className="bg-black text-white px-6 py-3 text-sm cursor-pointer hover:-translate-y-1.5 transition duration-300"
          >
            SHOP NOW →
          </Link>

          <button className="border border-black px-6 py-3 text-sm hover:bg-black cursor-pointer hover:text-white transition duration-300">
            VIEW LOOKBOOK
          </button>
        </div>

        <div className="mt-16 flex flex-col items-center text-black text-xs">
          <div className="w-[3px] rounded-full h-20 bg-gradient-to-b from-transparent to-title mb-2 animate-pulse"></div>
          SCROLL
        </div>
      </div>
    </section>
  );
}
