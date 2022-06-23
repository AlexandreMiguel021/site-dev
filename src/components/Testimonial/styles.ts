import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const HiddenVw = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  max-width: ${theme.grid.container};
  margin: auto;
  padding-top: ${theme.spacings.medium};

  .btnNext {
    position: absolute;
    left: 52%;
    top: -20px;
    z-index: 2;
  }
`

export const BoxSlid = styled.div`
  position: relative;
  margin: 20px -40% 20px 0;

  ${media.lessThan('medium')`
  margin-right: 0;
  width: 100%;
  `}

  ${media.lessThan('small')`
  margin-right: 0;
  width: 100%;
  `}
`
