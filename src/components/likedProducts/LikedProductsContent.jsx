import LikedProductItem from "./LikedProductItem";
import { Heart } from "lucide-react";
import Header from "./Header";
import useLikes from "../../hooks/useLikes";
export default function LikedProductsContent({}) {
  const { likedItems } = useLikes();
  return (
    <section className="bg-white min-h-screen px-4 md:px-10 py-8">
      <Header />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6">
        {likedItems.map((item) => (
          <LikedProductItem key={item.id} data={item} />
        ))}
      </div>

      <div className="hidden flex-col items-center justify-center text-center py-20">
        <Heart size={40} className="text-gray-300 mb-4" />
        <p className="text-gray-500 mb-3">Your wishlist is empty</p>
        <button className="bg-black text-white px-6 py-2 text-sm">
          Browse Products
        </button>
      </div>
    </section>
  );
}
