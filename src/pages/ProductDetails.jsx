import ProductDetailsSkeleton from "../components/products/ProductDetailsSkeleton";
import ProductDetails from "../components/products/ProductDetails";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct, queryClient } from "../lib/api";
export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: async ({ signal }) => getProduct({ signal, id }),
  });
  if (isLoading) return <ProductDetailsSkeleton />;
  return <ProductDetails data={data} />;
}
