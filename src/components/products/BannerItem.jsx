import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function BammerItem({  path ,imgSrc}) {
  return (
    <div className="group relative overflow-hidden">
      <img
        src={imgSrc}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-white/5 transition duration-500" />

      <div className="absolute bottom-10 left-6 md:left-10 space-y-4">

        <Link
          to={path}
          className="mt-4 inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-sm tracking-wide font-medium cursor-pointer hover:translate-x-2 transition duration-500"
        >
          EXPLORE <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
