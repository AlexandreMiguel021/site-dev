import { Direction, Spacer } from 'types/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

type ColProps = {
  width?: number
  spacer?: Spacer
  direction?: Direction
}

export default styled.div<ColProps>`
  ${({ width, spacer = 'small', direction }) => css`
    display: flex;
    flex-direction: ${direction ? direction : 'column'};
    gap: ${theme.spacings[spacer!]};
    max-width: ${width}rem;
    width: 100%;
    justify-content: center;

    ${media.lessThan('medium')`
      max-width: 100%;
    `}
  `}
`
