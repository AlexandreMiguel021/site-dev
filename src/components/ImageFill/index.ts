import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type FillProps = {
  objPosition?: 'left' | 'right'
  objFit?: 'contain'
  height: number
  width: number
  mobileHidden?: boolean
}

export default styled.div<FillProps>`
  ${({ width, height, objFit, objPosition, mobileHidden = false }) => css`
    width: ${width}px;
    height: ${height}px;
    position: relative;
    flex-shrink: 3;

    img {
      object-fit: ${objFit ? objFit : 'cover'};
      object-position: ${objPosition ? objPosition : 'center'};
    }

    ${media.lessThan('medium')`
      display: ${mobileHidden && 'none'}
    `}
  `}
`
