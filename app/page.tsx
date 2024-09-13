import Products from "@/components/products";
import GetProducts from "@/server/action/get-product";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function Home() {
  const products = await GetProducts();
 
  console.log(products)

   return (
    <div>
      {/* <HydrationBoundary state ={dehydrate(queiryClient)}> */}
      <h1>Home Page</h1>
      <Products />
      {/* </HydrationBoundary> */}
    </div>
  );
}
