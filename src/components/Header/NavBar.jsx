import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { selectCartCount } from "../../store/cart";
import { selectLikesCount } from "../../store/Likes";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";
export default function Navbar() {
  const totalBagCount = useSelector(selectCartCount);
  const totalLikesCount = useSelector(selectLikesCount);
  const [open, setOpen] = useState(false);
  return (
    <>
      <MobileSidebar open={open} setOpen={setOpen} />
      <nav className="sticky h-[64px] top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/5">
        <div className="flex items-center justify-between px-5 py-4 md:px-12">
          <div className="leading-tight tracking-[0.25em]">
            <h1 href="/" className="text-gold text-2xl font-semibold uppercase ">
              AURUM
            </h1>
          </div>

          <ul className="hidden md:flex gap-10 text-sm text-black/60">
            <NavBarItem path="/">HOME</NavBarItem>
            <NavBarItem path="products">SHOP</NavBarItem>
            <NavBarItem path="about">ABOUT</NavBarItem>
          </ul>

          <div className="flex items-center gap-5 text-black/70">
            <Link
              to="products"
              state={{ focusSearch: true }}
            >
              <Search
                size={18}
                className="cursor-pointer hover:text-black transition"
              />
            </Link>

            <div className="relative hidden md:block">
              <NavBarItem path="likedProducts">
                <Heart
                  size={18}
                  className="cursor-pointer hover:text-black transition"
                />
                {totalLikesCount !== 0 && (
                  <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white px-1 rounded-full">
                    {totalLikesCount}
                  </span>
                )}
              </NavBarItem>
            </div>

            <div className="relative ">
              <NavBarItem path="cart">
                <ShoppingBag
                  size={18}
                  className="cursor-pointer hover:text-black transition"
                />

                {totalBagCount !== 0 && (
                  <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white px-1 rounded-full">
                    {totalBagCount}
                  </span>
                )}
              </NavBarItem>
            </div>

            <button onClick={() => setOpen(true)}>
              <Menu className="md:hidden cursor-pointer" size={22} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
