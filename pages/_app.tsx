import { ThemeProvider } from 'next-themes'
import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
