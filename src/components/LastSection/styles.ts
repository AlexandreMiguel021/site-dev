import BaseCol from 'components/Col'
import BaseContainer from 'components/Container'
import styled from 'styled-components'
import media from 'styled-media-query'
import BaseSection from 'components/Section'

export const Section = styled(BaseSection)`
  display: flex;
  padding-left: 0;
  padding-right: 0;
  gap: 2rem;

  button {
    ${media.greaterThan('medium')`
      width: 16rem;
    `}
  }

  ${media.lessThan('medium')`
    flex-wrap: wrap;
  `}
`

export const Container = styled(BaseContainer)`
  width: 50vw;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const WrapperImage = styled.div`
  width: 50vw;
  min-height: 53.5rem;
  object-fit: cover;
  position: relative;

  img {
    object-fit: cover;
  }

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const Col = styled(BaseCol)`
  align-self: flex-end;
`
