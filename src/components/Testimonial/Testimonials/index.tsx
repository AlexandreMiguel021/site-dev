import { Container } from './styles'
import {
  TestimonialItemProps,
  TestimonialSlide
} from 'components/Testimonial/TestimonialSlide'

export type TestimonialsProps = {
  testimonialText?: React.ReactNode
  slides: TestimonialItemProps[]
}

const Testimonials = ({ slides }: TestimonialsProps) => (
  <Container>
    <TestimonialSlide itens={slides}></TestimonialSlide>
  </Container>
)

export default Testimonials
