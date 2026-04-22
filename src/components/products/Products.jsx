import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <section className="bg-white px-4 md:px-10 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="text-[11px] border border-gray-300 text-gray-600 px-2 py-1 tracking-wide">
            CURATED
          </span>

          <h2 className="text-3xl md:text-5xl mt-3 font-light text-gray-900">
            Featured Pieces
          </h2>
        </div>

        <button className="border border-gray-300 px-6 py-3 text-sm text-gray-700 hover:border-gray-900 hover:text-gray-900 transition">
          VIEW ALL →
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
}
