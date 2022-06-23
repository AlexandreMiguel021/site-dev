import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'bgcolor'>

const wrapperSizeModifier = {
  small: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius.small};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 6rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  large: (theme: DefaultTheme) => css`
    height: 7rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
  `
}

const wrapperBgcolorModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover {
      background: ${theme.colors.primary200};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary200};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary50};
    color: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.secondary50};
    &:hover {
      background: ${theme.colors.secondary};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.secondary50};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.secondary};
    border: 1px solid ${theme.colors.secondary};
    &:hover {
      background: ${theme.colors.secondary50};
      border: 1px solid ${theme.colors.secondary50};
    }
  `,
  gradientColor: (theme: DefaultTheme) => css`
    background: ${theme.colors.gradient};
    color: ${theme.colors.white};
    &:hover {
      background: linear-gradient(-135deg, #1dbab7 0%, #2ba0f4 101.56%);
    }
  `,

  action: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.secondary};
    &:hover {
      background: ${theme.colors.secondary100};
      border: 1px solid ${theme.colors.secondary50};
      color: ${theme.colors.secondary};
    }
  `,

  badge: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 50%;
    height: 32px;
    width: 32px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
}

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `
}

const wrapperIconModifier = {
  withIcon: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.8rem;

      & + span {
        padding-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const ButtonS = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, bgcolor, hasIcon }) => css`
    cursor: pointer;
    text-decoration: none;
    border-radius: ${theme.border.radius.medium};
    border: 0;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-family: ${theme.font.family};
    font-weight: 500;
    letter-spacing: 0.2rem;

    ${!!size && wrapperSizeModifier[size](theme)};
    ${!!bgcolor && wrapperBgcolorModifier[bgcolor](theme)};
    ${!!hasIcon && wrapperIconModifier.withIcon(theme)};
    ${fullWidth && wrapperModifiers.fullWidth()};
  `}
`
