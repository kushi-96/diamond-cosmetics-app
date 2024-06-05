import { FC } from 'react'
import CN from 'classnames'

export interface LoaderProps {
  className?: string | undefined
  isCustomStyles?: boolean | undefined
  appearance?: 'default' | 'success' | 'warning' | 'error' | 'black' | undefined
  [x: string]: any
}

export const Loader: FC<LoaderProps> = ({
  className,
  isCustomStyles,
  appearance,
}: LoaderProps) => {
  const LoaderClasses = !isCustomStyles
    ? CN('h-2.5 w-2.5 rounded-full', className, {
      'Loader bg-black': appearance === 'default',
      'Loader bg-green-700': appearance === 'success',
      'Loader bg-yellow-700': appearance === 'warning',
      'Loader bg-red-700': appearance === 'error',
      'Loader bg-gray-500': appearance === 'black',
    })
    : className

  return (
    <div className={CN('flex items-center justify-center z-20')}>
      <div className={`${LoaderClasses} mr-1 animate-bounce200`}></div>
      <div className={`${LoaderClasses} mr-1 animate-bounce400`}></div>
      <div className={`${LoaderClasses} animate-bounce600`}></div>
    </div>
  )
}


Loader.defaultProps = {
  className: undefined,
  appearance: 'default',
}

export default Loader
