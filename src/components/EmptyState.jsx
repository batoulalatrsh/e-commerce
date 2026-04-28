export default function EmptyState({ title, message }) {
  return (
    <div className="col-span-full text-center py-20">
      <h3 className="text-lg font-medium text-gray-800">
        {title || "No items found"}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {message || "Try adjusting your filters"}
      </p>
    </div>
  );
}
 