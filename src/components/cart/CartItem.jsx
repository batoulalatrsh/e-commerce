import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/cart";
export default function CartItem({ data }) {
  const { handleAddToCart } = useCart(data?.id);
  const dispatch = useDispatch();
  const quantity = data?.quantity ?? 1;
  return (
    <Link
      to={`/product/${data.id}`}
      className="flex gap-4 py-5 border-b last:border-none"
    >
      <img
        src={data?.image}
        alt="product"
        className="w-20 h-24 object-cover rounded-lg"
      />

      <div className="flex-1">
        <p className="text-xs text-gray-400 uppercase">{data?.category}</p>

        <h3 className="font-medium text-gray-800">{data?.title}</h3>

        <div className="flex items-center gap-3 mt-3">
          <button
            className="w-8 h-8 border rounded-md"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              dispatch(removeItem(data));
            }}
          >
            -
          </button>
          <span className="text-sm">{quantity}</span>
          <button
            className="w-8 h-8 border rounded-md"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleAddToCart(data, data.image, data?.size, 1);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="font-medium text-gray-800">
          ${(data?.price * quantity).toFixed(2)}
        </p>
        <p className="text-sm text-gray-400">${data?.price} each</p>
      </div>
    </Link>
  );
}
