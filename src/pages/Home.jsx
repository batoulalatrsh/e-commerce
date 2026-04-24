import SubscribeSection from "../components/SubscribeSection";
import SplitBanner from "../components/products/SplitBanner";
import Products from "../components/products/Products";
import { getwomansCollection, getmenCollection, queryClient } from "../lib/api";
import { useQuery } from "@tanstack/react-query";
import Hero from "../components/Hero";

export default function HomePage() {
  const { data: womenCollection, isLoading: womenCollIsLoading } = useQuery({
    queryKey: ["womenProducts"],
    queryFn: ({ signal }) => getwomansCollection({ signal }),
  });

  const { data: menCollection, isLoading: menCollIsLoading } = useQuery({
    queryKey: ["menProducts"],
    queryFn: ({ signal }) => getmenCollection({ signal }),
  });

  return (
    <>
      <Hero />
      <Products
        title="Womans Collection"
        description="WOMANS"
        bgColor="bg-white"
        products={womenCollection}
        loading={womenCollIsLoading}
      />
      <SplitBanner />
      <Products
        title="Men Collection"
        description="MEN"
        bgColor="bg-surface"
        products={menCollection}
        loading={menCollIsLoading}
      />
      <SubscribeSection />
    </>
  );
}

export async function loader() {
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => getwomansCollection({ signal }),
  });
  return null;
}
