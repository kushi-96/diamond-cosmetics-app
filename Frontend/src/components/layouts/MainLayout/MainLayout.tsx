import { FC } from 'react'
import CN from 'classnames'

import { Header } from 'components/common/Header'
import { useLocation } from 'react-router-dom'
import { Footer } from 'components/common/Footer'


export interface MainLayoutProps {
  [x: string]: any
}

export const MainLayout: FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {


  const location = useLocation();


  return (
    <div className='w-full h-full min-h-full flex  flex-col items-center '>
      <Header />
      <div
        className={CN(
          'w-full h-full min-h-[calc(100vh-60px)] flex flex-col justify-between',
        )}>
        {children}
        <Footer />
      </div>
    </div>
  )
}


export default MainLayout
