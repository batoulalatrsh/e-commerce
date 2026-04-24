import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();
const URL = "https://dummyjson.com/products/";

async function fetchCollection(categories, signal) {
  try {
    const promises = categories.map(async (cat) => {
      const res = await fetch(`${URL}category/${cat}`, { signal });
      if (!res.ok) {
        throw new Error(`Failed to fetch ${cat}`);
      }

      const data = await res.json();
      return data.products;
    });

    const results = await Promise.all(promises);
    return results.flat();
  } catch (err) {
    throw new Error(err?.message || "Something went wrong");
  }
}

export async function getwomansCollection({ signal }) {
  const categories = [
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
    "beauty",
    "fragrances",
    "tops",
  ];
  const data = await fetchCollection(categories, signal);
  return data;
}

export async function getmenCollection({ signal }) {
  const categories = [
    "fragrances",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "sunglasses",
  ];
  const data = await fetchCollection(categories, signal);
  return data;
}

export async function getProduct({ signal, id }) {
  const data = await fetch(`https://dummyjson.com/products/${id}`, {
    signal,
  });
  if (!data.ok) throw new Error("Coul Not fetch products!");
  return data.json();
}
