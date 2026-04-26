import CartHeader from "../components/cart/CartHeader";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <CartHeader />
          <CartItem />
          <CartItem />
        </div>

        <OrderSummary />
      </div>
    </div>
  );
}
