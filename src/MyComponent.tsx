import React, { ComponentProps } from 'react'

export interface MyComponentProps extends ComponentProps<'div'> {
  
}

const miniLabelClasses =
  'text-[10px]/[1] text-gray-400 text-center px-1 max-w-min justify-self-center flex items-end mb-0.5 transition-all duration-500'

export const MyComponent = ({
  className = '',
  ...props
}: MyComponentProps) => {
  return <div className={`${className}`} {...props} />
}
