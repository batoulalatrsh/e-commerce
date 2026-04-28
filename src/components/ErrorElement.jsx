import { ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ErrorElement({ notFound = false, message = "" }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 border rounded-full flex items-center justify-center">
            <ShoppingBag size={28} className="text-gray-700" />
          </div>
        </div>

        {notFound ? (
          <>
            <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 tracking-tight">
              404
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mt-4 text-gray-800">
              Page not found
            </h2>
          </>
        ) : (
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            {message ? message : "The page you’re looking for doesn’t exist."}
          </p>
        )}

        <div className="w-24 h-px bg-gray-200 mx-auto my-6"></div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
          >
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-2 border border-gray-300 text-sm rounded-full hover:bg-gray-50 transition"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Tip: Check out our new arrivals & best sellers
        </p>
      </div>
    </div>
  );
}
