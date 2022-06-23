import { FadeIn } from 'assets/animation'
import BaseContainer from 'components/Container'
import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Container = styled(BaseContainer)`
  flex-direction: column;
  gap: 4rem;
`

export const Tab = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: ${theme.border.radius.medium};
  gap: 2rem;
  background: #f0f0f0;
  padding: ${(theme.spacings.xsmall, theme.spacings.large)};

  ${media.lessThan('medium')`
    display: none;
  `}

  li {
    padding: 1.3rem ${theme.spacings.small};
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.shadow.bold};
    cursor: pointer;
  }

  .active {
    background: ${theme.colors.gradient};
    animation: ${FadeIn} 1s;

    p {
      color: white;
    }
  }
`

export const Content = styled.div`
  display: flex;
  gap: 3rem;
  min-height: 46.2rem;

  ${media.lessThan('medium')`
    display: none;
  `}

  img {
    object-fit: cover;
    border-radius: 3rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    max-width: 55rem;

    div {
      gap: 1rem;
    }

    button {
      width: 19.6rem;
    }
  }
`
