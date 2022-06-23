import styled, { css } from 'styled-components'

export const Container = styled.div(
  () => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    > div {
      flex: 1;
    }
  `
)
