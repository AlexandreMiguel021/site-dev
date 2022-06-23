import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { Direction, Spacer } from 'types/styles'

type ContainerProps = {
  direction?: Direction
  spacer?: Spacer
}

export default styled.div<ContainerProps>`
  ${({ direction = 'row', spacer = 'small' }) => css`
    width: 100%;
    display: flex;
    margin: auto;
    gap: ${theme.spacings[spacer]};
    flex-direction: ${direction};
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.xsmall};
  `}
`
