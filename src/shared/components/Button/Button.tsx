import { ButtonHTMLAttributes, FC } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  isLoading?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`button button--${variant} button--${size} ${
        isLoading ? 'button--loading' : ''
      } ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="button__loader" />
      ) : (
        children
      )}
    </button>
  )
}

export default Button 