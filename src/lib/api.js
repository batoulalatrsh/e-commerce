import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();

export async function getProducts({ signal }) {
  const data = await fetch(
    "https://luxury-fashion-api.vercel.app/products/?category=women",
    {
      signal,
    },
  );
  if (!data.ok) throw new Error("Coul Not fetch products!");
  return data.json();
}
