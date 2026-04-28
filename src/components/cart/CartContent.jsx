import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import OrderSummary from "./OrderSummary";
export default function CartContent({}) {
  const CartItems = JSON.parse(localStorage.getItem("cart")) || [];
//   console.log(CartItems);
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <CartHeader />
          {CartItems.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </div>

        <OrderSummary />
      </div>
    </div>
  );
}
