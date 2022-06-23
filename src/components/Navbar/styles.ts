import theme from 'styles/theme'
import styled, { css, keyframes } from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

type styleProps = {
  scroll: boolean
  isOpen: boolean
}

const customMedia = generateMedia({
  medium: '767.98'
})

const anim = keyframes`
	0% {
		opacity: 0;
		transform: translateY(30px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
}
`

export const Nav = styled.nav<styleProps>`
  ${({ scroll, isOpen = false }) => css`
    width: 100%;
    position: fixed;
    background-color: ${isOpen ? 'white' : 'transparent'};
    transition: all 0.4s;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: ${theme.zindex.levelFive};

    &::before {
      content: '';
      position: absolute;
      background-color: white;
      width: 100%;
      height: ${!scroll ? '0%' : '100%'};
      transition: all 0.3s;
      box-shadow: ${scroll && theme.shadow.boxBlack};
      display: block;
    }
  `}
`

export const Container = styled.div`
  max-width: ${theme.grid.container};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 9.4rem;
  position: relative;

  ${media.lessThan('medium')`
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: transparent;
    align-items: flex-end;
  `}
`

export const FirstCol = styled.div`
  display: flex;
  align-items: center;
  gap: 3.8rem;

  ${media.lessThan('medium')`
    display: none
  `}
`
export const SecondCol = styled.div`
  display: flex;
  gap: ${theme.spacings.xlarge};

  button {
    width: 21.3rem;
  }

  ${media.lessThan('medium')`
    display: none
  `}
`

export const WrapperContact = styled.div`
  display: flex;
  gap: 3.4rem;
  align-items: center;

  ${media.lessThan('large')`
    display: none;
  `}
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};
`

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;
    max-width: 65rem;
  }
`
export const List = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  animation: ${anim} 1s ease 0s 1 normal forwards;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 9.4rem);
  overflow: scroll;
  scroll-behavior: smooth;
  padding: 2rem 0;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.secondary200};
    border-radius: 20px;
    border: 3px solid white;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
    padding: 1rem 1rem;

    &:last-child {
      margin-bottom: 10rem;
    }

    li {
      width: 100%;
    }
  }

  h3 {
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    margin: 1rem 1rem;
  }

  ${customMedia.greaterThan('medium')`
      display: none;
  `}
`

export const Spacer = styled.div`
  display: block;
  height: 9.4rem;
`
