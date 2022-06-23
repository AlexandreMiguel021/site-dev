import styled, { css, DefaultTheme } from 'styled-components'
import { TypographyProps } from '.'

type ContainerProps = {
  withIcon: React.ReactNode
}

const wrapperTitleThemeModifier = {
  titleTheme: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 10%;
    font-weight: 600;
  `
}

export const TypographyS = styled('h1').attrs<TypographyProps>(
  ({ component }) => ({
    as: component
  })
)<TypographyProps>`
  ${({ theme, weigth, size, color, titleTheme, align, transform }) => css`
    font-weight: ${theme.font[weigth!]};
    font-size: ${theme.font.sizes[size!]};
    color: ${theme.colors[color!]};
    text-align: ${align};
    width: 100%;
    text-transform: ${transform ? transform : 'none'};
    ${!!titleTheme && wrapperTitleThemeModifier[titleTheme](theme)};
  `}
`
export const Container = styled.div<ContainerProps>`
  ${({ withIcon }) => css`
    width: ${withIcon ? '100%' : 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `}
`
