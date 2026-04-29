import SummaryRow from "./SummaryRow";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../store/cart";
import { Link } from "react-router-dom";
export default function OrderSummary({ cssClass = "" }) {
  const total = useSelector(selectTotalPrice);

  return (
    <div className={cssClass}>
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Order Summary
      </h3>

      <div className="space-y-3 text-sm">
        <SummaryRow label="Subtotal" value={total.toFixed(2)} />
        <SummaryRow label="Shipping" value="Free" highlight />
        {/* <SummaryRow label="Tax (est.)" value="$34.72" /> */}
      </div>

      <div className="border-t my-5"></div>

      <div className="flex justify-between text-lg font-semibold mb-5">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {cssClass && (
        <Link to="checkout">
          <button
            disabled={total === 0}
            className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 active:scale-[0.99]
                  shadow-sm transition duration-300"
          >
            CHECKOUT →
          </button>
        </Link>
      )}

      <p className="text-xs text-gray-400 text-center mt-3">
        🔒 Secure SSL checkout
      </p>
    </div>
  );
}
