import GetProducts from "@/server/action/get-product";

export default async function Home() {
   const products = await GetProducts();
  console.log(products);
  return (
    <div>
      <h1>Home Page</h1>
     
    </div>
  );
}
