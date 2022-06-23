// mobile styles

import { ChevronDown32 } from '@carbon/icons-react'
import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import media from 'styled-media-query'

export type StyleProps = {
  open: boolean
}

export const Content = styled.div`
  .btn-panel {
    width: 100%;
    border-radius: ${theme.border.radius.medium};
    min-height: 8rem;
    font-family: ${theme.font.family};
    background-color: ${theme.colors.white};
    border: none;
    box-shadow: ${theme.shadow.bold};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;

    span {
      height: 8rem;
      display: flex;
      align-items: center;
    }
  }

  .isOpen {
    background: ${theme.colors.gradient};
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    span {
      color: ${theme.colors.white};
    }
  }

  ${media.greaterThan('medium')`
    display: none;
  `}
`
export const WrapperButton = styled.div`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacings.small};
  width: 100%;
  cursor: pointer;
`

export const ChevronIcon = styled(ChevronDown32)<StyleProps>`
  ${({ open }) => css`
    color: ${open ? 'white' : theme.colors.secondary};
    transform: ${open && 'rotate(180deg)'};
    transition: all 0.5s ease;
  `}
`

export const PanelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 1s;

  img {
    width: 100%;
    object-fit: cover;
    object-position: 0% 10%;
    border-bottom-right-radius: ${theme.border.radius.medium};
    border-bottom-left-radius: ${theme.border.radius.medium};
  }
`
