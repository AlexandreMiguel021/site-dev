import Image from 'next/image'
import { Card } from './styles'

export type CardImageProps = {
  img: string
  alt: string
  width?: number
  height?: number
  children: React.ReactNode
}

const CardImage = ({ img, alt, children, height, width }: CardImageProps) => (
  <Card height={height} width={width}>
    <Image src={img} alt={alt} layout="fill" priority />
    {children}
  </Card>
)

export default CardImage
