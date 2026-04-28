import CheckOutForm from "../components/cart/CheckOutForm";
import OrderSummary from "../components/cart/OrderSummary";
export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col lg:flex-row">
      <CheckOutForm />
      <div className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-gray-200 px-6 py-10 bg-gray-50">
        <OrderSummary />
      </div>
    </div>
  );
}

export function action({request}){
  
}