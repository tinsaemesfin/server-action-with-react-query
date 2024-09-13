"use client";

import { useGetPosts } from "@/server/data/useGetProducts";

const Products = () => {
  const { data, error, isFetching } = useGetPosts()
  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
//   if (data?.error) return <div>Error from Fake True : {JSON.stringify(data.error)}  </div>;
  if (data?.products)
    return (
      <div>
        <h1>{data.products[0].title}</h1>
      </div>
    );
};

export default Products;
