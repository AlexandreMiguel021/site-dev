import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  mobile: '630px'
})

export const Header = styled.header`
  display: flex;
`

export const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 70%;
  margin-left: ${theme.spacings.medium};
  max-width: 55rem;
  z-index: 1;

  ${customMedia.lessThan('mobile')`
    width: 100%;
    margin-left: 0;
    margin: auto;
    padding: ${theme.spacings.small};
  `}

  h1 {
    letter-spacing: -0.2rem;
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  }
  p {
    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  }

  button {
    ${media.lessThan('medium')`
      width: 100%;
    `}
  }
`

export const SecondCol = styled.div`
  height: 68rem;
  width: 100%;

  div {
    background-image: url('/img/bg.png');
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    right: 0;
    display: block;
    top: 0;
    height: 81rem;
  }

  ${customMedia.lessThan('mobile')`
      width: 0;
  `}

  div {
    ${customMedia.lessThan('mobile')`
      width: 100vw;
      opacity: 0.8;
    `}
  }

  img {
    position: absolute;
    right: 0;
    z-index: -2;
    width: 50%;
    top: 0;
    max-height: 81rem;
    object-fit: cover;
    object-position: center;

    ${customMedia.lessThan('mobile')`
      width: 100vw;
      opacity: 0.2;
    `}
  }
`

export const WrapperButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
