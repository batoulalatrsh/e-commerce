import SubscribeSection from "../components/SubscribeSection";
import SplitBanner from "../components/products/SplitBanner";
import Products from "../components/products/Products";
import { getwomenCollection, queryClient } from "../lib/api";
import { useQuery } from "@tanstack/react-query";
import Hero from "../components/Hero";

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getwomenCollection({ signal }),
  });

  // console.log(data);
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
        products={data}
      />
      <SubscribeSection />
    </>
  );
}

export async function loader() {
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getwomenCollection({ signal }),
  });
  return null;
}
