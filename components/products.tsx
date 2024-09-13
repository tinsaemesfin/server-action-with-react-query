'use client'

import { useGetPosts } from "@/server/data/useGetProducts"



const Products = () => {
    const { data: products, error: productError, fetchStatus } = useGetPosts();
    if(fetchStatus === 'fetching') return <div>Loading...</div>
    if(productError) return <div>Error: {productError.message}</div>
    if(products)   

    return (
        <div>
  PRoduct Page            {JSON.stringify(products)}
        </div>
  )
}

export default Products