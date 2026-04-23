import SubscribeSection from "../components/SubscribeSection";
import SplitBanner from "../components/products/SplitBanner";
import Products from "../components/products/Products";
import { useQuery } from "@tanstack/react-query";
import { getProducts, queryClient } from "../lib/api";
import Hero from "../components/Hero";

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getProducts({ signal }),
  });

  if (isLoading) {
    return <p className="text-red-600">Loading..</p>;
  }

  return (
    <>
      <Hero />
      <Products
        title="Featured Pieces"
        description="CURATED"
        bgColor="bg-white"
        products={data}
      />
      <SplitBanner />
      <Products
        title="Bestsellers"
        description="Most Loved"
        bgColor="bg-surface"
      />
      <SubscribeSection />
    </>
  );
}

export async function loader() {
  return await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getProducts({ signal }),
  });
  return null;
}
