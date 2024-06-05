import { FC, useEffect, useState } from 'react'

export interface ImageSliderProps {
  className?: string | undefined
  imageUrlList: Image[]
  [x: string]: any
}

interface Image {
  image_url: string;
  alt: string;
}


export const ImageSlider: FC<ImageSliderProps> = ({
  className,
  imageUrlList
}: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageUrlList.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageUrlList]);

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + imageUrlList.length) % imageUrlList.length);
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imageUrlList.length);
  };

  const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  return (
    <div className="relative w-full h-full flex flex-col justify-start items-end">
      {imageUrlList?.length > 0 && (
        <img
          className="w-full h-full lg:h-2/3 object-cover rounded-lg shadow-md top-0 left-0 z-0"
          src={imageBaseUrl + imageUrlList[currentImage]?.image_url}
          alt='product item'
        />
      )}
      {imageUrlList?.length > 0 && (
        <div className='z-[100] flex gap-x-10 w-full justify-center mt-3'>
          <button
            type="button"
            className="w-[30px] h-[30px] flex justify-center items-center p-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={handlePrev}
          >
            <i className='ri-arrow-left-line text-[15px] font-bold text-white' />
          </button>
          <button
            type="button"
            className="w-[30px] h-[30px] flex justify-center items-center p-2 bg-gray-800/50 hover:bg-gray-800/70 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={handleNext}
          >
            <i className='ri-arrow-right-line text-[15px] font-bold text-white' />
          </button>
        </div>
      )}


    </div>
  )
}

ImageSlider.defaultProps = {
  className: undefined,
}

export default ImageSlider
