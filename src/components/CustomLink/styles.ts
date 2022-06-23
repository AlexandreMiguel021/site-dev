import styled, { css, DefaultTheme } from 'styled-components'
import { LinkProps as LinkType } from '.'

type LinkProps = {
  url?: string
} & Omit<LinkType, 'url'>

const wrapperColorModifiers = {
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `,
  title: (theme: DefaultTheme) => css`
    color: ${theme?.colors.title};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `
}

export const LinkS = styled.a<LinkProps>`
  ${({ theme, size, color, weigth }) => css`
    text-decoration: none;
    font-size: ${theme.font.sizes[size!]};
    font-weight: ${theme.font[weigth!]};
    cursor: pointer;

    ${!!color && wrapperColorModifiers[color](theme)};
  `}
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`
