import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/cart";
export default function CartContent({}) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const totalBagCount = useSelector(selectCartCount);
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="mb-6">
            <span className="text-xs font-semibold text-black border border-black px-2 py-1">
              REVIEW
            </span>

            <h2 className="text-2xl font-semibold mt-3 text-gray-800">
              Your Bag{" "}
              <span className="text-gray-400 text-lg">({totalBagCount})</span>
            </h2>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </div>

        <OrderSummary cssClass="bg-white rounded-2xl shadow-sm p-6 h-fit" />
      </div>
    </div>
  );
}
