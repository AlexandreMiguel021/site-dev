import Section from 'components/Section'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import theme from 'styles/theme'

const images = [
  {
    src: '/img/discord-logo.png',
    alt: 'logo discord'
  },
  {
    src: '/img/discord-logo.png',
    alt: 'logo discord'
  },
  {
    src: '/img/discord-logo.png',
    alt: 'logo discord'
  },
  {
    src: '/img/discord-logo.png',
    alt: 'logo discord'
  },
  {
    src: '/img/discord-logo.png',
    alt: 'logo discord'
  },
  {
    src: '/img/discord-logo.png',
    alt: 'logo discord'
  }
]

const Partnership = () => (
  <Section>
    <ImageList>
      {images.map(({ src, alt }, i) => (
        <Image key={i} src={src} alt={alt} width={48} height={48} />
      ))}
    </ImageList>
  </Section>
)

const ImageList = styled.div`
  display: flex;
  max-width: ${theme.grid.container};
  margin: auto;
  padding: ${theme.spacings.xxsmall} 0;
  justify-content: space-around;
`

export default Partnership
