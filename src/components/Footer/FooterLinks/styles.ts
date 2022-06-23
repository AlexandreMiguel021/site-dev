import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.div`
  h4 {
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    li {
      &:hover {
        opacity: 0.8;
        transition: all 0.5s;
      }
    }
  }
`
