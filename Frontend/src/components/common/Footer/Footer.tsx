export const Footer = () => {
  return (
    <div className='h-[100px] flex flex-col justify-center items-center w-full px-5 py-2 bg-[#212121]' >
      <div className="text-[#616161] text-md">Powered by AZBOW</div>

      <div className="flex gap-x-5 mt-1">
        <i className='ri-facebook-circle-fill text-white text-[14px]' />
        <i className='ri-instagram-fill text-white text-[14px]' />
        <i className='ri-whatsapp-fill text-white text-[14px]' />
      </div>
    </div>
  )
}


export default Footer
