import { FC } from 'react'
import CN from 'classnames'
import { IProduct } from 'components/pages/Home'
import { useNavigate } from 'react-router-dom'
const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL;


export interface ProductCardProps {
  className?: string | undefined
  product: IProduct
  [x: string]: any
}

export const ProductCard: FC<ProductCardProps> = ({
  className,
  product
}: ProductCardProps) => {
  const navigate = useNavigate()
  const productId = product?.id
  const handleClick = () => {
    navigate(`/product/${productId}`);

  }

  return (
    <div className={CN('flex flex-col items-center justify-center shadow-lg bg-white border border-neutral-100 hover:bg-yellow-50 rounded p-4 w-full h-full cursor-pointer')} onClick={handleClick}>
      <img src={imageBaseUrl + product?.images[0]?.image_url} alt='gt' className='w-auto h-[200px] rounded-sm' />

      <div className='mt-2 font-semibold'>{product?.name}</div>
      <div className='mt-1 text-neutral-500'>{product?.category?.name}</div>

      <div className='mt-3 font-semibold text-2xl'>${product?.price}</div>
    </div>
  )
}

ProductCard.defaultProps = {
  className: undefined,
}

export default ProductCard
