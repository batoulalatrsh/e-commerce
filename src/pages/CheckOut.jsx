export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col lg:flex-row">
      {" "}
      {/* Left: Form Section */}{" "}
      <div className="flex-1 px-6 py-10 lg:px-16">
        {" "}
        <h1 className="text-3xl font-semibold mb-8 tracking-tight">
          {" "}
          Checkout{" "}
        </h1>
        {/* Contact */}
        <div className="mb-10">
          <h2 className="text-lg font-medium mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="First name"
            />
            <input
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Last name"
            />
            <input
              className="md:col-span-2 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Email"
            />
          </div>
        </div>
        {/* Shipping */}
        <div className="mb-10">
          <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
          <div className="grid grid-cols-1 gap-4">
            <input
              className="border border-gray-300 p-3 rounded-lg"
              placeholder="Address"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                className="border border-gray-300 p-3 rounded-lg"
                placeholder="City"
              />
              <input
                className="border border-gray-300 p-3 rounded-lg"
                placeholder="Postal Code"
              />
            </div>
            <input
              className="border border-gray-300 p-3 rounded-lg"
              placeholder="Phone number"
            />
          </div>
        </div>
        {/* Payment */}
        <div className="mb-10">
          <h2 className="text-lg font-medium mb-4">Payment Method</h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 border p-3 rounded-lg">
              <input type="radio" name="payment" /> Credit Card
            </label>
            <label className="flex items-center gap-3 border p-3 rounded-lg">
              <input type="radio" name="payment" /> Cash on Delivery
            </label>
          </div>
        </div>
        {/* Button */}
        <button className="w-full bg-black text-white py-4 rounded-lg hover:opacity-90 transition">
          Place Order
        </button>
      </div>
      {/* Right: Summary */}
      <div className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-gray-200 px-6 py-10 bg-gray-50">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

        <div className="space-y-4">
          {/* Item */}
          <div className="flex justify-between text-sm">
            <span>Classic Shirt x1</span>
            <span>$120</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Luxury Jacket x1</span>
            <span>$250</span>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$370</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$20</span>
          </div>
          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>$390</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
          Pay Now
        </button>
      </div>
    </div>
  );
}
