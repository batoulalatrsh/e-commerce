import { Heart, ShoppingBag, Truck, RotateCcw, Shield } from "lucide-react";
import img from "/example.jpg";

export default function ProductDetails({ data }) {
  console.log(data);
  return (
    <section className="bg-white px-4 md:px-10 py-10">
      <p className="text-sm text-gray-400 mb-6">
        Shop / Bottoms / {data?.title}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* IMAGE */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="aspect-[4/5] lg:aspect-[1/1] w-full overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={data?.images[2]}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="space-y-6 max-w-xl">
          {/* Category */}
          <span className="text-xs border border-gray-300 px-2 py-1 text-gray-500 tracking-wide">
            BOTTOMS
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
            {data?.title}
          </h1>

          {/* Price + Rating */}
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

          {/* Sizes */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">SIZE</p>
              <button className="text-sm text-gray-500 hover:text-black">
                Size Guide
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 text-sm rounded-md hover:border-black hover:text-black transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center justify-between border border-gray-300 rounded-md w-full sm:w-40">
              <button className="px-4 py-2">-</button>
              <span>1</span>
              <button className="px-4 py-2">+</button>
            </div>

            <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 text-sm font-medium rounded-md hover:bg-gray-900 transition">
              ADD TO BAG <ShoppingBag size={16} />
            </button>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 text-sm rounded-md hover:border-black hover:text-black transition">
            <Heart size={16} />
            ADD TO WISHLIST
          </button>

          <hr className="border-gray-200" />

          <p className="text-gray-500 text-sm leading-relaxed">
            {data?.description}
          </p>

          {/* Features */}
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
