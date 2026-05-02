import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import useLikes from "../../hooks/useLikes";
import useCart from "../../hooks/useCart";
import Stars from "../../ui/Stars";
export default function ProductItem({ data }) {
  const { isLiked, handleToggleLike } = useLikes(data?.id);
  const { handleAddToCart, isInCart } = useCart(data?.id);
  return (
    <Link
      to={`/product/${data?.id}`}
      className="p-2 cursor-pointer min-w-[75%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[23%] snap-start"
    >
      <div className="group relative overflow-hidden bg-[#ffff] border border-gray-200">
        <div className="h-[320px] bg-gray-100 flex items-center justify-center">
          <img src={data?.images[0]} className="object-cover" />
        </div>

        <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-400 flex items-end">
          <button
            disabled={isInCart}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleAddToCart(data, data?.images[0], "M", 1);
            }}
            className="w-full bg-black text-white py-3 text-sm font-medium tracking-wide hover:bg-title transition duration-300 cursor-pointer"
          >
            {isInCart ? "IN CARD" : "QUICK ADD"}
          </button>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleToggleLike(data);
          }}
          className="absolute top-2 left-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition duration-300 z-20"
        >
          <Heart
            size={14}
            className={isLiked ? "text-red-500 fill-red-500" : ""}
          />
        </button>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-gray-900 text-base font-medium leading-snug">
          {data?.title}
        </h3>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-900 font-semibold">${data?.price}</span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <Stars rate={data?.rating} />
        </div>
      </div>
    </Link>
  );
}
