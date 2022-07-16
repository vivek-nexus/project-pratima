import '../styles/globals.css'
import { ThemeProvider } from "fictoan-react"
import { FictoanTheme } from '../styles/FictoanTheme'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={FictoanTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
