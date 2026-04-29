import {
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  Shield,
  CircleCheckBig,
} from "lucide-react";
import { useState } from "react";
import useCart from "../../hooks/useCart";
import useLikes from "../../hooks/useLikes";

export default function ProductDetails({ data }) {
  const { handleAddToCart, isInCart } = useCart(data.id);
  const { handleToggleLike, isLiked } = useLikes(data?.id);
  const [chosenSize, setChosenSize] = useState(isInCart?.size);
  const [quantity, setQuantity] = useState(isInCart?.quantity || 1);

  return (
    <section className="bg-white px-4 md:px-10 py-10">
      <p className="text-sm text-gray-400 mb-6">
        Shop / Bottoms / {data?.title}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="aspect-[4/5] lg:aspect-[1/1] w-full overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={data?.images[0]}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 max-w-xl">
          <span className="text-xs border border-gray-300 px-2 py-1 text-gray-500 tracking-wide">
            {data?.availabilityStatus}
          </span>

          <h1 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
            {data?.title}
          </h1>

          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold text-gray-900">
              ${data?.price}
            </p>

            <div className="flex items-center gap-2 text-sm">
              <div className="flex text-yellow-500">★★★★☆</div>
              <span className="text-gray-400">
                {data?.rating?.count} reviews
              </span>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">SIZE</p>
              <p className="text-sm text-gray-500">Size Guide</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setChosenSize(size)}
                  className={`${size === chosenSize ? "border-black text-black" : "border-gray-300"} px-4 py-2 border text-sm rounded-md hover:border-black hover:text-black transition duration-300`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center justify-between border border-gray-300 rounded-md w-full sm:w-40">
              <button
                className="px-4 py-2"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-4 py-2"
                onClick={() =>
                  setQuantity((prev) => Math.min(data?.stock || 1, prev + 1))
                }
              >
                +
              </button>
            </div>

            <button
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 text-sm font-medium rounded-md hover:bg-gray-900 transition"
              onClick={(e) => {
                handleAddToCart(data, data.images[0], chosenSize, quantity);
              }}
            >
              {isInCart ? (
                <>
                  ADDED TO BAG <CircleCheckBig size={16} />
                </>
              ) : (
                <>
                  ADD TO BAG <ShoppingBag size={16} />
                </>
              )}
            </button>
          </div>

          <button
            onClick={() => handleToggleLike(data)}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 text-sm rounded-md hover:border-black/50 hover:text-black transition duration-300"
          >
            <Heart
              size={20}
              fill={isLiked ? "currentColor" : "transparent"}
              className={isLiked ? "text-red-500" : "text-black"}
            />
            {isLiked ? "ADDED TO WISHLIST" : "ADD TO WISHLIST"}
          </button>

          <hr className="border-gray-200" />

          <p className="text-gray-500 text-sm leading-relaxed">
            {data?.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Truck size={16} />
              Free shipping
            </div>

            <div className="flex items-center gap-2">
              <RotateCcw size={16} />
              Free returns
            </div>

            <div className="flex items-center gap-2">
              <Shield size={16} />
              Secure payment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
