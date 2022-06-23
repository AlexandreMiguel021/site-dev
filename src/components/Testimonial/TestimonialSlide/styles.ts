import styled from 'styled-components'
import { Quotes24 } from '@carbon/icons-react'
import theme from 'styles/theme'

export const Container = styled.div`
  width: ${theme.grid.container};
  overflow: hidden;
`
export const WarrpperSlid = styled.div`
  overflow: hidden;
`

export const TestimonialsItemWrapper = styled.div`
  position: relative;
`

export const TestimonialsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacings.medium} ${theme.spacings.xxlarge};
  margin: 2rem;
  gap: 1rem;
  font-size: ${theme.font.sizes.small};
  border-radius: ${theme.border.radius.medium};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadow.medium};
`

export const Quotes = styled(Quotes24)`
  position: absolute;
  left: 30px !important;
  top: 36px !important;
  width: 24px !important;
  height: 24px !important;
  fill: ${theme.colors.primary};
`

export const SliderControlContainer = styled.div`
  display: flex;
  gap: ${theme.spacings.xsmall};
  align-items: center;
`
