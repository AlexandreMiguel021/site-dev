import BaseContainer from 'components/Container'
import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'
import BaseSection from 'components/Section'
import BaseCol from 'components/Col'

export const Section = styled(BaseSection)`
  position: relative;
  margin-top: ${theme.spacings.xlarge};
`

export const Container = styled(BaseContainer)`
  gap: 2rem;
  justify-content: space-between;

  ${media.lessThan('large')`
    flex-wrap: wrap;
    justify-content: center;
  `}
`

export const BgGradient = styled.div`
  background: ${theme.colors.gradient};
  position: absolute;
  left: 0;
  height: 38rem;
  display: flex;
  z-index: -1;
  max-width: 45%;
  width: 100%;
  border-bottom-right-radius: 5rem;
  border-top-right-radius: 5rem;
  top: 1.5rem;

  ${media.lessThan('medium')`
    right: 0;
    left: initial;
    border-radius: 0;
    max-height: 10rem;
    margin-top: 3rem;
    z-index: 1;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    min-width: 80%;
  `}

  ${media.lessThan('large')`
    height: 22rem;
    top: -5rem;
  `}

  p {
    ${media.lessThan('large')`
        padding: 2rem;
    `};
  }
`

export const Col = styled(BaseCol)`
  gap: ${theme.spacings.xsmall};
  align-self: 'flex-end';

  ${media.lessThan('large')`
    max-width: 100%;
    justify-content: center;
  `};

  ${media.lessThan('medium')`
    max-width: 100%;
  `};
`
