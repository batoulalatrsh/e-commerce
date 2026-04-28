import useCart from "../hooks/useCart";
export default function SetQuantityButtons({
  setQuantity,
  quantity,
  data,
  size,
  image,
}) {
  const { handleAddToCart, handleRemoveItem } = useCart();
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-md w-full sm:w-40">
      <button className="px-4 py-2" onClick={() => handleRemoveItem(data)}>
        -
      </button>
      <span>{quantity}</span>
      <button
        className="px-4 py-2"
        onClick={() => handleAddToCart(data,size, quantity)}
      >
        +
      </button>
    </div>
  );
}
