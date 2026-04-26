export default function CartItem() {
  return (
    <div className="flex gap-4 py-5 border-b last:border-none">
      <img
        src="/example.jpg"
        alt="product"
        className="w-20 h-24 object-cover rounded-lg"
      />

      <div className="flex-1">
        <p className="text-xs text-gray-400 uppercase">Outerwear</p>

        <h3 className="font-medium text-gray-800">Obsidian Leather Jacket</h3>

        <div className="flex items-center gap-3 mt-3">
          <button className="w-8 h-8 border rounded-md">-</button>
          <span className="text-sm">1</span>
          <button className="w-8 h-8 border rounded-md">+</button>
        </div>
      </div>

      <div className="text-right">
        <p className="font-medium text-gray-800">$289.00</p>
        <p className="text-sm text-gray-400">$289 each</p>
      </div>
    </div>
  );
}
