import SummaryRow from "./SummaryRow";
import {} from "lucide-react";
export default function OrderSummary() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Order Summary
      </h3>

      <div className="space-y-3 text-sm">
        <SummaryRow label="Subtotal" value="$434.00" />
        <SummaryRow label="Shipping" value="Free" highlight />
        <SummaryRow label="Tax (est.)" value="$34.72" />
      </div>

      <div className="border-t my-5"></div>

      <div className="flex justify-between text-lg font-semibold mb-5">
        <span>Total</span>
        <span>$468.72</span>
      </div>

      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Promo code"
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100">
          APPLY
        </button>
      </div>

      <button className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 transition duration-300">
        CHECKOUT →
      </button>

      <p className="text-xs text-gray-400 text-center mt-3">
        🔒 Secure SSL checkout
      </p>
    </div>
  );
}
