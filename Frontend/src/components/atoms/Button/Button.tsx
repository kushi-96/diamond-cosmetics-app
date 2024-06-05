import { FC } from 'react'
import CN from 'classnames'
import { Loader } from '../Loader'

export interface ButtonProps {
  className?: string | undefined
  disabled?: boolean | undefined
  isLoading?: boolean | undefined
  isCustomStyles?: boolean | undefined
  onClick?: (e: any) => void | undefined
  appearance?: 'outline' | 'fill'
  [x: string]: any
}

export const Button: FC<ButtonProps> = ({
  children,
  disabled,
  className,
  isCustomStyles,
  isLoading,
  appearance,
  onClick,
}: ButtonProps) => {
  const ButtonClasses = !isCustomStyles
    ? CN(
      'button font-semibold rounded-[4px] px-[10px] py-[8px] text-[14px] text-[#01060D] w-full',
      className,
      {
        'bg-[#FFB300] disabled:bg-[#FFEE58]':
          appearance === 'fill',
        'border border-1 border-[#FFB300] disabled:bg-[#FFCA28] p-[9px]': appearance === 'outline'
      },
      {
        'cursor-not-allowed !opacity-70': disabled,
        'cursor-pointer': !disabled,
      },
    )
    : className
  return (
    <button onClick={onClick} disabled={disabled || isLoading} className={ButtonClasses}>
      <div className='relative w-full'>
        <div
          className={CN({
            'opacity-0 flex items-center justify-center font-medium': isLoading,
            'opacity-100 flex items-center justify-center': !isLoading,
          })}>
          {children}
        </div>
        {isLoading && (
          <div className='absolute translate-x-[-50%] translate-y-[-150%] left-[50%] '>
            <Loader />
          </div>
        )}
      </div>
    </button>
  )
}

Button.defaultProps = {
  className: undefined,
  onClick: undefined,
  appearance: 'fill',
  isLoading: false,
}

export default Button
