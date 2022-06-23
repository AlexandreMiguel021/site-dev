import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Card = styled.div`
  max-width: 37.7rem;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};
  width: 100%;
  border-radius: ${theme.border.radius.medium};
  box-shadow: ${theme.shadow.bold};
  align-items: center;
  justify-content: center;
  padding: ${theme.spacings.small};

  ${media.lessThan('medium')`
    padding: 2.2rem 2rem;
  `}

  p {
    width: 100%;
    max-width: 32rem;
    line-height: 160%;
  }
`
