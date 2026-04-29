import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import ex from "../../../public/example.jpg";
export default function LikedProductItem({ data }) {
  return (
    <div className="relative bg-white transition duration-300">
      <Link
        to={`/product/${data?.id}`}
        className="
          flex items-center gap-3 p-3
          md:block md:p-0
        "
      >
        <div className="group relative bg-white flex items-center justify-center overflow-hidden border border-gray-200 w-[120px] h-[120px] md:w-full md:h-[320px]">
          <img
            src={ex}
            alt={data?.title}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />

          <div className="hidden md:absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-300 md:flex items-end z-10">
            <button className="w-full bg-black text-white py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition duration-300 cursor-pointer">
              QUICK ADD
            </button>
          </div>

          <button className="absolute top-2 left-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition duration-300 z-20">
            <Heart size={14} className="text-red-500 fill-red-500" />
          </button>
        </div>

        <div className="flex-1 md:p-4 flex flex-col justify-between text-left">
          <div>
            <h3 className="text-gray-900 text-base font-medium leading-snug">
              Berkin Bag
            </h3>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-900 font-semibold">
                $300
              </span>
            </div>

            <div className="text-yellow-400 text-xs md:text-sm mb-2">★★★★☆</div>
          </div>

          <button
            className="
            md:hidden mt-2 border border-black text-xs py-1.5
            hover:bg-black hover:text-white transition
          "
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
}
