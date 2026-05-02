import { Check } from "lucide-react";

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl">
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-green-500 before:animate-spin-slow"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-50 mb-4 shadow-inner">
            <Check className="text-green-600 w-10 h-10" />
          </div>

          <h2 className="text-xl font-semibold mb-2">Order Confirmed</h2>
          <p className="text-gray-500 text-sm mb-6">
            Your order has been placed successfully.
          </p>

          {/* <button
            onClick={onClose}
            className="px-6 py-2 bg-black text-white text-sm rounded-lg hover:opacity-90 transition"
          >
            Continue Shopping
          </button> */}
        </div>
      </div>
    </div>
  );
}
