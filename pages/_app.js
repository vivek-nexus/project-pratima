import '../styles/globals.css'
import { ThemeProvider } from "fictoan-react"
import { FictoanTheme } from '../styles/FictoanTheme'
import { useEffect, useState } from "react"


function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading
        ? <div>
          <img src={`${process.env.LINK_PREFIX}/loader.svg`} height="124px" />
        </div>
        :
        <ThemeProvider theme={FictoanTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      }
    </>
  )
}

export default MyApp
