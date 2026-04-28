import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
export default function useSearch() {
  const [params, setParams] = useSearchParams();
  const [debouncedValue, setDebouncedValue] = useState("");
  const query = params.get("q") || "";
  useEffect(() => {
    const trimmed = query.trim();
    const timer = setTimeout(() => {
      setDebouncedValue(trimmed);
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  return { debouncedValue };
}
