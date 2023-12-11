import React from 'react'

export function Button({
  type = 'button',
  style,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      style={{
        backgroundColor: '#5469d1',
        ...style,
      }}
      {...props}
    />
  )
}
