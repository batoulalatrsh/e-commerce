import { useDispatch } from "react-redux";
import { clearStorage } from "../../store/Likes";
export default function Header() {
  const dispatch = useDispatch();
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
          onClick={() => dispatch(clearStorage())}
          className="border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 transition"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
