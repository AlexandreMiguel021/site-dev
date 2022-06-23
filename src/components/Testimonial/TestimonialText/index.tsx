import { Container } from './styles'

export type TestimonialTextProps = {
  children: React.ReactNode
}

export function TestimonialText({ children }: TestimonialTextProps) {
  return <Container>{children}</Container>
}
