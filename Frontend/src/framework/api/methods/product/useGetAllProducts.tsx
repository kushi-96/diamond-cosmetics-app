import { useQuery } from "react-query";
import { get } from "framework/api/http";

/* Get all products */
export const getAllProducts = async (page: number) => {
  

  const res = await get(`products?page=${page}`)

  return res?.data || []
}

/* Use Query as a Hook */
export const useGetAllProducts = (page: number) => {
  return useQuery(['product-list', page], () => getAllProducts(page), {
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: true,
  })
}

export default useGetAllProducts;


