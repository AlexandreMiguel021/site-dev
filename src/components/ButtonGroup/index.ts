import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export default styled.div`
  display: flex;
  gap: ${theme.spacings.xxsmall};
  flex-wrap: wrap;

  ${media.lessThan('small')`
    margin: ${theme.spacings.small} 0;
    button {
      width: 100%;
    }
  `}

  ${media.lessThan('medium')`
    margin: ${theme.spacings.small} 0;
    button {
      flex-grow: 1;
    }
  `}
`
