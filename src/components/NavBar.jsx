import { Search, Heart, ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
      <div className="flex items-center justify-between px-5 py-4 md:px-12">
        {/* Logo */}
        <div className="leading-tight tracking-[0.25em]">
          <p className="text-black text-sm font-semibold">AURUM</p>
          <p className="text-[10px] text-black/50">STUDIO</p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-sm text-black/60">
          <li className="text-black font-medium cursor-pointer">HOME</li>
          <li className="hover:text-black transition cursor-pointer">SHOP</li>
          <li className="hover:text-black transition cursor-pointer">
            COLLECTIONS
          </li>
          <li className="hover:text-black transition cursor-pointer">ABOUT</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5 text-black/70">
          <Search
            size={18}
            className="cursor-pointer hover:text-black transition"
          />

          <div className="relative">
            <Heart
              size={18}
              className="cursor-pointer hover:text-black transition"
            />
            <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white px-1 rounded-full">
              2
            </span>
          </div>

          <ShoppingBag
            size={18}
            className="cursor-pointer hover:text-black transition"
          />

          <Menu className="md:hidden cursor-pointer" size={20} />
        </div>
      </div>
    </nav>
  );
}
