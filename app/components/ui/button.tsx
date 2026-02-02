import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        /* Gamit ang Template Literals para iwas error sa 'cn' import */
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#4A5D4E] text-white hover:bg-[#3d4d40] px-4 py-2 shadow-sm ${className || ""}`}
        {...props} /* Dapat may { } ito */
      />
    )
  }
)

Button.displayName = "Button"

export { Button }