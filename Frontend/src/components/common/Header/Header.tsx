import { FC } from 'react'
import CN from 'classnames'
import logo from 'assets/images/logo.png'

export interface HeaderProps {
  [x: string]: any
}

export const Header: FC<HeaderProps> = ({
  className,
  ...restProps
}: HeaderProps) => {


  const HeaderClasses = CN(
    'z-10 h-[60px] flex justify-between items-center w-full px-5 bg-[#212121]',
    className,
  )

  return (
    <header className={HeaderClasses} {...restProps}>
      <div>
        <img src={logo} alt='gt' className='w-fit h-[55px]' />
      </div>

      {/* for desktop */}
      <div className='hidden justify-end items-center gap-x-6 lg:flex md:flex'>
        <span className='text-[16px] text-white'>About Us</span>
        <span className='text-[16px] text-white'>Products</span>
        <span className='text-[16px] text-white'>Contact Us</span>
        <i className='ri-shopping-cart-line text-white text-[18px] pl-10' />
      </div>

      {/* for mobile */}
      <div className='flex justify-end items-center gap-x-4 lg:hidden md:hidden'>
        <i className='ri-menu-line text-white text-[18px]' />
        <i className='ri-shopping-cart-line text-white text-[18px]' />
      </div>
    </header>
  )
}

Header.defaultProps = {
  onClick: undefined,
}

export default Header
