import Products from "@/components/products";
import GetProducts from "@/server/action/get-product";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
}from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: GetProducts,
  });
 

   return (
    <div>
      <h1>Home Page</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
      <Products />
      </HydrationBoundary>
    </div>
  );
}
