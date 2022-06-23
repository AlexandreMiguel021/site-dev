import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'
import theme from 'styles/theme'

const customMedia = generateMedia({
  small: '780px',
  medium: '900px',
  large: '1280px'
})

type WrapperProps = {
  top: number
  left: number
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ top, left }) => css`
    position: absolute;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.medium};
    padding: 0.4rem 2rem;
    box-shadow: ${theme.shadow.boxBlack};
    top: ${top}px;
    left: ${left}px;
    z-index: 1;
    overflow: hidden;

    h2 {
      line-height: 0;
    }

    ${customMedia.lessThan('small')`
      left: 10px;
    `}

    ${customMedia.lessThan('medium')`
      left: ${left > 160 && left - 150}px;
    `}

    ${customMedia.lessThan('large')`
      left: ${left > 380 && left - 230}px;
    `}
  `}
`
