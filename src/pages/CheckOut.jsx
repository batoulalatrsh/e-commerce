import CheckOutForm from "../components/cart/CheckOutForm";
import OrderSummary from "../components/cart/OrderSummary";
import SuccessModal from "../ui/SuccessModal";
import { checkOut } from "../lib/firebase/checkOut";
import { clearStorage } from "../store/cart";
import { redirect } from "react-router";
import { store } from "../store/store";
import { useActionData } from "react-router";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "react-router";
export default function CheckoutPage() {
  const [open, setOpen] = useState(false);
  const formRef = useRef();
  const navigation = useNavigation();
  const actionData = useActionData();
  useEffect(() => {
    if (actionData?.success) {
      setOpen(true);
    }
  }, [actionData]);

  if (navigation.state === "idle") {
    formRef.current?.reset();
  }

  return (
    <>
      <SuccessModal isOpen={open} onClose={() => setOpen(false)} />{" "}
      <div className="min-h-screen bg-white text-black flex flex-col lg:flex-row">
        <CheckOutForm ref={formRef} />
        <div className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-gray-200 px-6 py-10 bg-gray-50">
          <OrderSummary />
        </div>
      </div>
    </>
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
    store.dispatch(clearStorage());
    return { success: true };
  } catch (err) {
    throw new Response(
      JSON.stringify({
        message: err.message || "Can't place order try later.",
      }),
      { status: 500 },
    );
  }
}
