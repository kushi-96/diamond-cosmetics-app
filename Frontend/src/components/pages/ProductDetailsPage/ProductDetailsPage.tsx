import { Button } from "components/atoms"
import { ImageSlider } from "components/molecules";
import { useParams } from 'react-router-dom';
import { useGetProduct } from 'framework/api/methods'
import { useEffect } from "react";
import { Loader } from 'components/atoms';



export const ProductDetailsPage = () => {
  const { id } = useParams();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { data, error, refetch, isLoading }: any = useGetProduct(Number(id));

  useEffect(() => {
    if (id) {
      refetch()
    }
  }, [id])

  return (
    <div className="product-details-page h-full flex flex-col lg:flex-row">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex w-full lg:w-1/2 h-full p-5">
            <ImageSlider imageUrlList={data?.images} />
          </div>

          <div className="flex w-full lg:w-1/2 h-full flex-col pb-10 pt-2 px-10 !lg:pt-10">
            <div className="text-2xl font-bold">{data?.name}</div>
            <div className="text-l text-neutral-400 pt-1">{data?.category?.name}</div>

            <div className='mt-3 font-semibold text-2xl'>${data?.price}</div>

            <div className="text-sm text-neutral-600 pt-7">{data?.description}</div>

            <div className="text-sm text-neutral-600 pt-7">
              <div className="pb-1">Usage</div>
              <hr />
              <div className="pt-1">{data?.usage}</div>
            </div>
            <ul className="pl-6 text-sm text-neutral-600 pt-7">
              <li className="list-item-icon"><i className='ri-truck-line text-[18px] text-neutral-600 mr-2' /> Delivery Charge LKR 350</li>
              <li className="list-item-icon"><i className='ri-shield-user-line text-[18px] text-neutral-600 mr-2' /> Guaranteed 100% Authentic Products</li>
              <li className="list-item-icon"><i className='ri-global-line text-[18px] text-neutral-600 mr-2' /> Imported From USA</li>
              <li className="list-item-icon"><i className='ri-secure-payment-line text-[18px] text-neutral-600 mr-2' /> Secured Payments</li>
            </ul>

            <div className="flex gap-x-4 flex-col lg:flex-row">
              <Button className="mt-10" appearance="outline">Add To Cart</Button>
              <Button className="mt-10 ">Buy it now</Button>
            </div>
          </div>
        </>
      )}
    </div>


  )
}

export default ProductDetailsPage
