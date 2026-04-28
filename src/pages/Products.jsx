import ProductItemSkeleton from "../components/products/ProductItemSkeleton";
import { getmenCollection, getwomansCollection, queryClient } from "../lib/api";
import Products from "../components/products/Products";
import { data, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductFilters from "../components/ProductFilters";
export default function ProductsPage() {
  const param = useParams();
  const gendre = param.gendre;

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", gendre],
    queryFn:
      gendre === "men"
        ? ({ signal }) => getmenCollection({ signal })
        : ({ signal }) => getwomansCollection({ signal }),
  });
  return (
    <>
      <Products
        title="All Products"
        description="COLLECTION"
        isShoppPage={true}
        products={data}
        loading={isLoading}
        error={error}
      >
        <ProductFilters />
      </Products>
    </>
  );
}
