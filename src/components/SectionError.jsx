export default function SectionError({ message, onRetry }) {
  return (
    <div className="col-span-full text-center py-16">
      <p className="text-gray-500 text-sm">
        {message || "Failed to load data"}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 text-sm border rounded-full hover:bg-gray-50"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
