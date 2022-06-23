import Link from 'next/link'
import React, { AnchorHTMLAttributes } from 'react'
import { LinkS, Container } from './styles'

export type LinkProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  color?: 'white' | 'secondary' | 'title'
  url: string
  target?: '_blank'
  weigth?: 'light' | 'normal' | 'bold'
} & AnchorHTMLAttributes<HTMLAnchorElement>

const CustomLink = ({
  children,
  size = 'medium',
  color = 'secondary',
  url,
  target,
  weigth = 'normal',
  ...props
}: LinkProps) => (
  <Container>
    <Link href={url}>
      <LinkS
        href={url}
        size={size}
        color={color}
        target={target}
        weigth={weigth}
        {...props}
      >
        {children}
      </LinkS>
    </Link>
  </Container>
)

export default CustomLink
