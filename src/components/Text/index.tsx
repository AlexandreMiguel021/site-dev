import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { TextAlign } from 'types/styles'
import { TypographyS, Container } from './styles'

export type TypographyProps = {
  children?: React.ReactNode
  withIcon?: React.ReactNode
  align?: TextAlign
  weigth?: 'light' | 'normal' | 'bold'
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'huge'
  color?: 'title' | 'text' | 'primary' | 'secondary' | 'white' | 'black'
  component?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  titleTheme?: 'titleTheme'
  margin?: boolean
  transform?: 'capitalize' | 'lowercase' | 'uppercase'
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Text = ({
  children,
  withIcon,
  weigth = 'normal',
  size = 'medium',
  color = 'text',
  component = 'p',
  titleTheme,
  align,
  transform,
  className
}: TypographyProps) => {
  return (
    <Container withIcon={withIcon} className={className}>
      {!!withIcon && withIcon}
      <TypographyS
        transform={transform}
        weigth={weigth}
        size={size}
        color={color}
        component={component}
        titleTheme={titleTheme}
        align={align}
      >
        {children}
      </TypographyS>
    </Container>
  )
}

export default Text
