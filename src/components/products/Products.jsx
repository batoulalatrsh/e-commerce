import ProductItemSkeleton from "./ProductItemSkeleton";
import SectionError from "../SectionError";
import ProductItem from "./ProductItem";
import EmptyState from "../EmptyState";
import Button from "../../ui/Button";
import useSearch from "../../hooks/useSearch";
import { useQuery } from "@tanstack/react-query";
import { searchItem } from "../../lib/api";

export default function Products({
  title,
  description,
  bgColor,
  products,
  loading,
  error,
  isShoppPage = true,
  path = "",
  children = null,
}) {
  const { debouncedValue } = useSearch();
  const isSearching = Boolean(debouncedValue);

  const {
    data,
    isLoading: searchLoading,
    isError: searchError,
  } = useQuery({
    queryKey: ["products", debouncedValue],
    queryFn: ({ signal }) => searchItem({ signal, debouncedValue }),
    enabled: isSearching,
  });

  // Single source of truth for what to render
  const displayedProducts = isSearching ? (data?.products ?? []) : products;
  const isLoadingState = isSearching ? searchLoading : loading;
  const isErrorState = isSearching ? searchError : error;

  return (
    <section className={`${bgColor} px-4 md:px-10 py-12`}>
      <div className="flex flex-col-reverse md:flex-row w-full justify-between">
        <div className="flex items-end justify-between mb-10 py-2">
          <div>
            <span className="text-[11px] border border-gray-300 text-gray-600 px-2 py-1 tracking-wide">
              {isSearching ? `Results for "${debouncedValue}"` : description}
            </span>

            <h2 className="text-3xl md:text-5xl mt-3 font-light text-gray-900">
              {title}
            </h2>
          </div>

          {isShoppPage ? null : <Button text="VIEW ALL →" path={path} />}
        </div>
        {isShoppPage ? children : null}
      </div>

      <div
        className={
          isShoppPage
            ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        }
      >
        {isLoadingState &&
          Array.from({ length: 6 }).map((_, i) => (
            <ProductItemSkeleton key={i} />
          ))}

        {!isLoadingState && isErrorState && (
          <SectionError message={isErrorState?.message} />
        )}

        {!isLoadingState &&
          !isErrorState &&
          displayedProducts?.length === 0 && <EmptyState />}

        {!isLoadingState &&
          !isErrorState &&
          displayedProducts?.map((prod) => (
            <ProductItem key={prod?.id} data={prod} />
          ))}
      </div>
    </section>
  );
}
