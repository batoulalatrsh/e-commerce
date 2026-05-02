import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function NoItems({ text,path }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <Heart size={40} className="text-gray-300 mb-4" />
      <p className="text-gray-500 mb-3">{text}</p>
      <Link
        to={path}
        className="bg-black text-white px-8 py-3 text-sm active:scale-[0.99] shadow-sm transition duration-300 cursor-pointer"
      >
        Browse Products
      </Link>
    </div>
  );
}
