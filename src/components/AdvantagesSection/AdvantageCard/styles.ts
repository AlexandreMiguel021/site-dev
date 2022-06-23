import Col from 'components/Col'
import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const WrapperCard = styled.div`
  display: flex;
  gap: ${theme.spacings.medium};
  width: 100%;
  max-width: 64rem;

  ${media.lessThan('medium')`
    flex-direction: column;
    grid-column: span 2;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const IconCard = styled(Col)`
  width: 4rem;
`

export const ColCard = styled(Col)`
  justify-content: flex-start;
`
