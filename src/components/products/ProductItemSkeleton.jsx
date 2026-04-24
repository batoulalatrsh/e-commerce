export default function ProductItemSkeleton() {
  return (
    <div className="p-2 min-w-[75%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[23%] snap-start">
      <div className="group relative overflow-hidden bg-white border border-gray-200">
        <div className="h-[320px] bg-gray-200 animate-pulse" />
      </div>

      
      <div className="mt-4 space-y-2">
        <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded" />

        <div className="h-4 w-1/3 bg-gray-200 animate-pulse rounded" />

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 bg-gray-200 animate-pulse rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
