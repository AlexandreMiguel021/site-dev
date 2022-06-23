import styled, { css } from 'styled-components'
import { Menu } from '@headlessui/react'
import theme from 'styles/theme'
import { FadeIn } from 'assets/animation'
import { ChevronDown20 } from '@carbon/icons-react'
import media from 'styled-media-query'

type StyleProps = {
  open?: boolean
  cols?: number
}

export const Wrapper = styled.div`
  max-width: 90.2rem;
  display: flex;
  flex-direction: column;
  gap: 0 2rem;
  z-index: 5;
`

export const MenuButton = styled(Menu.Button)`
  background-color: transparent;
  border: none;
  font-family: ${theme.font.family};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 0;
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
    opacity: 0.8;
  }

  span {
    color: black;
  }
`

export const Items = styled(Menu.Items)`
  display: flex;
  flex-direction: column;
`

export const WrapperItems = styled.div<StyleProps>`
  ${({ cols = 2 }) => css`
    grid-template-columns: repeat(${cols}, 1fr);
  `}
  display: grid;
  gap: 2rem 2rem;
  background-color: ${theme.colors.white};
  padding: 2rem;
  animation: ${FadeIn} 0.6s;
  box-shadow: ${theme.shadow.boxBlack};
  border-radius: ${theme.border.radius.medium};
  position: absolute;
  top: 11rem;
  left: 0;
  margin: 0 1rem;

  ${media.lessThan('large')`
    left: 0;
    color: red;
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const ChevronIcon = styled(ChevronDown20)<StyleProps>`
  ${({ open }) => css`
    transform: ${open && 'rotate(180deg)'};
    transition: all 0.5s ease;
  `}
`

export const Item = styled(Menu.Item)``

export const MenuFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
  width: 100%;
  margin: 0.5rem 0;
  grid-column: 1/4;

  ${media.lessThan('large')`
    left: 0;
    grid-template-columns: repeat(2, 1fr);
      grid-column: 1/3;
  `}
`
