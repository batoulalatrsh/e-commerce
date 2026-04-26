import { Search } from "lucide-react";
export default function ProductFilters() {
  return (
    <div className="flex-initial flex flex-col md:flex-row items-stretch md:items-center gap-4">
      <div className="relative w-full md:w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 text-gray-800 border border-gray-200
                    focus:outline-none focus:ring-1 focus:ring-black/20 focus:border-black/20
                    cursor-pointer transition"
        />
      </div>

      <select
        className="relative w-full md:w-56 px-4 py-2.5 bg-gray-50 text-gray-700 border border-gray-200
                focus:outline-none focus:ring-1 focus:ring-black/20 focus:border-black/20
                cursor-pointer transition"
      >
        <option>Featured</option>
        <option>Men Collection</option>
        <option>Womans Collection</option>
      </select>

      <button
        className="px-5 py-2.5 bg-black text-white font-medium
                               hover:bg-gray-900 active:scale-[0.98]
                               shadow-sm transition duration-300"
      >
        Filters
      </button>
    </div>
  );
}
