/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react'
import Slider from 'react-slick'

import Image from 'next/image'

import { Container, GalleryImages, CurrentImage, Thumbnail } from './styles'

export interface CarouselProps {
  slides: string[]
}

export const Carousel = (props: CarouselProps): JSX.Element => {
  const { slides } = props
  const [sliderGallery, setSliderGallery] = useState<Slider>()
  const [sliderImage, setSliderImage] = useState<Slider>()
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <Container>
      <GalleryImages>
        <Slider
          asNavFor={sliderImage}
          slidesToShow={5}
          vertical
          infinite={false}
          ref={(slider) => setSliderGallery(slider!)}
          focusOnSelect
          responsive={[
            {
              breakpoint: 748,
              settings: {
                slidesToShow: 5,
                vertical: false
              }
            },
            {
              breakpoint: 468,
              settings: {
                slidesToShow: 4,
                vertical: false
              }
            }
          ]}
        >
          {slides.map((slide, index) => (
            <Thumbnail key={slide} active={index === currentSlide}>
              {slide && <Image src={slide} layout="fill" unoptimized={true} />}
            </Thumbnail>
          ))}
        </Slider>
      </GalleryImages>
      <CurrentImage>
        <Slider
          asNavFor={sliderGallery}
          infinite
          slidesToShow={1}
          focusOnSelect
          beforeChange={(_, next) => setCurrentSlide(next)}
          ref={(slider) => setSliderImage(slider!)}
        >
          {slides.map((slide) => (
            <div key={slide}>
              {slide && (
                <Image
                  src={slide}
                  width="525"
                  height="472"
                  objectFit="contain"
                  unoptimized={true}
                />
              )}
            </div>
          ))}
        </Slider>
      </CurrentImage>
    </Container>
  )
}
