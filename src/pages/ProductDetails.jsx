import ProductDetailsSkeleton from "../components/products/ProductDetailsSkeleton";
import ProductDetails from "../components/products/ProductDetails";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: async ({ signal }) => {
      const data = await fetch(
        `https://luxury-fashion-api.vercel.app/products/${id}`,
        {
          signal,
        },
      );
      if (!data.ok) throw new Error("Coul Not fetch products!");
      return data.json();
    },
  });

  if (isLoading) return <ProductDetailsSkeleton />;
  // console.log(data);
  return <ProductDetails data={data?.product} />;
}
