import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
)


export default MyApp
