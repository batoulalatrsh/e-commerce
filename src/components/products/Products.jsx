import ProductItemSkeleton from "./ProductItemSkeleton";
import SectionError from "../SectionError";
import ProductItem from "./ProductItem";
import EmptyState from "../EmptyState";
import Button from "../../ui/Button";
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
  return (
    <section className={`${bgColor} px-4 md:px-10 py-12`}>
      <div className="flex flex-col-reverse md:flex-row w-full justify-between">
        <div className="flex items-end justify-between mb-10 py-2">
          <div>
            <span className="text-[11px] border border-gray-300 text-gray-600 px-2 py-1 tracking-wide">
              {description}
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
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <ProductItemSkeleton key={i} />
          ))}
        {!loading && error && <SectionError message={error?.message} />}

        {!loading && !error && products?.length === 0 && <EmptyState />}

        {!loading &&
          !error &&
          products?.map((prod) => <ProductItem key={prod?.id} data={prod} />)}
      </div>
    </section>
  );
}
