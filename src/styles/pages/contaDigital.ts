import styled from 'styled-components'
import BaseContainer from 'components/Container'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Container = styled(BaseContainer)`
  justify-content: center;

  ${media.lessThan('medium')`
    flex-wrap: wrap;
  `}
`

export const Fill = styled.div`
  height: 68.5rem;
  width: 35.3rem;
  position: relative;

  img {
    object-fit: cover;
    object-position: right;
  }
`
