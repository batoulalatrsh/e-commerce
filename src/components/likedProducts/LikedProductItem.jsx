import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import useLikes from "../../hooks/useLikes";
import useCart from "../../hooks/useCart";
export default function LikedProductItem({ data }) {
  const { isLiked, handleToggleLike } = useLikes(data?.id);
  const { handleAddToCart, isInCart } = useCart(data?.id);
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
            src={data?.image}
            alt={data?.title}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />

          <div className="hidden md:absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-300 md:flex items-end z-10">
            <button
              disabled={isInCart}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleAddToCart(data, data?.image, data?.size, data?.quantity);
              }}
              className="w-full bg-black text-white py-3 text-sm font-medium tracking-wide hover:bg-gray-800 transition duration-300 cursor-pointer"
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

        <div className="flex-1 md:p-4 flex flex-col justify-between text-left">
          <div>
            <h3 className="text-gray-900 text-base font-medium leading-snug">
              {data?.title}
            </h3>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-900 font-semibold">
                ${data?.price}
              </span>
            </div>

            {/* <div className="text-yellow-400 text-xs md:text-sm mb-2">★★★★☆</div> */}
          </div>

          <button
            disabled={isInCart}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleAddToCart(data, data?.image, data?.size, data?.quantity);
            }}
            className="
            md:hidden mt-2 border border-black text-xs py-1.5
            hover:bg-black hover:text-white transition duration-300
          "
          >
            {isInCart ? "IN CARD" : "Add to Cart"}
          </button>
        </div>
      </Link>
    </div>
  );
}
