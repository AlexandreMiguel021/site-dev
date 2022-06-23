import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType
} from 'react'
import { ButtonS } from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  bgcolor?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'gradientColor'
    | 'badge'
    | 'action'
  icon?: React.ReactNode
  as?: ElementType
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

const Button = ({
  children,
  bgcolor,
  fullWidth = false,
  size = 'medium',
  icon,
  ...props
}: ButtonProps) => (
  <ButtonS
    bgcolor={bgcolor}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </ButtonS>
)

export default Button
