import ProductDetailsSkeleton from "../components/products/ProductDetailsSkeleton";
import ProductDetails from "../components/products/ProductDetails";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct, queryClient } from "../lib/api";
import SectionError from "../components/SectionError";
export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", id],
    queryFn: async ({ signal }) => getProduct({ signal, id }),
  });
  if (isLoading) return <ProductDetailsSkeleton />;
  if (error) return <SectionError message={error?.message} />;
  return <ProductDetails data={data} />;
}
