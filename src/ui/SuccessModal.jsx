import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SuccessModal({ isOpen, onClose }) {

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/60" />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
          >
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 70, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-50 mb-4 shadow-inner">
                  <Check className="text-green-600 w-10 h-10" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Order Confirmed</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Your order has been placed successfully.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-black text-white text-sm rounded-lg hover:opacity-90 transition cursor-pointer duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
