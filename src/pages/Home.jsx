import SplitBanner from "../components/products/SplitBanner";
import Products from "../components/products/Products";
import SubscribeSection from "../components/SubscribeSection";
import Hero from "../components/Hero";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Products
        title="Featured Pieces"
        description="CURATED"
        bgColor="bg-white"
      />
      <SplitBanner />
      <Products
        title="Bestsellers"
        description="Most Loved"
        bgColor="bg-surface"
      />
      <SubscribeSection/>
    </>
  );
}
