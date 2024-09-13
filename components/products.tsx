"use client";

import GetProducts from "@/server/action/get-product";
import { useQuery } from "@tanstack/react-query";

const Products = ({products}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: GetProducts,
    initialData: products,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data)
    return (
      <div>
        <h1>{data[0].title}</h1>
      </div>
    );
};

export default Products;
