import { useQuery } from "react-query";
import { get } from "framework/api/http";

/* Get all products details */
export const getProduct = async (id: number) => {
  const res = await get(`products/${id}`)

  return res?.data || []
}

/* Use Query as a Hook */
export const useGetProduct = (id: number) => {
  return useQuery(['product-details', id], () => getProduct(id), {
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: false,
  })
}

export default useGetProduct;


