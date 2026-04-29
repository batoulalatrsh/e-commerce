import { ShoppingBag } from "lucide-react";
import useLikes from "../../hooks/useLikes";
export default function Header() {
  const { handleClearAll } = useLikes();
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
      <div>
        <p className="text-sm text-gray-400 mb-1">Home / Wishlist</p>
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Liked Products
        </h1>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleClearAll()}
          className="border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 transition"
        >
          Clear All
        </button>
        <button className="bg-black text-white px-4 py-2 text-sm flex items-center gap-2 hover:opacity-90 transition">
          <ShoppingBag size={16} />
          Add All to Cart
        </button>
      </div>
    </div>
  );
}
