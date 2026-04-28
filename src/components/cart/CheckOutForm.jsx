import FormInput from "./FormInput";
import { Form } from "react-router-dom";

export default function CheckOutForm({}) {
  return (
    <Form method="POST" className="flex-1 px-6 py-10 lg:px-16">
      <h1 className="text-3xl font-semibold mb-8 tracking-tight">Checkout</h1>
      <div className="mb-10">
        <h2 className="text-lg font-medium mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput placeholder="First name" />
          <FormInput placeholder="Last name" />
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
        <div className="grid grid-cols-1 gap-4">
          <FormInput placeholder="Address" />
          <div className="grid grid-cols-2 gap-4">
            <FormInput placeholder="City" />
            <FormInput placeholder="Postal Code" />
          </div>
          <FormInput placeholder="Phone number" />
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-lg font-medium mb-4">Payment Method</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3 border border-gray-300 p-3 rounded-lg">
            <input
              type="radio"
              name="payment"
              className="transition duration-300"
            />
            Credit Card
          </label>
          <label className="flex items-center gap-3 border border-gray-300 p-3 rounded-lg">
            <input
              type="radio"
              name="payment"
              className="transition duration-300"
            />{" "}
            Cash on Delivery
          </label>
        </div>
      </div>
      <button className="w-full bg-black text-white py-4 rounded-lg hover:opacity-90 active:scale-99 transition duration-300">
        Place Order
      </button>
    </Form>
  );
}
