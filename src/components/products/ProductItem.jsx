import { Heart } from "lucide-react";
import example from "/example.jpg";
export default function ProductItem() {
  return (
    <div className="p-2 cursor-pointer min-w-[75%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[23%] snap-start">
      <div className="group relative overflow-hidden bg-white border border-gray-200">
        <div className="h-[320px] bg-gray-100 flex items-center justify-center">
          <img src={example} />
        </div>

        <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition duration-400 flex items-end">
          <button className="w-full bg-black text-white py-3 text-sm font-medium tracking-wide hover:bg-title transition duration-300 cursor-pointer">
            QUICK ADD
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="text-gray-900 text-base font-medium leading-snug">
          Obsidian Leather Jacket
        </h3>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-900 font-semibold">$289</span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <div className="flex text-yellow-500">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
