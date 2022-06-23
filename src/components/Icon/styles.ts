import styled, { css, DefaultTheme } from 'styled-components'
import { IconProps } from '.'

const wrapperSizeModifiers = {
  small: () => css`
    width: 24px;
    height: 24px;
  `,
  medium: () => css`
    width: 42px;
    height: 42px;
  `
}
const wrapperBgColorModifiers = {
  success: (theme: DefaultTheme) => css`
    fill: ${theme.colors.success500};
  `,
  danger: (theme: DefaultTheme) => css`
    fill: ${theme.colors.danger};
  `
}

export const IconS = styled.div<IconProps>`
  ${({ theme, size, bgColor }) => css`
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      ${!!size && wrapperSizeModifiers[size]}
      ${!!bgColor && wrapperBgColorModifiers[bgColor](theme)}
    }
  `}
`
