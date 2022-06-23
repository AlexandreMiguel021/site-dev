import theme from 'styles/theme'
import styled from 'styled-components'
import media from 'styled-media-query'

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  max-width: 42rem;
  background-color: ${theme.colors.white};
  border-radius: ${theme.border.radius.medium};
  outline: 0.2rem solid transparent;
  margin: auto;

  ${media.lessThan('medium')`
    min-width: 100%;
  `}

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    outline: 0.2rem solid ${theme.colors.secondary100};

    ${media.lessThan('medium')`
      outline: none;
    `}
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;
  padding: 0;
  width: 100%;
  position: relative;

  ${media.lessThan('medium')`
    border: 1px solid ${theme.colors.secondary50};
    padding: 2rem 3.2rem;
    border-radius: ${theme.border.radius.medium};
  `}
`

export const Icon = styled.div`
  max-width: 6rem;
`

export const ExternalLink = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  span {
    line-height: 180%;
    height: 58px;
    width: 100%;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    ${media.greaterThan('medium')`
      max-width: 282px;
    `}
  }
`
