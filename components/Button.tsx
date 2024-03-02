import React from 'react'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>
export function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>
}
