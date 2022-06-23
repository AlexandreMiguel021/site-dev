import BaseContainer from 'components/Container'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled(BaseContainer)`
  gap: 2rem;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-wrap: wrap;
  `}
`

export const TestimonialsContainer = styled(BaseContainer)`
  display: flex;
  flex-wrap: wrap;
  padding-right: 0;
  margin: auto;
  flex-direction: column;
`
