import { useSearchParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
export default function ProductFilters() {
  const [params, setParams] = useSearchParams();
  const value = params.get("q") || "";

  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    if (location.state?.focusSearch) {
      searchRef.current.focus();
    }

    navigate(location.pathname, { replace: true });
  }, [location.state]);

  function handleChange(e) {
    setParams({ q: e.target.value });
  }

  return (
    <div className="flex-initial flex flex-col md:flex-row items-stretch md:items-center gap-4">
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          ref={searchRef}
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 text-gray-800 border border-gray-200
                    focus:outline-none focus:ring-1 focus:ring-black/20 focus:border-black/20
                    cursor-pointer transition"
        />
      </div>
    </div>
  );
}
