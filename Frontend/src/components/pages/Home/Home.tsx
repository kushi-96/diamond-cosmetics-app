import { ProductCard } from 'components/molecules';
import { useGetAllProducts } from 'framework/api/methods'
import banner from 'assets/images/banner.jpeg'
import { useEffect, useState } from 'react';
import { ProductPagination } from 'components/molecules'
import { Loader } from 'components/atoms';


export interface IProductCategory {
  id: number;
  name: string;
}
export interface IProductImage {
  id: number;
  image_url: string;
}
export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  usage: string;
  quantity: number;
  category: IProductCategory;
  images: IProductImage[]
}
export const Home = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading }: any = useGetAllProducts(page);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setCurrentPage(newPage);
  };

  useEffect(() => {

  }, [page])


  return (
    <div className="pb-10">
      <div>
        <img src={banner} alt='gt' className='w-full h-[250px] rounded-sm object-fill' />
      </div>
      <div className="pb-10 text-lg font-bold mt-7 mb-2 px-10 ">
        Our  Best Sellers
      </div>
      {isLoading ? <Loader /> : (<div className='grid px-10 gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {data && data?.data?.map((product: IProduct, idx: number) => (
          <div key={idx} className=' flex h-full'>
            <ProductCard product={product} />
          </div>
        ))}
      </div>)}
      {data && <ProductPagination data={data} itemsPerPage={data?.per_page} handlePageChange={handlePageChange} currentPage={page} />}
    </div>
  )
}

export default Home
