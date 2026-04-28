import CheckOutForm from "../components/cart/CheckOutForm";
import OrderSummary from "../components/cart/OrderSummary";
import { checkOut } from "../lib/firebase/checkOut";
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

export async function action({ request }) {
  try {
    const data = await request.formData();
    const cusomerData = {
      firstName: data.get("first-name"),
      lastName: data.get("last-name"),
      address: data.get("address"),
      city: data.get("city"),
      postalCode: data.get("postal-code"),
      phoneNumber: data.get("phone-number"),
      payment: data.get("payment"),
    };
    await checkOut(cusomerData);
    console.log(cusomerData);
  } catch (err) {
    throw new Response(
      JSON.stringify({ message: "Can't place order try later." }),
      { status: 500 },
    );
  }
}
