import SubscribeSection from "../components/SubscribeSection";
import SplitBanner from "../components/products/SplitBanner";
import Products from "../components/products/Products";
import { getProducts, queryClient } from "../lib/api";
import { useQuery } from "@tanstack/react-query";
import Hero from "../components/Hero";

export default function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getProducts({ signal }),
  });

  // const bestSellers = data
  //   ?.slice()
  //   .sort((a, b) => b.price - a.price)
  //   .slice(0, 8);

  // const featuredPieces = data?.slice(8, 16);
  console.log(data?.products);
  return (
    <>
      <Hero />
      <Products
        title="Featured Pieces"
        description="CURATED"
        bgColor="bg-white"
        products={data?.products}
      />
      <SplitBanner />
      <Products
        title="Bestsellers"
        description="Most Loved"
        bgColor="bg-surface"
        products={data?.products}
      />
      <SubscribeSection />
    </>
  );
}

export async function loader() {
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getProducts({ signal }),
  });
  return null;
}
