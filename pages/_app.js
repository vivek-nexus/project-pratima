import "../styles/globals.css"
import { ThemeProvider } from "fictoan-react"
import { FictoanTheme } from "../styles/FictoanTheme"
import { useEffect, useState } from "react"
import "animate.css";


function MyApp({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    let image = new Image();
    image.src = `${process.env.LINK_PREFIX}/hero.svg`
    image.addEventListener("load", function () {
      setIsLoading(false)
    })

    if (window.location.hash) {
      console.log(window.location.hash)
      setTimeout(() => {
        document.querySelector(window.location.hash).scrollIntoView();
      }, 500);
    }
  }, [])

  return (
    <>
      {isLoading
        ? <div className="flex justify-center pl-12">
          <img src={`${process.env.LINK_PREFIX}/loader.svg`} height="96px" />
        </div>
        :
        <div className="animate__animated animate__fadeIn">
          <ThemeProvider theme={FictoanTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </div>
      }
    </>
  )
}

export default MyApp
