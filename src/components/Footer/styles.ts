import styled from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacings.xxsmall};
  width: 100%;
  gap: ${theme.spacings.medium};
`
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: auto;
  gap: ${theme.spacings.xxsmall};
  flex-wrap: wrap;
  max-width: ${theme.grid.container};
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  gap: ${theme.spacings.large};
  margin: 2rem ${theme.spacings.xsmall};

  ${media.lessThan('medium')`
    width: 100%;
  `}
`

export const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacings.small};
`

export const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacings.medium};
`

export const Address = styled.address`
  width: 100%;
  max-width: ${theme.grid.container};
  display: flex;
  justify-content: space-between;
  font-style: normal;
  flex-direction: row;
  margin: auto;
  padding: ${theme.spacings.xsmall};
  flex-wrap: wrap;
`
export const WrapperLinks = styled.div`
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
`
