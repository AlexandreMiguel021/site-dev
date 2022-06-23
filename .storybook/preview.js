import React from 'react'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import { ThemeProvider } from 'styled-components'
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
]
