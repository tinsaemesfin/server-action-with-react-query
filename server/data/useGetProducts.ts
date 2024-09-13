'use client'
import GetProducts from "@/server/action/get-product"
import { useQuery } from "@tanstack/react-query"

export function  useGetPosts() {
  return useQuery({
      queryKey: ["products"],
    queryFn: async () => GetProducts(),
  })
}