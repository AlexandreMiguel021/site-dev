import { ChevronLeft24, ChevronRight24 } from '@carbon/icons-react'
import Button from 'components/Button'
import Text from 'components/Text'
import React, { useRef } from 'react'
import Slider from 'react-slick'

import {
  Container,
  Quotes,
  SliderControlContainer,
  TestimonialsItem,
  TestimonialsItemWrapper,
  WarrpperSlid
} from './styles'

export type TestimonialItemProps = {
  id: number
  texto: string
  nome: string
  cargo: string
  empresa: string
}

export type TestimonialSlideProps = {
  itens: TestimonialItemProps[]
}

export function TestimonialSlide({ itens }: TestimonialSlideProps) {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  function next() {
    sliderRef?.current?.slickNext()
  }
  function previous() {
    sliderRef?.current?.slickPrev()
  }

  return (
    <Container>
      <SliderControlContainer className="btnNext">
        <Button
          aria-label="anterior"
          type="submit"
          bgcolor="badge"
          onClick={previous}
        >
          <ChevronLeft24 />
        </Button>
        <Button
          aria-label="próximo"
          type="submit"
          bgcolor="badge"
          onClick={next}
        >
          <ChevronRight24 />
        </Button>
      </SliderControlContainer>
      <WarrpperSlid>
        <Slider {...settings} ref={sliderRef}>
          {itens.map((item) => (
            <div key={item.id}>
              <TestimonialsItemWrapper>
                <Quotes />
                <TestimonialsItem>
                  <Text>{item.texto} &ldquo;</Text>

                  <Text
                    weigth="bold"
                    color="title"
                    size="small"
                    component="span"
                  >
                    {item.nome} – {item.cargo}
                  </Text>

                  <Text
                    weigth="bold"
                    color="primary"
                    size="small"
                    component="span"
                  >
                    {item.empresa}
                  </Text>
                </TestimonialsItem>
              </TestimonialsItemWrapper>
            </div>
          ))}
        </Slider>
      </WarrpperSlid>
    </Container>
  )
}
