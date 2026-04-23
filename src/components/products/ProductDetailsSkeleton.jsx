export default function ProductDetailsSkeleton() {
  return (
    <section className="bg-white px-4 md:px-10 py-10 animate-pulse">
      {/* Breadcrumb */}
      <div className="h-4 w-64 bg-gray-200 rounded mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* IMAGE */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="aspect-[4/5] w-full bg-gray-200 rounded-2xl" />
          </div>
        </div>

        {/* INFO */}
        <div className="space-y-6 max-w-xl">
          {/* Category */}
          <div className="h-5 w-20 bg-gray-200 rounded" />

          {/* Title */}
          <div className="space-y-2">
            <div className="h-8 w-3/4 bg-gray-200 rounded" />
            <div className="h-8 w-1/2 bg-gray-200 rounded" />
          </div>

          {/* Price + Rating */}
          <div className="flex items-center justify-between">
            <div className="h-6 w-20 bg-gray-200 rounded" />
            <div className="h-5 w-32 bg-gray-200 rounded" />
          </div>

          <div className="h-px bg-gray-200" />

          {/* Colors */}
          <div className="space-y-2">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-md" />
              <div className="w-8 h-8 bg-gray-200 rounded-md" />
              <div className="w-8 h-8 bg-gray-200 rounded-md" />
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-4 w-12 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>

            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-10 w-12 bg-gray-200 rounded-md" />
              ))}
            </div>
          </div>

          {/* Quantity + Add */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="h-12 w-full sm:w-40 bg-gray-200 rounded-md" />
            <div className="h-12 flex-1 bg-gray-300 rounded-md" />
          </div>

          {/* Wishlist */}
          <div className="h-12 w-full bg-gray-200 rounded-md" />

          <div className="h-px bg-gray-200" />

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>

          {/* Features */}
          <div className="flex gap-6">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
