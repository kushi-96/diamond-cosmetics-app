import { FC } from 'react'
import CN from 'classnames'
import logo from 'assets/images/logo.png'
import { Link } from 'react-router-dom';

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
      <Link to="/">
        <img src={logo} alt='gt' className='w-fit h-[55px]' />
      </Link>
      {/* for desktop */}
      <div className='hidden justify-end items-center gap-x-6 lg:flex md:flex'>
        <Link to="/">
          <span className='text-[14px] text-white'>About Us</span></Link>
        <Link to="/">
          <span className='text-[14px] text-white'>Products</span></Link>
        <Link to="/">
          <span className='text-[14px] text-white'>Contact Us</span></Link>
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
