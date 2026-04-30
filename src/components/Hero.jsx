import { Link } from "react-router-dom";
import hero from "../../public/hero.png";
import hero2 from "../../public/hero2.png";
export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-end justify-center md:justify-start">
      <div className="hidden md:block absolute inset-0">
        <img src={hero} alt="hero" className="w-full h-full object-cover" />
      </div>
      <div className="absolute md:hidden inset-0">
        <img src={hero2} alt="hero" className="w-full h-full object-cover" />
      </div>

      <div className="relative  flex flex-col z-10 py-6 px-5 md:px-16 max-w-3xl text-black text-center">
        <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8">
          Timeless luxury. <br />
          <p className="italic font-Playfair">Effortless you.</p>
        </h1>

        <div className="w-full flex justify-center mb-6">
          <div className="h-[2px] w-20 bg-gold " />
        </div>

        <p className="hidden md:block text-black/70 text-sm md:text-base max-w-md mb-8 uppercase">
          Luxury essentials crafted with intention. Timeless silhouettes for the
          modern wardrobe.
        </p>

        <Link
          to="products"
          className="bg-transparent uppercase border border-gold text-gold px-8 py-2 text-sm cursor-pointer hover:-translate-y-1.5 transition duration-300"
        >
          SHOP NOW →
        </Link>

        <div className="hidden md:flex mt-16  flex-col items-center text-black text-xs">
          <div className="w-[3px] rounded-full h-20 bg-gradient-to-b from-transparent to-title mb-2 animate-pulse"></div>
          SCROLL
        </div>
      </div>
    </section>
  );
}
