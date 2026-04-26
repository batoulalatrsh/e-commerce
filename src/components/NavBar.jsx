import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
      <div className="flex items-center justify-between px-5 py-4 md:px-12">
        <div className="leading-tight tracking-[0.25em]">
          <a href="" className="text-black text-sm font-semibold">
            AURUM
          </a>
          <p className="text-[10px] text-black/50">STUDIO</p>
        </div>

        <ul className="hidden md:flex gap-10 text-sm text-black/60">
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition cursor-pointer"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition cursor-pointer"
            }
          >
            SHOP
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition cursor-pointer"
            }
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition cursor-pointer"
            }
          >
            ABOUT
          </NavLink>
        </ul>

        <div className="flex items-center gap-5 text-black/70">
          <NavLink
            to="products"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition cursor-pointer"
            }
          >
            <Search
              size={18}
              className="cursor-pointer hover:text-black transition"
            />
          </NavLink>

          <div className="relative">
            <Heart
              size={18}
              className="cursor-pointer hover:text-black transition"
            />
            <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white px-1 rounded-full">
              2
            </span>
          </div>

          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive
                ? "text-black"
                : "hover:text-black transition cursor-pointer"
            }
          >
            <ShoppingBag
              size={18}
              className="cursor-pointer hover:text-black transition"
            />
          </NavLink>

          <Menu className="md:hidden cursor-pointer" size={20} />
        </div>
      </div>
    </nav>
  );
}
