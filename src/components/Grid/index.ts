import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacings.small};

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
`
