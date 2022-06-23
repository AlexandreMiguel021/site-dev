import { IconS } from './styles'

export type IconProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium'
  bgColor?: 'success' | 'danger' | 'danger'
}

const Icon = ({ children, size, bgColor }: IconProps) => (
  <IconS size={size} bgColor={bgColor}>
    {children}
  </IconS>
)

export default Icon
