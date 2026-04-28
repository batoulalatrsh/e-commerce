import { setDoc, doc } from "firebase/firestore";
import { db } from "./config";

export async function checkOut(customerData) {
  try {
    const id = crypto.randomUUID();

    await setDoc(doc(db, "orders", id), {
      id,
      ...customerData,
      createdAt: new Date().toISOString(),
    });

    return { success: true, id };
  } catch (error) {
    throw new Error("Failed to create order");
  }
}
