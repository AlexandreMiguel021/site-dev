import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { CardImageProps } from '.'

type CardProps = Pick<CardImageProps, 'width' | 'height'>

export const Card = styled.div<CardProps>`
  ${({ width, height }) => css`
    position: relative;
    object-fit: cover;
    min-height: ${height ? height : '550'}px;
    width: 100%;
    max-width: ${width ? width : '650'}px;
    overflow: hidden;
    gap: 2rem;
    padding: 2rem;
    align-self: flex-end;

    ${media.lessThan('medium')`
      min-height: 32rem;
      max-width: 100%;
   `}

    img {
      object-fit: cover;
      border-radius: 3rem;
    }
  `}
`
